import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Material_Warehousing_Forms
 *
 */
export type Material_Warehousing_FormsModel = runtime.Types.Result.DefaultSelection<Prisma.$Material_Warehousing_FormsPayload>;
export type AggregateMaterial_Warehousing_Forms = {
    _count: Material_Warehousing_FormsCountAggregateOutputType | null;
    _min: Material_Warehousing_FormsMinAggregateOutputType | null;
    _max: Material_Warehousing_FormsMaxAggregateOutputType | null;
};
export type Material_Warehousing_FormsMinAggregateOutputType = {
    formId: string | null;
    date: Date | null;
    supplierId: string | null;
    supplierName: string | null;
    contactPerson: string | null;
    supplierAddress: string | null;
    supplierTelephone: string | null;
    supplierFax: string | null;
    purchaseId: string | null;
    paymentTerm: string | null;
    invoiceNo: string | null;
    deliverNote: string | null;
};
export type Material_Warehousing_FormsMaxAggregateOutputType = {
    formId: string | null;
    date: Date | null;
    supplierId: string | null;
    supplierName: string | null;
    contactPerson: string | null;
    supplierAddress: string | null;
    supplierTelephone: string | null;
    supplierFax: string | null;
    purchaseId: string | null;
    paymentTerm: string | null;
    invoiceNo: string | null;
    deliverNote: string | null;
};
export type Material_Warehousing_FormsCountAggregateOutputType = {
    formId: number;
    date: number;
    supplierId: number;
    supplierName: number;
    contactPerson: number;
    supplierAddress: number;
    supplierTelephone: number;
    supplierFax: number;
    purchaseId: number;
    paymentTerm: number;
    invoiceNo: number;
    deliverNote: number;
    _all: number;
};
export type Material_Warehousing_FormsMinAggregateInputType = {
    formId?: true;
    date?: true;
    supplierId?: true;
    supplierName?: true;
    contactPerson?: true;
    supplierAddress?: true;
    supplierTelephone?: true;
    supplierFax?: true;
    purchaseId?: true;
    paymentTerm?: true;
    invoiceNo?: true;
    deliverNote?: true;
};
export type Material_Warehousing_FormsMaxAggregateInputType = {
    formId?: true;
    date?: true;
    supplierId?: true;
    supplierName?: true;
    contactPerson?: true;
    supplierAddress?: true;
    supplierTelephone?: true;
    supplierFax?: true;
    purchaseId?: true;
    paymentTerm?: true;
    invoiceNo?: true;
    deliverNote?: true;
};
export type Material_Warehousing_FormsCountAggregateInputType = {
    formId?: true;
    date?: true;
    supplierId?: true;
    supplierName?: true;
    contactPerson?: true;
    supplierAddress?: true;
    supplierTelephone?: true;
    supplierFax?: true;
    purchaseId?: true;
    paymentTerm?: true;
    invoiceNo?: true;
    deliverNote?: true;
    _all?: true;
};
export type Material_Warehousing_FormsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Material_Warehousing_Forms to aggregate.
     */
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Material_Warehousing_Forms to fetch.
     */
    orderBy?: Prisma.Material_Warehousing_FormsOrderByWithRelationInput | Prisma.Material_Warehousing_FormsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Material_Warehousing_Forms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Material_Warehousing_Forms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Material_Warehousing_Forms
    **/
    _count?: true | Material_Warehousing_FormsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Material_Warehousing_FormsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Material_Warehousing_FormsMaxAggregateInputType;
};
export type GetMaterial_Warehousing_FormsAggregateType<T extends Material_Warehousing_FormsAggregateArgs> = {
    [P in keyof T & keyof AggregateMaterial_Warehousing_Forms]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaterial_Warehousing_Forms[P]> : Prisma.GetScalarType<T[P], AggregateMaterial_Warehousing_Forms[P]>;
};
export type Material_Warehousing_FormsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    orderBy?: Prisma.Material_Warehousing_FormsOrderByWithAggregationInput | Prisma.Material_Warehousing_FormsOrderByWithAggregationInput[];
    by: Prisma.Material_Warehousing_FormsScalarFieldEnum[] | Prisma.Material_Warehousing_FormsScalarFieldEnum;
    having?: Prisma.Material_Warehousing_FormsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Material_Warehousing_FormsCountAggregateInputType | true;
    _min?: Material_Warehousing_FormsMinAggregateInputType;
    _max?: Material_Warehousing_FormsMaxAggregateInputType;
};
export type Material_Warehousing_FormsGroupByOutputType = {
    formId: string;
    date: Date;
    supplierId: string;
    supplierName: string;
    contactPerson: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax: string | null;
    purchaseId: string;
    paymentTerm: string | null;
    invoiceNo: string;
    deliverNote: string | null;
    _count: Material_Warehousing_FormsCountAggregateOutputType | null;
    _min: Material_Warehousing_FormsMinAggregateOutputType | null;
    _max: Material_Warehousing_FormsMaxAggregateOutputType | null;
};
export type GetMaterial_Warehousing_FormsGroupByPayload<T extends Material_Warehousing_FormsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Material_Warehousing_FormsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Material_Warehousing_FormsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Material_Warehousing_FormsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Material_Warehousing_FormsGroupByOutputType[P]>;
}>>;
export type Material_Warehousing_FormsWhereInput = {
    AND?: Prisma.Material_Warehousing_FormsWhereInput | Prisma.Material_Warehousing_FormsWhereInput[];
    OR?: Prisma.Material_Warehousing_FormsWhereInput[];
    NOT?: Prisma.Material_Warehousing_FormsWhereInput | Prisma.Material_Warehousing_FormsWhereInput[];
    formId?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    date?: Prisma.DateTimeFilter<"Material_Warehousing_Forms"> | Date | string;
    supplierId?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    supplierName?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    contactPerson?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    supplierAddress?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    supplierTelephone?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    supplierFax?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    purchaseId?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    paymentTerm?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    invoiceNo?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    deliverNote?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    supplier?: Prisma.XOR<Prisma.SuppliersScalarRelationFilter, Prisma.SuppliersWhereInput>;
    purchase?: Prisma.XOR<Prisma.Purchasing_OrdersScalarRelationFilter, Prisma.Purchasing_OrdersWhereInput>;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsListRelationFilter;
};
export type Material_Warehousing_FormsOrderByWithRelationInput = {
    formId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrderInput | Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    supplierTelephone?: Prisma.SortOrder;
    supplierFax?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrderInput | Prisma.SortOrder;
    invoiceNo?: Prisma.SortOrder;
    deliverNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    supplier?: Prisma.SuppliersOrderByWithRelationInput;
    purchase?: Prisma.Purchasing_OrdersOrderByWithRelationInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsOrderByRelationAggregateInput;
};
export type Material_Warehousing_FormsWhereUniqueInput = Prisma.AtLeast<{
    formId?: string;
    AND?: Prisma.Material_Warehousing_FormsWhereInput | Prisma.Material_Warehousing_FormsWhereInput[];
    OR?: Prisma.Material_Warehousing_FormsWhereInput[];
    NOT?: Prisma.Material_Warehousing_FormsWhereInput | Prisma.Material_Warehousing_FormsWhereInput[];
    date?: Prisma.DateTimeFilter<"Material_Warehousing_Forms"> | Date | string;
    supplierId?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    supplierName?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    contactPerson?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    supplierAddress?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    supplierTelephone?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    supplierFax?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    purchaseId?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    paymentTerm?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    invoiceNo?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    deliverNote?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    supplier?: Prisma.XOR<Prisma.SuppliersScalarRelationFilter, Prisma.SuppliersWhereInput>;
    purchase?: Prisma.XOR<Prisma.Purchasing_OrdersScalarRelationFilter, Prisma.Purchasing_OrdersWhereInput>;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsListRelationFilter;
}, "formId">;
export type Material_Warehousing_FormsOrderByWithAggregationInput = {
    formId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrderInput | Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    supplierTelephone?: Prisma.SortOrder;
    supplierFax?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrderInput | Prisma.SortOrder;
    invoiceNo?: Prisma.SortOrder;
    deliverNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Material_Warehousing_FormsCountOrderByAggregateInput;
    _max?: Prisma.Material_Warehousing_FormsMaxOrderByAggregateInput;
    _min?: Prisma.Material_Warehousing_FormsMinOrderByAggregateInput;
};
export type Material_Warehousing_FormsScalarWhereWithAggregatesInput = {
    AND?: Prisma.Material_Warehousing_FormsScalarWhereWithAggregatesInput | Prisma.Material_Warehousing_FormsScalarWhereWithAggregatesInput[];
    OR?: Prisma.Material_Warehousing_FormsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Material_Warehousing_FormsScalarWhereWithAggregatesInput | Prisma.Material_Warehousing_FormsScalarWhereWithAggregatesInput[];
    formId?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Forms"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Material_Warehousing_Forms"> | Date | string;
    supplierId?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Forms"> | string;
    supplierName?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Forms"> | string;
    contactPerson?: Prisma.StringNullableWithAggregatesFilter<"Material_Warehousing_Forms"> | string | null;
    supplierAddress?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Forms"> | string;
    supplierTelephone?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Forms"> | string;
    supplierFax?: Prisma.StringNullableWithAggregatesFilter<"Material_Warehousing_Forms"> | string | null;
    purchaseId?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Forms"> | string;
    paymentTerm?: Prisma.StringNullableWithAggregatesFilter<"Material_Warehousing_Forms"> | string | null;
    invoiceNo?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Forms"> | string;
    deliverNote?: Prisma.StringNullableWithAggregatesFilter<"Material_Warehousing_Forms"> | string | null;
};
export type Material_Warehousing_FormsCreateInput = {
    formId: string;
    date: Date | string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
    supplier: Prisma.SuppliersCreateNestedOneWithoutMaterialWarehousingFormsInput;
    purchase: Prisma.Purchasing_OrdersCreateNestedOneWithoutMaterialWarehousingFormsInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsCreateNestedManyWithoutWarehousingFormInput;
};
export type Material_Warehousing_FormsUncheckedCreateInput = {
    formId: string;
    date: Date | string;
    supplierId: string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    purchaseId: string;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedCreateNestedManyWithoutWarehousingFormInput;
};
export type Material_Warehousing_FormsUpdateInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplier?: Prisma.SuppliersUpdateOneRequiredWithoutMaterialWarehousingFormsNestedInput;
    purchase?: Prisma.Purchasing_OrdersUpdateOneRequiredWithoutMaterialWarehousingFormsNestedInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUpdateManyWithoutWarehousingFormNestedInput;
};
export type Material_Warehousing_FormsUncheckedUpdateInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedUpdateManyWithoutWarehousingFormNestedInput;
};
export type Material_Warehousing_FormsCreateManyInput = {
    formId: string;
    date: Date | string;
    supplierId: string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    purchaseId: string;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
};
export type Material_Warehousing_FormsUpdateManyMutationInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Material_Warehousing_FormsUncheckedUpdateManyInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Material_Warehousing_FormsListRelationFilter = {
    every?: Prisma.Material_Warehousing_FormsWhereInput;
    some?: Prisma.Material_Warehousing_FormsWhereInput;
    none?: Prisma.Material_Warehousing_FormsWhereInput;
};
export type Material_Warehousing_FormsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Material_Warehousing_FormsCountOrderByAggregateInput = {
    formId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    supplierTelephone?: Prisma.SortOrder;
    supplierFax?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    invoiceNo?: Prisma.SortOrder;
    deliverNote?: Prisma.SortOrder;
};
export type Material_Warehousing_FormsMaxOrderByAggregateInput = {
    formId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    supplierTelephone?: Prisma.SortOrder;
    supplierFax?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    invoiceNo?: Prisma.SortOrder;
    deliverNote?: Prisma.SortOrder;
};
export type Material_Warehousing_FormsMinOrderByAggregateInput = {
    formId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    supplierTelephone?: Prisma.SortOrder;
    supplierFax?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    invoiceNo?: Prisma.SortOrder;
    deliverNote?: Prisma.SortOrder;
};
export type Material_Warehousing_FormsScalarRelationFilter = {
    is?: Prisma.Material_Warehousing_FormsWhereInput;
    isNot?: Prisma.Material_Warehousing_FormsWhereInput;
};
export type Material_Warehousing_FormsCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput> | Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput[] | Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutSupplierInput | Prisma.Material_Warehousing_FormsCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.Material_Warehousing_FormsCreateManySupplierInputEnvelope;
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
};
export type Material_Warehousing_FormsUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput> | Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput[] | Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutSupplierInput | Prisma.Material_Warehousing_FormsCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.Material_Warehousing_FormsCreateManySupplierInputEnvelope;
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
};
export type Material_Warehousing_FormsUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput> | Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput[] | Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutSupplierInput | Prisma.Material_Warehousing_FormsCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.Material_Warehousing_FormsUpsertWithWhereUniqueWithoutSupplierInput | Prisma.Material_Warehousing_FormsUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.Material_Warehousing_FormsCreateManySupplierInputEnvelope;
    set?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_FormsUpdateWithWhereUniqueWithoutSupplierInput | Prisma.Material_Warehousing_FormsUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.Material_Warehousing_FormsUpdateManyWithWhereWithoutSupplierInput | Prisma.Material_Warehousing_FormsUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.Material_Warehousing_FormsScalarWhereInput | Prisma.Material_Warehousing_FormsScalarWhereInput[];
};
export type Material_Warehousing_FormsUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput> | Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput[] | Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutSupplierInput | Prisma.Material_Warehousing_FormsCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.Material_Warehousing_FormsUpsertWithWhereUniqueWithoutSupplierInput | Prisma.Material_Warehousing_FormsUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.Material_Warehousing_FormsCreateManySupplierInputEnvelope;
    set?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_FormsUpdateWithWhereUniqueWithoutSupplierInput | Prisma.Material_Warehousing_FormsUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.Material_Warehousing_FormsUpdateManyWithWhereWithoutSupplierInput | Prisma.Material_Warehousing_FormsUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.Material_Warehousing_FormsScalarWhereInput | Prisma.Material_Warehousing_FormsScalarWhereInput[];
};
export type Material_Warehousing_FormsCreateNestedManyWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput> | Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput[] | Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutPurchaseInput | Prisma.Material_Warehousing_FormsCreateOrConnectWithoutPurchaseInput[];
    createMany?: Prisma.Material_Warehousing_FormsCreateManyPurchaseInputEnvelope;
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
};
export type Material_Warehousing_FormsUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput> | Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput[] | Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutPurchaseInput | Prisma.Material_Warehousing_FormsCreateOrConnectWithoutPurchaseInput[];
    createMany?: Prisma.Material_Warehousing_FormsCreateManyPurchaseInputEnvelope;
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
};
export type Material_Warehousing_FormsUpdateManyWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput> | Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput[] | Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutPurchaseInput | Prisma.Material_Warehousing_FormsCreateOrConnectWithoutPurchaseInput[];
    upsert?: Prisma.Material_Warehousing_FormsUpsertWithWhereUniqueWithoutPurchaseInput | Prisma.Material_Warehousing_FormsUpsertWithWhereUniqueWithoutPurchaseInput[];
    createMany?: Prisma.Material_Warehousing_FormsCreateManyPurchaseInputEnvelope;
    set?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_FormsUpdateWithWhereUniqueWithoutPurchaseInput | Prisma.Material_Warehousing_FormsUpdateWithWhereUniqueWithoutPurchaseInput[];
    updateMany?: Prisma.Material_Warehousing_FormsUpdateManyWithWhereWithoutPurchaseInput | Prisma.Material_Warehousing_FormsUpdateManyWithWhereWithoutPurchaseInput[];
    deleteMany?: Prisma.Material_Warehousing_FormsScalarWhereInput | Prisma.Material_Warehousing_FormsScalarWhereInput[];
};
export type Material_Warehousing_FormsUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput> | Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput[] | Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutPurchaseInput | Prisma.Material_Warehousing_FormsCreateOrConnectWithoutPurchaseInput[];
    upsert?: Prisma.Material_Warehousing_FormsUpsertWithWhereUniqueWithoutPurchaseInput | Prisma.Material_Warehousing_FormsUpsertWithWhereUniqueWithoutPurchaseInput[];
    createMany?: Prisma.Material_Warehousing_FormsCreateManyPurchaseInputEnvelope;
    set?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput | Prisma.Material_Warehousing_FormsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_FormsUpdateWithWhereUniqueWithoutPurchaseInput | Prisma.Material_Warehousing_FormsUpdateWithWhereUniqueWithoutPurchaseInput[];
    updateMany?: Prisma.Material_Warehousing_FormsUpdateManyWithWhereWithoutPurchaseInput | Prisma.Material_Warehousing_FormsUpdateManyWithWhereWithoutPurchaseInput[];
    deleteMany?: Prisma.Material_Warehousing_FormsScalarWhereInput | Prisma.Material_Warehousing_FormsScalarWhereInput[];
};
export type Material_Warehousing_FormsCreateNestedOneWithoutMaterialWarehousingItemsInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutMaterialWarehousingItemsInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutMaterialWarehousingItemsInput>;
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutMaterialWarehousingItemsInput;
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput;
};
export type Material_Warehousing_FormsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutMaterialWarehousingItemsInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutMaterialWarehousingItemsInput>;
    connectOrCreate?: Prisma.Material_Warehousing_FormsCreateOrConnectWithoutMaterialWarehousingItemsInput;
    upsert?: Prisma.Material_Warehousing_FormsUpsertWithoutMaterialWarehousingItemsInput;
    connect?: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateToOneWithWhereWithoutMaterialWarehousingItemsInput, Prisma.Material_Warehousing_FormsUpdateWithoutMaterialWarehousingItemsInput>, Prisma.Material_Warehousing_FormsUncheckedUpdateWithoutMaterialWarehousingItemsInput>;
};
export type Material_Warehousing_FormsCreateWithoutSupplierInput = {
    formId: string;
    date: Date | string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
    purchase: Prisma.Purchasing_OrdersCreateNestedOneWithoutMaterialWarehousingFormsInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsCreateNestedManyWithoutWarehousingFormInput;
};
export type Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput = {
    formId: string;
    date: Date | string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    purchaseId: string;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedCreateNestedManyWithoutWarehousingFormInput;
};
export type Material_Warehousing_FormsCreateOrConnectWithoutSupplierInput = {
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput>;
};
export type Material_Warehousing_FormsCreateManySupplierInputEnvelope = {
    data: Prisma.Material_Warehousing_FormsCreateManySupplierInput | Prisma.Material_Warehousing_FormsCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type Material_Warehousing_FormsUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateWithoutSupplierInput, Prisma.Material_Warehousing_FormsUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutSupplierInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutSupplierInput>;
};
export type Material_Warehousing_FormsUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateWithoutSupplierInput, Prisma.Material_Warehousing_FormsUncheckedUpdateWithoutSupplierInput>;
};
export type Material_Warehousing_FormsUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.Material_Warehousing_FormsScalarWhereInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateManyMutationInput, Prisma.Material_Warehousing_FormsUncheckedUpdateManyWithoutSupplierInput>;
};
export type Material_Warehousing_FormsScalarWhereInput = {
    AND?: Prisma.Material_Warehousing_FormsScalarWhereInput | Prisma.Material_Warehousing_FormsScalarWhereInput[];
    OR?: Prisma.Material_Warehousing_FormsScalarWhereInput[];
    NOT?: Prisma.Material_Warehousing_FormsScalarWhereInput | Prisma.Material_Warehousing_FormsScalarWhereInput[];
    formId?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    date?: Prisma.DateTimeFilter<"Material_Warehousing_Forms"> | Date | string;
    supplierId?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    supplierName?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    contactPerson?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    supplierAddress?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    supplierTelephone?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    supplierFax?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    purchaseId?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    paymentTerm?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
    invoiceNo?: Prisma.StringFilter<"Material_Warehousing_Forms"> | string;
    deliverNote?: Prisma.StringNullableFilter<"Material_Warehousing_Forms"> | string | null;
};
export type Material_Warehousing_FormsCreateWithoutPurchaseInput = {
    formId: string;
    date: Date | string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
    supplier: Prisma.SuppliersCreateNestedOneWithoutMaterialWarehousingFormsInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsCreateNestedManyWithoutWarehousingFormInput;
};
export type Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput = {
    formId: string;
    date: Date | string;
    supplierId: string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedCreateNestedManyWithoutWarehousingFormInput;
};
export type Material_Warehousing_FormsCreateOrConnectWithoutPurchaseInput = {
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput>;
};
export type Material_Warehousing_FormsCreateManyPurchaseInputEnvelope = {
    data: Prisma.Material_Warehousing_FormsCreateManyPurchaseInput | Prisma.Material_Warehousing_FormsCreateManyPurchaseInput[];
    skipDuplicates?: boolean;
};
export type Material_Warehousing_FormsUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateWithoutPurchaseInput, Prisma.Material_Warehousing_FormsUncheckedUpdateWithoutPurchaseInput>;
    create: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutPurchaseInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutPurchaseInput>;
};
export type Material_Warehousing_FormsUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateWithoutPurchaseInput, Prisma.Material_Warehousing_FormsUncheckedUpdateWithoutPurchaseInput>;
};
export type Material_Warehousing_FormsUpdateManyWithWhereWithoutPurchaseInput = {
    where: Prisma.Material_Warehousing_FormsScalarWhereInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateManyMutationInput, Prisma.Material_Warehousing_FormsUncheckedUpdateManyWithoutPurchaseInput>;
};
export type Material_Warehousing_FormsCreateWithoutMaterialWarehousingItemsInput = {
    formId: string;
    date: Date | string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
    supplier: Prisma.SuppliersCreateNestedOneWithoutMaterialWarehousingFormsInput;
    purchase: Prisma.Purchasing_OrdersCreateNestedOneWithoutMaterialWarehousingFormsInput;
};
export type Material_Warehousing_FormsUncheckedCreateWithoutMaterialWarehousingItemsInput = {
    formId: string;
    date: Date | string;
    supplierId: string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    purchaseId: string;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
};
export type Material_Warehousing_FormsCreateOrConnectWithoutMaterialWarehousingItemsInput = {
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutMaterialWarehousingItemsInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutMaterialWarehousingItemsInput>;
};
export type Material_Warehousing_FormsUpsertWithoutMaterialWarehousingItemsInput = {
    update: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateWithoutMaterialWarehousingItemsInput, Prisma.Material_Warehousing_FormsUncheckedUpdateWithoutMaterialWarehousingItemsInput>;
    create: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateWithoutMaterialWarehousingItemsInput, Prisma.Material_Warehousing_FormsUncheckedCreateWithoutMaterialWarehousingItemsInput>;
    where?: Prisma.Material_Warehousing_FormsWhereInput;
};
export type Material_Warehousing_FormsUpdateToOneWithWhereWithoutMaterialWarehousingItemsInput = {
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateWithoutMaterialWarehousingItemsInput, Prisma.Material_Warehousing_FormsUncheckedUpdateWithoutMaterialWarehousingItemsInput>;
};
export type Material_Warehousing_FormsUpdateWithoutMaterialWarehousingItemsInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplier?: Prisma.SuppliersUpdateOneRequiredWithoutMaterialWarehousingFormsNestedInput;
    purchase?: Prisma.Purchasing_OrdersUpdateOneRequiredWithoutMaterialWarehousingFormsNestedInput;
};
export type Material_Warehousing_FormsUncheckedUpdateWithoutMaterialWarehousingItemsInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Material_Warehousing_FormsCreateManySupplierInput = {
    formId: string;
    date: Date | string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    purchaseId: string;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
};
export type Material_Warehousing_FormsUpdateWithoutSupplierInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchase?: Prisma.Purchasing_OrdersUpdateOneRequiredWithoutMaterialWarehousingFormsNestedInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUpdateManyWithoutWarehousingFormNestedInput;
};
export type Material_Warehousing_FormsUncheckedUpdateWithoutSupplierInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedUpdateManyWithoutWarehousingFormNestedInput;
};
export type Material_Warehousing_FormsUncheckedUpdateManyWithoutSupplierInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Material_Warehousing_FormsCreateManyPurchaseInput = {
    formId: string;
    date: Date | string;
    supplierId: string;
    supplierName: string;
    contactPerson?: string | null;
    supplierAddress: string;
    supplierTelephone: string;
    supplierFax?: string | null;
    paymentTerm?: string | null;
    invoiceNo: string;
    deliverNote?: string | null;
};
export type Material_Warehousing_FormsUpdateWithoutPurchaseInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplier?: Prisma.SuppliersUpdateOneRequiredWithoutMaterialWarehousingFormsNestedInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUpdateManyWithoutWarehousingFormNestedInput;
};
export type Material_Warehousing_FormsUncheckedUpdateWithoutPurchaseInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedUpdateManyWithoutWarehousingFormNestedInput;
};
export type Material_Warehousing_FormsUncheckedUpdateManyWithoutPurchaseInput = {
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierTelephone?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierFax?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentTerm?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNo?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type Material_Warehousing_FormsCountOutputType
 */
export type Material_Warehousing_FormsCountOutputType = {
    materialWarehousingItems: number;
};
export type Material_Warehousing_FormsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    materialWarehousingItems?: boolean | Material_Warehousing_FormsCountOutputTypeCountMaterialWarehousingItemsArgs;
};
/**
 * Material_Warehousing_FormsCountOutputType without action
 */
