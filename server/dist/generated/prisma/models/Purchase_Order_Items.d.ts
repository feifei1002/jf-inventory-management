import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Purchase_Order_Items
 *
 */
export type Purchase_Order_ItemsModel = runtime.Types.Result.DefaultSelection<Prisma.$Purchase_Order_ItemsPayload>;
export type AggregatePurchase_Order_Items = {
    _count: Purchase_Order_ItemsCountAggregateOutputType | null;
    _avg: Purchase_Order_ItemsAvgAggregateOutputType | null;
    _sum: Purchase_Order_ItemsSumAggregateOutputType | null;
    _min: Purchase_Order_ItemsMinAggregateOutputType | null;
    _max: Purchase_Order_ItemsMaxAggregateOutputType | null;
};
export type Purchase_Order_ItemsAvgAggregateOutputType = {
    id: number | null;
    quantity: number | null;
    productPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type Purchase_Order_ItemsSumAggregateOutputType = {
    id: number | null;
    quantity: number | null;
    productPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type Purchase_Order_ItemsMinAggregateOutputType = {
    id: number | null;
    purchaseId: string | null;
    productId: string | null;
    productName: string | null;
    productSpecification: string | null;
    quantity: number | null;
    productUnit: string | null;
    productPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    VAT: string | null;
    deliveryDate: Date | null;
    requisitionId: string | null;
    deliverPlace: string | null;
};
export type Purchase_Order_ItemsMaxAggregateOutputType = {
    id: number | null;
    purchaseId: string | null;
    productId: string | null;
    productName: string | null;
    productSpecification: string | null;
    quantity: number | null;
    productUnit: string | null;
    productPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    VAT: string | null;
    deliveryDate: Date | null;
    requisitionId: string | null;
    deliverPlace: string | null;
};
export type Purchase_Order_ItemsCountAggregateOutputType = {
    id: number;
    purchaseId: number;
    productId: number;
    productName: number;
    productSpecification: number;
    quantity: number;
    productUnit: number;
    productPrice: number;
    totalPrice: number;
    VAT: number;
    deliveryDate: number;
    requisitionId: number;
    deliverPlace: number;
    _all: number;
};
export type Purchase_Order_ItemsAvgAggregateInputType = {
    id?: true;
    quantity?: true;
    productPrice?: true;
    totalPrice?: true;
};
export type Purchase_Order_ItemsSumAggregateInputType = {
    id?: true;
    quantity?: true;
    productPrice?: true;
    totalPrice?: true;
};
export type Purchase_Order_ItemsMinAggregateInputType = {
    id?: true;
    purchaseId?: true;
    productId?: true;
    productName?: true;
    productSpecification?: true;
    quantity?: true;
    productUnit?: true;
    productPrice?: true;
    totalPrice?: true;
    VAT?: true;
    deliveryDate?: true;
    requisitionId?: true;
    deliverPlace?: true;
};
export type Purchase_Order_ItemsMaxAggregateInputType = {
    id?: true;
    purchaseId?: true;
    productId?: true;
    productName?: true;
    productSpecification?: true;
    quantity?: true;
    productUnit?: true;
    productPrice?: true;
    totalPrice?: true;
    VAT?: true;
    deliveryDate?: true;
    requisitionId?: true;
    deliverPlace?: true;
};
export type Purchase_Order_ItemsCountAggregateInputType = {
    id?: true;
    purchaseId?: true;
    productId?: true;
    productName?: true;
    productSpecification?: true;
    quantity?: true;
    productUnit?: true;
    productPrice?: true;
    totalPrice?: true;
    VAT?: true;
    deliveryDate?: true;
    requisitionId?: true;
    deliverPlace?: true;
    _all?: true;
};
export type Purchase_Order_ItemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase_Order_Items to aggregate.
     */
    where?: Prisma.Purchase_Order_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchase_Order_Items to fetch.
     */
    orderBy?: Prisma.Purchase_Order_ItemsOrderByWithRelationInput | Prisma.Purchase_Order_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchase_Order_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchase_Order_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Purchase_Order_Items
    **/
    _count?: true | Purchase_Order_ItemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Purchase_Order_ItemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Purchase_Order_ItemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Purchase_Order_ItemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Purchase_Order_ItemsMaxAggregateInputType;
};
export type GetPurchase_Order_ItemsAggregateType<T extends Purchase_Order_ItemsAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchase_Order_Items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchase_Order_Items[P]> : Prisma.GetScalarType<T[P], AggregatePurchase_Order_Items[P]>;
};
export type Purchase_Order_ItemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Purchase_Order_ItemsWhereInput;
    orderBy?: Prisma.Purchase_Order_ItemsOrderByWithAggregationInput | Prisma.Purchase_Order_ItemsOrderByWithAggregationInput[];
    by: Prisma.Purchase_Order_ItemsScalarFieldEnum[] | Prisma.Purchase_Order_ItemsScalarFieldEnum;
    having?: Prisma.Purchase_Order_ItemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Purchase_Order_ItemsCountAggregateInputType | true;
    _avg?: Purchase_Order_ItemsAvgAggregateInputType;
    _sum?: Purchase_Order_ItemsSumAggregateInputType;
    _min?: Purchase_Order_ItemsMinAggregateInputType;
    _max?: Purchase_Order_ItemsMaxAggregateInputType;
};
export type Purchase_Order_ItemsGroupByOutputType = {
    id: number;
    purchaseId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal;
    totalPrice: runtime.Decimal;
    VAT: string | null;
    deliveryDate: Date;
    requisitionId: string;
    deliverPlace: string;
    _count: Purchase_Order_ItemsCountAggregateOutputType | null;
    _avg: Purchase_Order_ItemsAvgAggregateOutputType | null;
    _sum: Purchase_Order_ItemsSumAggregateOutputType | null;
    _min: Purchase_Order_ItemsMinAggregateOutputType | null;
    _max: Purchase_Order_ItemsMaxAggregateOutputType | null;
};
export type GetPurchase_Order_ItemsGroupByPayload<T extends Purchase_Order_ItemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Purchase_Order_ItemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Purchase_Order_ItemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Purchase_Order_ItemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Purchase_Order_ItemsGroupByOutputType[P]>;
}>>;
export type Purchase_Order_ItemsWhereInput = {
    AND?: Prisma.Purchase_Order_ItemsWhereInput | Prisma.Purchase_Order_ItemsWhereInput[];
    OR?: Prisma.Purchase_Order_ItemsWhereInput[];
    NOT?: Prisma.Purchase_Order_ItemsWhereInput | Prisma.Purchase_Order_ItemsWhereInput[];
    id?: Prisma.IntFilter<"Purchase_Order_Items"> | number;
    purchaseId?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productId?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productName?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productSpecification?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    quantity?: Prisma.IntFilter<"Purchase_Order_Items"> | number;
    productUnit?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productPrice?: Prisma.DecimalFilter<"Purchase_Order_Items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"Purchase_Order_Items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.StringNullableFilter<"Purchase_Order_Items"> | string | null;
    deliveryDate?: Prisma.DateTimeFilter<"Purchase_Order_Items"> | Date | string;
    requisitionId?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    deliverPlace?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    purchase?: Prisma.XOR<Prisma.Purchasing_OrdersScalarRelationFilter, Prisma.Purchasing_OrdersWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
    requisition?: Prisma.XOR<Prisma.Purchasing_RequisitionsScalarRelationFilter, Prisma.Purchasing_RequisitionsWhereInput>;
};
export type Purchase_Order_ItemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    productPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    VAT?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
    purchase?: Prisma.Purchasing_OrdersOrderByWithRelationInput;
    product?: Prisma.ProductsOrderByWithRelationInput;
    requisition?: Prisma.Purchasing_RequisitionsOrderByWithRelationInput;
};
export type Purchase_Order_ItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.Purchase_Order_ItemsWhereInput | Prisma.Purchase_Order_ItemsWhereInput[];
    OR?: Prisma.Purchase_Order_ItemsWhereInput[];
    NOT?: Prisma.Purchase_Order_ItemsWhereInput | Prisma.Purchase_Order_ItemsWhereInput[];
    purchaseId?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productId?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productName?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productSpecification?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    quantity?: Prisma.IntFilter<"Purchase_Order_Items"> | number;
    productUnit?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productPrice?: Prisma.DecimalFilter<"Purchase_Order_Items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"Purchase_Order_Items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.StringNullableFilter<"Purchase_Order_Items"> | string | null;
    deliveryDate?: Prisma.DateTimeFilter<"Purchase_Order_Items"> | Date | string;
    requisitionId?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    deliverPlace?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    purchase?: Prisma.XOR<Prisma.Purchasing_OrdersScalarRelationFilter, Prisma.Purchasing_OrdersWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
    requisition?: Prisma.XOR<Prisma.Purchasing_RequisitionsScalarRelationFilter, Prisma.Purchasing_RequisitionsWhereInput>;
}, "id">;
export type Purchase_Order_ItemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    productPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    VAT?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
    _count?: Prisma.Purchase_Order_ItemsCountOrderByAggregateInput;
    _avg?: Prisma.Purchase_Order_ItemsAvgOrderByAggregateInput;
    _max?: Prisma.Purchase_Order_ItemsMaxOrderByAggregateInput;
    _min?: Prisma.Purchase_Order_ItemsMinOrderByAggregateInput;
    _sum?: Prisma.Purchase_Order_ItemsSumOrderByAggregateInput;
};
export type Purchase_Order_ItemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.Purchase_Order_ItemsScalarWhereWithAggregatesInput | Prisma.Purchase_Order_ItemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.Purchase_Order_ItemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Purchase_Order_ItemsScalarWhereWithAggregatesInput | Prisma.Purchase_Order_ItemsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Purchase_Order_Items"> | number;
    purchaseId?: Prisma.StringWithAggregatesFilter<"Purchase_Order_Items"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"Purchase_Order_Items"> | string;
    productName?: Prisma.StringWithAggregatesFilter<"Purchase_Order_Items"> | string;
    productSpecification?: Prisma.StringWithAggregatesFilter<"Purchase_Order_Items"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Purchase_Order_Items"> | number;
    productUnit?: Prisma.StringWithAggregatesFilter<"Purchase_Order_Items"> | string;
    productPrice?: Prisma.DecimalWithAggregatesFilter<"Purchase_Order_Items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalWithAggregatesFilter<"Purchase_Order_Items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.StringNullableWithAggregatesFilter<"Purchase_Order_Items"> | string | null;
    deliveryDate?: Prisma.DateTimeWithAggregatesFilter<"Purchase_Order_Items"> | Date | string;
    requisitionId?: Prisma.StringWithAggregatesFilter<"Purchase_Order_Items"> | string;
    deliverPlace?: Prisma.StringWithAggregatesFilter<"Purchase_Order_Items"> | string;
};
export type Purchase_Order_ItemsCreateInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    deliverPlace: string;
    purchase: Prisma.Purchasing_OrdersCreateNestedOneWithoutPurchaseOrderItemsInput;
    product: Prisma.ProductsCreateNestedOneWithoutPurchaseOrderItemsInput;
    requisition: Prisma.Purchasing_RequisitionsCreateNestedOneWithoutPurchaseOrderItemsInput;
};
export type Purchase_Order_ItemsUncheckedCreateInput = {
    id?: number;
    purchaseId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Purchase_Order_ItemsUpdateInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase?: Prisma.Purchasing_OrdersUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
    requisition?: Prisma.Purchasing_RequisitionsUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
};
export type Purchase_Order_ItemsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Order_ItemsCreateManyInput = {
    id?: number;
    purchaseId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Purchase_Order_ItemsUpdateManyMutationInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Order_ItemsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Order_ItemsListRelationFilter = {
    every?: Prisma.Purchase_Order_ItemsWhereInput;
    some?: Prisma.Purchase_Order_ItemsWhereInput;
    none?: Prisma.Purchase_Order_ItemsWhereInput;
};
export type Purchase_Order_ItemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Purchase_Order_ItemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    productPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    VAT?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
};
export type Purchase_Order_ItemsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type Purchase_Order_ItemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    productPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    VAT?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
};
export type Purchase_Order_ItemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    productPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    VAT?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
};
export type Purchase_Order_ItemsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type Purchase_Order_ItemsCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutProductInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput> | Prisma.Purchase_Order_ItemsCreateWithoutProductInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutProductInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyProductInputEnvelope;
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
};
export type Purchase_Order_ItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutProductInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput> | Prisma.Purchase_Order_ItemsCreateWithoutProductInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutProductInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyProductInputEnvelope;
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
};
export type Purchase_Order_ItemsUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutProductInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput> | Prisma.Purchase_Order_ItemsCreateWithoutProductInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutProductInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutProductInput | Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyProductInputEnvelope;
    set?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutProductInput | Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutProductInput | Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.Purchase_Order_ItemsScalarWhereInput | Prisma.Purchase_Order_ItemsScalarWhereInput[];
};
export type Purchase_Order_ItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutProductInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput> | Prisma.Purchase_Order_ItemsCreateWithoutProductInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutProductInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutProductInput | Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyProductInputEnvelope;
    set?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutProductInput | Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutProductInput | Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.Purchase_Order_ItemsScalarWhereInput | Prisma.Purchase_Order_ItemsScalarWhereInput[];
};
export type Purchase_Order_ItemsCreateNestedManyWithoutRequisitionInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutRequisitionInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyRequisitionInputEnvelope;
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
};
export type Purchase_Order_ItemsUncheckedCreateNestedManyWithoutRequisitionInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutRequisitionInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyRequisitionInputEnvelope;
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
};
export type Purchase_Order_ItemsUpdateManyWithoutRequisitionNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutRequisitionInput[];
    upsert?: Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutRequisitionInput | Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutRequisitionInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyRequisitionInputEnvelope;
    set?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutRequisitionInput | Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutRequisitionInput[];
    updateMany?: Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutRequisitionInput | Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutRequisitionInput[];
    deleteMany?: Prisma.Purchase_Order_ItemsScalarWhereInput | Prisma.Purchase_Order_ItemsScalarWhereInput[];
};
export type Purchase_Order_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutRequisitionInput[];
    upsert?: Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutRequisitionInput | Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutRequisitionInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyRequisitionInputEnvelope;
    set?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutRequisitionInput | Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutRequisitionInput[];
    updateMany?: Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutRequisitionInput | Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutRequisitionInput[];
    deleteMany?: Prisma.Purchase_Order_ItemsScalarWhereInput | Prisma.Purchase_Order_ItemsScalarWhereInput[];
};
export type Purchase_Order_ItemsCreateNestedManyWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput> | Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutPurchaseInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutPurchaseInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyPurchaseInputEnvelope;
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
};
export type Purchase_Order_ItemsUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput> | Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutPurchaseInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutPurchaseInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyPurchaseInputEnvelope;
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
};
export type Purchase_Order_ItemsUpdateManyWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput> | Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutPurchaseInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutPurchaseInput[];
    upsert?: Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutPurchaseInput | Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutPurchaseInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyPurchaseInputEnvelope;
    set?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutPurchaseInput | Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutPurchaseInput[];
    updateMany?: Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutPurchaseInput | Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutPurchaseInput[];
    deleteMany?: Prisma.Purchase_Order_ItemsScalarWhereInput | Prisma.Purchase_Order_ItemsScalarWhereInput[];
};
export type Purchase_Order_ItemsUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput> | Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput[] | Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput[];
    connectOrCreate?: Prisma.Purchase_Order_ItemsCreateOrConnectWithoutPurchaseInput | Prisma.Purchase_Order_ItemsCreateOrConnectWithoutPurchaseInput[];
    upsert?: Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutPurchaseInput | Prisma.Purchase_Order_ItemsUpsertWithWhereUniqueWithoutPurchaseInput[];
    createMany?: Prisma.Purchase_Order_ItemsCreateManyPurchaseInputEnvelope;
    set?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    delete?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    connect?: Prisma.Purchase_Order_ItemsWhereUniqueInput | Prisma.Purchase_Order_ItemsWhereUniqueInput[];
    update?: Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutPurchaseInput | Prisma.Purchase_Order_ItemsUpdateWithWhereUniqueWithoutPurchaseInput[];
    updateMany?: Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutPurchaseInput | Prisma.Purchase_Order_ItemsUpdateManyWithWhereWithoutPurchaseInput[];
    deleteMany?: Prisma.Purchase_Order_ItemsScalarWhereInput | Prisma.Purchase_Order_ItemsScalarWhereInput[];
};
export type Purchase_Order_ItemsCreateWithoutProductInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    deliverPlace: string;
    purchase: Prisma.Purchasing_OrdersCreateNestedOneWithoutPurchaseOrderItemsInput;
    requisition: Prisma.Purchasing_RequisitionsCreateNestedOneWithoutPurchaseOrderItemsInput;
};
export type Purchase_Order_ItemsUncheckedCreateWithoutProductInput = {
    id?: number;
    purchaseId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Purchase_Order_ItemsCreateOrConnectWithoutProductInput = {
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutProductInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput>;
};
export type Purchase_Order_ItemsCreateManyProductInputEnvelope = {
    data: Prisma.Purchase_Order_ItemsCreateManyProductInput | Prisma.Purchase_Order_ItemsCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type Purchase_Order_ItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateWithoutProductInput, Prisma.Purchase_Order_ItemsUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutProductInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutProductInput>;
};
export type Purchase_Order_ItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateWithoutProductInput, Prisma.Purchase_Order_ItemsUncheckedUpdateWithoutProductInput>;
};
export type Purchase_Order_ItemsUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.Purchase_Order_ItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateManyMutationInput, Prisma.Purchase_Order_ItemsUncheckedUpdateManyWithoutProductInput>;
};
export type Purchase_Order_ItemsScalarWhereInput = {
    AND?: Prisma.Purchase_Order_ItemsScalarWhereInput | Prisma.Purchase_Order_ItemsScalarWhereInput[];
    OR?: Prisma.Purchase_Order_ItemsScalarWhereInput[];
    NOT?: Prisma.Purchase_Order_ItemsScalarWhereInput | Prisma.Purchase_Order_ItemsScalarWhereInput[];
    id?: Prisma.IntFilter<"Purchase_Order_Items"> | number;
    purchaseId?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productId?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productName?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productSpecification?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    quantity?: Prisma.IntFilter<"Purchase_Order_Items"> | number;
    productUnit?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    productPrice?: Prisma.DecimalFilter<"Purchase_Order_Items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"Purchase_Order_Items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.StringNullableFilter<"Purchase_Order_Items"> | string | null;
    deliveryDate?: Prisma.DateTimeFilter<"Purchase_Order_Items"> | Date | string;
    requisitionId?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
    deliverPlace?: Prisma.StringFilter<"Purchase_Order_Items"> | string;
};
export type Purchase_Order_ItemsCreateWithoutRequisitionInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    deliverPlace: string;
    purchase: Prisma.Purchasing_OrdersCreateNestedOneWithoutPurchaseOrderItemsInput;
    product: Prisma.ProductsCreateNestedOneWithoutPurchaseOrderItemsInput;
};
export type Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput = {
    id?: number;
    purchaseId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    deliverPlace: string;
};
export type Purchase_Order_ItemsCreateOrConnectWithoutRequisitionInput = {
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput>;
};
export type Purchase_Order_ItemsCreateManyRequisitionInputEnvelope = {
    data: Prisma.Purchase_Order_ItemsCreateManyRequisitionInput | Prisma.Purchase_Order_ItemsCreateManyRequisitionInput[];
    skipDuplicates?: boolean;
};
export type Purchase_Order_ItemsUpsertWithWhereUniqueWithoutRequisitionInput = {
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateWithoutRequisitionInput, Prisma.Purchase_Order_ItemsUncheckedUpdateWithoutRequisitionInput>;
    create: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutRequisitionInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutRequisitionInput>;
};
export type Purchase_Order_ItemsUpdateWithWhereUniqueWithoutRequisitionInput = {
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateWithoutRequisitionInput, Prisma.Purchase_Order_ItemsUncheckedUpdateWithoutRequisitionInput>;
};
export type Purchase_Order_ItemsUpdateManyWithWhereWithoutRequisitionInput = {
    where: Prisma.Purchase_Order_ItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateManyMutationInput, Prisma.Purchase_Order_ItemsUncheckedUpdateManyWithoutRequisitionInput>;
};
export type Purchase_Order_ItemsCreateWithoutPurchaseInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    deliverPlace: string;
    product: Prisma.ProductsCreateNestedOneWithoutPurchaseOrderItemsInput;
    requisition: Prisma.Purchasing_RequisitionsCreateNestedOneWithoutPurchaseOrderItemsInput;
};
export type Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput = {
    id?: number;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Purchase_Order_ItemsCreateOrConnectWithoutPurchaseInput = {
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput>;
};
export type Purchase_Order_ItemsCreateManyPurchaseInputEnvelope = {
    data: Prisma.Purchase_Order_ItemsCreateManyPurchaseInput | Prisma.Purchase_Order_ItemsCreateManyPurchaseInput[];
    skipDuplicates?: boolean;
};
export type Purchase_Order_ItemsUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateWithoutPurchaseInput, Prisma.Purchase_Order_ItemsUncheckedUpdateWithoutPurchaseInput>;
    create: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateWithoutPurchaseInput, Prisma.Purchase_Order_ItemsUncheckedCreateWithoutPurchaseInput>;
};
export type Purchase_Order_ItemsUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateWithoutPurchaseInput, Prisma.Purchase_Order_ItemsUncheckedUpdateWithoutPurchaseInput>;
};
export type Purchase_Order_ItemsUpdateManyWithWhereWithoutPurchaseInput = {
    where: Prisma.Purchase_Order_ItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateManyMutationInput, Prisma.Purchase_Order_ItemsUncheckedUpdateManyWithoutPurchaseInput>;
};
export type Purchase_Order_ItemsCreateManyProductInput = {
    id?: number;
    purchaseId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Purchase_Order_ItemsUpdateWithoutProductInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase?: Prisma.Purchasing_OrdersUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
    requisition?: Prisma.Purchasing_RequisitionsUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
};
export type Purchase_Order_ItemsUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Order_ItemsUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Order_ItemsCreateManyRequisitionInput = {
    id?: number;
    purchaseId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    deliverPlace: string;
};
export type Purchase_Order_ItemsUpdateWithoutRequisitionInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase?: Prisma.Purchasing_OrdersUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
};
export type Purchase_Order_ItemsUncheckedUpdateWithoutRequisitionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Order_ItemsUncheckedUpdateManyWithoutRequisitionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Order_ItemsCreateManyPurchaseInput = {
    id?: number;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    productPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: string | null;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Purchase_Order_ItemsUpdateWithoutPurchaseInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    product?: Prisma.ProductsUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
    requisition?: Prisma.Purchasing_RequisitionsUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
};
export type Purchase_Order_ItemsUncheckedUpdateWithoutPurchaseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Order_ItemsUncheckedUpdateManyWithoutPurchaseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    productPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    VAT?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Purchase_Order_ItemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    productUnit?: boolean;
    productPrice?: boolean;
    totalPrice?: boolean;
    VAT?: boolean;
    deliveryDate?: boolean;
    requisitionId?: boolean;
    deliverPlace?: boolean;
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_Order_Items"]>;
export type Purchase_Order_ItemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    productUnit?: boolean;
    productPrice?: boolean;
    totalPrice?: boolean;
    VAT?: boolean;
    deliveryDate?: boolean;
    requisitionId?: boolean;
    deliverPlace?: boolean;
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_Order_Items"]>;
export type Purchase_Order_ItemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    productUnit?: boolean;
    productPrice?: boolean;
    totalPrice?: boolean;
    VAT?: boolean;
    deliveryDate?: boolean;
    requisitionId?: boolean;
    deliverPlace?: boolean;
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_Order_Items"]>;
export type Purchase_Order_ItemsSelectScalar = {
    id?: boolean;
    purchaseId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    productUnit?: boolean;
    productPrice?: boolean;
    totalPrice?: boolean;
    VAT?: boolean;
    deliveryDate?: boolean;
    requisitionId?: boolean;
    deliverPlace?: boolean;
};
export type Purchase_Order_ItemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "purchaseId" | "productId" | "productName" | "productSpecification" | "quantity" | "productUnit" | "productPrice" | "totalPrice" | "VAT" | "deliveryDate" | "requisitionId" | "deliverPlace", ExtArgs["result"]["purchase_Order_Items"]>;
export type Purchase_Order_ItemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
};
export type Purchase_Order_ItemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
};
export type Purchase_Order_ItemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase?: boolean | Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
};
export type $Purchase_Order_ItemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Purchase_Order_Items";
    objects: {
        purchase: Prisma.$Purchasing_OrdersPayload<ExtArgs>;
        product: Prisma.$ProductsPayload<ExtArgs>;
        requisition: Prisma.$Purchasing_RequisitionsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        purchaseId: string;
        productId: string;
        productName: string;
        productSpecification: string;
        quantity: number;
        productUnit: string;
        productPrice: runtime.Decimal;
        totalPrice: runtime.Decimal;
        VAT: string | null;
        deliveryDate: Date;
        requisitionId: string;
        deliverPlace: string;
    }, ExtArgs["result"]["purchase_Order_Items"]>;
    composites: {};
};
export type Purchase_Order_ItemsGetPayload<S extends boolean | null | undefined | Purchase_Order_ItemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload, S>;
export type Purchase_Order_ItemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Purchase_Order_ItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Purchase_Order_ItemsCountAggregateInputType | true;
};
export interface Purchase_Order_ItemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Purchase_Order_Items'];
        meta: {
            name: 'Purchase_Order_Items';
        };
    };
    /**
     * Find zero or one Purchase_Order_Items that matches the filter.
     * @param {Purchase_Order_ItemsFindUniqueArgs} args - Arguments to find a Purchase_Order_Items
     * @example
     * // Get one Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Purchase_Order_ItemsFindUniqueArgs>(args: Prisma.SelectSubset<T, Purchase_Order_ItemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Purchase_Order_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Purchase_Order_Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Purchase_Order_ItemsFindUniqueOrThrowArgs} args - Arguments to find a Purchase_Order_Items
     * @example
     * // Get one Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Purchase_Order_ItemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Purchase_Order_ItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Purchase_Order_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchase_Order_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Order_ItemsFindFirstArgs} args - Arguments to find a Purchase_Order_Items
     * @example
     * // Get one Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Purchase_Order_ItemsFindFirstArgs>(args?: Prisma.SelectSubset<T, Purchase_Order_ItemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__Purchase_Order_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchase_Order_Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Order_ItemsFindFirstOrThrowArgs} args - Arguments to find a Purchase_Order_Items
     * @example
     * // Get one Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Purchase_Order_ItemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Purchase_Order_ItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Purchase_Order_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Purchase_Order_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Order_ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.findMany()
     *
     * // Get first 10 Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const purchase_Order_ItemsWithIdOnly = await prisma.purchase_Order_Items.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Purchase_Order_ItemsFindManyArgs>(args?: Prisma.SelectSubset<T, Purchase_Order_ItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Purchase_Order_Items.
     * @param {Purchase_Order_ItemsCreateArgs} args - Arguments to create a Purchase_Order_Items.
     * @example
     * // Create one Purchase_Order_Items
     * const Purchase_Order_Items = await prisma.purchase_Order_Items.create({
     *   data: {
     *     // ... data to create a Purchase_Order_Items
     *   }
     * })
     *
     */
    create<T extends Purchase_Order_ItemsCreateArgs>(args: Prisma.SelectSubset<T, Purchase_Order_ItemsCreateArgs<ExtArgs>>): Prisma.Prisma__Purchase_Order_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Purchase_Order_Items.
     * @param {Purchase_Order_ItemsCreateManyArgs} args - Arguments to create many Purchase_Order_Items.
     * @example
     * // Create many Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Purchase_Order_ItemsCreateManyArgs>(args?: Prisma.SelectSubset<T, Purchase_Order_ItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Purchase_Order_Items and returns the data saved in the database.
     * @param {Purchase_Order_ItemsCreateManyAndReturnArgs} args - Arguments to create many Purchase_Order_Items.
     * @example
     * // Create many Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Purchase_Order_Items and only return the `id`
     * const purchase_Order_ItemsWithIdOnly = await prisma.purchase_Order_Items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Purchase_Order_ItemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Purchase_Order_ItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Purchase_Order_Items.
     * @param {Purchase_Order_ItemsDeleteArgs} args - Arguments to delete one Purchase_Order_Items.
     * @example
     * // Delete one Purchase_Order_Items
     * const Purchase_Order_Items = await prisma.purchase_Order_Items.delete({
     *   where: {
     *     // ... filter to delete one Purchase_Order_Items
     *   }
     * })
     *
     */
    delete<T extends Purchase_Order_ItemsDeleteArgs>(args: Prisma.SelectSubset<T, Purchase_Order_ItemsDeleteArgs<ExtArgs>>): Prisma.Prisma__Purchase_Order_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Purchase_Order_Items.
     * @param {Purchase_Order_ItemsUpdateArgs} args - Arguments to update one Purchase_Order_Items.
     * @example
     * // Update one Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Purchase_Order_ItemsUpdateArgs>(args: Prisma.SelectSubset<T, Purchase_Order_ItemsUpdateArgs<ExtArgs>>): Prisma.Prisma__Purchase_Order_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Purchase_Order_Items.
     * @param {Purchase_Order_ItemsDeleteManyArgs} args - Arguments to filter Purchase_Order_Items to delete.
     * @example
     * // Delete a few Purchase_Order_Items
     * const { count } = await prisma.purchase_Order_Items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Purchase_Order_ItemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, Purchase_Order_ItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchase_Order_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Order_ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Purchase_Order_ItemsUpdateManyArgs>(args: Prisma.SelectSubset<T, Purchase_Order_ItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchase_Order_Items and returns the data updated in the database.
     * @param {Purchase_Order_ItemsUpdateManyAndReturnArgs} args - Arguments to update many Purchase_Order_Items.
     * @example
     * // Update many Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Purchase_Order_Items and only return the `id`
     * const purchase_Order_ItemsWithIdOnly = await prisma.purchase_Order_Items.updateManyAndReturn({
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
    updateManyAndReturn<T extends Purchase_Order_ItemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Purchase_Order_ItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Purchase_Order_Items.
     * @param {Purchase_Order_ItemsUpsertArgs} args - Arguments to update or create a Purchase_Order_Items.
     * @example
     * // Update or create a Purchase_Order_Items
     * const purchase_Order_Items = await prisma.purchase_Order_Items.upsert({
     *   create: {
     *     // ... data to create a Purchase_Order_Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase_Order_Items we want to update
     *   }
     * })
     */
    upsert<T extends Purchase_Order_ItemsUpsertArgs>(args: Prisma.SelectSubset<T, Purchase_Order_ItemsUpsertArgs<ExtArgs>>): Prisma.Prisma__Purchase_Order_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Purchase_Order_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Order_ItemsCountArgs} args - Arguments to filter Purchase_Order_Items to count.
     * @example
     * // Count the number of Purchase_Order_Items
     * const count = await prisma.purchase_Order_Items.count({
     *   where: {
     *     // ... the filter for the Purchase_Order_Items we want to count
     *   }
     * })
    **/
    count<T extends Purchase_Order_ItemsCountArgs>(args?: Prisma.Subset<T, Purchase_Order_ItemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Purchase_Order_ItemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Purchase_Order_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Order_ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Purchase_Order_ItemsAggregateArgs>(args: Prisma.Subset<T, Purchase_Order_ItemsAggregateArgs>): Prisma.PrismaPromise<GetPurchase_Order_ItemsAggregateType<T>>;
    /**
     * Group by Purchase_Order_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_Order_ItemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Purchase_Order_ItemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Purchase_Order_ItemsGroupByArgs['orderBy'];
    } : {
        orderBy?: Purchase_Order_ItemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Purchase_Order_ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchase_Order_ItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Purchase_Order_Items model
     */
    readonly fields: Purchase_Order_ItemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Purchase_Order_Items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Purchase_Order_ItemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchase<T extends Prisma.Purchasing_OrdersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchasing_OrdersDefaultArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductsDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requisition<T extends Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Purchase_Order_Items model
 */
export interface Purchase_Order_ItemsFieldRefs {
    readonly id: Prisma.FieldRef<"Purchase_Order_Items", 'Int'>;
    readonly purchaseId: Prisma.FieldRef<"Purchase_Order_Items", 'String'>;
    readonly productId: Prisma.FieldRef<"Purchase_Order_Items", 'String'>;
    readonly productName: Prisma.FieldRef<"Purchase_Order_Items", 'String'>;
    readonly productSpecification: Prisma.FieldRef<"Purchase_Order_Items", 'String'>;
    readonly quantity: Prisma.FieldRef<"Purchase_Order_Items", 'Int'>;
    readonly productUnit: Prisma.FieldRef<"Purchase_Order_Items", 'String'>;
    readonly productPrice: Prisma.FieldRef<"Purchase_Order_Items", 'Decimal'>;
    readonly totalPrice: Prisma.FieldRef<"Purchase_Order_Items", 'Decimal'>;
    readonly VAT: Prisma.FieldRef<"Purchase_Order_Items", 'String'>;
    readonly deliveryDate: Prisma.FieldRef<"Purchase_Order_Items", 'DateTime'>;
    readonly requisitionId: Prisma.FieldRef<"Purchase_Order_Items", 'String'>;
    readonly deliverPlace: Prisma.FieldRef<"Purchase_Order_Items", 'String'>;
}
/**
 * Purchase_Order_Items findUnique
 */
export type Purchase_Order_ItemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Order_Items to fetch.
     */
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
};
/**
 * Purchase_Order_Items findUniqueOrThrow
 */
export type Purchase_Order_ItemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Order_Items to fetch.
     */
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
};
/**
 * Purchase_Order_Items findFirst
 */
export type Purchase_Order_ItemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Order_Items to fetch.
     */
    where?: Prisma.Purchase_Order_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchase_Order_Items to fetch.
     */
    orderBy?: Prisma.Purchase_Order_ItemsOrderByWithRelationInput | Prisma.Purchase_Order_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchase_Order_Items.
     */
    cursor?: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchase_Order_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchase_Order_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchase_Order_Items.
     */
    distinct?: Prisma.Purchase_Order_ItemsScalarFieldEnum | Prisma.Purchase_Order_ItemsScalarFieldEnum[];
};
/**
 * Purchase_Order_Items findFirstOrThrow
 */
