import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: any;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: any;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Suppliers: "Suppliers";
    readonly Products: "Products";
    readonly Supplier_Products: "Supplier_Products";
    readonly Purchasing_Requisitions: "Purchasing_Requisitions";
    readonly Purchase_Requisition_Items: "Purchase_Requisition_Items";
    readonly Purchasing_Orders: "Purchasing_Orders";
    readonly Purchase_Order_Items: "Purchase_Order_Items";
    readonly Material_Warehousing_Forms: "Material_Warehousing_Forms";
    readonly Material_Warehousing_Items: "Material_Warehousing_Items";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "suppliers" | "products" | "supplier_Products" | "purchasing_Requisitions" | "purchase_Requisition_Items" | "purchasing_Orders" | "purchase_Order_Items" | "material_Warehousing_Forms" | "material_Warehousing_Items";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Suppliers: {
            payload: Prisma.$SuppliersPayload<ExtArgs>;
            fields: Prisma.SuppliersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SuppliersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SuppliersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload>;
                };
                findFirst: {
                    args: Prisma.SuppliersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SuppliersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload>;
                };
                findMany: {
                    args: Prisma.SuppliersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload>[];
                };
                create: {
                    args: Prisma.SuppliersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload>;
                };
                createMany: {
                    args: Prisma.SuppliersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SuppliersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload>[];
                };
                delete: {
                    args: Prisma.SuppliersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload>;
                };
                update: {
                    args: Prisma.SuppliersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload>;
                };
                deleteMany: {
                    args: Prisma.SuppliersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SuppliersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SuppliersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload>[];
                };
                upsert: {
                    args: Prisma.SuppliersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuppliersPayload>;
                };
                aggregate: {
                    args: Prisma.SuppliersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSuppliers>;
                };
                groupBy: {
                    args: Prisma.SuppliersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuppliersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SuppliersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuppliersCountAggregateOutputType> | number;
                };
            };
        };
        Products: {
            payload: Prisma.$ProductsPayload<ExtArgs>;
            fields: Prisma.ProductsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload>;
                };
                findFirst: {
                    args: Prisma.ProductsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload>;
                };
                findMany: {
                    args: Prisma.ProductsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload>[];
                };
                create: {
                    args: Prisma.ProductsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload>;
                };
                createMany: {
                    args: Prisma.ProductsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload>[];
                };
                delete: {
                    args: Prisma.ProductsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload>;
                };
                update: {
                    args: Prisma.ProductsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload>[];
                };
                upsert: {
                    args: Prisma.ProductsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductsPayload>;
                };
                aggregate: {
                    args: Prisma.ProductsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProducts>;
                };
                groupBy: {
                    args: Prisma.ProductsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductsCountAggregateOutputType> | number;
                };
            };
        };
        Supplier_Products: {
            payload: Prisma.$Supplier_ProductsPayload<ExtArgs>;
            fields: Prisma.Supplier_ProductsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Supplier_ProductsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Supplier_ProductsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload>;
                };
                findFirst: {
                    args: Prisma.Supplier_ProductsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Supplier_ProductsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload>;
                };
                findMany: {
                    args: Prisma.Supplier_ProductsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload>[];
                };
                create: {
                    args: Prisma.Supplier_ProductsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload>;
                };
                createMany: {
                    args: Prisma.Supplier_ProductsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Supplier_ProductsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload>[];
                };
                delete: {
                    args: Prisma.Supplier_ProductsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload>;
                };
                update: {
                    args: Prisma.Supplier_ProductsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload>;
                };
                deleteMany: {
                    args: Prisma.Supplier_ProductsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Supplier_ProductsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Supplier_ProductsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload>[];
                };
                upsert: {
                    args: Prisma.Supplier_ProductsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Supplier_ProductsPayload>;
                };
                aggregate: {
                    args: Prisma.Supplier_ProductsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplier_Products>;
                };
                groupBy: {
                    args: Prisma.Supplier_ProductsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Supplier_ProductsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Supplier_ProductsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Supplier_ProductsCountAggregateOutputType> | number;
                };
            };
        };
        Purchasing_Requisitions: {
            payload: Prisma.$Purchasing_RequisitionsPayload<ExtArgs>;
            fields: Prisma.Purchasing_RequisitionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Purchasing_RequisitionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Purchasing_RequisitionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload>;
                };
                findFirst: {
                    args: Prisma.Purchasing_RequisitionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Purchasing_RequisitionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload>;
                };
                findMany: {
                    args: Prisma.Purchasing_RequisitionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload>[];
                };
                create: {
                    args: Prisma.Purchasing_RequisitionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload>;
                };
                createMany: {
                    args: Prisma.Purchasing_RequisitionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Purchasing_RequisitionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload>[];
                };
                delete: {
                    args: Prisma.Purchasing_RequisitionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload>;
                };
                update: {
                    args: Prisma.Purchasing_RequisitionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload>;
                };
                deleteMany: {
                    args: Prisma.Purchasing_RequisitionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Purchasing_RequisitionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Purchasing_RequisitionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload>[];
                };
                upsert: {
                    args: Prisma.Purchasing_RequisitionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_RequisitionsPayload>;
                };
                aggregate: {
                    args: Prisma.Purchasing_RequisitionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePurchasing_Requisitions>;
                };
                groupBy: {
                    args: Prisma.Purchasing_RequisitionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchasing_RequisitionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Purchasing_RequisitionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchasing_RequisitionsCountAggregateOutputType> | number;
                };
            };
        };
        Purchase_Requisition_Items: {
            payload: Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>;
            fields: Prisma.Purchase_Requisition_ItemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Purchase_Requisition_ItemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Purchase_Requisition_ItemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload>;
                };
                findFirst: {
                    args: Prisma.Purchase_Requisition_ItemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Purchase_Requisition_ItemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload>;
                };
                findMany: {
                    args: Prisma.Purchase_Requisition_ItemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload>[];
                };
                create: {
                    args: Prisma.Purchase_Requisition_ItemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload>;
                };
                createMany: {
                    args: Prisma.Purchase_Requisition_ItemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Purchase_Requisition_ItemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload>[];
                };
                delete: {
                    args: Prisma.Purchase_Requisition_ItemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload>;
                };
                update: {
                    args: Prisma.Purchase_Requisition_ItemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload>;
                };
                deleteMany: {
                    args: Prisma.Purchase_Requisition_ItemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Purchase_Requisition_ItemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Purchase_Requisition_ItemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload>[];
                };
                upsert: {
                    args: Prisma.Purchase_Requisition_ItemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Requisition_ItemsPayload>;
                };
                aggregate: {
                    args: Prisma.Purchase_Requisition_ItemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePurchase_Requisition_Items>;
                };
                groupBy: {
                    args: Prisma.Purchase_Requisition_ItemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchase_Requisition_ItemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Purchase_Requisition_ItemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchase_Requisition_ItemsCountAggregateOutputType> | number;
                };
            };
        };
        Purchasing_Orders: {
            payload: Prisma.$Purchasing_OrdersPayload<ExtArgs>;
            fields: Prisma.Purchasing_OrdersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Purchasing_OrdersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Purchasing_OrdersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload>;
                };
                findFirst: {
                    args: Prisma.Purchasing_OrdersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Purchasing_OrdersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload>;
                };
                findMany: {
                    args: Prisma.Purchasing_OrdersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload>[];
                };
                create: {
                    args: Prisma.Purchasing_OrdersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload>;
                };
                createMany: {
                    args: Prisma.Purchasing_OrdersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Purchasing_OrdersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload>[];
                };
                delete: {
                    args: Prisma.Purchasing_OrdersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload>;
                };
                update: {
                    args: Prisma.Purchasing_OrdersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload>;
                };
                deleteMany: {
                    args: Prisma.Purchasing_OrdersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Purchasing_OrdersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Purchasing_OrdersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload>[];
                };
                upsert: {
                    args: Prisma.Purchasing_OrdersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchasing_OrdersPayload>;
                };
                aggregate: {
                    args: Prisma.Purchasing_OrdersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePurchasing_Orders>;
                };
                groupBy: {
                    args: Prisma.Purchasing_OrdersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchasing_OrdersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Purchasing_OrdersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchasing_OrdersCountAggregateOutputType> | number;
                };
            };
        };
        Purchase_Order_Items: {
            payload: Prisma.$Purchase_Order_ItemsPayload<ExtArgs>;
            fields: Prisma.Purchase_Order_ItemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Purchase_Order_ItemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Purchase_Order_ItemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload>;
                };
                findFirst: {
                    args: Prisma.Purchase_Order_ItemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Purchase_Order_ItemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload>;
                };
                findMany: {
                    args: Prisma.Purchase_Order_ItemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload>[];
                };
                create: {
                    args: Prisma.Purchase_Order_ItemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload>;
                };
                createMany: {
                    args: Prisma.Purchase_Order_ItemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Purchase_Order_ItemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload>[];
                };
                delete: {
                    args: Prisma.Purchase_Order_ItemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload>;
                };
                update: {
                    args: Prisma.Purchase_Order_ItemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload>;
                };
                deleteMany: {
                    args: Prisma.Purchase_Order_ItemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Purchase_Order_ItemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Purchase_Order_ItemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload>[];
                };
                upsert: {
                    args: Prisma.Purchase_Order_ItemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Purchase_Order_ItemsPayload>;
                };
                aggregate: {
                    args: Prisma.Purchase_Order_ItemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePurchase_Order_Items>;
                };
                groupBy: {
                    args: Prisma.Purchase_Order_ItemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchase_Order_ItemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Purchase_Order_ItemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchase_Order_ItemsCountAggregateOutputType> | number;
                };
            };
        };
        Material_Warehousing_Forms: {
            payload: Prisma.$Material_Warehousing_FormsPayload<ExtArgs>;
            fields: Prisma.Material_Warehousing_FormsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Material_Warehousing_FormsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Material_Warehousing_FormsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload>;
                };
                findFirst: {
                    args: Prisma.Material_Warehousing_FormsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Material_Warehousing_FormsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload>;
                };
                findMany: {
                    args: Prisma.Material_Warehousing_FormsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload>[];
                };
                create: {
                    args: Prisma.Material_Warehousing_FormsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload>;
                };
                createMany: {
                    args: Prisma.Material_Warehousing_FormsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Material_Warehousing_FormsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload>[];
                };
                delete: {
                    args: Prisma.Material_Warehousing_FormsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload>;
                };
                update: {
                    args: Prisma.Material_Warehousing_FormsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload>;
                };
                deleteMany: {
                    args: Prisma.Material_Warehousing_FormsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Material_Warehousing_FormsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Material_Warehousing_FormsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload>[];
                };
                upsert: {
                    args: Prisma.Material_Warehousing_FormsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_FormsPayload>;
                };
                aggregate: {
                    args: Prisma.Material_Warehousing_FormsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMaterial_Warehousing_Forms>;
                };
                groupBy: {
                    args: Prisma.Material_Warehousing_FormsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Material_Warehousing_FormsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Material_Warehousing_FormsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Material_Warehousing_FormsCountAggregateOutputType> | number;
                };
            };
        };
        Material_Warehousing_Items: {
            payload: Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>;
            fields: Prisma.Material_Warehousing_ItemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Material_Warehousing_ItemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Material_Warehousing_ItemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload>;
                };
                findFirst: {
                    args: Prisma.Material_Warehousing_ItemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Material_Warehousing_ItemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload>;
                };
                findMany: {
                    args: Prisma.Material_Warehousing_ItemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload>[];
                };
                create: {
                    args: Prisma.Material_Warehousing_ItemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload>;
                };
                createMany: {
                    args: Prisma.Material_Warehousing_ItemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Material_Warehousing_ItemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload>[];
                };
                delete: {
                    args: Prisma.Material_Warehousing_ItemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload>;
                };
                update: {
                    args: Prisma.Material_Warehousing_ItemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload>;
                };
                deleteMany: {
                    args: Prisma.Material_Warehousing_ItemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Material_Warehousing_ItemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Material_Warehousing_ItemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload>[];
                };
                upsert: {
                    args: Prisma.Material_Warehousing_ItemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Material_Warehousing_ItemsPayload>;
                };
                aggregate: {
                    args: Prisma.Material_Warehousing_ItemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMaterial_Warehousing_Items>;
                };
                groupBy: {
                    args: Prisma.Material_Warehousing_ItemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Material_Warehousing_ItemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Material_Warehousing_ItemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Material_Warehousing_ItemsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SuppliersScalarFieldEnum: {
    readonly supplierId: "supplierId";
    readonly name: "name";
    readonly type: "type";
    readonly contactPerson: "contactPerson";
    readonly telephone: "telephone";
    readonly fax: "fax";
    readonly mobileNo: "mobileNo";
    readonly email: "email";
    readonly paymentTerm: "paymentTerm";
    readonly tax: "tax";
    readonly MST: "MST";
};
export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum];
export declare const ProductsScalarFieldEnum: {
    readonly productId: "productId";
    readonly name: "name";
    readonly specification: "specification";
    readonly unit: "unit";
    readonly price: "price";
    readonly lastPurchaseDate: "lastPurchaseDate";
    readonly supplierId: "supplierId";
    readonly supplierName: "supplierName";
};
export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum];
export declare const Supplier_ProductsScalarFieldEnum: {
    readonly supplierId: "supplierId";
    readonly productId: "productId";
};
export type Supplier_ProductsScalarFieldEnum = (typeof Supplier_ProductsScalarFieldEnum)[keyof typeof Supplier_ProductsScalarFieldEnum];
export declare const Purchasing_RequisitionsScalarFieldEnum: {
    readonly requisitionId: "requisitionId";
    readonly requisitionDate: "requisitionDate";
    readonly department: "department";
    readonly requester: "requester";
    readonly soNo: "soNo";
    readonly note: "note";
};
export type Purchasing_RequisitionsScalarFieldEnum = (typeof Purchasing_RequisitionsScalarFieldEnum)[keyof typeof Purchasing_RequisitionsScalarFieldEnum];
export declare const Purchase_Requisition_ItemsScalarFieldEnum: {
    readonly id: "id";
    readonly requisitionId: "requisitionId";
    readonly productId: "productId";
    readonly productName: "productName";
    readonly productSpecification: "productSpecification";
    readonly quantity: "quantity";
    readonly weight: "weight";
    readonly requiredDate: "requiredDate";
    readonly purpose: "purpose";
    readonly deliverPlace: "deliverPlace";
};
export type Purchase_Requisition_ItemsScalarFieldEnum = (typeof Purchase_Requisition_ItemsScalarFieldEnum)[keyof typeof Purchase_Requisition_ItemsScalarFieldEnum];
export declare const Purchasing_OrdersScalarFieldEnum: {
    readonly purchaseId: "purchaseId";
    readonly purchaseDate: "purchaseDate";
    readonly supplierId: "supplierId";
    readonly supplierName: "supplierName";
    readonly contactPerson: "contactPerson";
    readonly paymentTerm: "paymentTerm";
    readonly supplierAddress: "supplierAddress";
    readonly subtotal: "subtotal";
    readonly vat: "vat";
    readonly finalTotal: "finalTotal";
};
export type Purchasing_OrdersScalarFieldEnum = (typeof Purchasing_OrdersScalarFieldEnum)[keyof typeof Purchasing_OrdersScalarFieldEnum];
export declare const Purchase_Order_ItemsScalarFieldEnum: {
    readonly id: "id";
    readonly purchaseId: "purchaseId";
    readonly productId: "productId";
    readonly productName: "productName";
    readonly productSpecification: "productSpecification";
    readonly quantity: "quantity";
    readonly productUnit: "productUnit";
    readonly productPrice: "productPrice";
    readonly totalPrice: "totalPrice";
    readonly VAT: "VAT";
    readonly deliveryDate: "deliveryDate";
    readonly requisitionId: "requisitionId";
    readonly deliverPlace: "deliverPlace";
};
export type Purchase_Order_ItemsScalarFieldEnum = (typeof Purchase_Order_ItemsScalarFieldEnum)[keyof typeof Purchase_Order_ItemsScalarFieldEnum];
export declare const Material_Warehousing_FormsScalarFieldEnum: {
    readonly formId: "formId";
    readonly date: "date";
    readonly supplierId: "supplierId";
    readonly supplierName: "supplierName";
    readonly contactPerson: "contactPerson";
    readonly supplierAddress: "supplierAddress";
    readonly supplierTelephone: "supplierTelephone";
    readonly supplierFax: "supplierFax";
    readonly purchaseId: "purchaseId";
    readonly paymentTerm: "paymentTerm";
    readonly invoiceNo: "invoiceNo";
    readonly deliverNote: "deliverNote";
};
export type Material_Warehousing_FormsScalarFieldEnum = (typeof Material_Warehousing_FormsScalarFieldEnum)[keyof typeof Material_Warehousing_FormsScalarFieldEnum];
export declare const Material_Warehousing_ItemsScalarFieldEnum: {
    readonly id: "id";
    readonly formId: "formId";
    readonly productId: "productId";
    readonly productName: "productName";
    readonly productSpecification: "productSpecification";
    readonly quantity: "quantity";
    readonly productUnit: "productUnit";
    readonly deliveryDate: "deliveryDate";
    readonly requisitionId: "requisitionId";
    readonly deliverPlace: "deliverPlace";
};
export type Material_Warehousing_ItemsScalarFieldEnum = (typeof Material_Warehousing_ItemsScalarFieldEnum)[keyof typeof Material_Warehousing_ItemsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    suppliers?: Prisma.SuppliersOmit;
    products?: Prisma.ProductsOmit;
    supplier_Products?: Prisma.Supplier_ProductsOmit;
    purchasing_Requisitions?: Prisma.Purchasing_RequisitionsOmit;
    purchase_Requisition_Items?: Prisma.Purchase_Requisition_ItemsOmit;
    purchasing_Orders?: Prisma.Purchasing_OrdersOmit;
    purchase_Order_Items?: Prisma.Purchase_Order_ItemsOmit;
    material_Warehousing_Forms?: Prisma.Material_Warehousing_FormsOmit;
    material_Warehousing_Items?: Prisma.Material_Warehousing_ItemsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map