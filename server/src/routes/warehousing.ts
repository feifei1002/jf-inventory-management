import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET all warehousing forms
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const forms = await prisma.material_Warehousing_Forms.findMany({
      include: {
        supplier: true,
        purchase: true,
        materialWarehousingItems: true,
      },
      orderBy: { date: "desc" },
    });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving warehousing forms" });
  }
});

// GET single warehousing form
router.get("/:formId", async (req: Request, res: Response): Promise<void> => {
  try {
    const form = await prisma.material_Warehousing_Forms.findUnique({
      where: { formId: req.params.formId as string },
      include: {
        supplier: true,
        purchase: true,
        materialWarehousingItems: {
          include: { material: true },
        },
      },
    });
    if (!form) {
      res.status(404).json({ message: "Warehousing form not found" });
      return;
    }
    res.json(form);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving warehousing form" });
  }
});

// POST create warehousing form
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      formId,
      date,
      supplierId,
      supplierName,
      contactPerson,
      supplierAddress,
      supplierTelephone,
      supplierFax,
      purchaseId,
      paymentTerm,
      invoiceNo,
      deliveryNote,
      items,
    } = req.body;

    if (!formId || !supplierId || !purchaseId || !invoiceNo) {
      res.status(400).json({ message: "Form ID, supplier, PO and invoice number are required" });
      return;
    }

    const form = await prisma.$transaction(async (tx) => {
      const newForm = await tx.material_Warehousing_Forms.create({
        data: {
          formId,
          date: new Date(date),
          supplierId,
          supplierName,
          contactPerson: contactPerson || "",
          supplierAddress,
          supplierTelephone,
          supplierFax: supplierFax || "",
          purchaseId,
          paymentTerm: paymentTerm || "",
          invoiceNo,
          deliveryNote: deliveryNote || "",
        },
      });

      for (const item of items) {
        // Create warehousing item
        await tx.material_Warehousing_Items.create({
          data: {
            formId: newForm.formId,
            materialId: item.materialId,
            materialName: item.materialName,
            materialSpecification: item.materialSpecification,
            quantity: item.quantity,
            materialUnit: item.materialUnit,
            deliveryDate: new Date(item.deliveryDate),
            requisitionId: item.requisitionId,
            deliveryPlace: item.deliveryPlace,
          },
        });

        // Update inventory — upsert so it creates if doesn't exist
        await tx.inventory.upsert({
          where: { materialId: item.materialId },
          update: {
            currentStock: { increment: item.quantity },
            lastUpdated: new Date(),
          },
          create: {
            materialId: item.materialId,
            materialName: item.materialName,
            materialSpecification: item.materialSpecification,
            unit: item.materialUnit,
            currentStock: item.quantity,
            lastUpdated: new Date(),
            supplierId: supplierId,
            supplierName: supplierName,
          },
        });
      }

      return newForm;
    });

    res.status(201).json(form);
  } catch (error: any) {
    console.error("Create warehousing form error:", error);
    if (error.code === "P2002") {
      res.status(400).json({ message: "Form ID already exists" });
      return;
    }
    res.status(500).json({ message: "Error creating warehousing form" });
  }
});

// PUT update warehousing form
router.put("/:formId", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      date,
      supplierId,
      supplierName,
      contactPerson,
      supplierAddress,
      supplierTelephone,
      supplierFax,
      purchaseId,
      paymentTerm,
      invoiceNo,
      deliveryNote,
      items,
    } = req.body;

    const form = await prisma.$transaction(async (tx) => {
      // Get old items to reverse inventory
      const oldForm = await tx.material_Warehousing_Forms.findUnique({
        where: { formId: req.params.formId as string },
        include: { materialWarehousingItems: true },
      });

      if (!oldForm) throw new Error("NOT_FOUND");

      // Reverse old inventory
      for (const item of oldForm.materialWarehousingItems) {
        await tx.inventory.upsert({
          where: { materialId: item.materialId },
          update: {
            currentStock: { decrement: item.quantity },
            lastUpdated: new Date(),
          },
          create: {
            materialId: item.materialId,
            materialName: item.materialName,
            materialSpecification: item.materialSpecification,
            unit: item.materialUnit,
            currentStock: 0,
            lastUpdated: new Date(),
          },
        });
      }

      // Update the form header
      const updated = await tx.material_Warehousing_Forms.update({
        where: { formId: req.params.formId as string },
        data: {
          date: new Date(date),
          supplierId,
          supplierName,
          contactPerson: contactPerson || "",
          supplierAddress,
          supplierTelephone,
          supplierFax: supplierFax || "",
          purchaseId,
          paymentTerm: paymentTerm || "",
          invoiceNo,
          deliveryNote: deliveryNote || "",
        },
      });

      // Delete old items
      await tx.material_Warehousing_Items.deleteMany({
        where: { formId: req.params.formId as string },
      });

      // Create new items and update inventory
      for (const item of items) {
        await tx.material_Warehousing_Items.create({
          data: {
            formId: updated.formId,
            materialId: item.materialId,
            materialName: item.materialName,
            materialSpecification: item.materialSpecification,
            quantity: item.quantity,
            materialUnit: item.materialUnit,
            deliveryDate: new Date(item.deliveryDate),
            requisitionId: item.requisitionId,
            deliveryPlace: item.deliveryPlace,
          },
        });

        // Add new quantities to inventory
        await tx.inventory.upsert({
          where: { materialId: item.materialId },
          update: {
            currentStock: { increment: item.quantity },
            lastUpdated: new Date(),
          },
          create: {
            materialId: item.materialId,
            materialName: item.materialName,
            materialSpecification: item.materialSpecification,
            unit: item.materialUnit,
            currentStock: item.quantity,
            lastUpdated: new Date(),
            supplierId: supplierId,
            supplierName: supplierName,
          },
        });
      }

      return updated;
    });

    res.json(form);
  } catch (error: any) {
    console.error("Update warehousing error:", error);
    if (error.message === "NOT_FOUND" || error.code === "P2025") {
      res.status(404).json({ message: "Warehousing form not found" });
      return;
    }
    res.status(500).json({ message: "Error updating warehousing form" });
  }
});

// DELETE warehousing form — also reverses inventory
router.delete("/:formId", async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.$transaction(async (tx) => {
      // Get items first so we can reverse inventory
      const form = await tx.material_Warehousing_Forms.findUnique({
        where: { formId: req.params.formId as string },
        include: { materialWarehousingItems: true },
      });

      if (!form) throw new Error("NOT_FOUND");

      // Reverse inventory for each item
      for (const item of form.materialWarehousingItems) {
        await tx.inventory.upsert({
          where: { materialId: item.materialId },
          update: {
            currentStock: { decrement: item.quantity },
            lastUpdated: new Date(),
          },
          create: {
            materialId: item.materialId,
            materialName: item.materialName,
            materialSpecification: item.materialSpecification,
            unit: item.materialUnit,
            currentStock: 0,
            lastUpdated: new Date(),
          },
        });
      }

      // Delete items then form
      await tx.material_Warehousing_Items.deleteMany({
        where: { formId: req.params.formId as string },
      });

      await tx.material_Warehousing_Forms.delete({
        where: { formId: req.params.formId as string },
      });
    });

    res.json({ message: "Warehousing form deleted and inventory reversed" });
  } catch (error: any) {
    if (error.message === "NOT_FOUND" || error.code === "P2025") {
      res.status(404).json({ message: "Warehousing form not found" });
      return;
    }
    res.status(500).json({ message: "Error deleting warehousing form" });
  }
});

export default router;