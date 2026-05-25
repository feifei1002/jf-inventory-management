import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Material_Warehousing_Items
 *
 */
export type Material_Warehousing_ItemsModel = runtime.Types.Result.DefaultSelection<Prisma.$Material_Warehousing_ItemsPayload>;
export type AggregateMaterial_Warehousing_Items = {
    _count: Material_Warehousing_ItemsCountAggregateOutputType | null;
    _avg: Material_Warehousing_ItemsAvgAggregateOutputType | null;
    _sum: Material_Warehousing_ItemsSumAggregateOutputType | null;
    _min: Material_Warehousing_ItemsMinAggregateOutputType | null;
    _max: Material_Warehousing_ItemsMaxAggregateOutputType | null;
};
export type Material_Warehousing_ItemsAvgAggregateOutputType = {
    id: number | null;
    quantity: number | null;
};
export type Material_Warehousing_ItemsSumAggregateOutputType = {
    id: number | null;
    quantity: number | null;
};
export type Material_Warehousing_ItemsMinAggregateOutputType = {
    id: number | null;
    formId: string | null;
    productId: string | null;
    productName: string | null;
    productSpecification: string | null;
    quantity: number | null;
    productUnit: string | null;
    deliveryDate: Date | null;
    requisitionId: string | null;
    deliverPlace: string | null;
};
export type Material_Warehousing_ItemsMaxAggregateOutputType = {
    id: number | null;
    formId: string | null;
    productId: string | null;
    productName: string | null;
    productSpecification: string | null;
    quantity: number | null;
    productUnit: string | null;
    deliveryDate: Date | null;
    requisitionId: string | null;
    deliverPlace: string | null;
};
export type Material_Warehousing_ItemsCountAggregateOutputType = {
    id: number;
    formId: number;
    productId: number;
    productName: number;
    productSpecification: number;
    quantity: number;
    productUnit: number;
    deliveryDate: number;
    requisitionId: number;
    deliverPlace: number;
    _all: number;
};
export type Material_Warehousing_ItemsAvgAggregateInputType = {
    id?: true;
    quantity?: true;
};
export type Material_Warehousing_ItemsSumAggregateInputType = {
    id?: true;
    quantity?: true;
};
export type Material_Warehousing_ItemsMinAggregateInputType = {
    id?: true;
    formId?: true;
    productId?: true;
    productName?: true;
    productSpecification?: true;
    quantity?: true;
    productUnit?: true;
    deliveryDate?: true;
    requisitionId?: true;
    deliverPlace?: true;
};
export type Material_Warehousing_ItemsMaxAggregateInputType = {
    id?: true;
    formId?: true;
    productId?: true;
    productName?: true;
    productSpecification?: true;
    quantity?: true;
    productUnit?: true;
    deliveryDate?: true;
    requisitionId?: true;
    deliverPlace?: true;
};
export type Material_Warehousing_ItemsCountAggregateInputType = {
    id?: true;
    formId?: true;
    productId?: true;
    productName?: true;
    productSpecification?: true;
    quantity?: true;
    productUnit?: true;
    deliveryDate?: true;
    requisitionId?: true;
    deliverPlace?: true;
    _all?: true;
};
export type Material_Warehousing_ItemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Material_Warehousing_Items to aggregate.
     */
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Material_Warehousing_Items to fetch.
     */
    orderBy?: Prisma.Material_Warehousing_ItemsOrderByWithRelationInput | Prisma.Material_Warehousing_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Material_Warehousing_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Material_Warehousing_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Material_Warehousing_Items
    **/
    _count?: true | Material_Warehousing_ItemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Material_Warehousing_ItemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Material_Warehousing_ItemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Material_Warehousing_ItemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Material_Warehousing_ItemsMaxAggregateInputType;
};
export type GetMaterial_Warehousing_ItemsAggregateType<T extends Material_Warehousing_ItemsAggregateArgs> = {
    [P in keyof T & keyof AggregateMaterial_Warehousing_Items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaterial_Warehousing_Items[P]> : Prisma.GetScalarType<T[P], AggregateMaterial_Warehousing_Items[P]>;
};
export type Material_Warehousing_ItemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
    orderBy?: Prisma.Material_Warehousing_ItemsOrderByWithAggregationInput | Prisma.Material_Warehousing_ItemsOrderByWithAggregationInput[];
    by: Prisma.Material_Warehousing_ItemsScalarFieldEnum[] | Prisma.Material_Warehousing_ItemsScalarFieldEnum;
    having?: Prisma.Material_Warehousing_ItemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Material_Warehousing_ItemsCountAggregateInputType | true;
    _avg?: Material_Warehousing_ItemsAvgAggregateInputType;
    _sum?: Material_Warehousing_ItemsSumAggregateInputType;
    _min?: Material_Warehousing_ItemsMinAggregateInputType;
    _max?: Material_Warehousing_ItemsMaxAggregateInputType;
};
export type Material_Warehousing_ItemsGroupByOutputType = {
    id: number;
    formId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date;
    requisitionId: string;
    deliverPlace: string;
    _count: Material_Warehousing_ItemsCountAggregateOutputType | null;
    _avg: Material_Warehousing_ItemsAvgAggregateOutputType | null;
    _sum: Material_Warehousing_ItemsSumAggregateOutputType | null;
    _min: Material_Warehousing_ItemsMinAggregateOutputType | null;
    _max: Material_Warehousing_ItemsMaxAggregateOutputType | null;
};
export type GetMaterial_Warehousing_ItemsGroupByPayload<T extends Material_Warehousing_ItemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Material_Warehousing_ItemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Material_Warehousing_ItemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Material_Warehousing_ItemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Material_Warehousing_ItemsGroupByOutputType[P]>;
}>>;
export type Material_Warehousing_ItemsWhereInput = {
    AND?: Prisma.Material_Warehousing_ItemsWhereInput | Prisma.Material_Warehousing_ItemsWhereInput[];
    OR?: Prisma.Material_Warehousing_ItemsWhereInput[];
    NOT?: Prisma.Material_Warehousing_ItemsWhereInput | Prisma.Material_Warehousing_ItemsWhereInput[];
    id?: Prisma.IntFilter<"Material_Warehousing_Items"> | number;
    formId?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    productId?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    productName?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    productSpecification?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    quantity?: Prisma.IntFilter<"Material_Warehousing_Items"> | number;
    productUnit?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    deliveryDate?: Prisma.DateTimeFilter<"Material_Warehousing_Items"> | Date | string;
    requisitionId?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    deliverPlace?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    warehousingForm?: Prisma.XOR<Prisma.Material_Warehousing_FormsScalarRelationFilter, Prisma.Material_Warehousing_FormsWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
    requisition?: Prisma.XOR<Prisma.Purchasing_RequisitionsScalarRelationFilter, Prisma.Purchasing_RequisitionsWhereInput>;
};
export type Material_Warehousing_ItemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
    warehousingForm?: Prisma.Material_Warehousing_FormsOrderByWithRelationInput;
    product?: Prisma.ProductsOrderByWithRelationInput;
    requisition?: Prisma.Purchasing_RequisitionsOrderByWithRelationInput;
};
export type Material_Warehousing_ItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.Material_Warehousing_ItemsWhereInput | Prisma.Material_Warehousing_ItemsWhereInput[];
    OR?: Prisma.Material_Warehousing_ItemsWhereInput[];
    NOT?: Prisma.Material_Warehousing_ItemsWhereInput | Prisma.Material_Warehousing_ItemsWhereInput[];
    formId?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    productId?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    productName?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    productSpecification?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    quantity?: Prisma.IntFilter<"Material_Warehousing_Items"> | number;
    productUnit?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    deliveryDate?: Prisma.DateTimeFilter<"Material_Warehousing_Items"> | Date | string;
    requisitionId?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    deliverPlace?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    warehousingForm?: Prisma.XOR<Prisma.Material_Warehousing_FormsScalarRelationFilter, Prisma.Material_Warehousing_FormsWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
    requisition?: Prisma.XOR<Prisma.Purchasing_RequisitionsScalarRelationFilter, Prisma.Purchasing_RequisitionsWhereInput>;
}, "id">;
export type Material_Warehousing_ItemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
    _count?: Prisma.Material_Warehousing_ItemsCountOrderByAggregateInput;
    _avg?: Prisma.Material_Warehousing_ItemsAvgOrderByAggregateInput;
    _max?: Prisma.Material_Warehousing_ItemsMaxOrderByAggregateInput;
    _min?: Prisma.Material_Warehousing_ItemsMinOrderByAggregateInput;
    _sum?: Prisma.Material_Warehousing_ItemsSumOrderByAggregateInput;
};
export type Material_Warehousing_ItemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.Material_Warehousing_ItemsScalarWhereWithAggregatesInput | Prisma.Material_Warehousing_ItemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.Material_Warehousing_ItemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Material_Warehousing_ItemsScalarWhereWithAggregatesInput | Prisma.Material_Warehousing_ItemsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Material_Warehousing_Items"> | number;
    formId?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Items"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Items"> | string;
    productName?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Items"> | string;
    productSpecification?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Items"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Material_Warehousing_Items"> | number;
    productUnit?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Items"> | string;
    deliveryDate?: Prisma.DateTimeWithAggregatesFilter<"Material_Warehousing_Items"> | Date | string;
    requisitionId?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Items"> | string;
    deliverPlace?: Prisma.StringWithAggregatesFilter<"Material_Warehousing_Items"> | string;
};
export type Material_Warehousing_ItemsCreateInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    deliverPlace: string;
    warehousingForm: Prisma.Material_Warehousing_FormsCreateNestedOneWithoutMaterialWarehousingItemsInput;
    product: Prisma.ProductsCreateNestedOneWithoutMaterialWarehousingItemsInput;
    requisition: Prisma.Purchasing_RequisitionsCreateNestedOneWithoutMaterialWarehousingItemsInput;
};
export type Material_Warehousing_ItemsUncheckedCreateInput = {
    id?: number;
    formId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Material_Warehousing_ItemsUpdateInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    warehousingForm?: Prisma.Material_Warehousing_FormsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput;
    requisition?: Prisma.Purchasing_RequisitionsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput;
};
export type Material_Warehousing_ItemsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Material_Warehousing_ItemsCreateManyInput = {
    id?: number;
    formId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Material_Warehousing_ItemsUpdateManyMutationInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Material_Warehousing_ItemsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Material_Warehousing_ItemsListRelationFilter = {
    every?: Prisma.Material_Warehousing_ItemsWhereInput;
    some?: Prisma.Material_Warehousing_ItemsWhereInput;
    none?: Prisma.Material_Warehousing_ItemsWhereInput;
};
export type Material_Warehousing_ItemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Material_Warehousing_ItemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
};
export type Material_Warehousing_ItemsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type Material_Warehousing_ItemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
};
export type Material_Warehousing_ItemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSpecification?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    productUnit?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    requisitionId?: Prisma.SortOrder;
    deliverPlace?: Prisma.SortOrder;
};
export type Material_Warehousing_ItemsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type Material_Warehousing_ItemsCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutProductInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput> | Prisma.Material_Warehousing_ItemsCreateWithoutProductInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutProductInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyProductInputEnvelope;
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
};
export type Material_Warehousing_ItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutProductInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput> | Prisma.Material_Warehousing_ItemsCreateWithoutProductInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutProductInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyProductInputEnvelope;
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
};
export type Material_Warehousing_ItemsUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutProductInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput> | Prisma.Material_Warehousing_ItemsCreateWithoutProductInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutProductInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutProductInput | Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyProductInputEnvelope;
    set?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutProductInput | Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutProductInput | Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.Material_Warehousing_ItemsScalarWhereInput | Prisma.Material_Warehousing_ItemsScalarWhereInput[];
};
export type Material_Warehousing_ItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutProductInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput> | Prisma.Material_Warehousing_ItemsCreateWithoutProductInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutProductInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutProductInput | Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyProductInputEnvelope;
    set?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutProductInput | Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutProductInput | Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.Material_Warehousing_ItemsScalarWhereInput | Prisma.Material_Warehousing_ItemsScalarWhereInput[];
};
export type Material_Warehousing_ItemsCreateNestedManyWithoutRequisitionInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutRequisitionInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyRequisitionInputEnvelope;
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
};
export type Material_Warehousing_ItemsUncheckedCreateNestedManyWithoutRequisitionInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutRequisitionInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyRequisitionInputEnvelope;
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
};
export type Material_Warehousing_ItemsUpdateManyWithoutRequisitionNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutRequisitionInput[];
    upsert?: Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutRequisitionInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyRequisitionInputEnvelope;
    set?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutRequisitionInput[];
    updateMany?: Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutRequisitionInput[];
    deleteMany?: Prisma.Material_Warehousing_ItemsScalarWhereInput | Prisma.Material_Warehousing_ItemsScalarWhereInput[];
};
export type Material_Warehousing_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput> | Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutRequisitionInput[];
    upsert?: Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutRequisitionInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyRequisitionInputEnvelope;
    set?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutRequisitionInput[];
    updateMany?: Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutRequisitionInput | Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutRequisitionInput[];
    deleteMany?: Prisma.Material_Warehousing_ItemsScalarWhereInput | Prisma.Material_Warehousing_ItemsScalarWhereInput[];
};
export type Material_Warehousing_ItemsCreateNestedManyWithoutWarehousingFormInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput> | Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutWarehousingFormInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyWarehousingFormInputEnvelope;
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
};
export type Material_Warehousing_ItemsUncheckedCreateNestedManyWithoutWarehousingFormInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput> | Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutWarehousingFormInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyWarehousingFormInputEnvelope;
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
};
export type Material_Warehousing_ItemsUpdateManyWithoutWarehousingFormNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput> | Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutWarehousingFormInput[];
    upsert?: Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutWarehousingFormInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyWarehousingFormInputEnvelope;
    set?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutWarehousingFormInput[];
    updateMany?: Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutWarehousingFormInput[];
    deleteMany?: Prisma.Material_Warehousing_ItemsScalarWhereInput | Prisma.Material_Warehousing_ItemsScalarWhereInput[];
};
export type Material_Warehousing_ItemsUncheckedUpdateManyWithoutWarehousingFormNestedInput = {
    create?: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput> | Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput[] | Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput[];
    connectOrCreate?: Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsCreateOrConnectWithoutWarehousingFormInput[];
    upsert?: Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutWarehousingFormInput[];
    createMany?: Prisma.Material_Warehousing_ItemsCreateManyWarehousingFormInputEnvelope;
    set?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    disconnect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    delete?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    connect?: Prisma.Material_Warehousing_ItemsWhereUniqueInput | Prisma.Material_Warehousing_ItemsWhereUniqueInput[];
    update?: Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutWarehousingFormInput[];
    updateMany?: Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutWarehousingFormInput | Prisma.Material_Warehousing_ItemsUpdateManyWithWhereWithoutWarehousingFormInput[];
    deleteMany?: Prisma.Material_Warehousing_ItemsScalarWhereInput | Prisma.Material_Warehousing_ItemsScalarWhereInput[];
};
export type Material_Warehousing_ItemsCreateWithoutProductInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    deliverPlace: string;
    warehousingForm: Prisma.Material_Warehousing_FormsCreateNestedOneWithoutMaterialWarehousingItemsInput;
    requisition: Prisma.Purchasing_RequisitionsCreateNestedOneWithoutMaterialWarehousingItemsInput;
};
export type Material_Warehousing_ItemsUncheckedCreateWithoutProductInput = {
    id?: number;
    formId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Material_Warehousing_ItemsCreateOrConnectWithoutProductInput = {
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutProductInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput>;
};
export type Material_Warehousing_ItemsCreateManyProductInputEnvelope = {
    data: Prisma.Material_Warehousing_ItemsCreateManyProductInput | Prisma.Material_Warehousing_ItemsCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateWithoutProductInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutProductInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutProductInput>;
};
export type Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateWithoutProductInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateWithoutProductInput>;
};
export type Material_Warehousing_ItemsUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.Material_Warehousing_ItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateManyMutationInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateManyWithoutProductInput>;
};
export type Material_Warehousing_ItemsScalarWhereInput = {
    AND?: Prisma.Material_Warehousing_ItemsScalarWhereInput | Prisma.Material_Warehousing_ItemsScalarWhereInput[];
    OR?: Prisma.Material_Warehousing_ItemsScalarWhereInput[];
    NOT?: Prisma.Material_Warehousing_ItemsScalarWhereInput | Prisma.Material_Warehousing_ItemsScalarWhereInput[];
    id?: Prisma.IntFilter<"Material_Warehousing_Items"> | number;
    formId?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    productId?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    productName?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    productSpecification?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    quantity?: Prisma.IntFilter<"Material_Warehousing_Items"> | number;
    productUnit?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    deliveryDate?: Prisma.DateTimeFilter<"Material_Warehousing_Items"> | Date | string;
    requisitionId?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
    deliverPlace?: Prisma.StringFilter<"Material_Warehousing_Items"> | string;
};
export type Material_Warehousing_ItemsCreateWithoutRequisitionInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    deliverPlace: string;
    warehousingForm: Prisma.Material_Warehousing_FormsCreateNestedOneWithoutMaterialWarehousingItemsInput;
    product: Prisma.ProductsCreateNestedOneWithoutMaterialWarehousingItemsInput;
};
export type Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput = {
    id?: number;
    formId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    deliverPlace: string;
};
export type Material_Warehousing_ItemsCreateOrConnectWithoutRequisitionInput = {
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput>;
};
export type Material_Warehousing_ItemsCreateManyRequisitionInputEnvelope = {
    data: Prisma.Material_Warehousing_ItemsCreateManyRequisitionInput | Prisma.Material_Warehousing_ItemsCreateManyRequisitionInput[];
    skipDuplicates?: boolean;
};
export type Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutRequisitionInput = {
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateWithoutRequisitionInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateWithoutRequisitionInput>;
    create: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutRequisitionInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutRequisitionInput>;
};
export type Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutRequisitionInput = {
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateWithoutRequisitionInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateWithoutRequisitionInput>;
};
export type Material_Warehousing_ItemsUpdateManyWithWhereWithoutRequisitionInput = {
    where: Prisma.Material_Warehousing_ItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateManyMutationInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateManyWithoutRequisitionInput>;
};
export type Material_Warehousing_ItemsCreateWithoutWarehousingFormInput = {
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    deliverPlace: string;
    product: Prisma.ProductsCreateNestedOneWithoutMaterialWarehousingItemsInput;
    requisition: Prisma.Purchasing_RequisitionsCreateNestedOneWithoutMaterialWarehousingItemsInput;
};
export type Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput = {
    id?: number;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Material_Warehousing_ItemsCreateOrConnectWithoutWarehousingFormInput = {
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput>;
};
export type Material_Warehousing_ItemsCreateManyWarehousingFormInputEnvelope = {
    data: Prisma.Material_Warehousing_ItemsCreateManyWarehousingFormInput | Prisma.Material_Warehousing_ItemsCreateManyWarehousingFormInput[];
    skipDuplicates?: boolean;
};
export type Material_Warehousing_ItemsUpsertWithWhereUniqueWithoutWarehousingFormInput = {
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateWithoutWarehousingFormInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateWithoutWarehousingFormInput>;
    create: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateWithoutWarehousingFormInput, Prisma.Material_Warehousing_ItemsUncheckedCreateWithoutWarehousingFormInput>;
};
export type Material_Warehousing_ItemsUpdateWithWhereUniqueWithoutWarehousingFormInput = {
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateWithoutWarehousingFormInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateWithoutWarehousingFormInput>;
};
export type Material_Warehousing_ItemsUpdateManyWithWhereWithoutWarehousingFormInput = {
    where: Prisma.Material_Warehousing_ItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateManyMutationInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateManyWithoutWarehousingFormInput>;
};
export type Material_Warehousing_ItemsCreateManyProductInput = {
    id?: number;
    formId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Material_Warehousing_ItemsUpdateWithoutProductInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    warehousingForm?: Prisma.Material_Warehousing_FormsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput;
    requisition?: Prisma.Purchasing_RequisitionsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput;
};
export type Material_Warehousing_ItemsUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Material_Warehousing_ItemsUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Material_Warehousing_ItemsCreateManyRequisitionInput = {
    id?: number;
    formId: string;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    deliverPlace: string;
};
export type Material_Warehousing_ItemsUpdateWithoutRequisitionInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    warehousingForm?: Prisma.Material_Warehousing_FormsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput;
};
export type Material_Warehousing_ItemsUncheckedUpdateWithoutRequisitionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Material_Warehousing_ItemsUncheckedUpdateManyWithoutRequisitionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Material_Warehousing_ItemsCreateManyWarehousingFormInput = {
    id?: number;
    productId: string;
    productName: string;
    productSpecification: string;
    quantity: number;
    productUnit: string;
    deliveryDate: Date | string;
    requisitionId: string;
    deliverPlace: string;
};
export type Material_Warehousing_ItemsUpdateWithoutWarehousingFormInput = {
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
    product?: Prisma.ProductsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput;
    requisition?: Prisma.Purchasing_RequisitionsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput;
};
export type Material_Warehousing_ItemsUncheckedUpdateWithoutWarehousingFormInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Material_Warehousing_ItemsUncheckedUpdateManyWithoutWarehousingFormInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSpecification?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    productUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliverPlace?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Material_Warehousing_ItemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    productUnit?: boolean;
    deliveryDate?: boolean;
    requisitionId?: boolean;
    deliverPlace?: boolean;
    warehousingForm?: boolean | Prisma.Material_Warehousing_FormsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material_Warehousing_Items"]>;
