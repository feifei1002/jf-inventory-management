"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET all requisitions
router.get("/", async (req, res) => {
    try {
        const requisitions = await prisma.purchasing_Requisitions.findMany({
            include: { purchaseRequisitionItems: true },
            orderBy: { requisitionDate: "desc" },
        });
        res.json(requisitions);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving requisitions" });
    }
});
// GET single requisition
router.get("/:requisitionId", async (req, res) => {
    try {
        const requisition = await prisma.purchasing_Requisitions.findUnique({
            where: { requisitionId: req.params.requisitionId },
            include: { purchaseRequisitionItems: true },
        });
        if (!requisition) {
            res.status(404).json({ message: "Requisition not found" });
            return;
        }
        res.json(requisition);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving requisition" });
    }
});
// POST create requisition
router.post("/", async (req, res) => {
    try {
        const { requisitionId, requisitionDate, department, requester, soNo, note, items, } = req.body;
        if (!requisitionId || !department || !requester) {
            res.status(400).json({ message: "Requisition ID, department and requester are required" });
            return;
        }
        const requisition = await prisma.$transaction(async (tx) => {
            const newRequisition = await tx.purchasing_Requisitions.create({
                data: {
                    requisitionId,
                    requisitionDate: new Date(requisitionDate),
                    department,
                    requester,
                    soNo: soNo || null,
                    note: note || null,
                },
            });
            for (const item of items) {
                // Auto-create product if it doesn't exist
                await tx.products.upsert({
                    where: { productId: item.productId },
                    update: {},
                    create: {
                        productId: item.productId,
                        name: item.productName,
                        specification: item.productSpecification,
                        unit: item.productUnit,
                        price: 0,
                        lastPurchaseDate: new Date(),
                        supplierId: item.supplierId || "UNKNOWN",
                        supplierName: item.supplierName || "Unknown",
                    },
                });
                await tx.purchase_Requisition_Items.create({
                    data: {
                        requisitionId: newRequisition.requisitionId,
                        productId: item.productId,
                        productName: item.productName,
                        productSpecification: item.productSpecification,
                        quantity: item.quantity,
                        weight: item.weight || null,
                        requiredDate: new Date(item.requiredDate),
                        purpose: item.purpose || null,
                        deliveryPlace: item.deliveryPlace,
                    },
                });
            }
            return newRequisition;
        });
        res.status(201).json(requisition);
    }
    catch (error) {
        console.error("Create PR error:", error);
        if (error.code === "P2002") {
            res.status(400).json({ message: "Requisition ID already exists" });
            return;
        }
        res.status(500).json({ message: "Error creating requisition" });
    }
});
// PUT update requisition
router.put("/:requisitionId", async (req, res) => {
    try {
        const { requisitionDate, department, requester, soNo, note, items, } = req.body;
        const requisition = await prisma.$transaction(async (tx) => {
            const updated = await tx.purchasing_Requisitions.update({
                where: { requisitionId: req.params.requisitionId },
                data: {
                    requisitionDate: new Date(requisitionDate),
                    department,
                    requester,
                    soNo: soNo || null,
                    note: note || null,
                },
            });
            // Delete existing items and recreate
            await tx.purchase_Requisition_Items.deleteMany({
                where: { requisitionId: req.params.requisitionId },
            });
            for (const item of items) {
                await tx.products.upsert({
                    where: { productId: item.productId },
                    update: {},
                    create: {
                        productId: item.productId,
                        name: item.productName,
                        specification: item.productSpecification,
                        unit: item.productUnit ?? "tấm",
                        price: 0,
                        lastPurchaseDate: new Date(),
                        supplierId: "UNKNOWN",
                        supplierName: "Unknown",
                    },
                });
                await tx.purchase_Requisition_Items.create({
                    data: {
                        requisitionId: updated.requisitionId,
                        productId: item.productId,
                        productName: item.productName,
                        productSpecification: item.productSpecification,
                        quantity: item.quantity,
                        weight: item.weight || null,
                        requiredDate: new Date(item.requiredDate),
                        purpose: item.purpose || null,
                        deliveryPlace: item.deliveryPlace,
                    },
                });
            }
            return updated;
        });
        res.json(requisition);
    }
    catch (error) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Requisition not found" });
            return;
        }
        res.status(500).json({ message: "Error updating requisition" });
    }
});
// DELETE requisition
router.delete("/:requisitionId", async (req, res) => {
    try {
        await prisma.$transaction(async (tx) => {
            // Delete items first
            await tx.purchase_Requisition_Items.deleteMany({
                where: { requisitionId: req.params.requisitionId },
            });
            // Then delete the requisition
            await tx.purchasing_Requisitions.delete({
                where: { requisitionId: req.params.requisitionId },
            });
        });
        res.json({ message: "Requisition deleted successfully" });
    }
    catch (error) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Requisition not found" });
            return;
        }
        if (error.code === "P2003") {
            res.status(400).json({ message: "Cannot delete requisition linked to existing purchase orders" });
            return;
        }
        res.status(500).json({ message: "Error deleting requisition" });
    }
});
exports.default = router;
//# sourceMappingURL=purchaseRequisitions.js.map