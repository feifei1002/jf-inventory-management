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
// Add new supplier
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
// PUT update supplier
router.put("/:supplierId", async (req, res) => {
    try {
        const { name, type, contactPerson, telephone, fax, mobileNo, address, email, paymentTerm, tax, MST, } = req.body;
        const supplier = await prisma.suppliers.update({
            where: { supplierId: req.params.supplierId },
            data: {
                name,
                type,
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
        res.json(supplier);
    }
    catch (error) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Supplier not found" });
            return;
        }
        res.status(500).json({ message: "Error updating supplier" });
    }
});
// DELETE supplier
router.delete("/:supplierId", async (req, res) => {
    try {
        await prisma.suppliers.delete({
            where: { supplierId: req.params.supplierId },
        });
        res.json({ message: "Supplier deleted successfully" });
    }
    catch (error) {
        if (error.code === "P2025") {
            res.status(404).json({ message: "Supplier not found" });
            return;
        }
        if (error.code === "P2003") {
            res.status(400).json({ message: "Cannot delete supplier with existing purchase orders or products" });
            return;
        }
        res.status(500).json({ message: "Error deleting supplier" });
    }
});
exports.default = router;
//# sourceMappingURL=suppliers.js.map