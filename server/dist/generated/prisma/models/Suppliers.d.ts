import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Suppliers
 *
 */
export type SuppliersModel = runtime.Types.Result.DefaultSelection<Prisma.$SuppliersPayload>;
export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null;
    _min: SuppliersMinAggregateOutputType | null;
    _max: SuppliersMaxAggregateOutputType | null;
};
export type SuppliersMinAggregateOutputType = {
    supplierId: string | null;
    name: string | null;
    type: string | null;
    contactPerson: string | null;
    telephone: string | null;
    fax: string | null;
    mobileNo: string | null;
    email: string | null;
    paymentTerm: string | null;
    tax: string | null;
    MST: string | null;
};
export type SuppliersMaxAggregateOutputType = {
    supplierId: string | null;
    name: string | null;
    type: string | null;
    contactPerson: string | null;
    telephone: string | null;
    fax: string | null;
    mobileNo: string | null;
    email: string | null;
    paymentTerm: string | null;
    tax: string | null;
    MST: string | null;
};
export type SuppliersCountAggregateOutputType = {
    supplierId: number;
    name: number;
    type: number;
    contactPerson: number;
    telephone: number;
    fax: number;
    mobileNo: number;
    email: number;
    paymentTerm: number;
    tax: number;
    MST: number;
    _all: number;
};
export type SuppliersMinAggregateInputType = {
    supplierId?: true;
    name?: true;
    type?: true;
    contactPerson?: true;
    telephone?: true;
    fax?: true;
    mobileNo?: true;
    email?: true;
    paymentTerm?: true;
    tax?: true;
    MST?: true;
};
export type SuppliersMaxAggregateInputType = {
    supplierId?: true;
    name?: true;
    type?: true;
    contactPerson?: true;
    telephone?: true;
    fax?: true;
    mobileNo?: true;
    email?: true;
    paymentTerm?: true;
    tax?: true;
    MST?: true;
};
export type SuppliersCountAggregateInputType = {
    supplierId?: true;
    name?: true;
    type?: true;
    contactPerson?: true;
    telephone?: true;
    fax?: true;
    mobileNo?: true;
    email?: true;
    paymentTerm?: true;
    tax?: true;
    MST?: true;
    _all?: true;
};
export type SuppliersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to aggregate.
     */
    where?: Prisma.SuppliersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Prisma.SuppliersOrderByWithRelationInput | Prisma.SuppliersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SuppliersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType;
};
export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
    [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSuppliers[P]> : Prisma.GetScalarType<T[P], AggregateSuppliers[P]>;
};
export type SuppliersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SuppliersWhereInput;
    orderBy?: Prisma.SuppliersOrderByWithAggregationInput | Prisma.SuppliersOrderByWithAggregationInput[];
    by: Prisma.SuppliersScalarFieldEnum[] | Prisma.SuppliersScalarFieldEnum;
    having?: Prisma.SuppliersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SuppliersCountAggregateInputType | true;
    _min?: SuppliersMinAggregateInputType;
    _max?: SuppliersMaxAggregateInputType;
};
export type SuppliersGroupByOutputType = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson: string | null;
    telephone: string;
    fax: string | null;
    mobileNo: string | null;
    email: string | null;
    paymentTerm: string | null;
    tax: string | null;
    MST: string | null;
    _count: SuppliersCountAggregateOutputType | null;
    _min: SuppliersMinAggregateOutputType | null;
    _max: SuppliersMaxAggregateOutputType | null;
};
export type GetSuppliersGroupByPayload<T extends SuppliersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SuppliersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SuppliersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SuppliersGroupByOutputType[P]>;
}>>;
export type SuppliersWhereInput = {
    AND?: Prisma.SuppliersWhereInput | Prisma.SuppliersWhereInput[];
    OR?: Prisma.SuppliersWhereInput[];
    NOT?: Prisma.SuppliersWhereInput | Prisma.SuppliersWhereInput[];
    supplierId?: Prisma.StringFilter<"Suppliers"> | string;
    name?: Prisma.StringFilter<"Suppliers"> | string;
    type?: Prisma.StringFilter<"Suppliers"> | string;
    contactPerson?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    telephone?: Prisma.StringFilter<"Suppliers"> | string;
    fax?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    mobileNo?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    email?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    paymentTerm?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    tax?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    MST?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    supplierProducts?: Prisma.Supplier_ProductsListRelationFilter;
    purchasingOrders?: Prisma.Purchasing_OrdersListRelationFilter;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsListRelationFilter;
};
export type SuppliersOrderByWithRelationInput = {
    supplierId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    fax?: Prisma.SortOrderInput | Prisma.SortOrder;
    mobileNo?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrderInput | Prisma.SortOrder;
    tax?: Prisma.SortOrderInput | Prisma.SortOrder;
    MST?: Prisma.SortOrderInput | Prisma.SortOrder;
    supplierProducts?: Prisma.Supplier_ProductsOrderByRelationAggregateInput;
    purchasingOrders?: Prisma.Purchasing_OrdersOrderByRelationAggregateInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsOrderByRelationAggregateInput;
};
export type SuppliersWhereUniqueInput = Prisma.AtLeast<{
    supplierId?: string;
    AND?: Prisma.SuppliersWhereInput | Prisma.SuppliersWhereInput[];
    OR?: Prisma.SuppliersWhereInput[];
    NOT?: Prisma.SuppliersWhereInput | Prisma.SuppliersWhereInput[];
    name?: Prisma.StringFilter<"Suppliers"> | string;
    type?: Prisma.StringFilter<"Suppliers"> | string;
    contactPerson?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    telephone?: Prisma.StringFilter<"Suppliers"> | string;
    fax?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    mobileNo?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    email?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    paymentTerm?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    tax?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    MST?: Prisma.StringNullableFilter<"Suppliers"> | string | null;
    supplierProducts?: Prisma.Supplier_ProductsListRelationFilter;
    purchasingOrders?: Prisma.Purchasing_OrdersListRelationFilter;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsListRelationFilter;
}, "supplierId">;
export type SuppliersOrderByWithAggregationInput = {
    supplierId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    fax?: Prisma.SortOrderInput | Prisma.SortOrder;
    mobileNo?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrderInput | Prisma.SortOrder;
    tax?: Prisma.SortOrderInput | Prisma.SortOrder;
    MST?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.SuppliersCountOrderByAggregateInput;
    _max?: Prisma.SuppliersMaxOrderByAggregateInput;
    _min?: Prisma.SuppliersMinOrderByAggregateInput;
};
export type SuppliersScalarWhereWithAggregatesInput = {
    AND?: Prisma.SuppliersScalarWhereWithAggregatesInput | Prisma.SuppliersScalarWhereWithAggregatesInput[];
    OR?: Prisma.SuppliersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SuppliersScalarWhereWithAggregatesInput | Prisma.SuppliersScalarWhereWithAggregatesInput[];
    supplierId?: Prisma.StringWithAggregatesFilter<"Suppliers"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Suppliers"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Suppliers"> | string;
    contactPerson?: Prisma.StringNullableWithAggregatesFilter<"Suppliers"> | string | null;
    telephone?: Prisma.StringWithAggregatesFilter<"Suppliers"> | string;
    fax?: Prisma.StringNullableWithAggregatesFilter<"Suppliers"> | string | null;
    mobileNo?: Prisma.StringNullableWithAggregatesFilter<"Suppliers"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Suppliers"> | string | null;
    paymentTerm?: Prisma.StringNullableWithAggregatesFilter<"Suppliers"> | string | null;
    tax?: Prisma.StringNullableWithAggregatesFilter<"Suppliers"> | string | null;
    MST?: Prisma.StringNullableWithAggregatesFilter<"Suppliers"> | string | null;
};
export type SuppliersCreateInput = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson?: string | null;
    telephone: string;
    fax?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    paymentTerm?: string | null;
    tax?: string | null;
    MST?: string | null;
    supplierProducts?: Prisma.Supplier_ProductsCreateNestedManyWithoutSupplierInput;
    purchasingOrders?: Prisma.Purchasing_OrdersCreateNestedManyWithoutSupplierInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsCreateNestedManyWithoutSupplierInput;
};
export type SuppliersUncheckedCreateInput = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson?: string | null;
    telephone: string;
    fax?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    paymentTerm?: string | null;
    tax?: string | null;
    MST?: string | null;
    supplierProducts?: Prisma.Supplier_ProductsUncheckedCreateNestedManyWithoutSupplierInput;
    purchasingOrders?: Prisma.Purchasing_OrdersUncheckedCreateNestedManyWithoutSupplierInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedCreateNestedManyWithoutSupplierInput;
};
export type SuppliersUpdateInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierProducts?: Prisma.Supplier_ProductsUpdateManyWithoutSupplierNestedInput;
    purchasingOrders?: Prisma.Purchasing_OrdersUpdateManyWithoutSupplierNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUpdateManyWithoutSupplierNestedInput;
};
export type SuppliersUncheckedUpdateInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierProducts?: Prisma.Supplier_ProductsUncheckedUpdateManyWithoutSupplierNestedInput;
    purchasingOrders?: Prisma.Purchasing_OrdersUncheckedUpdateManyWithoutSupplierNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedUpdateManyWithoutSupplierNestedInput;
};
export type SuppliersCreateManyInput = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson?: string | null;
    telephone: string;
    fax?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    paymentTerm?: string | null;
    tax?: string | null;
    MST?: string | null;
};
export type SuppliersUpdateManyMutationInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SuppliersUncheckedUpdateManyInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SuppliersCountOrderByAggregateInput = {
    supplierId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    fax?: Prisma.SortOrder;
    mobileNo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    tax?: Prisma.SortOrder;
    MST?: Prisma.SortOrder;
};
export type SuppliersMaxOrderByAggregateInput = {
    supplierId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    fax?: Prisma.SortOrder;
    mobileNo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    tax?: Prisma.SortOrder;
    MST?: Prisma.SortOrder;
};
export type SuppliersMinOrderByAggregateInput = {
    supplierId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    fax?: Prisma.SortOrder;
    mobileNo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    tax?: Prisma.SortOrder;
    MST?: Prisma.SortOrder;
};
export type SuppliersScalarRelationFilter = {
    is?: Prisma.SuppliersWhereInput;
    isNot?: Prisma.SuppliersWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type SuppliersCreateNestedOneWithoutSupplierProductsInput = {
    create?: Prisma.XOR<Prisma.SuppliersCreateWithoutSupplierProductsInput, Prisma.SuppliersUncheckedCreateWithoutSupplierProductsInput>;
    connectOrCreate?: Prisma.SuppliersCreateOrConnectWithoutSupplierProductsInput;
    connect?: Prisma.SuppliersWhereUniqueInput;
};
export type SuppliersUpdateOneRequiredWithoutSupplierProductsNestedInput = {
    create?: Prisma.XOR<Prisma.SuppliersCreateWithoutSupplierProductsInput, Prisma.SuppliersUncheckedCreateWithoutSupplierProductsInput>;
    connectOrCreate?: Prisma.SuppliersCreateOrConnectWithoutSupplierProductsInput;
    upsert?: Prisma.SuppliersUpsertWithoutSupplierProductsInput;
    connect?: Prisma.SuppliersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SuppliersUpdateToOneWithWhereWithoutSupplierProductsInput, Prisma.SuppliersUpdateWithoutSupplierProductsInput>, Prisma.SuppliersUncheckedUpdateWithoutSupplierProductsInput>;
};
export type SuppliersCreateNestedOneWithoutPurchasingOrdersInput = {
    create?: Prisma.XOR<Prisma.SuppliersCreateWithoutPurchasingOrdersInput, Prisma.SuppliersUncheckedCreateWithoutPurchasingOrdersInput>;
    connectOrCreate?: Prisma.SuppliersCreateOrConnectWithoutPurchasingOrdersInput;
    connect?: Prisma.SuppliersWhereUniqueInput;
};
export type SuppliersUpdateOneRequiredWithoutPurchasingOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.SuppliersCreateWithoutPurchasingOrdersInput, Prisma.SuppliersUncheckedCreateWithoutPurchasingOrdersInput>;
    connectOrCreate?: Prisma.SuppliersCreateOrConnectWithoutPurchasingOrdersInput;
    upsert?: Prisma.SuppliersUpsertWithoutPurchasingOrdersInput;
    connect?: Prisma.SuppliersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SuppliersUpdateToOneWithWhereWithoutPurchasingOrdersInput, Prisma.SuppliersUpdateWithoutPurchasingOrdersInput>, Prisma.SuppliersUncheckedUpdateWithoutPurchasingOrdersInput>;
};
export type SuppliersCreateNestedOneWithoutMaterialWarehousingFormsInput = {
    create?: Prisma.XOR<Prisma.SuppliersCreateWithoutMaterialWarehousingFormsInput, Prisma.SuppliersUncheckedCreateWithoutMaterialWarehousingFormsInput>;
    connectOrCreate?: Prisma.SuppliersCreateOrConnectWithoutMaterialWarehousingFormsInput;
    connect?: Prisma.SuppliersWhereUniqueInput;
};
export type SuppliersUpdateOneRequiredWithoutMaterialWarehousingFormsNestedInput = {
    create?: Prisma.XOR<Prisma.SuppliersCreateWithoutMaterialWarehousingFormsInput, Prisma.SuppliersUncheckedCreateWithoutMaterialWarehousingFormsInput>;
    connectOrCreate?: Prisma.SuppliersCreateOrConnectWithoutMaterialWarehousingFormsInput;
    upsert?: Prisma.SuppliersUpsertWithoutMaterialWarehousingFormsInput;
    connect?: Prisma.SuppliersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SuppliersUpdateToOneWithWhereWithoutMaterialWarehousingFormsInput, Prisma.SuppliersUpdateWithoutMaterialWarehousingFormsInput>, Prisma.SuppliersUncheckedUpdateWithoutMaterialWarehousingFormsInput>;
};
export type SuppliersCreateWithoutSupplierProductsInput = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson?: string | null;
    telephone: string;
    fax?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    paymentTerm?: string | null;
    tax?: string | null;
    MST?: string | null;
    purchasingOrders?: Prisma.Purchasing_OrdersCreateNestedManyWithoutSupplierInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsCreateNestedManyWithoutSupplierInput;
};
export type SuppliersUncheckedCreateWithoutSupplierProductsInput = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson?: string | null;
    telephone: string;
    fax?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    paymentTerm?: string | null;
    tax?: string | null;
    MST?: string | null;
    purchasingOrders?: Prisma.Purchasing_OrdersUncheckedCreateNestedManyWithoutSupplierInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedCreateNestedManyWithoutSupplierInput;
};
export type SuppliersCreateOrConnectWithoutSupplierProductsInput = {
    where: Prisma.SuppliersWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuppliersCreateWithoutSupplierProductsInput, Prisma.SuppliersUncheckedCreateWithoutSupplierProductsInput>;
};
export type SuppliersUpsertWithoutSupplierProductsInput = {
    update: Prisma.XOR<Prisma.SuppliersUpdateWithoutSupplierProductsInput, Prisma.SuppliersUncheckedUpdateWithoutSupplierProductsInput>;
    create: Prisma.XOR<Prisma.SuppliersCreateWithoutSupplierProductsInput, Prisma.SuppliersUncheckedCreateWithoutSupplierProductsInput>;
    where?: Prisma.SuppliersWhereInput;
};
export type SuppliersUpdateToOneWithWhereWithoutSupplierProductsInput = {
    where?: Prisma.SuppliersWhereInput;
    data: Prisma.XOR<Prisma.SuppliersUpdateWithoutSupplierProductsInput, Prisma.SuppliersUncheckedUpdateWithoutSupplierProductsInput>;
};
export type SuppliersUpdateWithoutSupplierProductsInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchasingOrders?: Prisma.Purchasing_OrdersUpdateManyWithoutSupplierNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUpdateManyWithoutSupplierNestedInput;
};
export type SuppliersUncheckedUpdateWithoutSupplierProductsInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchasingOrders?: Prisma.Purchasing_OrdersUncheckedUpdateManyWithoutSupplierNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedUpdateManyWithoutSupplierNestedInput;
};
export type SuppliersCreateWithoutPurchasingOrdersInput = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson?: string | null;
    telephone: string;
    fax?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    paymentTerm?: string | null;
    tax?: string | null;
    MST?: string | null;
    supplierProducts?: Prisma.Supplier_ProductsCreateNestedManyWithoutSupplierInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsCreateNestedManyWithoutSupplierInput;
};
export type SuppliersUncheckedCreateWithoutPurchasingOrdersInput = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson?: string | null;
    telephone: string;
    fax?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    paymentTerm?: string | null;
    tax?: string | null;
    MST?: string | null;
    supplierProducts?: Prisma.Supplier_ProductsUncheckedCreateNestedManyWithoutSupplierInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedCreateNestedManyWithoutSupplierInput;
};
export type SuppliersCreateOrConnectWithoutPurchasingOrdersInput = {
    where: Prisma.SuppliersWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuppliersCreateWithoutPurchasingOrdersInput, Prisma.SuppliersUncheckedCreateWithoutPurchasingOrdersInput>;
};
export type SuppliersUpsertWithoutPurchasingOrdersInput = {
    update: Prisma.XOR<Prisma.SuppliersUpdateWithoutPurchasingOrdersInput, Prisma.SuppliersUncheckedUpdateWithoutPurchasingOrdersInput>;
    create: Prisma.XOR<Prisma.SuppliersCreateWithoutPurchasingOrdersInput, Prisma.SuppliersUncheckedCreateWithoutPurchasingOrdersInput>;
    where?: Prisma.SuppliersWhereInput;
};
export type SuppliersUpdateToOneWithWhereWithoutPurchasingOrdersInput = {
    where?: Prisma.SuppliersWhereInput;
    data: Prisma.XOR<Prisma.SuppliersUpdateWithoutPurchasingOrdersInput, Prisma.SuppliersUncheckedUpdateWithoutPurchasingOrdersInput>;
};
export type SuppliersUpdateWithoutPurchasingOrdersInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierProducts?: Prisma.Supplier_ProductsUpdateManyWithoutSupplierNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUpdateManyWithoutSupplierNestedInput;
};
export type SuppliersUncheckedUpdateWithoutPurchasingOrdersInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierProducts?: Prisma.Supplier_ProductsUncheckedUpdateManyWithoutSupplierNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedUpdateManyWithoutSupplierNestedInput;
};
export type SuppliersCreateWithoutMaterialWarehousingFormsInput = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson?: string | null;
    telephone: string;
    fax?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    paymentTerm?: string | null;
    tax?: string | null;
    MST?: string | null;
    supplierProducts?: Prisma.Supplier_ProductsCreateNestedManyWithoutSupplierInput;
    purchasingOrders?: Prisma.Purchasing_OrdersCreateNestedManyWithoutSupplierInput;
};
export type SuppliersUncheckedCreateWithoutMaterialWarehousingFormsInput = {
    supplierId: string;
    name: string;
    type: string;
    contactPerson?: string | null;
    telephone: string;
    fax?: string | null;
    mobileNo?: string | null;
    email?: string | null;
    paymentTerm?: string | null;
    tax?: string | null;
    MST?: string | null;
    supplierProducts?: Prisma.Supplier_ProductsUncheckedCreateNestedManyWithoutSupplierInput;
    purchasingOrders?: Prisma.Purchasing_OrdersUncheckedCreateNestedManyWithoutSupplierInput;
};
export type SuppliersCreateOrConnectWithoutMaterialWarehousingFormsInput = {
    where: Prisma.SuppliersWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuppliersCreateWithoutMaterialWarehousingFormsInput, Prisma.SuppliersUncheckedCreateWithoutMaterialWarehousingFormsInput>;
};
export type SuppliersUpsertWithoutMaterialWarehousingFormsInput = {
    update: Prisma.XOR<Prisma.SuppliersUpdateWithoutMaterialWarehousingFormsInput, Prisma.SuppliersUncheckedUpdateWithoutMaterialWarehousingFormsInput>;
    create: Prisma.XOR<Prisma.SuppliersCreateWithoutMaterialWarehousingFormsInput, Prisma.SuppliersUncheckedCreateWithoutMaterialWarehousingFormsInput>;
    where?: Prisma.SuppliersWhereInput;
};
export type SuppliersUpdateToOneWithWhereWithoutMaterialWarehousingFormsInput = {
    where?: Prisma.SuppliersWhereInput;
    data: Prisma.XOR<Prisma.SuppliersUpdateWithoutMaterialWarehousingFormsInput, Prisma.SuppliersUncheckedUpdateWithoutMaterialWarehousingFormsInput>;
};
export type SuppliersUpdateWithoutMaterialWarehousingFormsInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierProducts?: Prisma.Supplier_ProductsUpdateManyWithoutSupplierNestedInput;
    purchasingOrders?: Prisma.Purchasing_OrdersUpdateManyWithoutSupplierNestedInput;
};
export type SuppliersUncheckedUpdateWithoutMaterialWarehousingFormsInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    fax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierProducts?: Prisma.Supplier_ProductsUncheckedUpdateManyWithoutSupplierNestedInput;
    purchasingOrders?: Prisma.Purchasing_OrdersUncheckedUpdateManyWithoutSupplierNestedInput;
};
/**
 * Count Type SuppliersCountOutputType
 */
