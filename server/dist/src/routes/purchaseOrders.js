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
        const poSubtotal = subtotal ?? items.reduce((sum, item) => sum + item.quantity * item.productPrice, 0);
        const poVat = vatAmount ?? items.reduce((sum, item) => sum + item.quantity * item.productPrice * ((item.VAT ?? 0) / 100), 0);
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
                        productId: item.productId,
                        productName: item.productName,
                        productSpecification: item.productSpecification,
                        quantity: item.quantity,
                        productUnit: item.productUnit,
                        productPrice: item.productPrice,
                        totalPrice: item.quantity * item.productPrice,
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
exports.default = router;
//# sourceMappingURL=purchaseOrders.js.map