export type Purchase_Order_ItemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Order_Items to fetch.
     */
    where?: Prisma.Purchase_Order_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchase_Order_Items to fetch.
     */
    orderBy?: Prisma.Purchase_Order_ItemsOrderByWithRelationInput | Prisma.Purchase_Order_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchase_Order_Items.
     */
    cursor?: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchase_Order_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchase_Order_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchase_Order_Items.
     */
    distinct?: Prisma.Purchase_Order_ItemsScalarFieldEnum | Prisma.Purchase_Order_ItemsScalarFieldEnum[];
};
/**
 * Purchase_Order_Items findMany
 */
export type Purchase_Order_ItemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchase_Order_Items to fetch.
     */
    where?: Prisma.Purchase_Order_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchase_Order_Items to fetch.
     */
    orderBy?: Prisma.Purchase_Order_ItemsOrderByWithRelationInput | Prisma.Purchase_Order_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Purchase_Order_Items.
     */
    cursor?: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchase_Order_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchase_Order_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchase_Order_Items.
     */
    distinct?: Prisma.Purchase_Order_ItemsScalarFieldEnum | Prisma.Purchase_Order_ItemsScalarFieldEnum[];
};
/**
 * Purchase_Order_Items create
 */
export type Purchase_Order_ItemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Purchase_Order_Items.
     */
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateInput, Prisma.Purchase_Order_ItemsUncheckedCreateInput>;
};
/**
 * Purchase_Order_Items createMany
 */
