"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET all inventory
router.get("/", async (req, res) => {
    try {
        const inventory = await prisma.inventory.findMany({
            include: { material: true },
            orderBy: { materialName: "asc" },
        });
        res.json(inventory);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving inventory" });
    }
});
// GET single inventory item
router.get("/:materialId", async (req, res) => {
    try {
        const item = await prisma.inventory.findUnique({
            where: { materialId: req.params.materialId },
            include: { material: true },
        });
        if (!item) {
            res.status(404).json({ message: "Inventory item not found" });
            return;
        }
        res.json(item);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving inventory item" });
    }
});
// PUT manually adjust stock
router.put("/:materialId", async (req, res) => {
    try {
        const { currentStock, reservedStock } = req.body;
        const item = await prisma.inventory.update({
            where: { materialId: req.params.materialId },
            data: {
                currentStock,
                lastUpdated: new Date(),
            },
        });
        res.json(item);
    }
    catch (error) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Inventory item not found" });
            return;
        }
        res.status(500).json({ message: "Error updating inventory" });
    }
});
exports.default = router;
//# sourceMappingURL=inventory.js.map