/*
  Warnings:

  - You are about to drop the column `productId` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `productSpecification` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Material_Warehousing_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Material_Warehousing_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productSpecification` on the `Material_Warehousing_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productUnit` on the `Material_Warehousing_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Purchase_Order_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Purchase_Order_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productSpecification` on the `Purchase_Order_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productUnit` on the `Purchase_Order_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Purchase_Requisition_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Purchase_Requisition_Items` table. All the data in the column will be lost.
  - You are about to drop the column `productSpecification` on the `Purchase_Requisition_Items` table. All the data in the column will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supplier_Products` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[materialId]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `materialId` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialName` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialSpecification` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialId` to the `Material_Warehousing_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialName` to the `Material_Warehousing_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialSpecification` to the `Material_Warehousing_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialUnit` to the `Material_Warehousing_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialId` to the `Purchase_Order_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialName` to the `Purchase_Order_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialSpecification` to the `Purchase_Order_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialUnit` to the `Purchase_Order_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialId` to the `Purchase_Requisition_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialName` to the `Purchase_Requisition_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialSpecification` to the `Purchase_Requisition_Items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_productId_fkey";

-- DropForeignKey
ALTER TABLE "Material_Warehousing_Items" DROP CONSTRAINT "Material_Warehousing_Items_productId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase_Order_Items" DROP CONSTRAINT "Purchase_Order_Items_productId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase_Requisition_Items" DROP CONSTRAINT "Purchase_Requisition_Items_productId_fkey";

-- DropForeignKey
ALTER TABLE "Supplier_Products" DROP CONSTRAINT "Supplier_Products_productId_fkey";

-- DropForeignKey
ALTER TABLE "Supplier_Products" DROP CONSTRAINT "Supplier_Products_supplierId_fkey";

-- DropIndex
DROP INDEX "Inventory_productId_key";

-- DropIndex
DROP INDEX "Inventory_productName_idx";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "productId",
DROP COLUMN "productName",
DROP COLUMN "productSpecification",
ADD COLUMN     "materialId" TEXT NOT NULL,
ADD COLUMN     "materialName" TEXT NOT NULL,
ADD COLUMN     "materialSpecification" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Material_Warehousing_Items" DROP COLUMN "productId",
DROP COLUMN "productName",
DROP COLUMN "productSpecification",
DROP COLUMN "productUnit",
ADD COLUMN     "materialId" TEXT NOT NULL,
ADD COLUMN     "materialName" TEXT NOT NULL,
ADD COLUMN     "materialSpecification" TEXT NOT NULL,
ADD COLUMN     "materialUnit" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Purchase_Order_Items" DROP COLUMN "productId",
DROP COLUMN "productName",
DROP COLUMN "productSpecification",
DROP COLUMN "productUnit",
ADD COLUMN     "materialId" TEXT NOT NULL,
ADD COLUMN     "materialName" TEXT NOT NULL,
ADD COLUMN     "materialSpecification" TEXT NOT NULL,
ADD COLUMN     "materialUnit" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Purchase_Requisition_Items" DROP COLUMN "productId",
DROP COLUMN "productName",
DROP COLUMN "productSpecification",
ADD COLUMN     "materialId" TEXT NOT NULL,
ADD COLUMN     "materialName" TEXT NOT NULL,
ADD COLUMN     "materialSpecification" TEXT NOT NULL;

-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "Supplier_Products";

-- CreateTable
CREATE TABLE "Materials" (
    "materialId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specification" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'VND',
    "lastPurchaseDate" TIMESTAMP(3) NOT NULL,
    "supplierId" TEXT NOT NULL,
    "supplierName" TEXT NOT NULL,

    CONSTRAINT "Materials_pkey" PRIMARY KEY ("materialId")
);

-- CreateTable
CREATE TABLE "Supplier_Materials" (
    "supplierId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,

    CONSTRAINT "Supplier_Materials_pkey" PRIMARY KEY ("supplierId","materialId")
);

-- CreateIndex
CREATE INDEX "Materials_materialId_idx" ON "Materials"("materialId");

-- CreateIndex
CREATE INDEX "Materials_name_idx" ON "Materials"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_materialId_key" ON "Inventory"("materialId");

-- CreateIndex
CREATE INDEX "Inventory_materialName_idx" ON "Inventory"("materialName");

-- AddForeignKey
ALTER TABLE "Supplier_Materials" ADD CONSTRAINT "Supplier_Materials_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Suppliers"("supplierId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier_Materials" ADD CONSTRAINT "Supplier_Materials_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Materials"("materialId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_Requisition_Items" ADD CONSTRAINT "Purchase_Requisition_Items_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Materials"("materialId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase_Order_Items" ADD CONSTRAINT "Purchase_Order_Items_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Materials"("materialId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material_Warehousing_Items" ADD CONSTRAINT "Material_Warehousing_Items_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Materials"("materialId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Materials"("materialId") ON DELETE RESTRICT ON UPDATE CASCADE;
