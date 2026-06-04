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
      include: { supplierMaterials: { include: { material: true } } },
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

// Add new supplier
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      supplierId,
      name,
      type,
      contactPerson,
      telephone,
      fax,
      mobileNo,
      address,
      email,
      paymentTerm,
      tax,
      MST,
    } = req.body;

    if (!supplierId || !name || !telephone) {
      res.status(400).json({ message: "Supplier ID, name and telephone are required" });
      return;
    }

    const supplier = await prisma.suppliers.create({
      data: {
        supplierId,
        name,
        type: type || null,
        contactPerson,
        telephone,
        fax,
        mobileNo,
        address,
        email,
        paymentTerm,
        tax,
        MST,
      },
    });

    res.status(201).json(supplier);
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(400).json({ message: "Supplier ID already exists" });
      return;
    }
    res.status(500).json({ message: "Error creating supplier" });
  }
});

// PUT update supplier
router.put("/:supplierId", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      type,
      contactPerson,
      telephone,
      fax,
      mobileNo,
      address,
      email,
      paymentTerm,
      tax,
      MST,
    } = req.body;

    const supplier = await prisma.suppliers.update({
      where: { supplierId: req.params.supplierId as string },
      data: {
        name,
        type,
        contactPerson,
        telephone,
        fax,
        mobileNo,
        address,
        email,
        paymentTerm,
        tax,
        MST,
      },
    });

    res.json(supplier);
  } catch (error: any) {
    if (error.code === "P2025") {
      res.status(404).json({ message: "Supplier not found" });
      return;
    }
    res.status(500).json({ message: "Error updating supplier" });
  }
});

// DELETE supplier
router.delete("/:supplierId", async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.suppliers.delete({
      where: { supplierId: req.params.supplierId as string },
    });
    res.json({ message: "Supplier deleted successfully" });
  } catch (error: any) {
    if (error.code === "P2025") {
      res.status(404).json({ message: "Supplier not found" });
      return;
    }
    if (error.code === "P2003") {
      res.status(400).json({ message: "Cannot delete supplier with existing purchase orders or materials" });
      return;
    }
    res.status(500).json({ message: "Error deleting supplier" });
  }
});

export default router;