export type Material_Warehousing_FormsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material_Warehousing_FormsCountOutputType
     */
    select?: Prisma.Material_Warehousing_FormsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Material_Warehousing_FormsCountOutputType without action
 */
export type Material_Warehousing_FormsCountOutputTypeCountMaterialWarehousingItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
};
export type Material_Warehousing_FormsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    formId?: boolean;
    date?: boolean;
    supplierId?: boolean;
    supplierName?: boolean;
    contactPerson?: boolean;
    supplierAddress?: boolean;
    supplierTelephone?: boolean;
    supplierFax?: boolean;
    purchaseId?: boolean;
    paymentTerm?: boolean;
    invoiceNo?: boolean;
    deliverNote?: boolean;
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
    materialWarehousingItems?: boolean | Prisma.Material_Warehousing_Forms$materialWarehousingItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Material_Warehousing_FormsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material_Warehousing_Forms"]>;
export type Material_Warehousing_FormsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    formId?: boolean;
    date?: boolean;
    supplierId?: boolean;
    supplierName?: boolean;
    contactPerson?: boolean;
    supplierAddress?: boolean;
    supplierTelephone?: boolean;
    supplierFax?: boolean;
    purchaseId?: boolean;
    paymentTerm?: boolean;
    invoiceNo?: boolean;
    deliverNote?: boolean;
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material_Warehousing_Forms"]>;
export type Material_Warehousing_FormsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    formId?: boolean;
    date?: boolean;
    supplierId?: boolean;
    supplierName?: boolean;
    contactPerson?: boolean;
    supplierAddress?: boolean;
    supplierTelephone?: boolean;
    supplierFax?: boolean;
    purchaseId?: boolean;
    paymentTerm?: boolean;
    invoiceNo?: boolean;
    deliverNote?: boolean;
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material_Warehousing_Forms"]>;
export type Material_Warehousing_FormsSelectScalar = {
    formId?: boolean;
    date?: boolean;
    supplierId?: boolean;
    supplierName?: boolean;
    contactPerson?: boolean;
    supplierAddress?: boolean;
    supplierTelephone?: boolean;
    supplierFax?: boolean;
    purchaseId?: boolean;
    paymentTerm?: boolean;
    invoiceNo?: boolean;
    deliverNote?: boolean;
};
export type Material_Warehousing_FormsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"formId" | "date" | "supplierId" | "supplierName" | "contactPerson" | "supplierAddress" | "supplierTelephone" | "supplierFax" | "purchaseId" | "paymentTerm" | "invoiceNo" | "deliverNote", ExtArgs["result"]["material_Warehousing_Forms"]>;
export type Material_Warehousing_FormsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
    materialWarehousingItems?: boolean | Prisma.Material_Warehousing_Forms$materialWarehousingItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Material_Warehousing_FormsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type Material_Warehousing_FormsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
};
export type Material_Warehousing_FormsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
};
export type $Material_Warehousing_FormsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Material_Warehousing_Forms";
    objects: {
        supplier: Prisma.$SuppliersPayload<ExtArgs>;
        purchase: Prisma.$Purchasing_OrdersPayload<ExtArgs>;
        materialWarehousingItems: Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        formId: string;
        date: Date;
        supplierId: string;
        supplierName: string;
        contactPerson: string | null;
        supplierAddress: string;
        supplierTelephone: string;
        supplierFax: string | null;
        purchaseId: string;
        paymentTerm: string | null;
        invoiceNo: string;
        deliverNote: string | null;
    }, ExtArgs["result"]["material_Warehousing_Forms"]>;
    composites: {};
};
export type Material_Warehousing_FormsGetPayload<S extends boolean | null | undefined | Material_Warehousing_FormsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload, S>;
export type Material_Warehousing_FormsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Material_Warehousing_FormsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Material_Warehousing_FormsCountAggregateInputType | true;
};
export interface Material_Warehousing_FormsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Material_Warehousing_Forms'];
        meta: {
            name: 'Material_Warehousing_Forms';
        };
    };
    /**
     * Find zero or one Material_Warehousing_Forms that matches the filter.
     * @param {Material_Warehousing_FormsFindUniqueArgs} args - Arguments to find a Material_Warehousing_Forms
     * @example
     * // Get one Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Material_Warehousing_FormsFindUniqueArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_FormsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_FormsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Material_Warehousing_Forms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Material_Warehousing_FormsFindUniqueOrThrowArgs} args - Arguments to find a Material_Warehousing_Forms
     * @example
     * // Get one Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Material_Warehousing_FormsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_FormsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_FormsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Material_Warehousing_Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_FormsFindFirstArgs} args - Arguments to find a Material_Warehousing_Forms
     * @example
     * // Get one Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Material_Warehousing_FormsFindFirstArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_FormsFindFirstArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_FormsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Material_Warehousing_Forms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_FormsFindFirstOrThrowArgs} args - Arguments to find a Material_Warehousing_Forms
     * @example
     * // Get one Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Material_Warehousing_FormsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_FormsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_FormsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Material_Warehousing_Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_FormsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.findMany()
     *
     * // Get first 10 Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.findMany({ take: 10 })
     *
     * // Only select the `formId`
     * const material_Warehousing_FormsWithFormIdOnly = await prisma.material_Warehousing_Forms.findMany({ select: { formId: true } })
     *
     */
    findMany<T extends Material_Warehousing_FormsFindManyArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_FormsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Material_Warehousing_Forms.
     * @param {Material_Warehousing_FormsCreateArgs} args - Arguments to create a Material_Warehousing_Forms.
     * @example
     * // Create one Material_Warehousing_Forms
     * const Material_Warehousing_Forms = await prisma.material_Warehousing_Forms.create({
     *   data: {
     *     // ... data to create a Material_Warehousing_Forms
     *   }
     * })
     *
     */
    create<T extends Material_Warehousing_FormsCreateArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_FormsCreateArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_FormsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Material_Warehousing_Forms.
     * @param {Material_Warehousing_FormsCreateManyArgs} args - Arguments to create many Material_Warehousing_Forms.
     * @example
     * // Create many Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Material_Warehousing_FormsCreateManyArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_FormsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Material_Warehousing_Forms and returns the data saved in the database.
     * @param {Material_Warehousing_FormsCreateManyAndReturnArgs} args - Arguments to create many Material_Warehousing_Forms.
     * @example
     * // Create many Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Material_Warehousing_Forms and only return the `formId`
     * const material_Warehousing_FormsWithFormIdOnly = await prisma.material_Warehousing_Forms.createManyAndReturn({
     *   select: { formId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Material_Warehousing_FormsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_FormsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Material_Warehousing_Forms.
     * @param {Material_Warehousing_FormsDeleteArgs} args - Arguments to delete one Material_Warehousing_Forms.
     * @example
     * // Delete one Material_Warehousing_Forms
     * const Material_Warehousing_Forms = await prisma.material_Warehousing_Forms.delete({
     *   where: {
     *     // ... filter to delete one Material_Warehousing_Forms
     *   }
     * })
     *
     */
    delete<T extends Material_Warehousing_FormsDeleteArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_FormsDeleteArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_FormsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Material_Warehousing_Forms.
     * @param {Material_Warehousing_FormsUpdateArgs} args - Arguments to update one Material_Warehousing_Forms.
     * @example
     * // Update one Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Material_Warehousing_FormsUpdateArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_FormsUpdateArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_FormsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Material_Warehousing_Forms.
     * @param {Material_Warehousing_FormsDeleteManyArgs} args - Arguments to filter Material_Warehousing_Forms to delete.
     * @example
     * // Delete a few Material_Warehousing_Forms
     * const { count } = await prisma.material_Warehousing_Forms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Material_Warehousing_FormsDeleteManyArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_FormsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Material_Warehousing_Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_FormsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Material_Warehousing_FormsUpdateManyArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_FormsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Material_Warehousing_Forms and returns the data updated in the database.
     * @param {Material_Warehousing_FormsUpdateManyAndReturnArgs} args - Arguments to update many Material_Warehousing_Forms.
     * @example
     * // Update many Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Material_Warehousing_Forms and only return the `formId`
     * const material_Warehousing_FormsWithFormIdOnly = await prisma.material_Warehousing_Forms.updateManyAndReturn({
     *   select: { formId: true },
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
    updateManyAndReturn<T extends Material_Warehousing_FormsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_FormsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Material_Warehousing_Forms.
     * @param {Material_Warehousing_FormsUpsertArgs} args - Arguments to update or create a Material_Warehousing_Forms.
     * @example
     * // Update or create a Material_Warehousing_Forms
     * const material_Warehousing_Forms = await prisma.material_Warehousing_Forms.upsert({
     *   create: {
     *     // ... data to create a Material_Warehousing_Forms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material_Warehousing_Forms we want to update
     *   }
     * })
     */
    upsert<T extends Material_Warehousing_FormsUpsertArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_FormsUpsertArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_FormsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Material_Warehousing_Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_FormsCountArgs} args - Arguments to filter Material_Warehousing_Forms to count.
     * @example
     * // Count the number of Material_Warehousing_Forms
     * const count = await prisma.material_Warehousing_Forms.count({
     *   where: {
     *     // ... the filter for the Material_Warehousing_Forms we want to count
     *   }
     * })
    **/
    count<T extends Material_Warehousing_FormsCountArgs>(args?: Prisma.Subset<T, Material_Warehousing_FormsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Material_Warehousing_FormsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Material_Warehousing_Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_FormsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Material_Warehousing_FormsAggregateArgs>(args: Prisma.Subset<T, Material_Warehousing_FormsAggregateArgs>): Prisma.PrismaPromise<GetMaterial_Warehousing_FormsAggregateType<T>>;
    /**
     * Group by Material_Warehousing_Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_FormsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Material_Warehousing_FormsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Material_Warehousing_FormsGroupByArgs['orderBy'];
    } : {
        orderBy?: Material_Warehousing_FormsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Material_Warehousing_FormsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterial_Warehousing_FormsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Material_Warehousing_Forms model
     */
    readonly fields: Material_Warehousing_FormsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Material_Warehousing_Forms.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Material_Warehousing_FormsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    supplier<T extends Prisma.SuppliersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SuppliersDefaultArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    purchase<T extends Prisma.Purchasing_OrdersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    materialWarehousingItems<T extends Prisma.Material_Warehousing_Forms$materialWarehousingItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material_Warehousing_Forms$materialWarehousingItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Material_Warehousing_Forms model
 */
export interface Material_Warehousing_FormsFieldRefs {
    readonly formId: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly date: Prisma.FieldRef<"Material_Warehousing_Forms", 'DateTime'>;
    readonly supplierId: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly supplierName: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly contactPerson: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly supplierAddress: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly supplierTelephone: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly supplierFax: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly purchaseId: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly paymentTerm: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly invoiceNo: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
    readonly deliverNote: Prisma.FieldRef<"Material_Warehousing_Forms", 'String'>;
}
/**
 * Material_Warehousing_Forms findUnique
 */
export type Material_Warehousing_FormsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Forms to fetch.
     */
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
};
/**
 * Material_Warehousing_Forms findUniqueOrThrow
 */
export type Material_Warehousing_FormsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Forms to fetch.
     */
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
};
/**
 * Material_Warehousing_Forms findFirst
 */
export type Material_Warehousing_FormsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Forms to fetch.
     */
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Material_Warehousing_Forms to fetch.
     */
    orderBy?: Prisma.Material_Warehousing_FormsOrderByWithRelationInput | Prisma.Material_Warehousing_FormsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Material_Warehousing_Forms.
     */
    cursor?: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Material_Warehousing_Forms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Material_Warehousing_Forms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Material_Warehousing_Forms.
     */
    distinct?: Prisma.Material_Warehousing_FormsScalarFieldEnum | Prisma.Material_Warehousing_FormsScalarFieldEnum[];
};
/**
 * Material_Warehousing_Forms findFirstOrThrow
 */
export type Material_Warehousing_FormsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Forms to fetch.
     */
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Material_Warehousing_Forms to fetch.
     */
    orderBy?: Prisma.Material_Warehousing_FormsOrderByWithRelationInput | Prisma.Material_Warehousing_FormsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Material_Warehousing_Forms.
     */
    cursor?: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Material_Warehousing_Forms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Material_Warehousing_Forms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Material_Warehousing_Forms.
     */
    distinct?: Prisma.Material_Warehousing_FormsScalarFieldEnum | Prisma.Material_Warehousing_FormsScalarFieldEnum[];
};
/**
 * Material_Warehousing_Forms findMany
 */
export type Material_Warehousing_FormsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Forms to fetch.
     */
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Material_Warehousing_Forms to fetch.
     */
    orderBy?: Prisma.Material_Warehousing_FormsOrderByWithRelationInput | Prisma.Material_Warehousing_FormsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Material_Warehousing_Forms.
     */
    cursor?: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Material_Warehousing_Forms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Material_Warehousing_Forms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Material_Warehousing_Forms.
     */
    distinct?: Prisma.Material_Warehousing_FormsScalarFieldEnum | Prisma.Material_Warehousing_FormsScalarFieldEnum[];
};
/**
 * Material_Warehousing_Forms create
 */
