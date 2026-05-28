"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
/* ROUTE IMPORTS */
const export_1 = __importDefault(require("./routes/export"));
const suppliers_1 = __importDefault(require("./routes/suppliers"));
const products_1 = __importDefault(require("./routes/products"));
const purchaseRequisitions_1 = __importDefault(require("./routes/purchaseRequisitions"));
const purchaseOrders_1 = __importDefault(require("./routes/purchaseOrders"));
const warehousing_1 = __importDefault(require("./routes/warehousing"));
const inventory_1 = __importDefault(require("./routes/inventory"));
/* CONFIGURATIONS */
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
/* ROUTES */
app.get("/hello", (req, res) => {
    res.send("Hello, World!");
});
app.use("/api/export", export_1.default);
app.use("/api/purchase-orders", purchaseOrders_1.default);
app.use("/api/suppliers", suppliers_1.default);
app.use("/api/products", products_1.default);
app.use("/api/purchase-requisitions", purchaseRequisitions_1.default);
app.use("/api/warehousing", warehousing_1.default);
app.use("/api/inventory", inventory_1.default);
/* SERVER */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map