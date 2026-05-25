"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardMetrics = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getDashboardMetrics = async (req, res) => {
    try {
        const [totalPOs, totalSuppliers, pendingGRNs, recentPOs] = await Promise.all([
            prisma.purchasing_Orders.count(),
            prisma.suppliers.count(),
            prisma.purchasing_Orders.findMany({
                where: { materialWarehousingForms: { none: {} } },
                select: { purchaseId: true },
            }),
            prisma.purchasing_Orders.findMany({
                orderBy: { purchaseDate: "desc" },
                take: 5,
                include: { supplier: true },
            }),
        ]);
        res.json({
            totalPOs,
            totalSuppliers,
            pendingGRNs: pendingGRNs.length,
            recentPOs,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving dashboard metrics" });
    }
};
exports.getDashboardMetrics = getDashboardMetrics;
//# sourceMappingURL=dashboardController.js.map