export type Material_Warehousing_ItemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    productUnit?: boolean;
    deliveryDate?: boolean;
    requisitionId?: boolean;
    deliverPlace?: boolean;
    warehousingForm?: boolean | Prisma.Material_Warehousing_FormsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material_Warehousing_Items"]>;
export type Material_Warehousing_ItemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    productUnit?: boolean;
    deliveryDate?: boolean;
    requisitionId?: boolean;
    deliverPlace?: boolean;
    warehousingForm?: boolean | Prisma.Material_Warehousing_FormsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material_Warehousing_Items"]>;
export type Material_Warehousing_ItemsSelectScalar = {
    id?: boolean;
    formId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSpecification?: boolean;
    quantity?: boolean;
    productUnit?: boolean;
    deliveryDate?: boolean;
    requisitionId?: boolean;
    deliverPlace?: boolean;
};
export type Material_Warehousing_ItemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "formId" | "productId" | "productName" | "productSpecification" | "quantity" | "productUnit" | "deliveryDate" | "requisitionId" | "deliverPlace", ExtArgs["result"]["material_Warehousing_Items"]>;
export type Material_Warehousing_ItemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehousingForm?: boolean | Prisma.Material_Warehousing_FormsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
};
export type Material_Warehousing_ItemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehousingForm?: boolean | Prisma.Material_Warehousing_FormsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
};
export type Material_Warehousing_ItemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehousingForm?: boolean | Prisma.Material_Warehousing_FormsDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
    requisition?: boolean | Prisma.Purchasing_RequisitionsDefaultArgs<ExtArgs>;
};
export type $Material_Warehousing_ItemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Material_Warehousing_Items";
    objects: {
        warehousingForm: Prisma.$Material_Warehousing_FormsPayload<ExtArgs>;
        product: Prisma.$ProductsPayload<ExtArgs>;
        requisition: Prisma.$Purchasing_RequisitionsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        formId: string;
        productId: string;
        productName: string;
        productSpecification: string;
        quantity: number;
        productUnit: string;
        deliveryDate: Date;
        requisitionId: string;
        deliverPlace: string;
    }, ExtArgs["result"]["material_Warehousing_Items"]>;
    composites: {};
};
export type Material_Warehousing_ItemsGetPayload<S extends boolean | null | undefined | Material_Warehousing_ItemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload, S>;
export type Material_Warehousing_ItemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Material_Warehousing_ItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Material_Warehousing_ItemsCountAggregateInputType | true;
};
export interface Material_Warehousing_ItemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Material_Warehousing_Items'];
        meta: {
            name: 'Material_Warehousing_Items';
        };
    };
    /**
     * Find zero or one Material_Warehousing_Items that matches the filter.
     * @param {Material_Warehousing_ItemsFindUniqueArgs} args - Arguments to find a Material_Warehousing_Items
     * @example
     * // Get one Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Material_Warehousing_ItemsFindUniqueArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_ItemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Material_Warehousing_Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Material_Warehousing_ItemsFindUniqueOrThrowArgs} args - Arguments to find a Material_Warehousing_Items
     * @example
     * // Get one Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Material_Warehousing_ItemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_ItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Material_Warehousing_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_ItemsFindFirstArgs} args - Arguments to find a Material_Warehousing_Items
     * @example
     * // Get one Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Material_Warehousing_ItemsFindFirstArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_ItemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Material_Warehousing_Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_ItemsFindFirstOrThrowArgs} args - Arguments to find a Material_Warehousing_Items
     * @example
     * // Get one Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Material_Warehousing_ItemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_ItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Material_Warehousing_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.findMany()
     *
     * // Get first 10 Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const material_Warehousing_ItemsWithIdOnly = await prisma.material_Warehousing_Items.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Material_Warehousing_ItemsFindManyArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_ItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Material_Warehousing_Items.
     * @param {Material_Warehousing_ItemsCreateArgs} args - Arguments to create a Material_Warehousing_Items.
     * @example
     * // Create one Material_Warehousing_Items
     * const Material_Warehousing_Items = await prisma.material_Warehousing_Items.create({
     *   data: {
     *     // ... data to create a Material_Warehousing_Items
     *   }
     * })
     *
     */
    create<T extends Material_Warehousing_ItemsCreateArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_ItemsCreateArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Material_Warehousing_Items.
     * @param {Material_Warehousing_ItemsCreateManyArgs} args - Arguments to create many Material_Warehousing_Items.
     * @example
     * // Create many Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Material_Warehousing_ItemsCreateManyArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_ItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Material_Warehousing_Items and returns the data saved in the database.
     * @param {Material_Warehousing_ItemsCreateManyAndReturnArgs} args - Arguments to create many Material_Warehousing_Items.
     * @example
     * // Create many Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Material_Warehousing_Items and only return the `id`
     * const material_Warehousing_ItemsWithIdOnly = await prisma.material_Warehousing_Items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Material_Warehousing_ItemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_ItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Material_Warehousing_Items.
     * @param {Material_Warehousing_ItemsDeleteArgs} args - Arguments to delete one Material_Warehousing_Items.
     * @example
     * // Delete one Material_Warehousing_Items
     * const Material_Warehousing_Items = await prisma.material_Warehousing_Items.delete({
     *   where: {
     *     // ... filter to delete one Material_Warehousing_Items
     *   }
     * })
     *
     */
    delete<T extends Material_Warehousing_ItemsDeleteArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_ItemsDeleteArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Material_Warehousing_Items.
     * @param {Material_Warehousing_ItemsUpdateArgs} args - Arguments to update one Material_Warehousing_Items.
     * @example
     * // Update one Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Material_Warehousing_ItemsUpdateArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_ItemsUpdateArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Material_Warehousing_Items.
     * @param {Material_Warehousing_ItemsDeleteManyArgs} args - Arguments to filter Material_Warehousing_Items to delete.
     * @example
     * // Delete a few Material_Warehousing_Items
     * const { count } = await prisma.material_Warehousing_Items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Material_Warehousing_ItemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, Material_Warehousing_ItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Material_Warehousing_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Material_Warehousing_ItemsUpdateManyArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_ItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Material_Warehousing_Items and returns the data updated in the database.
     * @param {Material_Warehousing_ItemsUpdateManyAndReturnArgs} args - Arguments to update many Material_Warehousing_Items.
     * @example
     * // Update many Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Material_Warehousing_Items and only return the `id`
     * const material_Warehousing_ItemsWithIdOnly = await prisma.material_Warehousing_Items.updateManyAndReturn({
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
    updateManyAndReturn<T extends Material_Warehousing_ItemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_ItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Material_Warehousing_Items.
     * @param {Material_Warehousing_ItemsUpsertArgs} args - Arguments to update or create a Material_Warehousing_Items.
     * @example
     * // Update or create a Material_Warehousing_Items
     * const material_Warehousing_Items = await prisma.material_Warehousing_Items.upsert({
     *   create: {
     *     // ... data to create a Material_Warehousing_Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material_Warehousing_Items we want to update
     *   }
     * })
     */
    upsert<T extends Material_Warehousing_ItemsUpsertArgs>(args: Prisma.SelectSubset<T, Material_Warehousing_ItemsUpsertArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_ItemsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Material_Warehousing_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_ItemsCountArgs} args - Arguments to filter Material_Warehousing_Items to count.
     * @example
     * // Count the number of Material_Warehousing_Items
     * const count = await prisma.material_Warehousing_Items.count({
     *   where: {
     *     // ... the filter for the Material_Warehousing_Items we want to count
     *   }
     * })
    **/
    count<T extends Material_Warehousing_ItemsCountArgs>(args?: Prisma.Subset<T, Material_Warehousing_ItemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Material_Warehousing_ItemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Material_Warehousing_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Material_Warehousing_ItemsAggregateArgs>(args: Prisma.Subset<T, Material_Warehousing_ItemsAggregateArgs>): Prisma.PrismaPromise<GetMaterial_Warehousing_ItemsAggregateType<T>>;
    /**
     * Group by Material_Warehousing_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_Warehousing_ItemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Material_Warehousing_ItemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Material_Warehousing_ItemsGroupByArgs['orderBy'];
    } : {
        orderBy?: Material_Warehousing_ItemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Material_Warehousing_ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterial_Warehousing_ItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Material_Warehousing_Items model
     */
    readonly fields: Material_Warehousing_ItemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Material_Warehousing_Items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Material_Warehousing_ItemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    warehousingForm<T extends Prisma.Material_Warehousing_FormsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material_Warehousing_FormsDefaultArgs<ExtArgs>>): Prisma.Prisma__Material_Warehousing_FormsClient<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Material_Warehousing_Items model
 */
export interface Material_Warehousing_ItemsFieldRefs {
    readonly id: Prisma.FieldRef<"Material_Warehousing_Items", 'Int'>;
    readonly formId: Prisma.FieldRef<"Material_Warehousing_Items", 'String'>;
    readonly productId: Prisma.FieldRef<"Material_Warehousing_Items", 'String'>;
    readonly productName: Prisma.FieldRef<"Material_Warehousing_Items", 'String'>;
    readonly productSpecification: Prisma.FieldRef<"Material_Warehousing_Items", 'String'>;
    readonly quantity: Prisma.FieldRef<"Material_Warehousing_Items", 'Int'>;
    readonly productUnit: Prisma.FieldRef<"Material_Warehousing_Items", 'String'>;
    readonly deliveryDate: Prisma.FieldRef<"Material_Warehousing_Items", 'DateTime'>;
    readonly requisitionId: Prisma.FieldRef<"Material_Warehousing_Items", 'String'>;
    readonly deliverPlace: Prisma.FieldRef<"Material_Warehousing_Items", 'String'>;
}
/**
 * Material_Warehousing_Items findUnique
 */
export type Material_Warehousing_ItemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Items to fetch.
     */
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
};
/**
 * Material_Warehousing_Items findUniqueOrThrow
 */
export type Material_Warehousing_ItemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Items to fetch.
     */
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
};
/**
 * Material_Warehousing_Items findFirst
 */