export type Purchase_Order_ItemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchase_Order_Items.
     */
    data: Prisma.Purchase_Order_ItemsCreateManyInput | Prisma.Purchase_Order_ItemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Purchase_Order_Items createManyAndReturn
 */
export type Purchase_Order_ItemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * The data used to create many Purchase_Order_Items.
     */
    data: Prisma.Purchase_Order_ItemsCreateManyInput | Prisma.Purchase_Order_ItemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Purchase_Order_Items update
 */
export type Purchase_Order_ItemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Purchase_Order_Items.
     */
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateInput, Prisma.Purchase_Order_ItemsUncheckedUpdateInput>;
    /**
     * Choose, which Purchase_Order_Items to update.
     */
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
};
/**
 * Purchase_Order_Items updateMany
 */
export type Purchase_Order_ItemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchase_Order_Items.
     */
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateManyMutationInput, Prisma.Purchase_Order_ItemsUncheckedUpdateManyInput>;
    /**
     * Filter which Purchase_Order_Items to update
     */
    where?: Prisma.Purchase_Order_ItemsWhereInput;
    /**
     * Limit how many Purchase_Order_Items to update.
     */
    limit?: number;
};
/**
 * Purchase_Order_Items updateManyAndReturn
 */
export type Purchase_Order_ItemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * The data used to update Purchase_Order_Items.
     */
    data: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateManyMutationInput, Prisma.Purchase_Order_ItemsUncheckedUpdateManyInput>;
    /**
     * Filter which Purchase_Order_Items to update
     */
    where?: Prisma.Purchase_Order_ItemsWhereInput;
    /**
     * Limit how many Purchase_Order_Items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Purchase_Order_Items upsert
 */
