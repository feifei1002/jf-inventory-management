import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET all products
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await prisma.products.findMany({
      orderBy: { name: "asc" },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
});

// GET single product
router.get("/:productId", async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await prisma.products.findUnique({
      where: { productId: req.params.productId as string },
    });
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product" });
  }
});

// POST create product
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      productId,
      name,
      specification,
      unit,
      price,
      currency,
      supplierId,
      supplierName,
    } = req.body;

    if (!productId || !name || !unit || !supplierId) {
      res.status(400).json({ message: "Product ID, name, unit and supplier are required" });
      return;
    }

    const product = await prisma.products.create({
      data: {
        productId,
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

    // Also link product to supplier in Supplier_Products table
    await prisma.supplier_Products.upsert({
      where: {
        supplierId_productId: {
          supplierId,
          productId,
        },
      },
      update: {},
      create: {
        supplierId,
        productId,
      },
    });

    res.status(201).json(product);
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(400).json({ message: "Product ID already exists" });
      return;
    }
    res.status(500).json({ message: "Error creating product" });
  }
});

export default router;