export type Material_Warehousing_ItemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Items to fetch.
     */
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Material_Warehousing_Items to fetch.
     */
    orderBy?: Prisma.Material_Warehousing_ItemsOrderByWithRelationInput | Prisma.Material_Warehousing_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Material_Warehousing_Items.
     */
    cursor?: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Material_Warehousing_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Material_Warehousing_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Material_Warehousing_Items.
     */
    distinct?: Prisma.Material_Warehousing_ItemsScalarFieldEnum | Prisma.Material_Warehousing_ItemsScalarFieldEnum[];
};
/**
 * Material_Warehousing_Items findFirstOrThrow
 */
export type Material_Warehousing_ItemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Items to fetch.
     */
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Material_Warehousing_Items to fetch.
     */
    orderBy?: Prisma.Material_Warehousing_ItemsOrderByWithRelationInput | Prisma.Material_Warehousing_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Material_Warehousing_Items.
     */
    cursor?: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Material_Warehousing_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Material_Warehousing_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Material_Warehousing_Items.
     */
    distinct?: Prisma.Material_Warehousing_ItemsScalarFieldEnum | Prisma.Material_Warehousing_ItemsScalarFieldEnum[];
};
/**
 * Material_Warehousing_Items findMany
 */
export type Material_Warehousing_ItemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material_Warehousing_Items to fetch.
     */
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Material_Warehousing_Items to fetch.
     */
    orderBy?: Prisma.Material_Warehousing_ItemsOrderByWithRelationInput | Prisma.Material_Warehousing_ItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Material_Warehousing_Items.
     */
    cursor?: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Material_Warehousing_Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Material_Warehousing_Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Material_Warehousing_Items.
     */
    distinct?: Prisma.Material_Warehousing_ItemsScalarFieldEnum | Prisma.Material_Warehousing_ItemsScalarFieldEnum[];
};
/**
 * Material_Warehousing_Items create
 */
