import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET all products
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await prisma.materials.findMany({
      orderBy: { name: "asc" },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving materials" });
  }
});

// GET single material
router.get("/:materialId", async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await prisma.materials.findUnique({
      where: { materialId: req.params.materialId as string },
    });
    if (!product) {
      res.status(404).json({ message: "Material not found" });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving material" });
  }
});

// POST create material
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      materialId,
      name,
      specification,
      unit,
      price,
      currency,
      supplierId,
      supplierName,
    } = req.body;

    if (!materialId || !name || !unit || !supplierId) {
      res.status(400).json({ message: "Material ID, name, unit and supplier are required" });
      return;
    }

    const product = await prisma.materials.create({
      data: {
        materialId,
        name,
        specification: specification || "",
        unit,
        price: price || 0,
        currency: currency || "VND",
        lastPurchaseDate: new Date(),
        supplierId,
        supplierName,
      },
    });

    // Also link material to supplier in Supplier_Materials table
    await prisma.supplier_Materials.upsert({
      where: {
        supplierId_materialId: {
          supplierId,
          materialId,
        },
      },
      update: {},
      create: {
        supplierId,
        materialId,
      },
    });

    res.status(201).json(product);
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(400).json({ message: "Material ID already exists" });
      return;
    }
    res.status(500).json({ message: "Error creating material" });
  }
});

// PUT update material
router.put("/:materialId", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      specification,
      unit,
      price,
      currency,
      supplierId,
      supplierName,
    } = req.body;

    const material = await prisma.materials.update({
      where: { materialId: req.params.materialId as string },
      data: {
        name,
        specification,
        unit,
        price,
        currency,
        supplierId,
        supplierName,
        lastPurchaseDate: new Date(),
      },
    });

    res.json(material);
  } catch (error: any) {
    if (error.code === "P2025") {
      res.status(404).json({ message: "Material not found" });
      return;
    }
    res.status(500).json({ message: "Error updating material" });
  }
});

  // DELETE material
  router.delete("/:materialId", async (req: Request, res: Response): Promise<void> => {
    try {
      await prisma.$transaction(async (tx) => {
        // Delete linked supplier_materials first
        await tx.supplier_Materials.deleteMany({
          where: { materialId: req.params.materialId as string },
        });

        // Delete linked purchase requisition items
        await tx.purchase_Requisition_Items.deleteMany({
          where: { materialId: req.params.materialId as string },
        });

        // Delete linked purchase order items
        await tx.purchase_Order_Items.deleteMany({
          where: { materialId: req.params.materialId as string },
        });

        // Delete linked material warehousing items
        await tx.material_Warehousing_Items.deleteMany({
          where: { materialId: req.params.materialId as string },
        });

        // Delete inventory if exists
        await tx.inventory.deleteMany({
          where: { materialId: req.params.materialId as string },
        });

        // Finally delete the material
        await tx.materials.delete({
          where: { materialId: req.params.materialId as string },
        });
      });

      res.json({ message: "Material deleted successfully" });
    } catch (error: any) {
      console.error("Delete material error:", error);
      if (error.code === "P2025") {
        res.status(404).json({ message: "Material not found" });
        return;
      }
      res.status(500).json({ message: "Error deleting material" });
    }
  });
export default router;