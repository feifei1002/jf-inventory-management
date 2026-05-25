import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.suppliers`: Exposes CRUD operations for the **Suppliers** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Suppliers
  * const suppliers = await prisma.suppliers.findMany()
  * ```
  */
    get suppliers(): Prisma.SuppliersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.products`: Exposes CRUD operations for the **Products** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Products
      * const products = await prisma.products.findMany()
      * ```
      */
    get products(): Prisma.ProductsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplier_Products`: Exposes CRUD operations for the **Supplier_Products** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Supplier_Products
      * const supplier_Products = await prisma.supplier_Products.findMany()
      * ```
      */
    get supplier_Products(): Prisma.Supplier_ProductsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.purchasing_Requisitions`: Exposes CRUD operations for the **Purchasing_Requisitions** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Purchasing_Requisitions
      * const purchasing_Requisitions = await prisma.purchasing_Requisitions.findMany()
      * ```
      */
    get purchasing_Requisitions(): Prisma.Purchasing_RequisitionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.purchase_Requisition_Items`: Exposes CRUD operations for the **Purchase_Requisition_Items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Purchase_Requisition_Items
      * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.findMany()
      * ```
      */
    get purchase_Requisition_Items(): Prisma.Purchase_Requisition_ItemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.purchasing_Orders`: Exposes CRUD operations for the **Purchasing_Orders** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Purchasing_Orders
      * const purchasing_Orders = await prisma.purchasing_Orders.findMany()
      * ```
      */
    get purchasing_Orders(): Prisma.Purchasing_OrdersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.purchase_Order_Items`: Exposes CRUD operations for the **Purchase_Order_Items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Purchase_Order_Items
      * const purchase_Order_Items = await prisma.purchase_Order_Items.findMany()
      * ```
      */
    get purchase_Order_Items(): Prisma.Purchase_Order_ItemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.material_Warehousing_Forms`: Exposes CRUD operations for the **Material_Warehousing_Forms** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Material_Warehousing_Forms
      * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.findMany()
      * ```
      */
    get material_Warehousing_Forms(): Prisma.Material_Warehousing_FormsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.material_Warehousing_Items`: Exposes CRUD operations for the **Material_Warehousing_Items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Material_Warehousing_Items
      * const material_Warehousing_Items = await prisma.material_Warehousing_Items.findMany()
      * ```
      */
    get material_Warehousing_Items(): Prisma.Material_Warehousing_ItemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map