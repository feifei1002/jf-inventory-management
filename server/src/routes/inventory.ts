import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET all inventory
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const inventory = await prisma.inventory.findMany({
      include: { material: true },
      orderBy: { materialName: "asc" },
    });
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving inventory" });
  }
});

// GET single inventory item
router.get("/:materialId", async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await prisma.inventory.findUnique({
      where: { materialId: req.params.materialId as string },
      include: { material: true },
    });
    if (!item) {
      res.status(404).json({ message: "Inventory item not found" });
      return;
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving inventory item" });
  }
});

// PUT manually adjust stock
router.put("/:materialId", async (req: Request, res: Response): Promise<void> => {
  try {
    const { currentStock, reservedStock } = req.body;
    const item = await prisma.inventory.update({
      where: { materialId: req.params.materialId as string },
      data: {
        currentStock,
        lastUpdated: new Date(),
      },
    });
    res.json(item);
  } catch (error: any) {
    if (error.code === "P2025") {
      res.status(404).json({ message: "Inventory item not found" });
      return;
    }
    res.status(500).json({ message: "Error updating inventory" });
  }
});

export default router;