"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET all products
router.get("/", async (req, res) => {
    try {
        const products = await prisma.products.findMany({
            orderBy: { name: "asc" },
        });
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving products" });
    }
});
// GET single product
router.get("/:productId", async (req, res) => {
    try {
        const product = await prisma.products.findUnique({
            where: { productId: req.params.productId },
        });
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving product" });
    }
});
// POST create product
router.post("/", async (req, res) => {
    try {
        const { productId, name, specification, unit, price, currency, supplierId, supplierName, } = req.body;
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
    }
    catch (error) {
        if (error.code === "P2002") {
            res.status(400).json({ message: "Product ID already exists" });
            return;
        }
        res.status(500).json({ message: "Error creating product" });
    }
});
// PUT update product
router.put("/:productId", async (req, res) => {
    try {
        const { name, specification, unit, price, currency, supplierId, supplierName, } = req.body;
        const product = await prisma.products.update({
            where: { productId: req.params.productId },
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
        res.json(product);
    }
    catch (error) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.status(500).json({ message: "Error updating product" });
    }
});
// DELETE product
router.delete("/:productId", async (req, res) => {
    try {
        await prisma.$transaction(async (tx) => {
            // Delete linked supplier_products first
            await tx.supplier_Products.deleteMany({
                where: { productId: req.params.productId },
            });
            // Delete linked purchase requisition items
            await tx.purchase_Requisition_Items.deleteMany({
                where: { productId: req.params.productId },
            });
            // Delete linked purchase order items
            await tx.purchase_Order_Items.deleteMany({
                where: { productId: req.params.productId },
            });
            // Delete linked material warehousing items
            await tx.material_Warehousing_Items.deleteMany({
                where: { productId: req.params.productId },
            });
            // Finally delete the product
            await tx.products.delete({
                where: { productId: req.params.productId },
            });
        });
        res.json({ message: "Product deleted successfully" });
    }
    catch (error) {
        console.error("Delete product error:", error);
        if (error.code === "P2025") {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.status(500).json({ message: "Error deleting product" });
    }
});
exports.default = router;
//# sourceMappingURL=products.js.map