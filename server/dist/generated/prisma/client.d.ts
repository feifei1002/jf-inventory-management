import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Suppliers
 * const suppliers = await prisma.suppliers.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Suppliers
 *
 */
export type Suppliers = Prisma.SuppliersModel;
/**
 * Model Products
 *
 */
export type Products = Prisma.ProductsModel;
/**
 * Model Supplier_Products
 *
 */
export type Supplier_Products = Prisma.Supplier_ProductsModel;
/**
 * Model Purchasing_Requisitions
 *
 */
export type Purchasing_Requisitions = Prisma.Purchasing_RequisitionsModel;
/**
 * Model Purchase_Requisition_Items
 *
 */
export type Purchase_Requisition_Items = Prisma.Purchase_Requisition_ItemsModel;
/**
 * Model Purchasing_Orders
 *
 */
export type Purchasing_Orders = Prisma.Purchasing_OrdersModel;
/**
 * Model Purchase_Order_Items
 *
 */
export type Purchase_Order_Items = Prisma.Purchase_Order_ItemsModel;
/**
 * Model Material_Warehousing_Forms
 *
 */
export type Material_Warehousing_Forms = Prisma.Material_Warehousing_FormsModel;
/**
 * Model Material_Warehousing_Items
 *
 */
export type Material_Warehousing_Items = Prisma.Material_Warehousing_ItemsModel;
//# sourceMappingURL=client.d.ts.map