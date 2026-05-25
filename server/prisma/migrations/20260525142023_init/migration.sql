-- CreateTable
CREATE TABLE "Suppliers" (
    "supplierId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "contactPerson" TEXT,
    "telephone" TEXT NOT NULL,
    "fax" TEXT,
    "mobileNo" TEXT,
    "email" TEXT,
    "paymentTerm" TEXT,
    "tax" TEXT,
    "MST" TEXT,

    CONSTRAINT "Suppliers_pkey" PRIMARY KEY ("supplierId")
);

-- CreateTable
CREATE TABLE "Products" (
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specification" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "lastPurchaseDate" TIMESTAMP(3) NOT NULL,
    "supplierId" TEXT NOT NULL,
    "supplierName" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Supplier_Products" (
    "supplierId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Supplier_Products_pkey" PRIMARY KEY ("supplierId","productId")
);

-- CreateTable
CREATE TABLE "Purchasing_Requisitions" (
    "requisitionId" TEXT NOT NULL,
    "requisitionDate" TIMESTAMP(3) NOT NULL,
    "department" TEXT NOT NULL,
    "requester" TEXT NOT NULL,
    "soNo" TEXT NOT NULL,
    "note" TEXT,

    CONSTRAINT "Purchasing_Requisitions_pkey" PRIMARY KEY ("requisitionId")
);

-- CreateTable
CREATE TABLE "Purchase_Requisition_Items" (
    "id" SERIAL NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productSpecification" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION,
    "requiredDate" TIMESTAMP(3) NOT NULL,
    "purpose" TEXT,
    "deliverPlace" TEXT NOT NULL,

    CONSTRAINT "Purchase_Requisition_Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchasing_Orders" (
    "purchaseId" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "supplierId" TEXT NOT NULL,
    "supplierName" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "paymentTerm" TEXT NOT NULL,
    "supplierAddress" TEXT NOT NULL,
    "subtotal" DECIMAL(65,30) NOT NULL,
    "vat" DECIMAL(65,30) NOT NULL,
    "finalTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Purchasing_Orders_pkey" PRIMARY KEY ("purchaseId")
);

-- CreateTable
CREATE TABLE "Purchase_Order_Items" (
    "id" SERIAL NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productSpecification" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "productUnit" TEXT NOT NULL,
    "productPrice" DECIMAL(65,30) NOT NULL,
    "totalPrice" DECIMAL(65,30) NOT NULL,
    "VAT" TEXT,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "deliverPlace" TEXT NOT NULL,

    CONSTRAINT "Purchase_Order_Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material_Warehousing_Forms" (
    "formId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "supplierId" TEXT NOT NULL,
    "supplierName" TEXT NOT NULL,
    "contactPerson" TEXT,
    "supplierAddress" TEXT NOT NULL,
    "supplierTelephone" TEXT NOT NULL,
    "supplierFax" TEXT,
    "purchaseId" TEXT NOT NULL,
    "paymentTerm" TEXT,
    "invoiceNo" TEXT NOT NULL,
    "deliverNote" TEXT,

    CONSTRAINT "Material_Warehousing_Forms_pkey" PRIMARY KEY ("formId")
);

-- CreateTable
CREATE TABLE "Material_Warehousing_Items" (
    "id" SERIAL NOT NULL,
    "formId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productSpecification" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "productUnit" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "deliverPlace" TEXT NOT NULL,

    CONSTRAINT "Material_Warehousing_Items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Suppliers_supplierId_idx" ON "Suppliers"("supplierId");

-- CreateIndex
CREATE INDEX "Suppliers_name_idx" ON "Suppliers"("name");

-- CreateIndex
CREATE INDEX "Suppliers_type_idx" ON "Suppliers"("type");

-- CreateIndex
CREATE INDEX "Products_productId_idx" ON "Products"("productId");

-- CreateIndex
CREATE INDEX "Products_name_idx" ON "Products"("name");

-- CreateIndex
CREATE INDEX "Purchasing_Requisitions_requisitionId_idx" ON "Purchasing_Requisitions"("requisitionId");

-- CreateIndex
CREATE INDEX "Purchasing_Orders_purchaseId_idx" ON "Purchasing_Orders"("purchaseId");

-- CreateIndex
CREATE INDEX "Material_Warehousing_Forms_formId_idx" ON "Material_Warehousing_Forms"("formId");

-- AddForeignKey
ALTER TABLE "Supplier_Products" ADD CONSTRAINT "Supplier_Products_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Suppliers"("supplierId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier_Products" ADD CONSTRAINT "Supplier_Products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_Requisition_Items" ADD CONSTRAINT "Purchase_Requisition_Items_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "Purchasing_Requisitions"("requisitionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_Requisition_Items" ADD CONSTRAINT "Purchase_Requisition_Items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchasing_Orders" ADD CONSTRAINT "Purchasing_Orders_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Suppliers"("supplierId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_Order_Items" ADD CONSTRAINT "Purchase_Order_Items_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchasing_Orders"("purchaseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_Order_Items" ADD CONSTRAINT "Purchase_Order_Items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_Order_Items" ADD CONSTRAINT "Purchase_Order_Items_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "Purchasing_Requisitions"("requisitionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material_Warehousing_Forms" ADD CONSTRAINT "Material_Warehousing_Forms_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Suppliers"("supplierId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material_Warehousing_Forms" ADD CONSTRAINT "Material_Warehousing_Forms_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchasing_Orders"("purchaseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material_Warehousing_Items" ADD CONSTRAINT "Material_Warehousing_Items_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Material_Warehousing_Forms"("formId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material_Warehousing_Items" ADD CONSTRAINT "Material_Warehousing_Items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material_Warehousing_Items" ADD CONSTRAINT "Material_Warehousing_Items_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "Purchasing_Requisitions"("requisitionId") ON DELETE RESTRICT ON UPDATE CASCADE;
