"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// GET all suppliers
router.get("/", async (req, res) => {
    try {
        const suppliers = await prisma.suppliers.findMany({
            orderBy: { name: "asc" },
        });
        res.json(suppliers);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving suppliers" });
    }
});
// GET single supplier
router.get("/:supplierId", async (req, res) => {
    try {
        const supplier = await prisma.suppliers.findUnique({
            where: { supplierId: req.params.supplierId },
            include: { supplierProducts: { include: { product: true } } },
        });
        if (!supplier) {
            res.status(404).json({ message: "Supplier not found" });
            return;
        }
        res.json(supplier);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving supplier" });
    }
});
exports.default = router;
//# sourceMappingURL=suppliers.js.map