export type SuppliersCountOutputType = {
    supplierProducts: number;
    purchasingOrders: number;
    materialWarehousingForms: number;
};
export type SuppliersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplierProducts?: boolean | SuppliersCountOutputTypeCountSupplierProductsArgs;
    purchasingOrders?: boolean | SuppliersCountOutputTypeCountPurchasingOrdersArgs;
    materialWarehousingForms?: boolean | SuppliersCountOutputTypeCountMaterialWarehousingFormsArgs;
};
/**
 * SuppliersCountOutputType without action
 */
export type SuppliersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuppliersCountOutputType
     */
    select?: Prisma.SuppliersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SuppliersCountOutputType without action
 */
export type SuppliersCountOutputTypeCountSupplierProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Supplier_ProductsWhereInput;
};
/**
 * SuppliersCountOutputType without action
 */
export type SuppliersCountOutputTypeCountPurchasingOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Purchasing_OrdersWhereInput;
};
/**
 * SuppliersCountOutputType without action
 */
export type SuppliersCountOutputTypeCountMaterialWarehousingFormsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Material_Warehousing_FormsWhereInput;
};
export type SuppliersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplierId?: boolean;
    name?: boolean;
    type?: boolean;
    contactPerson?: boolean;
    telephone?: boolean;
    fax?: boolean;
    mobileNo?: boolean;
    email?: boolean;
    paymentTerm?: boolean;
    tax?: boolean;
    MST?: boolean;
    supplierProducts?: boolean | Prisma.Suppliers$supplierProductsArgs<ExtArgs>;
    purchasingOrders?: boolean | Prisma.Suppliers$purchasingOrdersArgs<ExtArgs>;
    materialWarehousingForms?: boolean | Prisma.Suppliers$materialWarehousingFormsArgs<ExtArgs>;
    _count?: boolean | Prisma.SuppliersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suppliers"]>;