export type Material_Warehousing_ItemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Material_Warehousing_Items.
     */
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateInput, Prisma.Material_Warehousing_ItemsUncheckedCreateInput>;
};
/**
 * Material_Warehousing_Items createMany
 */
export type Material_Warehousing_ItemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Material_Warehousing_Items.
     */
    data: Prisma.Material_Warehousing_ItemsCreateManyInput | Prisma.Material_Warehousing_ItemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Material_Warehousing_Items createManyAndReturn
 */
export type Material_Warehousing_ItemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material_Warehousing_Items
     */
    select?: Prisma.Material_Warehousing_ItemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Material_Warehousing_Items
     */
    omit?: Prisma.Material_Warehousing_ItemsOmit<ExtArgs> | null;
    /**
     * The data used to create many Material_Warehousing_Items.
     */
    data: Prisma.Material_Warehousing_ItemsCreateManyInput | Prisma.Material_Warehousing_ItemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Material_Warehousing_ItemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Material_Warehousing_Items update
 */
export type Material_Warehousing_ItemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Material_Warehousing_Items.
     */
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateInput>;
    /**
     * Choose, which Material_Warehousing_Items to update.
     */
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
};
/**
 * Material_Warehousing_Items updateMany
 */
export type Material_Warehousing_ItemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Material_Warehousing_Items.
     */
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateManyMutationInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateManyInput>;
    /**
     * Filter which Material_Warehousing_Items to update
     */
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
    /**
     * Limit how many Material_Warehousing_Items to update.
     */
    limit?: number;
};
/**
 * Material_Warehousing_Items updateManyAndReturn
 */
