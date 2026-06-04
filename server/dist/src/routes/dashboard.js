"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get("/", async (req, res) => {
    try {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const [totalPOsThisMonth, totalPRs, allPRs, allPOs, itemsReceivedThisMonth, lowStockItems, outOfStockItems, totalSuppliers, totalMaterials,] = await Promise.all([
            // Total POs this month
            prisma.purchasing_Orders.count({
                where: { purchaseDate: { gte: startOfMonth } },
            }),
            // Total PRs
            prisma.purchasing_Requisitions.count(),
            // All PRs to find pending ones (no linked PO items)
            prisma.purchasing_Requisitions.findMany({
                include: { purchaseRequisitionItems: true },
            }),
            // All POs to find linked PR IDs
            prisma.purchasing_Orders.findMany({
                include: { purchaseOrderItems: true },
            }),
            // Items received this month
            prisma.material_Warehousing_Items.aggregate({
                where: {
                    warehousingForm: { date: { gte: startOfMonth } },
                },
                _sum: { quantity: true },
            }),
            // Low stock items
            prisma.inventory.count({
                where: {
                    currentStock: { gt: 0, lte: 10 },
                },
            }),
            // Out of stock items
            prisma.inventory.count({
                where: { currentStock: { lte: 0 } },
            }),
            // Total suppliers
            prisma.suppliers.count(),
            // Total materials
            prisma.materials.count(),
        ]);
        // Calculate pending PRs — PRs where requisitionId not found in any PO item
        const linkedRequisitionIds = new Set(allPOs.flatMap((po) => po.purchaseOrderItems.map((item) => item.requisitionId)));
        const pendingPRs = allPRs.filter((pr) => !linkedRequisitionIds.has(pr.requisitionId)).length;
        res.json({
            totalPOsThisMonth,
            pendingPRs,
            itemsReceivedThisMonth: itemsReceivedThisMonth._sum.quantity ?? 0,
            lowStockItems,
            outOfStockItems,
            totalSuppliers,
            totalMaterials,
            totalPRs,
        });
    }
    catch (error) {
        console.error("Dashboard error:", error);
        res.status(500).json({ message: "Error retrieving dashboard metrics" });
    }
});
exports.default = router;
//# sourceMappingURL=dashboard.js.map