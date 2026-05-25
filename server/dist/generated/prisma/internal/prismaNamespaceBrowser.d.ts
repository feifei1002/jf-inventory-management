import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: any;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map