export type Material_Warehousing_ItemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material_Warehousing_Items
     */
    select?: Prisma.Material_Warehousing_ItemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Material_Warehousing_Items
     */
    omit?: Prisma.Material_Warehousing_ItemsOmit<ExtArgs> | null;
    /**
     * The data used to update Material_Warehousing_Items.
     */
    data: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateManyMutationInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateManyInput>;
    /**
     * Filter which Material_Warehousing_Items to update
     */
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
    /**
     * Limit how many Material_Warehousing_Items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Material_Warehousing_ItemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Material_Warehousing_Items upsert
 */
export type Material_Warehousing_ItemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Material_Warehousing_Items to update in case it exists.
     */
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
    /**
     * In case the Material_Warehousing_Items found by the `where` argument doesn't exist, create a new Material_Warehousing_Items with this data.
     */
    create: Prisma.XOR<Prisma.Material_Warehousing_ItemsCreateInput, Prisma.Material_Warehousing_ItemsUncheckedCreateInput>;
    /**
     * In case the Material_Warehousing_Items was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Material_Warehousing_ItemsUpdateInput, Prisma.Material_Warehousing_ItemsUncheckedUpdateInput>;
};
/**
 * Material_Warehousing_Items delete
 */
export type Material_Warehousing_ItemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Material_Warehousing_Items to delete.
     */
    where: Prisma.Material_Warehousing_ItemsWhereUniqueInput;
};
/**
 * Material_Warehousing_Items deleteMany
 */
export type Material_Warehousing_ItemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Material_Warehousing_Items to delete
     */
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
    /**
     * Limit how many Material_Warehousing_Items to delete.
     */
    limit?: number;
};
/**
 * Material_Warehousing_Items without action
 */
export type Material_Warehousing_ItemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Material_Warehousing_Items.d.ts.map