export type Material_Warehousing_FormsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Material_Warehousing_Forms.
     */
    data: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateInput, Prisma.Material_Warehousing_FormsUncheckedCreateInput>;
};
/**
 * Material_Warehousing_Forms createMany
 */
export type Material_Warehousing_FormsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Material_Warehousing_Forms.
     */
    data: Prisma.Material_Warehousing_FormsCreateManyInput | Prisma.Material_Warehousing_FormsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Material_Warehousing_Forms createManyAndReturn
 */
export type Material_Warehousing_FormsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material_Warehousing_Forms
     */
    select?: Prisma.Material_Warehousing_FormsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Material_Warehousing_Forms
     */
    omit?: Prisma.Material_Warehousing_FormsOmit<ExtArgs> | null;
    /**
     * The data used to create many Material_Warehousing_Forms.
     */
    data: Prisma.Material_Warehousing_FormsCreateManyInput | Prisma.Material_Warehousing_FormsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Material_Warehousing_FormsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Material_Warehousing_Forms update
 */
export type Material_Warehousing_FormsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Material_Warehousing_Forms.
     */
    data: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateInput, Prisma.Material_Warehousing_FormsUncheckedUpdateInput>;
    /**
     * Choose, which Material_Warehousing_Forms to update.
     */
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
};
/**
 * Material_Warehousing_Forms updateMany
 */
export type Material_Warehousing_FormsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Material_Warehousing_Forms.
     */
    data: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateManyMutationInput, Prisma.Material_Warehousing_FormsUncheckedUpdateManyInput>;
    /**
     * Filter which Material_Warehousing_Forms to update
     */
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    /**
     * Limit how many Material_Warehousing_Forms to update.
     */
    limit?: number;
};
/**
 * Material_Warehousing_Forms updateManyAndReturn
 */
export type Material_Warehousing_FormsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material_Warehousing_Forms
     */
    select?: Prisma.Material_Warehousing_FormsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Material_Warehousing_Forms
     */
    omit?: Prisma.Material_Warehousing_FormsOmit<ExtArgs> | null;
    /**
     * The data used to update Material_Warehousing_Forms.
     */
    data: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateManyMutationInput, Prisma.Material_Warehousing_FormsUncheckedUpdateManyInput>;
    /**
     * Filter which Material_Warehousing_Forms to update
     */
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    /**
     * Limit how many Material_Warehousing_Forms to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Material_Warehousing_FormsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Material_Warehousing_Forms upsert
 */
export type Material_Warehousing_FormsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Material_Warehousing_Forms to update in case it exists.
     */
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
    /**
     * In case the Material_Warehousing_Forms found by the `where` argument doesn't exist, create a new Material_Warehousing_Forms with this data.
     */
    create: Prisma.XOR<Prisma.Material_Warehousing_FormsCreateInput, Prisma.Material_Warehousing_FormsUncheckedCreateInput>;
    /**
     * In case the Material_Warehousing_Forms was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Material_Warehousing_FormsUpdateInput, Prisma.Material_Warehousing_FormsUncheckedUpdateInput>;
};
/**
 * Material_Warehousing_Forms delete
 */
