/*
  Warnings:

  - You are about to alter the column `productPrice` on the `Purchase_Order_Items` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(20,2)`.
  - You are about to alter the column `totalPrice` on the `Purchase_Order_Items` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(20,2)`.
  - You are about to alter the column `subtotal` on the `Purchasing_Orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `vat` on the `Purchasing_Orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `finalTotal` on the `Purchasing_Orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Purchase_Order_Items" ALTER COLUMN "productPrice" SET DATA TYPE DECIMAL(20,2),
ALTER COLUMN "totalPrice" SET DATA TYPE DECIMAL(20,2);

-- AlterTable
ALTER TABLE "Purchasing_Orders" ALTER COLUMN "subtotal" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "vat" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "finalTotal" SET DATA TYPE DECIMAL(10,2);
