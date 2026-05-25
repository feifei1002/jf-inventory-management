import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET all suppliers
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const suppliers = await prisma.suppliers.findMany({
      orderBy: { name: "asc" },
    });
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving suppliers" });
  }
});

// GET single supplier
router.get("/:supplierId", async (req: Request, res: Response): Promise<void> => {
  try {
    const supplier = await prisma.suppliers.findUnique({
      where: { supplierId: req.params.supplierId as string },
      include: { supplierProducts: { include: { product: true } } },
    });
    if (!supplier) {
      res.status(404).json({ message: "Supplier not found" });
      return;
    }
    res.json(supplier);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving supplier" });
  }
});

export default router;