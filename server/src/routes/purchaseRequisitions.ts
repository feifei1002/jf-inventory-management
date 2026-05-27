import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET all requisitions
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const requisitions = await prisma.purchasing_Requisitions.findMany({
      include: { purchaseRequisitionItems: true },
      orderBy: { requisitionDate: "desc" },
    });
    res.json(requisitions);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving requisitions" });
  }
});

// GET single requisition
router.get("/:requisitionId", async (req: Request, res: Response): Promise<void> => {
  try {
    const requisition = await prisma.purchasing_Requisitions.findUnique({
      where: { requisitionId: req.params.requisitionId as string },
      include: { purchaseRequisitionItems: true },
    });
    if (!requisition) {
      res.status(404).json({ message: "Requisition not found" });
      return;
    }
    res.json(requisition);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving requisition" });
  }
});

// POST create requisition
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      requisitionId,
      requisitionDate,
      department,
      requester,
      soNo,
      note,
      items,
    } = req.body;

    if (!requisitionId || !department || !requester) {
      res.status(400).json({ message: "Requisition ID, department and requester are required" });
      return;
    }

    const requisition = await prisma.$transaction(async (tx) => {
      const newRequisition = await tx.purchasing_Requisitions.create({
        data: {
          requisitionId,
          requisitionDate: new Date(requisitionDate),
          department,
          requester,
          soNo: soNo || null,
          note: note || null,
        },
      });

      for (const item of items) {
        // Auto-create product if it doesn't exist
        await tx.products.upsert({
          where: { productId: item.productId },
          update: {},
          create: {
            productId: item.productId,
            name: item.productName,
            specification: item.productSpecification,
            unit: item.productUnit,
            price: 0,
            lastPurchaseDate: new Date(),
            supplierId: item.supplierId || "UNKNOWN",
            supplierName: item.supplierName || "Unknown",
          },
        });

        await tx.purchase_Requisition_Items.create({
          data: {
            requisitionId: newRequisition.requisitionId,
            productId: item.productId,
            productName: item.productName,
            productSpecification: item.productSpecification,
            quantity: item.quantity,
            weight: item.weight || null,
            requiredDate: new Date(item.requiredDate),
            purpose: item.purpose || null,
            deliveryPlace: item.deliveryPlace,
          },
        });
      }

      return newRequisition;
    });

    res.status(201).json(requisition);
  } catch (error: any) {
    console.error("Create PR error:", error);
    if (error.code === "P2002") {
      res.status(400).json({ message: "Requisition ID already exists" });
      return;
    }
    res.status(500).json({ message: "Error creating requisition" });
  }
});

// PUT update requisition
router.put("/:requisitionId", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      requisitionDate,
      department,
      requester,
      soNo,
      note,
      items,
    } = req.body;

    const requisition = await prisma.$transaction(async (tx) => {
      const updated = await tx.purchasing_Requisitions.update({
        where: { requisitionId: req.params.requisitionId as string },
        data: {
          requisitionDate: new Date(requisitionDate),
          department,
          requester,
          soNo: soNo || null,
          note: note || null,
        },
      });

      // Delete existing items and recreate
      await tx.purchase_Requisition_Items.deleteMany({
        where: { requisitionId: req.params.requisitionId as string },
      });

      for (const item of items) {
        await tx.products.upsert({
          where: { productId: item.productId },
          update: {},
          create: {
            productId: item.productId,
            name: item.productName,
            specification: item.productSpecification,
            unit: item.productUnit ?? "tấm",
            price: 0,
            lastPurchaseDate: new Date(),
            supplierId: "UNKNOWN",
            supplierName: "Unknown",
          },
        });

        await tx.purchase_Requisition_Items.create({
          data: {
            requisitionId: updated.requisitionId,
            productId: item.productId,
            productName: item.productName,
            productSpecification: item.productSpecification,
            quantity: item.quantity,
            weight: item.weight || null,
            requiredDate: new Date(item.requiredDate),
            purpose: item.purpose || null,
            deliveryPlace: item.deliveryPlace,
          },
        });
      }

      return updated;
    });

    res.json(requisition);
  } catch (error: any) {
    if (error.code === "P2025") {
      res.status(404).json({ message: "Requisition not found" });
      return;
    }
    res.status(500).json({ message: "Error updating requisition" });
  }
});

// DELETE requisition
router.delete("/:requisitionId", async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.$transaction(async (tx) => {
      // Delete items first
      await tx.purchase_Requisition_Items.deleteMany({
        where: { requisitionId: req.params.requisitionId as string },
      });
      // Then delete the requisition
      await tx.purchasing_Requisitions.delete({
        where: { requisitionId: req.params.requisitionId as string },
      });
    });
    res.json({ message: "Requisition deleted successfully" });
  } catch (error: any) {
    if (error.code === "P2025") {
      res.status(404).json({ message: "Requisition not found" });
      return;
    }
    if (error.code === "P2003") {
      res.status(400).json({ message: "Cannot delete requisition linked to existing purchase orders" });
      return;
    }
    res.status(500).json({ message: "Error deleting requisition" });
  }
});

export default router;