import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();

async function deleteAllData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) => {
    const modelName = path.basename(fileName, path.extname(fileName));
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  });

  for (const modelName of modelNames) {
    const model: any = prisma[modelName as keyof typeof prisma];
    if (model) {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } else {
      console.error(
        `Model ${modelName} not found. Please ensure the model name is correctly specified.`
      );
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  const orderedFileNames = [
    "Suppliers.json",
    "Products.json",
    "Supplier_Products.json",
    "Purchasing_Requisitions.json",
    "Purchase_Requisition_Items.json",
    "Purchasing_Orders.json",
    "Purchase_Order_Items.json",
    "Material_Warehousing_Forms.json",
    "Material_Warehousing_Items.json",
  ];

  await deleteAllData(orderedFileNames);

  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];

    if (!model) {
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    for (const data of jsonData) {
      await model.create({
        data: {
          ...data,
          ...(data.lastPurchaseDate && { lastPurchaseDate: new Date(data.lastPurchaseDate) }),
          ...(data.requisitionDate && { requisitionDate: new Date(data.requisitionDate) }),
          ...(data.purchaseDate && { purchaseDate: new Date(data.purchaseDate) }),
          ...(data.requiredDate && { requiredDate: new Date(data.requiredDate) }),
          ...(data.deliveryDate && { deliveryDate: new Date(data.deliveryDate) }),
          ...(data.date && { date: new Date(data.date) }),
        },
      });
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });