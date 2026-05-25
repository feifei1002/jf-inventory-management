import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Purchase_Requisition_Items
 *
 */
export type Purchase_Requisition_ItemsModel = runtime.Types.Result.DefaultSelection<Prisma.$Purchase_Requisition_ItemsPayload>;
export type AggregatePurchase_Requisition_Items = {
    _count: Purchase_Requisition_ItemsCountAggregateOutputType | null;
    _avg: Purchase_Requisition_ItemsAvgAggregateOutputType | null;
    _sum: Purchase_Requisition_ItemsSumAggregateOutputType | null;
    _min: Purchase_Requisition_ItemsMinAggregateOutputType | null;
    _max: Purchase_Requisition_ItemsMaxAggregateOutputType | null;
};
export type Purchase_Requisition_ItemsAvgAggregateOutputType = {
    id: number | null;
    quantity: number | null;
    weight: number | null;
};
export type Purchase_Requisition_ItemsSumAggregateOutputType = {
    id: number | null;
    quantity: number | null;
    weight: number | null;
};
export type Purchase_Requisition_ItemsMinAggregateOutputType = {
    id: number | null;
    requisitionId: string | null;
    productId: string | null;
    productName: string | null;
    productSpecification: string | null;
    quantity: number | null;
    weight: number | null;
    requiredDate: Date | null;
    purpose: string | null;
    deliverPlace: string | null;
};
export type Purchase_Requisition_ItemsMaxAggregateOutputType = {
    id: number | null;
    requisitionId: string | null;
    productId: string | null;
    productName: string | null;
    productSpecification: string | null;
    quantity: number | null;
    weight: number | null;
    requiredDate: Date | null;
    purpose: string | null;
    deliverPlace: string | null;
};
export type Purchase_Requisition_ItemsCountAggregateOutputType = {
    id: number;
    requisitionId: number;
    productId: number;
    productName: number;
    productSpecification: number;
    quantity: number;
    weight: number;
    requiredDate: number;
    purpose: number;
    deliverPlace: number;
    _all: number;
};
export type Purchase_Requisition_ItemsAvgAggregateInputType = {
    id?: true;
    quantity?: true;
    weight?: true;
};
export type Purchase_Requisition_ItemsSumAggregateInputType = {
    id?: true;
    quantity?: true;
    weight?: true;
};
export type Purchase_Requisition_ItemsMinAggregateInputType = {
    id?: true;
    requisitionId?: true;
    productId?: true;
    productName?: true;
    productSpecification?: true;
    quantity?: true;
    weight?: true;
    requiredDate?: true;
    purpose?: true;
    deliverPlace?: true;
};
export type Purchase_Requisition_ItemsMaxAggregateInputType = {
    id?: true;
    requisitionId?: true;
    productId?: true;
    productName?: true;
    productSpecification?: true;
    quantity?: true;
    weight?: true;
    requiredDate?: true;
    purpose?: true;
    deliverPlace?: true;
};
export type Purchase_Requisition_ItemsCountAggregateInputType = {
    id?: true;
    requisitionId?: true;
    productId?: true;
    productName?: true;
    productSpecification?: true;
    quantity?: true;
    weight?: true;
    requiredDate?: true;
    purpose?: true;
    deliverPlace?: true;
    _all?: true;
};
export type Purchase_Requisition_ItemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase_Requisition_Items to aggregate.
     */
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchase_Requisition_Items to fetch.
     */
    orderBy?: Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput | Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchase_Requisition_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchase_Requisition_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Purchase_Requisition_Items
    **/
    _count?: true | Purchase_Requisition_ItemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Purchase_Requisition_ItemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Purchase_Requisition_ItemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Purchase_Requisition_ItemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Purchase_Requisition_ItemsMaxAggregateInputType;
};
export type GetPurchase_Requisition_ItemsAggregateType<T extends Purchase_Requisition_ItemsAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchase_Requisition_Items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchase_Requisition_Items[P]> : Prisma.GetScalarType<T[P], AggregatePurchase_Requisition_Items[P]>;
};
export type Purchase_Requisition_ItemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
    orderBy?: Prisma.Purchase_Requisition_ItemsOrderByWithAggregationInput | Prisma.Purchase_Requisition_ItemsOrderByWithAggregationInput[];
    by: Prisma.Purchase_Requisition_ItemsScalarFieldEnum[] | Prisma.Purchase_Requisition_ItemsScalarFieldEnum;
    having?: Prisma.Purchase_Requisition_ItemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Purchase_Requisition_ItemsCountAggregateInputType | true;
    _avg?: Purchase_Requisition_ItemsAvgAggregateInputType;
    _sum?: Purchase_Requisition_ItemsSumAggregateInputType;
    _min?: Purchase_Requisition_ItemsMinAggregateInputType;
    _max?: Purchase_Requisition_ItemsMaxAggregateInputType;
};
export type Purchase_Requisition_ItemsGroupByOutputType = {
    id: number;
    requisitionId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    weight: number | null;
    requiredDate: Date;
    purpose: string | null;
    deliverPlace: string;
    _count: Purchase_Requisition_ItemsCountAggregateOutputType | null;
    _avg: Purchase_Requisition_ItemsAvgAggregateOutputType | null;
    _sum: Purchase_Requisition_ItemsSumAggregateOutputType | null;
    _min: Purchase_Requisition_ItemsMinAggregateOutputType | null;
    _max: Purchase_Requisition_ItemsMaxAggregateOutputType | null;
};
export type GetPurchase_Requisition_ItemsGroupByPayload<T extends Purchase_Requisition_ItemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Purchase_Requisition_ItemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Purchase_Requisition_ItemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Purchase_Requisition_ItemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Purchase_Requisition_ItemsGroupByOutputType[P]>;
}>>;
export type Purchase_Requisition_ItemsWhereInput = {
    AND?: Prisma.Purchase_Requisition_ItemsWhereInput | Prisma.Purchase_Requisition_ItemsWhereInput[];
    OR?: Prisma.Purchase_Requisition_ItemsWhereInput[];
    NOT?: Prisma.Purchase_Requisition_ItemsWhereInput | Prisma.Purchase_Requisition_ItemsWhereInput[];
    id?: Prisma.IntFilter<"Purchase_Requisition_Items"> | number;
    requisitionId?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    productId?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    productName?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    productSpecification?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    quantity?: Prisma.IntFilter<"Purchase_Requisition_Items"> | number;
    weight?: Prisma.FloatNullableFilter<"Purchase_Requisition_Items"> | number | null;
    requiredDate?: Prisma.DateTimeFilter<"Purchase_Requisition_Items"> | Date | string;
    purpose?: Prisma.StringNullableFilter<"Purchase_Requisition_Items"> | string | null;
    deliverPlace?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    requisition?: Prisma.XOR<Prisma.Purchasing_RequisitionsScalarRelationFilter, Prisma.Purchasing_RequisitionsWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
};
export type Purchase_Requisition_ItemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrderInput | Prisma.SortOrder;
    requiredDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
    requisition?: Prisma.Purchasing_RequisitionsOrderByWithRelationInput;
    product?: Prisma.ProductsOrderByWithRelationInput;
};
export type Purchase_Requisition_ItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.Purchase_Requisition_ItemsWhereInput | Prisma.Purchase_Requisition_ItemsWhereInput[];
    OR?: Prisma.Purchase_Requisition_ItemsWhereInput[];
    NOT?: Prisma.Purchase_Requisition_ItemsWhereInput | Prisma.Purchase_Requisition_ItemsWhereInput[];
    requisitionId?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    productId?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    productName?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    productSpecification?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    quantity?: Prisma.IntFilter<"Purchase_Requisition_Items"> | number;
    weight?: Prisma.FloatNullableFilter<"Purchase_Requisition_Items"> | number | null;
    requiredDate?: Prisma.DateTimeFilter<"Purchase_Requisition_Items"> | Date | string;
    purpose?: Prisma.StringNullableFilter<"Purchase_Requisition_Items"> | string | null;
    deliverPlace?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    requisition?: Prisma.XOR<Prisma.Purchasing_RequisitionsScalarRelationFilter, Prisma.Purchasing_RequisitionsWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
}, "id">;
export type Purchase_Requisition_ItemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrderInput | Prisma.SortOrder;
    requiredDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
    _count?: Prisma.Purchase_Requisition_ItemsCountOrderByAggregateInput;
    _avg?: Prisma.Purchase_Requisition_ItemsAvgOrderByAggregateInput;
    _max?: Prisma.Purchase_Requisition_ItemsMaxOrderByAggregateInput;
    _min?: Prisma.Purchase_Requisition_ItemsMinOrderByAggregateInput;
    _sum?: Prisma.Purchase_Requisition_ItemsSumOrderByAggregateInput;
};
export type Purchase_Requisition_ItemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.Purchase_Requisition_ItemsScalarWhereWithAggregatesInput | Prisma.Purchase_Requisition_ItemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.Purchase_Requisition_ItemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Purchase_Requisition_ItemsScalarWhereWithAggregatesInput | Prisma.Purchase_Requisition_ItemsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Purchase_Requisition_Items"> | number;
    requisitionId?: Prisma.StringWithAggregatesFilter<"Purchase_Requisition_Items"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"Purchase_Requisition_Items"> | string;
    productName?: Prisma.StringWithAggregatesFilter<"Purchase_Requisition_Items"> | string;
    productSpecification?: Prisma.StringWithAggregatesFilter<"Purchase_Requisition_Items"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Purchase_Requisition_Items"> | number;
    weight?: Prisma.FloatNullableWithAggregatesFilter<"Purchase_Requisition_Items"> | number | null;
    requiredDate?: Prisma.DateTimeWithAggregatesFilter<"Purchase_Requisition_Items"> | Date | string;
    purpose?: Prisma.StringNullableWithAggregatesFilter<"Purchase_Requisition_Items"> | string | null;
    deliverPlace?: Prisma.StringWithAggregatesFilter<"Purchase_Requisition_Items"> | string;
};
export type Purchase_Requisition_ItemsCreateInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    weight?: number | null;
    requiredDate: Date | string;
    purpose?: string | null;
    deliverPlace: string;
    requisition: Prisma.Purchasing_RequisitionsCreateNestedOneWithoutPurchaseRequisitionItemsInput;
    product: Prisma.ProductsCreateNestedOneWithoutPurchaseRequisitionItemsInput;
};
export type Purchase_Requisition_ItemsUncheckedCreateInput = {
    id?: number;
    requisitionId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    weight?: number | null;
    requiredDate: Date | string;
    purpose?: string | null;
    deliverPlace: string;
};
export type Purchase_Requisition_ItemsUpdateInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    requisition?: Prisma.Purchasing_RequisitionsUpdateOneRequiredWithoutPurchaseRequisitionItemsNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutPurchaseRequisitionItemsNestedInput;
};
export type Purchase_Requisition_ItemsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Requisition_ItemsCreateManyInput = {
    id?: number;
    requisitionId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    weight?: number | null;
    requiredDate: Date | string;
    purpose?: string | null;
    deliverPlace: string;
};
export type Purchase_Requisition_ItemsUpdateManyMutationInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Requisition_ItemsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Requisition_ItemsListRelationFilter = {
    every?: Prisma.Purchase_Requisition_ItemsWhereInput;
    some?: Prisma.Purchase_Requisition_ItemsWhereInput;
    none?: Prisma.Purchase_Requisition_ItemsWhereInput;
};
export type Purchase_Requisition_ItemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Purchase_Requisition_ItemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    requiredDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
};
export type Purchase_Requisition_ItemsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
};
export type Purchase_Requisition_ItemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    requiredDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
};
export type Purchase_Requisition_ItemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    requiredDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
};
export type Purchase_Requisition_ItemsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
};
export type Purchase_Requisition_ItemsCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput> | Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput[] | Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutProductInput | Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.Purchase_Requisition_ItemsCreateManyProductInputEnvelope;
    connect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
};
export type Purchase_Requisition_ItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput> | Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput[] | Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutProductInput | Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.Purchase_Requisition_ItemsCreateManyProductInputEnvelope;
    connect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
};
export type Purchase_Requisition_ItemsUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput> | Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput[] | Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutProductInput | Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutProductInput | Prisma.Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.Purchase_Requisition_ItemsCreateManyProductInputEnvelope;
    set?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutProductInput | Prisma.Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.Purchase_Requisition_ItemsUpdateManyWithWhereWithoutProductInput | Prisma.Purchase_Requisition_ItemsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.Purchase_Requisition_ItemsScalarWhereInput | Prisma.Purchase_Requisition_ItemsScalarWhereInput[];
};
export type Purchase_Requisition_ItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput> | Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput[] | Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutProductInput | Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutProductInput | Prisma.Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.Purchase_Requisition_ItemsCreateManyProductInputEnvelope;
    set?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutProductInput | Prisma.Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.Purchase_Requisition_ItemsUpdateManyWithWhereWithoutProductInput | Prisma.Purchase_Requisition_ItemsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.Purchase_Requisition_ItemsScalarWhereInput | Prisma.Purchase_Requisition_ItemsScalarWhereInput[];
};
export type Purchase_Requisition_ItemsCreateNestedManyWithoutRequisitionInput = {
    create?: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput[] | Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutRequisitionInput[];
    createMany?: Prisma.Purchase_Requisition_ItemsCreateManyRequisitionInputEnvelope;
    connect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
};
export type Purchase_Requisition_ItemsUncheckedCreateNestedManyWithoutRequisitionInput = {
    create?: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput[] | Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutRequisitionInput[];
    createMany?: Prisma.Purchase_Requisition_ItemsCreateManyRequisitionInputEnvelope;
    connect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
};
export type Purchase_Requisition_ItemsUpdateManyWithoutRequisitionNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput[] | Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutRequisitionInput[];
    upsert?: Prisma.Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutRequisitionInput[];
    createMany?: Prisma.Purchase_Requisition_ItemsCreateManyRequisitionInputEnvelope;
    set?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutRequisitionInput[];
    updateMany?: Prisma.Purchase_Requisition_ItemsUpdateManyWithWhereWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsUpdateManyWithWhereWithoutRequisitionInput[];
    deleteMany?: Prisma.Purchase_Requisition_ItemsScalarWhereInput | Prisma.Purchase_Requisition_ItemsScalarWhereInput[];
};
export type Purchase_Requisition_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput[] | Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsCreateOrConnectWithoutRequisitionInput[];
    upsert?: Prisma.Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutRequisitionInput[];
    createMany?: Prisma.Purchase_Requisition_ItemsCreateManyRequisitionInputEnvelope;
    set?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput | Prisma.Purchase_Requisition_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutRequisitionInput[];
    updateMany?: Prisma.Purchase_Requisition_ItemsUpdateManyWithWhereWithoutRequisitionInput | Prisma.Purchase_Requisition_ItemsUpdateManyWithWhereWithoutRequisitionInput[];
    deleteMany?: Prisma.Purchase_Requisition_ItemsScalarWhereInput | Prisma.Purchase_Requisition_ItemsScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type Purchase_Requisition_ItemsCreateWithoutProductInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    weight?: number | null;
    requiredDate: Date | string;
    purpose?: string | null;
    deliverPlace: string;
    requisition: Prisma.Purchasing_RequisitionsCreateNestedOneWithoutPurchaseRequisitionItemsInput;
};
export type Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput = {
    id?: number;
    requisitionId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    weight?: number | null;
    requiredDate: Date | string;
    purpose?: string | null;
    deliverPlace: string;
};
export type Purchase_Requisition_ItemsCreateOrConnectWithoutProductInput = {
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput>;
};
export type Purchase_Requisition_ItemsCreateManyProductInputEnvelope = {
    data: Prisma.Purchase_Requisition_ItemsCreateManyProductInput | Prisma.Purchase_Requisition_ItemsCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateWithoutProductInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutProductInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutProductInput>;
};
export type Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateWithoutProductInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateWithoutProductInput>;
};
export type Purchase_Requisition_ItemsUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.Purchase_Requisition_ItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateManyMutationInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateManyWithoutProductInput>;
};
export type Purchase_Requisition_ItemsScalarWhereInput = {
    AND?: Prisma.Purchase_Requisition_ItemsScalarWhereInput | Prisma.Purchase_Requisition_ItemsScalarWhereInput[];
    OR?: Prisma.Purchase_Requisition_ItemsScalarWhereInput[];
    NOT?: Prisma.Purchase_Requisition_ItemsScalarWhereInput | Prisma.Purchase_Requisition_ItemsScalarWhereInput[];
    id?: Prisma.IntFilter<"Purchase_Requisition_Items"> | number;
    requisitionId?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    productId?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    productName?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    productSpecification?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
    quantity?: Prisma.IntFilter<"Purchase_Requisition_Items"> | number;
    weight?: Prisma.FloatNullableFilter<"Purchase_Requisition_Items"> | number | null;
    requiredDate?: Prisma.DateTimeFilter<"Purchase_Requisition_Items"> | Date | string;
    purpose?: Prisma.StringNullableFilter<"Purchase_Requisition_Items"> | string | null;
    deliverPlace?: Prisma.StringFilter<"Purchase_Requisition_Items"> | string;
};
export type Purchase_Requisition_ItemsCreateWithoutRequisitionInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    weight?: number | null;
    requiredDate: Date | string;
    purpose?: string | null;
    deliverPlace: string;
    product: Prisma.ProductsCreateNestedOneWithoutPurchaseRequisitionItemsInput;
};
export type Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput = {
    id?: number;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    weight?: number | null;
    requiredDate: Date | string;
    purpose?: string | null;
    deliverPlace: string;
};
export type Purchase_Requisition_ItemsCreateOrConnectWithoutRequisitionInput = {
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput>;
};
export type Purchase_Requisition_ItemsCreateManyRequisitionInputEnvelope = {
    data: Prisma.Purchase_Requisition_ItemsCreateManyRequisitionInput | Prisma.Purchase_Requisition_ItemsCreateManyRequisitionInput[];
    skipDuplicates?: boolean;
};
export type Purchase_Requisition_ItemsUpsertWithWhereUniqueWithoutRequisitionInput = {
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateWithoutRequisitionInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateWithoutRequisitionInput>;
    create: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateWithoutRequisitionInput>;
};
export type Purchase_Requisition_ItemsUpdateWithWhereUniqueWithoutRequisitionInput = {
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateWithoutRequisitionInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateWithoutRequisitionInput>;
};
export type Purchase_Requisition_ItemsUpdateManyWithWhereWithoutRequisitionInput = {
    where: Prisma.Purchase_Requisition_ItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateManyMutationInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateManyWithoutRequisitionInput>;
};
export type Purchase_Requisition_ItemsCreateManyProductInput = {
    id?: number;
    requisitionId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    weight?: number | null;
    requiredDate: Date | string;
    purpose?: string | null;
    deliverPlace: string;
};
export type Purchase_Requisition_ItemsUpdateWithoutProductInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    requisition?: Prisma.Purchasing_RequisitionsUpdateOneRequiredWithoutPurchaseRequisitionItemsNestedInput;
};
export type Purchase_Requisition_ItemsUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Requisition_ItemsUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Requisition_ItemsCreateManyRequisitionInput = {
    id?: number;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    weight?: number | null;
    requiredDate: Date | string;
    purpose?: string | null;
    deliverPlace: string;
};
export type Purchase_Requisition_ItemsUpdateWithoutRequisitionInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    product?: Prisma.ProductsUpdateOneRequiredWithoutPurchaseRequisitionItemsNestedInput;
};
export type Purchase_Requisition_ItemsUncheckedUpdateWithoutRequisitionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Requisition_ItemsUncheckedUpdateManyWithoutRequisitionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    requiredDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Requisition_ItemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requisitionId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    weight?: boolean;
    requiredDate?: boolean;
    purpose?: boolean;
    deliverPlace?: boolean;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_Requisition_Items"]>;
export type Purchase_Requisition_ItemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requisitionId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    weight?: boolean;
    requiredDate?: boolean;
    purpose?: boolean;
    deliverPlace?: boolean;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_Requisition_Items"]>;
export type Purchase_Requisition_ItemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requisitionId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    weight?: boolean;
    requiredDate?: boolean;
    purpose?: boolean;
    deliverPlace?: boolean;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_Requisition_Items"]>;
export type Purchase_Requisition_ItemsSelectScalar = {
    id?: boolean;
    requisitionId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    weight?: boolean;
    requiredDate?: boolean;
    purpose?: boolean;
    deliverPlace?: boolean;
};
export type Purchase_Requisition_ItemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requisitionId" | "productId" | "productName" | "productSpecification" | "quantity" | "weight" | "requiredDate" | "purpose" | "deliverPlace", ExtArgs["result"]["purchase_Requisition_Items"]>;
export type Purchase_Requisition_ItemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type Purchase_Requisition_ItemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type Purchase_Requisition_ItemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type $Purchase_Requisition_ItemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Purchase_Requisition_Items";
    objects: {
        requisition: Prisma.$Purchasing_RequisitionsPayload<ExtArgs>;
        product: Prisma.$ProductsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        requisitionId: string;
        productId: string;
        productName: string;
        productSpecification: string;
        quantity: number;
        weight: number | null;
        requiredDate: Date;
        purpose: string | null;
        deliverPlace: string;
    }, ExtArgs["result"]["purchase_Requisition_Items"]>;
    composites: {};
};
export type Purchase_Requisition_ItemsGetPayload<S extends boolean | null | undefined | Purchase_Requisition_ItemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload, S>;
export type Purchase_Requisition_ItemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Purchase_Requisition_ItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Purchase_Requisition_ItemsCountAggregateInputType | true;
};
export interface Purchase_Requisition_ItemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Purchase_Requisition_Items'];
        meta: {
            name: 'Purchase_Requisition_Items';
        };
    };
    /**
     * Find zero or one Purchase_Requisition_Items that matches the filter.
     * @param {Purchase_Requisition_ItemsFindUniqueArgs} args - Arguments to find a Purchase_Requisition_Items
     * @example
     * // Get one Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Purchase_Requisition_ItemsFindUniqueArgs>(args: Prisma.SelectSubset<T, Purchase_Requisition_ItemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Purchase_Requisition_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Purchase_Requisition_Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Purchase_Requisition_ItemsFindUniqueOrThrowArgs} args - Arguments to find a Purchase_Requisition_Items
     * @example
     * // Get one Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Purchase_Requisition_ItemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Purchase_Requisition_ItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Purchase_Requisition_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchase_Requisition_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Requisition_ItemsFindFirstArgs} args - Arguments to find a Purchase_Requisition_Items
     * @example
     * // Get one Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Purchase_Requisition_ItemsFindFirstArgs>(args?: Prisma.SelectSubset<T, Purchase_Requisition_ItemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__Purchase_Requisition_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchase_Requisition_Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Requisition_ItemsFindFirstOrThrowArgs} args - Arguments to find a Purchase_Requisition_Items
     * @example
     * // Get one Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Purchase_Requisition_ItemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Purchase_Requisition_ItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Purchase_Requisition_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Purchase_Requisition_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Requisition_ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.findMany()
     *
     * // Get first 10 Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const purchase_Requisition_ItemsWithIdOnly = await prisma.purchase_Requisition_Items.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Purchase_Requisition_ItemsFindManyArgs>(args?: Prisma.SelectSubset<T, Purchase_Requisition_ItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Purchase_Requisition_Items.
     * @param {Purchase_Requisition_ItemsCreateArgs} args - Arguments to create a Purchase_Requisition_Items.
     * @example
     * // Create one Purchase_Requisition_Items
     * const Purchase_Requisition_Items = await prisma.purchase_Requisition_Items.create({
     *   data: {
     *     // ... data to create a Purchase_Requisition_Items
     *   }
     * })
     *
     */
    create<T extends Purchase_Requisition_ItemsCreateArgs>(args: Prisma.SelectSubset<T, Purchase_Requisition_ItemsCreateArgs<ExtArgs>>): Prisma.Prisma__Purchase_Requisition_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Purchase_Requisition_Items.
     * @param {Purchase_Requisition_ItemsCreateManyArgs} args - Arguments to create many Purchase_Requisition_Items.
     * @example
     * // Create many Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Purchase_Requisition_ItemsCreateManyArgs>(args?: Prisma.SelectSubset<T, Purchase_Requisition_ItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Purchase_Requisition_Items and returns the data saved in the database.
     * @param {Purchase_Requisition_ItemsCreateManyAndReturnArgs} args - Arguments to create many Purchase_Requisition_Items.
     * @example
     * // Create many Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Purchase_Requisition_Items and only return the `id`
     * const purchase_Requisition_ItemsWithIdOnly = await prisma.purchase_Requisition_Items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Purchase_Requisition_ItemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Purchase_Requisition_ItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Purchase_Requisition_Items.
     * @param {Purchase_Requisition_ItemsDeleteArgs} args - Arguments to delete one Purchase_Requisition_Items.
     * @example
     * // Delete one Purchase_Requisition_Items
     * const Purchase_Requisition_Items = await prisma.purchase_Requisition_Items.delete({
     *   where: {
     *     // ... filter to delete one Purchase_Requisition_Items
     *   }
     * })
     *
     */
    delete<T extends Purchase_Requisition_ItemsDeleteArgs>(args: Prisma.SelectSubset<T, Purchase_Requisition_ItemsDeleteArgs<ExtArgs>>): Prisma.Prisma__Purchase_Requisition_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Purchase_Requisition_Items.
     * @param {Purchase_Requisition_ItemsUpdateArgs} args - Arguments to update one Purchase_Requisition_Items.
     * @example
     * // Update one Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Purchase_Requisition_ItemsUpdateArgs>(args: Prisma.SelectSubset<T, Purchase_Requisition_ItemsUpdateArgs<ExtArgs>>): Prisma.Prisma__Purchase_Requisition_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Purchase_Requisition_Items.
     * @param {Purchase_Requisition_ItemsDeleteManyArgs} args - Arguments to filter Purchase_Requisition_Items to delete.
     * @example
     * // Delete a few Purchase_Requisition_Items
     * const { count } = await prisma.purchase_Requisition_Items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Purchase_Requisition_ItemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, Purchase_Requisition_ItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchase_Requisition_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Requisition_ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Purchase_Requisition_ItemsUpdateManyArgs>(args: Prisma.SelectSubset<T, Purchase_Requisition_ItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchase_Requisition_Items and returns the data updated in the database.
     * @param {Purchase_Requisition_ItemsUpdateManyAndReturnArgs} args - Arguments to update many Purchase_Requisition_Items.
     * @example
     * // Update many Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Purchase_Requisition_Items and only return the `id`
     * const purchase_Requisition_ItemsWithIdOnly = await prisma.purchase_Requisition_Items.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends Purchase_Requisition_ItemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Purchase_Requisition_ItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Purchase_Requisition_Items.
     * @param {Purchase_Requisition_ItemsUpsertArgs} args - Arguments to update or create a Purchase_Requisition_Items.
     * @example
     * // Update or create a Purchase_Requisition_Items
     * const purchase_Requisition_Items = await prisma.purchase_Requisition_Items.upsert({
     *   create: {
     *     // ... data to create a Purchase_Requisition_Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase_Requisition_Items we want to update
     *   }
     * })
     */
    upsert<T extends Purchase_Requisition_ItemsUpsertArgs>(args: Prisma.SelectSubset<T, Purchase_Requisition_ItemsUpsertArgs<ExtArgs>>): Prisma.Prisma__Purchase_Requisition_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Purchase_Requisition_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Requisition_ItemsCountArgs} args - Arguments to filter Purchase_Requisition_Items to count.
     * @example
     * // Count the number of Purchase_Requisition_Items
     * const count = await prisma.purchase_Requisition_Items.count({
     *   where: {
     *     // ... the filter for the Purchase_Requisition_Items we want to count
     *   }
     * })
    **/
    count<T extends Purchase_Requisition_ItemsCountArgs>(args?: Prisma.Subset<T, Purchase_Requisition_ItemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Purchase_Requisition_ItemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Purchase_Requisition_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Requisition_ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Purchase_Requisition_ItemsAggregateArgs>(args: Prisma.Subset<T, Purchase_Requisition_ItemsAggregateArgs>): Prisma.PrismaPromise<GetPurchase_Requisition_ItemsAggregateType<T>>;
    /**
     * Group by Purchase_Requisition_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Requisition_ItemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Purchase_Requisition_ItemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Purchase_Requisition_ItemsGroupByArgs['orderBy'];
    } : {
        orderBy?: Purchase_Requisition_ItemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Purchase_Requisition_ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchase_Requisition_ItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Purchase_Requisition_Items model
     */
    readonly fields: Purchase_Requisition_ItemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Purchase_Requisition_Items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Purchase_Requisition_ItemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    requisition<T extends Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductsDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Purchase_Requisition_Items model
 */
export interface Purchase_Requisition_ItemsFieldRefs {
    readonly id: Prisma.FieldRef<"Purchase_Requisition_Items", 'Int'>;
    readonly requisitionId: Prisma.FieldRef<"Purchase_Requisition_Items", 'String'>;
    readonly productId: Prisma.FieldRef<"Purchase_Requisition_Items", 'String'>;
    readonly productName: Prisma.FieldRef<"Purchase_Requisition_Items", 'String'>;
    readonly productSpecification: Prisma.FieldRef<"Purchase_Requisition_Items", 'String'>;
    readonly quantity: Prisma.FieldRef<"Purchase_Requisition_Items", 'Int'>;
    readonly weight: Prisma.FieldRef<"Purchase_Requisition_Items", 'Float'>;
    readonly requiredDate: Prisma.FieldRef<"Purchase_Requisition_Items", 'DateTime'>;
    readonly purpose: Prisma.FieldRef<"Purchase_Requisition_Items", 'String'>;
    readonly deliverPlace: Prisma.FieldRef<"Purchase_Requisition_Items", 'String'>;
}
/**
 * Purchase_Requisition_Items findUnique
 */
export type Purchase_Requisition_ItemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Requisition_Items to fetch.
     */
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
};
/**
 * Purchase_Requisition_Items findUniqueOrThrow
 */
export type Purchase_Requisition_ItemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Requisition_Items to fetch.
     */
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
};
/**
 * Purchase_Requisition_Items findFirst
 */
export type Purchase_Requisition_ItemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Requisition_Items to fetch.
     */
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchase_Requisition_Items to fetch.
     */
    orderBy?: Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput | Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchase_Requisition_Items.
     */
    cursor?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchase_Requisition_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchase_Requisition_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchase_Requisition_Items.
     */
    distinct?: Prisma.Purchase_Requisition_ItemsScalarFieldEnum | Prisma.Purchase_Requisition_ItemsScalarFieldEnum[];
};
/**
 * Purchase_Requisition_Items findFirstOrThrow
 */
export type Purchase_Requisition_ItemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Requisition_Items to fetch.
     */
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchase_Requisition_Items to fetch.
     */
    orderBy?: Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput | Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchase_Requisition_Items.
     */
    cursor?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchase_Requisition_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchase_Requisition_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchase_Requisition_Items.
     */
    distinct?: Prisma.Purchase_Requisition_ItemsScalarFieldEnum | Prisma.Purchase_Requisition_ItemsScalarFieldEnum[];
};
/**
 * Purchase_Requisition_Items findMany
 */
export type Purchase_Requisition_ItemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Requisition_Items to fetch.
     */
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchase_Requisition_Items to fetch.
     */
    orderBy?: Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput | Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Purchase_Requisition_Items.
     */
    cursor?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchase_Requisition_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchase_Requisition_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchase_Requisition_Items.
     */
    distinct?: Prisma.Purchase_Requisition_ItemsScalarFieldEnum | Prisma.Purchase_Requisition_ItemsScalarFieldEnum[];
};
/**
 * Purchase_Requisition_Items create
 */
export type Purchase_Requisition_ItemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Purchase_Requisition_Items.
     */
    data: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateInput>;
};
/**
 * Purchase_Requisition_Items createMany
 */
export type Purchase_Requisition_ItemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchase_Requisition_Items.
     */
    data: Prisma.Purchase_Requisition_ItemsCreateManyInput | Prisma.Purchase_Requisition_ItemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Purchase_Requisition_Items createManyAndReturn
 */
export type Purchase_Requisition_ItemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * The data used to create many Purchase_Requisition_Items.
     */
    data: Prisma.Purchase_Requisition_ItemsCreateManyInput | Prisma.Purchase_Requisition_ItemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Purchase_Requisition_Items update
 */
export type Purchase_Requisition_ItemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Purchase_Requisition_Items.
     */
    data: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateInput>;
    /**
     * Choose, which Purchase_Requisition_Items to update.
     */
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
};
/**
 * Purchase_Requisition_Items updateMany
 */
export type Purchase_Requisition_ItemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchase_Requisition_Items.
     */
    data: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateManyMutationInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateManyInput>;
    /**
     * Filter which Purchase_Requisition_Items to update
     */
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
    /**
     * Limit how many Purchase_Requisition_Items to update.
     */
    limit?: number;
};
/**
 * Purchase_Requisition_Items updateManyAndReturn
 */
export type Purchase_Requisition_ItemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * The data used to update Purchase_Requisition_Items.
     */
    data: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateManyMutationInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateManyInput>;
    /**
     * Filter which Purchase_Requisition_Items to update
     */
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
    /**
     * Limit how many Purchase_Requisition_Items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Purchase_Requisition_Items upsert
 */
export type Purchase_Requisition_ItemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Purchase_Requisition_Items to update in case it exists.
     */
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    /**
     * In case the Purchase_Requisition_Items found by the `where` argument doesn't exist, create a new Purchase_Requisition_Items with this data.
     */
    create: Prisma.XOR<Prisma.Purchase_Requisition_ItemsCreateInput, Prisma.Purchase_Requisition_ItemsUncheckedCreateInput>;
    /**
     * In case the Purchase_Requisition_Items was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Purchase_Requisition_ItemsUpdateInput, Prisma.Purchase_Requisition_ItemsUncheckedUpdateInput>;
};
/**
 * Purchase_Requisition_Items delete
 */
export type Purchase_Requisition_ItemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
    /**
     * Filter which Purchase_Requisition_Items to delete.
     */
    where: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
};
/**
 * Purchase_Requisition_Items deleteMany
 */
export type Purchase_Requisition_ItemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase_Requisition_Items to delete
     */
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
    /**
     * Limit how many Purchase_Requisition_Items to delete.
     */
    limit?: number;
};
/**
 * Purchase_Requisition_Items without action
 */
export type Purchase_Requisition_ItemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Requisition_Items
     */
    select?: Prisma.Purchase_Requisition_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Requisition_Items
     */
    omit?: Prisma.Purchase_Requisition_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Requisition_ItemsInclude<ExtArgs> | null;
};
//# sourceMappingURL=Purchase_Requisition_Items.d.ts.map