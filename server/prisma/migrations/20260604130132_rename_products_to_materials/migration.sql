/*
  Warnings:

  - You are about to drop the column `productPrice` on the `Purchase_Order_Items` table. All the data in the column will be lost.
  - Added the required column `materialPrice` to the `Purchase_Order_Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchase_Order_Items" DROP COLUMN "productPrice",
ADD COLUMN     "materialPrice" DECIMAL(20,2) NOT NULL;
