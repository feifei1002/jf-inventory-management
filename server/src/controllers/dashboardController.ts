import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (req: Request, res: Response): Promise<void> => {
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
  } catch (error) {
    res.status(500).json({ message: "Error retrieving dashboard metrics" });
  }
};