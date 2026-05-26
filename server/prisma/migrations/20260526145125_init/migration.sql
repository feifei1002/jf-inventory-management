-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'VND';

-- AlterTable
ALTER TABLE "Purchase_Order_Items" ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'VND';

-- AlterTable
ALTER TABLE "Purchasing_Orders" ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'VND';