export type SuppliersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplierId?: boolean;
    name?: boolean;
    type?: boolean;
    contactPerson?: boolean;
    telephone?: boolean;
    fax?: boolean;
    mobileNo?: boolean;
    email?: boolean;
    paymentTerm?: boolean;
    tax?: boolean;
    MST?: boolean;
}, ExtArgs["result"]["suppliers"]>;
export type SuppliersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplierId?: boolean;
    name?: boolean;
    type?: boolean;
    contactPerson?: boolean;
    telephone?: boolean;
    fax?: boolean;
    mobileNo?: boolean;
    email?: boolean;
    paymentTerm?: boolean;
    tax?: boolean;
    MST?: boolean;
}, ExtArgs["result"]["suppliers"]>;
export type SuppliersSelectScalar = {
    supplierId?: boolean;
    name?: boolean;
    type?: boolean;
    contactPerson?: boolean;
    telephone?: boolean;
    fax?: boolean;
    mobileNo?: boolean;
    email?: boolean;
    paymentTerm?: boolean;
    tax?: boolean;
    MST?: boolean;
};
export type SuppliersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"supplierId" | "name" | "type" | "contactPerson" | "telephone" | "fax" | "mobileNo" | "email" | "paymentTerm" | "tax" | "MST", ExtArgs["result"]["suppliers"]>;
export type SuppliersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplierProducts?: boolean | Prisma.Suppliers$supplierProductsArgs<ExtArgs>;
    purchasingOrders?: boolean | Prisma.Suppliers$purchasingOrdersArgs<ExtArgs>;
    materialWarehousingForms?: boolean | Prisma.Suppliers$materialWarehousingFormsArgs<ExtArgs>;
    _count?: boolean | Prisma.SuppliersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SuppliersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SuppliersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SuppliersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Suppliers";
    objects: {
        supplierProducts: Prisma.$Supplier_ProductsPayload<ExtArgs>[];
        purchasingOrders: Prisma.$Purchasing_OrdersPayload<ExtArgs>[];
        materialWarehousingForms: Prisma.$Material_Warehousing_FormsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        supplierId: string;
        name: string;
        type: string;
        contactPerson: string | null;
        telephone: string;
        fax: string | null;
        mobileNo: string | null;
        email: string | null;
        paymentTerm: string | null;
        tax: string | null;
        MST: string | null;
    }, ExtArgs["result"]["suppliers"]>;
    composites: {};
};
export type SuppliersGetPayload<S extends boolean | null | undefined | SuppliersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SuppliersPayload, S>;
export type SuppliersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SuppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SuppliersCountAggregateInputType | true;
};
export interface SuppliersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Suppliers'];
        meta: {
            name: 'Suppliers';
        };
    };
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {SuppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuppliersFindUniqueArgs>(args: Prisma.SelectSubset<T, SuppliersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Suppliers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuppliersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SuppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuppliersFindFirstArgs>(args?: Prisma.SelectSubset<T, SuppliersFindFirstArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Suppliers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuppliersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SuppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     *
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     *
     * // Only select the `supplierId`
     * const suppliersWithSupplierIdOnly = await prisma.suppliers.findMany({ select: { supplierId: true } })
     *
     */
    findMany<T extends SuppliersFindManyArgs>(args?: Prisma.SelectSubset<T, SuppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Suppliers.
     * @param {SuppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     *
     */
    create<T extends SuppliersCreateArgs>(args: Prisma.SelectSubset<T, SuppliersCreateArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Suppliers.
     * @param {SuppliersCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SuppliersCreateManyArgs>(args?: Prisma.SelectSubset<T, SuppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SuppliersCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Suppliers and only return the `supplierId`
     * const suppliersWithSupplierIdOnly = await prisma.suppliers.createManyAndReturn({
     *   select: { supplierId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SuppliersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SuppliersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Suppliers.
     * @param {SuppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     *
     */
    delete<T extends SuppliersDeleteArgs>(args: Prisma.SelectSubset<T, SuppliersDeleteArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Suppliers.
     * @param {SuppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SuppliersUpdateArgs>(args: Prisma.SelectSubset<T, SuppliersUpdateArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Suppliers.
     * @param {SuppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SuppliersDeleteManyArgs>(args?: Prisma.SelectSubset<T, SuppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SuppliersUpdateManyArgs>(args: Prisma.SelectSubset<T, SuppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SuppliersUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Suppliers and only return the `supplierId`
     * const suppliersWithSupplierIdOnly = await prisma.suppliers.updateManyAndReturn({
     *   select: { supplierId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SuppliersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SuppliersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Suppliers.
     * @param {SuppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
     */
    upsert<T extends SuppliersUpsertArgs>(args: Prisma.SelectSubset<T, SuppliersUpsertArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SuppliersCountArgs>(args?: Prisma.Subset<T, SuppliersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SuppliersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuppliersAggregateArgs>(args: Prisma.Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>;
    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends SuppliersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SuppliersGroupByArgs['orderBy'];
    } : {
        orderBy?: SuppliersGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SuppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Suppliers model
     */
    readonly fields: SuppliersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Suppliers.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SuppliersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    supplierProducts<T extends Prisma.Suppliers$supplierProductsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Suppliers$supplierProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchasingOrders<T extends Prisma.Suppliers$purchasingOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Suppliers$purchasingOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materialWarehousingForms<T extends Prisma.Suppliers$materialWarehousingFormsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Suppliers$materialWarehousingFormsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Suppliers model
 */
export interface SuppliersFieldRefs {
    readonly supplierId: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly name: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly type: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly contactPerson: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly telephone: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly fax: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly mobileNo: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly email: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly paymentTerm: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly tax: Prisma.FieldRef<"Suppliers", 'String'>;
    readonly MST: Prisma.FieldRef<"Suppliers", 'String'>;
}
/**
 * Suppliers findUnique
 */
export type SuppliersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
    /**
     * Filter, which Suppliers to fetch.
     */
    where: Prisma.SuppliersWhereUniqueInput;
};
/**
 * Suppliers findUniqueOrThrow
 */
export type SuppliersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
    /**
     * Filter, which Suppliers to fetch.
     */
    where: Prisma.SuppliersWhereUniqueInput;
};
/**
 * Suppliers findFirst
 */
export type SuppliersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: Prisma.SuppliersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Prisma.SuppliersOrderByWithRelationInput | Prisma.SuppliersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Suppliers.
     */
    cursor?: Prisma.SuppliersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Suppliers.
     */
    distinct?: Prisma.SuppliersScalarFieldEnum | Prisma.SuppliersScalarFieldEnum[];
};
/**
 * Suppliers findFirstOrThrow
 */
export type SuppliersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: Prisma.SuppliersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Prisma.SuppliersOrderByWithRelationInput | Prisma.SuppliersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Suppliers.
     */
    cursor?: Prisma.SuppliersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Suppliers.
     */
    distinct?: Prisma.SuppliersScalarFieldEnum | Prisma.SuppliersScalarFieldEnum[];
};
/**
 * Suppliers findMany
 */
export type SuppliersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: Prisma.SuppliersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Prisma.SuppliersOrderByWithRelationInput | Prisma.SuppliersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Suppliers.
     */
    cursor?: Prisma.SuppliersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Suppliers.
     */
    distinct?: Prisma.SuppliersScalarFieldEnum | Prisma.SuppliersScalarFieldEnum[];
};
/**
 * Suppliers create
 */
export type SuppliersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
    /**
     * The data needed to create a Suppliers.
     */
    data: Prisma.XOR<Prisma.SuppliersCreateInput, Prisma.SuppliersUncheckedCreateInput>;
};
/**
 * Suppliers createMany
 */
export type SuppliersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: Prisma.SuppliersCreateManyInput | Prisma.SuppliersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Suppliers createManyAndReturn
 */
export type SuppliersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * The data used to create many Suppliers.
     */
    data: Prisma.SuppliersCreateManyInput | Prisma.SuppliersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Suppliers update
 */
export type SuppliersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
    /**
     * The data needed to update a Suppliers.
     */
    data: Prisma.XOR<Prisma.SuppliersUpdateInput, Prisma.SuppliersUncheckedUpdateInput>;
    /**
     * Choose, which Suppliers to update.
     */
    where: Prisma.SuppliersWhereUniqueInput;
};
/**
 * Suppliers updateMany
 */
export type SuppliersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: Prisma.XOR<Prisma.SuppliersUpdateManyMutationInput, Prisma.SuppliersUncheckedUpdateManyInput>;
    /**
     * Filter which Suppliers to update
     */
    where?: Prisma.SuppliersWhereInput;
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number;
};
/**
 * Suppliers updateManyAndReturn
 */
export type SuppliersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * The data used to update Suppliers.
     */
    data: Prisma.XOR<Prisma.SuppliersUpdateManyMutationInput, Prisma.SuppliersUncheckedUpdateManyInput>;
    /**
     * Filter which Suppliers to update
     */
    where?: Prisma.SuppliersWhereInput;
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number;
};
/**
 * Suppliers upsert
 */
export type SuppliersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
    /**
     * The filter to search for the Suppliers to update in case it exists.
     */
    where: Prisma.SuppliersWhereUniqueInput;
    /**
     * In case the Suppliers found by the `where` argument doesn't exist, create a new Suppliers with this data.
     */
    create: Prisma.XOR<Prisma.SuppliersCreateInput, Prisma.SuppliersUncheckedCreateInput>;
    /**
     * In case the Suppliers was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SuppliersUpdateInput, Prisma.SuppliersUncheckedUpdateInput>;
};
/**
 * Suppliers delete
 */
export type SuppliersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
    /**
     * Filter which Suppliers to delete.
     */
    where: Prisma.SuppliersWhereUniqueInput;
};
/**
 * Suppliers deleteMany
 */
export type SuppliersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: Prisma.SuppliersWhereInput;
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number;
};
/**
 * Suppliers.supplierProducts
 */
export type Suppliers$supplierProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier_Products
     */
    select?: Prisma.Supplier_ProductsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier_Products
     */
    omit?: Prisma.Supplier_ProductsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Supplier_ProductsInclude<ExtArgs> | null;
    where?: Prisma.Supplier_ProductsWhereInput;
    orderBy?: Prisma.Supplier_ProductsOrderByWithRelationInput | Prisma.Supplier_ProductsOrderByWithRelationInput[];
    cursor?: Prisma.Supplier_ProductsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Supplier_ProductsScalarFieldEnum | Prisma.Supplier_ProductsScalarFieldEnum[];
};
/**
 * Suppliers.purchasingOrders
 */
export type Suppliers$purchasingOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Orders
     */
    select?: Prisma.Purchasing_OrdersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Orders
     */
    omit?: Prisma.Purchasing_OrdersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_OrdersInclude<ExtArgs> | null;
    where?: Prisma.Purchasing_OrdersWhereInput;
    orderBy?: Prisma.Purchasing_OrdersOrderByWithRelationInput | Prisma.Purchasing_OrdersOrderByWithRelationInput[];
    cursor?: Prisma.Purchasing_OrdersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Purchasing_OrdersScalarFieldEnum | Prisma.Purchasing_OrdersScalarFieldEnum[];
};
/**
 * Suppliers.materialWarehousingForms
 */
export type Suppliers$materialWarehousingFormsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material_Warehousing_Forms
     */
    select?: Prisma.Material_Warehousing_FormsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material_Warehousing_Forms
     */
    omit?: Prisma.Material_Warehousing_FormsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Material_Warehousing_FormsInclude<ExtArgs> | null;
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    orderBy?: Prisma.Material_Warehousing_FormsOrderByWithRelationInput | Prisma.Material_Warehousing_FormsOrderByWithRelationInput[];
    cursor?: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Material_Warehousing_FormsScalarFieldEnum | Prisma.Material_Warehousing_FormsScalarFieldEnum[];
};
/**
 * Suppliers without action
 */
export type SuppliersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: Prisma.SuppliersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: Prisma.SuppliersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuppliersInclude<ExtArgs> | null;
};
//# sourceMappingURL=Suppliers.d.ts.map