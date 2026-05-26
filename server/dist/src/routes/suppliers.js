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
router.post("/", async (req, res) => {
    try {
        const { supplierId, name, type, contactPerson, telephone, fax, mobileNo, address, email, paymentTerm, tax, MST, } = req.body;
        if (!supplierId || !name || !telephone) {
            res.status(400).json({ message: "Supplier ID, name and telephone are required" });
            return;
        }
        const supplier = await prisma.suppliers.create({
            data: {
                supplierId,
                name,
                type: type || "General",
                contactPerson,
                telephone,
                fax,
                mobileNo,
                address,
                email,
                paymentTerm,
                tax,
                MST,
            },
        });
        res.status(201).json(supplier);
    }
    catch (error) {
        if (error.code === "P2002") {
            res.status(400).json({ message: "Supplier ID already exists" });
            return;
        }
        res.status(500).json({ message: "Error creating supplier" });
    }
});
exports.default = router;
//# sourceMappingURL=suppliers.js.map