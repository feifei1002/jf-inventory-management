/*
  Warnings:

  - The `VAT` column on the `Purchase_Order_Items` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Purchase_Order_Items" DROP COLUMN "VAT",
ADD COLUMN     "VAT" INTEGER;
