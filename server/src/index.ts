import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
/* ROUTE IMPORTS */
import exportRoutes from "./routes/export";
import dashboardRoutes from "./routes/dashboard";
import supplierRoutes from "./routes/suppliers";
import materialRoutes from "./routes/materials";
import purchaseRequisitionRoutes from "./routes/purchaseRequisitions";
import purchaseOrderRoutes from "./routes/purchaseOrders";
import warehousingRoutes from "./routes/warehousing";
import inventoryRoutes from "./routes/inventory";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ROUTES */
app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/export", exportRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/purchase-orders", purchaseOrderRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/purchase-requisitions", purchaseRequisitionRoutes);
app.use("/api/warehousing", warehousingRoutes);
app.use("/api/inventory", inventoryRoutes);


/* SERVER */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(cors({
  origin: "*",
  credentials: false,
}));