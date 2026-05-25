import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET all purchase orders
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const orders = await prisma.purchasing_Orders.findMany({
      include: { supplier: true, purchaseOrderItems: true },
      orderBy: { purchaseDate: "desc" },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving purchase orders" });
  }
});

// GET single purchase order
router.get("/:purchaseId", async (req: Request, res: Response): Promise<void> => {
  try {
    const po = await prisma.purchasing_Orders.findUnique({
      where: { purchaseId: req.params.purchaseId as string },
      include: { supplier: true, purchaseOrderItems: true },
    });
    if (!po) {
      res.status(404).json({ message: "Purchase order not found" });
      return;
    }
    res.json(po);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving purchase order" });
  }
});

// POST create new purchase order
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      purchaseId,
      purchaseDate,
      supplierId,
      supplierName,
      contactPerson,
      paymentTerm,
      supplierAddress,
      items,
    } = req.body;

    // Validate required fields
    if (!purchaseId || !supplierId || !items || items.length === 0) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Calculate totals from items
    const subtotal = items.reduce(
      (sum: number, item: any) => sum + item.quantity * item.productPrice,
      0
    );
    const vat = subtotal * 0.1;
    const finalTotal = subtotal + vat;

    // Create PO and its items in one transaction
    const po = await prisma.$transaction(async (tx) => {
      const newPO = await tx.purchasing_Orders.create({
        data: {
          purchaseId,
          purchaseDate: new Date(purchaseDate),
          supplierId,
          supplierName,
          contactPerson,
          paymentTerm,
          supplierAddress,
          subtotal,
          vat,
          finalTotal,
        },
      });

      for (const item of items) {
        await tx.purchase_Order_Items.create({
          data: {
            purchaseId: newPO.purchaseId,
            productId: item.productId,
            productName: item.productName,
            productSpecification: item.productSpecification,
            quantity: item.quantity,
            productUnit: item.productUnit,
            productPrice: item.productPrice,
            totalPrice: item.quantity * item.productPrice,
            VAT: item.VAT ?? 10,
            deliveryDate: new Date(item.deliveryDate),
            requisitionId: item.requisitionId,
            deliveryPlace: item.deliveryPlace,
          },
        });
      }

      return newPO;
    });

    res.status(201).json(po);
  } catch (error: any) {
    console.error("Create PO error:", error);
    if (error.code === "P2002") {
      res.status(400).json({ message: "Purchase Order ID already exists" });
      return;
    }
    res.status(500).json({ message: "Error creating purchase order" });
  }
});

export default router;