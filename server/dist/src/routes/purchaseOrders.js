"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET all purchase orders
router.get("/", async (req, res) => {
    try {
        const orders = await prisma.purchasing_Orders.findMany({
            include: { supplier: true, purchaseOrderItems: true },
            orderBy: { purchaseDate: "desc" },
        });
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving purchase orders" });
    }
});
// GET single purchase order
router.get("/:purchaseId", async (req, res) => {
    try {
        const po = await prisma.purchasing_Orders.findUnique({
            where: { purchaseId: req.params.purchaseId },
            include: { supplier: true, purchaseOrderItems: true },
        });
        if (!po) {
            res.status(404).json({ message: "Purchase order not found" });
            return;
        }
        res.json(po);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving purchase order" });
    }
});
// POST create new purchase order
router.post("/", async (req, res) => {
    try {
        const { purchaseId, purchaseDate, supplierId, supplierName, contactPerson, paymentTerm, supplierAddress, currency, subtotal, vatAmount, finalTotal, items, } = req.body;
        // Validate required fields
        if (!purchaseId || !supplierId || !items || items.length === 0) {
            res.status(400).json({ message: "Missing required fields" });
            return;
        }
        // Calculate totals from items
        const poSubtotal = subtotal ?? items.reduce((sum, item) => sum + item.quantity * item.materialPrice, 0);
        const poVat = vatAmount ?? items.reduce((sum, item) => sum + item.quantity * item.materialPrice * ((item.VAT ?? 0) / 100), 0);
        const poFinalTotal = finalTotal ?? poSubtotal + poVat;
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
                    subtotal: poSubtotal,
                    vat: poVat,
                    finalTotal: poFinalTotal,
                    currency: currency || "VND",
                },
            });
            for (const item of items) {
                await tx.purchase_Order_Items.create({
                    data: {
                        purchaseId: newPO.purchaseId,
                        materialId: item.materialId,
                        materialName: item.materialName,
                        materialSpecification: item.materialSpecification,
                        quantity: item.quantity,
                        materialUnit: item.materialUnit,
                        materialPrice: item.materialPrice,
                        totalPrice: item.quantity * item.materialPrice,
                        VAT: item.VAT ?? 10,
                        currency: item.currency || currency || "VND",
                        deliveryDate: new Date(item.deliveryDate),
                        requisitionId: item.requisitionId,
                        deliveryPlace: item.deliveryPlace,
                    },
                });
            }
            return newPO;
        });
        res.status(201).json(po);
    }
    catch (error) {
        console.error("Create PO error:", error);
        if (error.code === "P2002") {
            res.status(400).json({ message: "Purchase Order ID already exists" });
            return;
        }
        res.status(500).json({ message: "Error creating purchase order" });
    }
});
// PUT update purchase order
router.put("/:purchaseId", async (req, res) => {
    try {
        const { purchaseDate, supplierId, supplierName, contactPerson, paymentTerm, supplierAddress, currency, subtotal, vatAmount, finalTotal, items, } = req.body;
        const po = await prisma.$transaction(async (tx) => {
            const updated = await tx.purchasing_Orders.update({
                where: { purchaseId: req.params.purchaseId },
                data: {
                    purchaseDate: new Date(purchaseDate),
                    supplierId,
                    supplierName,
                    contactPerson,
                    paymentTerm,
                    supplierAddress,
                    subtotal,
                    vat: vatAmount,
                    finalTotal,
                    currency: currency || "VND",
                },
            });
            // Delete existing items and recreate
            await tx.purchase_Order_Items.deleteMany({
                where: { purchaseId: req.params.purchaseId },
            });
            for (const item of items) {
                await tx.materials.upsert({
                    where: { materialId: item.materialId },
                    update: {
                        price: item.materialPrice,
                        lastPurchaseDate: new Date(),
                    },
                    create: {
                        materialId: item.materialId,
                        name: item.materialName,
                        specification: item.materialSpecification,
                        unit: item.materialUnit,
                        price: item.materialPrice,
                        lastPurchaseDate: new Date(),
                        supplierId: supplierId,
                        supplierName: supplierName,
                    },
                });
                await tx.purchase_Order_Items.create({
                    data: {
                        purchaseId: updated.purchaseId,
                        materialId: item.materialId,
                        materialName: item.materialName,
                        materialSpecification: item.materialSpecification,
                        quantity: item.quantity,
                        materialUnit: item.materialUnit,
                        materialPrice: item.materialPrice,
                        totalPrice: item.quantity * item.materialPrice,
                        VAT: item.VAT ?? 0,
                        currency: item.currency || currency || "VND",
                        deliveryDate: new Date(item.deliveryDate),
                        requisitionId: item.requisitionId,
                        deliveryPlace: item.deliveryPlace,
                    },
                });
            }
            return updated;
        });
        res.json(po);
    }
    catch (error) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Purchase order not found" });
            return;
        }
        res.status(500).json({ message: "Error updating purchase order" });
    }
});
// DELETE purchase order
router.delete("/:purchaseId", async (req, res) => {
    try {
        await prisma.$transaction(async (tx) => {
            // Delete items first
            await tx.purchase_Order_Items.deleteMany({
                where: { purchaseId: req.params.purchaseId },
            });
            // Then delete the PO
            await tx.purchasing_Orders.delete({
                where: { purchaseId: req.params.purchaseId },
            });
        });
        res.json({ message: "Purchase order deleted successfully" });
    }
    catch (error) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Purchase order not found" });
            return;
        }
        if (error.code === "P2003") {
            res.status(400).json({ message: "Cannot delete purchase order linked to existing records" });
            return;
        }
        res.status(500).json({ message: "Error deleting purchase order" });
    }
});
exports.default = router;
//# sourceMappingURL=purchaseOrders.js.map