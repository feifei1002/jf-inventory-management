/*
  Warnings:

  - You are about to drop the column `deliverNote` on the `Material_Warehousing_Forms` table. All the data in the column will be lost.
  - You are about to drop the column `deliverPlace` on the `Material_Warehousing_Items` table. All the data in the column will be lost.
  - You are about to drop the column `deliverPlace` on the `Purchase_Order_Items` table. All the data in the column will be lost.
  - You are about to drop the column `deliverPlace` on the `Purchase_Requisition_Items` table. All the data in the column will be lost.
  - Added the required column `deliveryPlace` to the `Material_Warehousing_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryPlace` to the `Purchase_Order_Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryPlace` to the `Purchase_Requisition_Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Material_Warehousing_Forms" DROP COLUMN "deliverNote",
ADD COLUMN     "deliveryNote" TEXT;

-- AlterTable
ALTER TABLE "Material_Warehousing_Items" DROP COLUMN "deliverPlace",
ADD COLUMN     "deliveryPlace" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Purchase_Order_Items" DROP COLUMN "deliverPlace",
ADD COLUMN     "deliveryPlace" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Purchase_Requisition_Items" DROP COLUMN "deliverPlace",
ADD COLUMN     "deliveryPlace" TEXT NOT NULL;