export type Purchase_Order_ItemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Purchase_Order_Items to update in case it exists.
     */
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    /**
     * In case the Purchase_Order_Items found by the `where` argument doesn't exist, create a new Purchase_Order_Items with this data.
     */
    create: Prisma.XOR<Prisma.Purchase_Order_ItemsCreateInput, Prisma.Purchase_Order_ItemsUncheckedCreateInput>;
    /**
     * In case the Purchase_Order_Items was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Purchase_Order_ItemsUpdateInput, Prisma.Purchase_Order_ItemsUncheckedUpdateInput>;
};
/**
 * Purchase_Order_Items delete
 */
export type Purchase_Order_ItemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
    /**
     * Filter which Purchase_Order_Items to delete.
     */
    where: Prisma.Purchase_Order_ItemsWhereUniqueInput;
};
/**
 * Purchase_Order_Items deleteMany
 */
export type Purchase_Order_ItemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase_Order_Items to delete
     */
    where?: Prisma.Purchase_Order_ItemsWhereInput;
    /**
     * Limit how many Purchase_Order_Items to delete.
     */
    limit?: number;
};
/**
 * Purchase_Order_Items without action
 */
export type Purchase_Order_ItemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_Order_Items
     */
    select?: Prisma.Purchase_Order_ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchase_Order_Items
     */
    omit?: Prisma.Purchase_Order_ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchase_Order_ItemsInclude<ExtArgs> | null;
};
//# sourceMappingURL=Purchase_Order_Items.d.ts.map