export type Material_Warehousing_FormsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Material_Warehousing_Forms to delete.
     */
    where: Prisma.Material_Warehousing_FormsWhereUniqueInput;
};
/**
 * Material_Warehousing_Forms deleteMany
 */
export type Material_Warehousing_FormsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Material_Warehousing_Forms to delete
     */
    where?: Prisma.Material_Warehousing_FormsWhereInput;
    /**
     * Limit how many Material_Warehousing_Forms to delete.
     */
    limit?: number;
};
/**
 * Material_Warehousing_Forms.materialWarehousingItems
 */
export type Material_Warehousing_Forms$materialWarehousingItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material_Warehousing_Items
     */
    select?: Prisma.Material_Warehousing_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material_Warehousing_Items
     */
    omit?: Prisma.Material_Warehousing_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Material_Warehousing_ItemsInclude<ExtArgs> | null;
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
    orderBy?: Prisma.Material_Warehousing_ItemsOrderByWithRelationInput | Prisma.Material_Warehousing_ItemsOrderByWithRelationInput[];
    cursor?: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Material_Warehousing_ItemsScalarFieldEnum | Prisma.Material_Warehousing_ItemsScalarFieldEnum[];
};
/**
 * Material_Warehousing_Forms without action
 */
export type Material_Warehousing_FormsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Material_Warehousing_Forms.d.ts.map