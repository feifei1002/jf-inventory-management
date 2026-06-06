"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET all products
router.get("/", async (req, res) => {
    try {
        const products = await prisma.materials.findMany({
            orderBy: { name: "asc" },
        });
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving materials" });
    }
});
// GET single material
router.get("/:materialId", async (req, res) => {
    try {
        const product = await prisma.materials.findUnique({
            where: { materialId: req.params.materialId },
        });
        if (!product) {
            res.status(404).json({ message: "Material not found" });
            return;
        }
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving material" });
    }
});
// POST create material
router.post("/", async (req, res) => {
    try {
        const { materialId, name, specification, unit, price, currency, supplierId, supplierName, } = req.body;
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
    }
    catch (error) {
        if (error.code === "P2002") {
            res.status(400).json({ message: "Material ID already exists" });
            return;
        }
        res.status(500).json({ message: "Error creating material" });
    }
});
// PUT update material
router.put("/:materialId", async (req, res) => {
    try {
        const { name, specification, unit, price, currency, supplierId, supplierName, } = req.body;
        const material = await prisma.materials.update({
            where: { materialId: req.params.materialId },
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
    }
    catch (error) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Material not found" });
            return;
        }
        res.status(500).json({ message: "Error updating material" });
    }
});
// DELETE material
router.delete("/:materialId", async (req, res) => {
    try {
        await prisma.$transaction(async (tx) => {
            // Delete linked supplier_materials first
            await tx.supplier_Materials.deleteMany({
                where: { materialId: req.params.materialId },
            });
            // Delete linked purchase requisition items
            await tx.purchase_Requisition_Items.deleteMany({
                where: { materialId: req.params.materialId },
            });
            // Delete linked purchase order items
            await tx.purchase_Order_Items.deleteMany({
                where: { materialId: req.params.materialId },
            });
            // Delete linked material warehousing items
            await tx.material_Warehousing_Items.deleteMany({
                where: { materialId: req.params.materialId },
            });
            // Delete inventory if exists
            await tx.inventory.deleteMany({
                where: { materialId: req.params.materialId },
            });
            // Finally delete the material
            await tx.materials.delete({
                where: { materialId: req.params.materialId },
            });
        });
        res.json({ message: "Material deleted successfully" });
    }
    catch (error) {
        console.error("Delete material error:", error);
        if (error.code === "P2025") {
            res.status(404).json({ message: "Material not found" });
            return;
        }
        res.status(500).json({ message: "Error deleting material" });
    }
});
exports.default = router;
//# sourceMappingURL=materials.js.map