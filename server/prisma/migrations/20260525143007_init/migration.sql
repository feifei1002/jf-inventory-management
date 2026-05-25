-- AlterTable
ALTER TABLE "Purchasing_Requisitions" ALTER COLUMN "soNo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Suppliers" ADD COLUMN     "address" TEXT;
