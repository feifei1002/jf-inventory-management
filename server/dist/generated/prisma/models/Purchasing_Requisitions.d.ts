import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Purchasing_Requisitions
 *
 */
export type Purchasing_RequisitionsModel = runtime.Types.Result.DefaultSelection<Prisma.$Purchasing_RequisitionsPayload>;
export type AggregatePurchasing_Requisitions = {
    _count: Purchasing_RequisitionsCountAggregateOutputType | null;
    _min: Purchasing_RequisitionsMinAggregateOutputType | null;
    _max: Purchasing_RequisitionsMaxAggregateOutputType | null;
};
export type Purchasing_RequisitionsMinAggregateOutputType = {
    requisitionId: string | null;
    requisitionDate: Date | null;
    department: string | null;
    requester: string | null;
    soNo: string | null;
    note: string | null;
};
export type Purchasing_RequisitionsMaxAggregateOutputType = {
    requisitionId: string | null;
    requisitionDate: Date | null;
    department: string | null;
    requester: string | null;
    soNo: string | null;
    note: string | null;
};
export type Purchasing_RequisitionsCountAggregateOutputType = {
    requisitionId: number;
    requisitionDate: number;
    department: number;
    requester: number;
    soNo: number;
    note: number;
    _all: number;
};
export type Purchasing_RequisitionsMinAggregateInputType = {
    requisitionId?: true;
    requisitionDate?: true;
    department?: true;
    requester?: true;
    soNo?: true;
    note?: true;
};
export type Purchasing_RequisitionsMaxAggregateInputType = {
    requisitionId?: true;
    requisitionDate?: true;
    department?: true;
    requester?: true;
    soNo?: true;
    note?: true;
};
export type Purchasing_RequisitionsCountAggregateInputType = {
    requisitionId?: true;
    requisitionDate?: true;
    department?: true;
    requester?: true;
    soNo?: true;
    note?: true;
    _all?: true;
};
export type Purchasing_RequisitionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchasing_Requisitions to aggregate.
     */
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchasing_Requisitions to fetch.
     */
    orderBy?: Prisma.Purchasing_RequisitionsOrderByWithRelationInput | Prisma.Purchasing_RequisitionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchasing_Requisitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchasing_Requisitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Purchasing_Requisitions
    **/
    _count?: true | Purchasing_RequisitionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Purchasing_RequisitionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Purchasing_RequisitionsMaxAggregateInputType;
};
export type GetPurchasing_RequisitionsAggregateType<T extends Purchasing_RequisitionsAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchasing_Requisitions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchasing_Requisitions[P]> : Prisma.GetScalarType<T[P], AggregatePurchasing_Requisitions[P]>;
};
export type Purchasing_RequisitionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    orderBy?: Prisma.Purchasing_RequisitionsOrderByWithAggregationInput | Prisma.Purchasing_RequisitionsOrderByWithAggregationInput[];
    by: Prisma.Purchasing_RequisitionsScalarFieldEnum[] | Prisma.Purchasing_RequisitionsScalarFieldEnum;
    having?: Prisma.Purchasing_RequisitionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Purchasing_RequisitionsCountAggregateInputType | true;
    _min?: Purchasing_RequisitionsMinAggregateInputType;
    _max?: Purchasing_RequisitionsMaxAggregateInputType;
};
export type Purchasing_RequisitionsGroupByOutputType = {
    requisitionId: string;
    requisitionDate: Date;
    department: string;
    requester: string;
    soNo: string;
    note: string | null;
    _count: Purchasing_RequisitionsCountAggregateOutputType | null;
    _min: Purchasing_RequisitionsMinAggregateOutputType | null;
    _max: Purchasing_RequisitionsMaxAggregateOutputType | null;
};
export type GetPurchasing_RequisitionsGroupByPayload<T extends Purchasing_RequisitionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Purchasing_RequisitionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Purchasing_RequisitionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Purchasing_RequisitionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Purchasing_RequisitionsGroupByOutputType[P]>;
}>>;
export type Purchasing_RequisitionsWhereInput = {
    AND?: Prisma.Purchasing_RequisitionsWhereInput | Prisma.Purchasing_RequisitionsWhereInput[];
    OR?: Prisma.Purchasing_RequisitionsWhereInput[];
    NOT?: Prisma.Purchasing_RequisitionsWhereInput | Prisma.Purchasing_RequisitionsWhereInput[];
    requisitionId?: Prisma.StringFilter<"Purchasing_Requisitions"> | string;
    requisitionDate?: Prisma.DateTimeFilter<"Purchasing_Requisitions"> | Date | string;
    department?: Prisma.StringFilter<"Purchasing_Requisitions"> | string;
    requester?: Prisma.StringFilter<"Purchasing_Requisitions"> | string;
    soNo?: Prisma.StringFilter<"Purchasing_Requisitions"> | string;
    note?: Prisma.StringNullableFilter<"Purchasing_Requisitions"> | string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsListRelationFilter;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsListRelationFilter;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsListRelationFilter;
};
export type Purchasing_RequisitionsOrderByWithRelationInput = {
    requisitionId?: Prisma.SortOrder;
    requisitionDate?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    requester?: Prisma.SortOrder;
    soNo?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsOrderByRelationAggregateInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsOrderByRelationAggregateInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsOrderByRelationAggregateInput;
};
export type Purchasing_RequisitionsWhereUniqueInput = Prisma.AtLeast<{
    requisitionId?: string;
    AND?: Prisma.Purchasing_RequisitionsWhereInput | Prisma.Purchasing_RequisitionsWhereInput[];
    OR?: Prisma.Purchasing_RequisitionsWhereInput[];
    NOT?: Prisma.Purchasing_RequisitionsWhereInput | Prisma.Purchasing_RequisitionsWhereInput[];
    requisitionDate?: Prisma.DateTimeFilter<"Purchasing_Requisitions"> | Date | string;
    department?: Prisma.StringFilter<"Purchasing_Requisitions"> | string;
    requester?: Prisma.StringFilter<"Purchasing_Requisitions"> | string;
    soNo?: Prisma.StringFilter<"Purchasing_Requisitions"> | string;
    note?: Prisma.StringNullableFilter<"Purchasing_Requisitions"> | string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsListRelationFilter;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsListRelationFilter;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsListRelationFilter;
}, "requisitionId">;
export type Purchasing_RequisitionsOrderByWithAggregationInput = {
    requisitionId?: Prisma.SortOrder;
    requisitionDate?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    requester?: Prisma.SortOrder;
    soNo?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.Purchasing_RequisitionsCountOrderByAggregateInput;
    _max?: Prisma.Purchasing_RequisitionsMaxOrderByAggregateInput;
    _min?: Prisma.Purchasing_RequisitionsMinOrderByAggregateInput;
};
export type Purchasing_RequisitionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.Purchasing_RequisitionsScalarWhereWithAggregatesInput | Prisma.Purchasing_RequisitionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.Purchasing_RequisitionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Purchasing_RequisitionsScalarWhereWithAggregatesInput | Prisma.Purchasing_RequisitionsScalarWhereWithAggregatesInput[];
    requisitionId?: Prisma.StringWithAggregatesFilter<"Purchasing_Requisitions"> | string;
    requisitionDate?: Prisma.DateTimeWithAggregatesFilter<"Purchasing_Requisitions"> | Date | string;
    department?: Prisma.StringWithAggregatesFilter<"Purchasing_Requisitions"> | string;
    requester?: Prisma.StringWithAggregatesFilter<"Purchasing_Requisitions"> | string;
    soNo?: Prisma.StringWithAggregatesFilter<"Purchasing_Requisitions"> | string;
    note?: Prisma.StringNullableWithAggregatesFilter<"Purchasing_Requisitions"> | string | null;
};
export type Purchasing_RequisitionsCreateInput = {
    requisitionId: string;
    requisitionDate: Date | string;
    department: string;
    requester: string;
    soNo: string;
    note?: string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsCreateNestedManyWithoutRequisitionInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsCreateNestedManyWithoutRequisitionInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsCreateNestedManyWithoutRequisitionInput;
};
export type Purchasing_RequisitionsUncheckedCreateInput = {
    requisitionId: string;
    requisitionDate: Date | string;
    department: string;
    requester: string;
    soNo: string;
    note?: string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsUncheckedCreateNestedManyWithoutRequisitionInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedCreateNestedManyWithoutRequisitionInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedCreateNestedManyWithoutRequisitionInput;
};
export type Purchasing_RequisitionsUpdateInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsUpdateManyWithoutRequisitionNestedInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUpdateManyWithoutRequisitionNestedInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUpdateManyWithoutRequisitionNestedInput;
};
export type Purchasing_RequisitionsUncheckedUpdateInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput;
};
export type Purchasing_RequisitionsCreateManyInput = {
    requisitionId: string;
    requisitionDate: Date | string;
    department: string;
    requester: string;
    soNo: string;
    note?: string | null;
};
export type Purchasing_RequisitionsUpdateManyMutationInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Purchasing_RequisitionsUncheckedUpdateManyInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Purchasing_RequisitionsCountOrderByAggregateInput = {
    requisitionId?: Prisma.SortOrder;
    requisitionDate?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    requester?: Prisma.SortOrder;
    soNo?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
};
export type Purchasing_RequisitionsMaxOrderByAggregateInput = {
    requisitionId?: Prisma.SortOrder;
    requisitionDate?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    requester?: Prisma.SortOrder;
    soNo?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
};
export type Purchasing_RequisitionsMinOrderByAggregateInput = {
    requisitionId?: Prisma.SortOrder;
    requisitionDate?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    requester?: Prisma.SortOrder;
    soNo?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
};
export type Purchasing_RequisitionsScalarRelationFilter = {
    is?: Prisma.Purchasing_RequisitionsWhereInput;
    isNot?: Prisma.Purchasing_RequisitionsWhereInput;
};
export type Purchasing_RequisitionsCreateNestedOneWithoutPurchaseRequisitionItemsInput = {
    create?: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutPurchaseRequisitionItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutPurchaseRequisitionItemsInput>;
    connectOrCreate?: Prisma.Purchasing_RequisitionsCreateOrConnectWithoutPurchaseRequisitionItemsInput;
    connect?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
};
export type Purchasing_RequisitionsUpdateOneRequiredWithoutPurchaseRequisitionItemsNestedInput = {
    create?: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutPurchaseRequisitionItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutPurchaseRequisitionItemsInput>;
    connectOrCreate?: Prisma.Purchasing_RequisitionsCreateOrConnectWithoutPurchaseRequisitionItemsInput;
    upsert?: Prisma.Purchasing_RequisitionsUpsertWithoutPurchaseRequisitionItemsInput;
    connect?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateToOneWithWhereWithoutPurchaseRequisitionItemsInput, Prisma.Purchasing_RequisitionsUpdateWithoutPurchaseRequisitionItemsInput>, Prisma.Purchasing_RequisitionsUncheckedUpdateWithoutPurchaseRequisitionItemsInput>;
};
export type Purchasing_RequisitionsCreateNestedOneWithoutPurchaseOrderItemsInput = {
    create?: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutPurchaseOrderItemsInput>;
    connectOrCreate?: Prisma.Purchasing_RequisitionsCreateOrConnectWithoutPurchaseOrderItemsInput;
    connect?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
};
export type Purchasing_RequisitionsUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutPurchaseOrderItemsInput>;
    connectOrCreate?: Prisma.Purchasing_RequisitionsCreateOrConnectWithoutPurchaseOrderItemsInput;
    upsert?: Prisma.Purchasing_RequisitionsUpsertWithoutPurchaseOrderItemsInput;
    connect?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateToOneWithWhereWithoutPurchaseOrderItemsInput, Prisma.Purchasing_RequisitionsUpdateWithoutPurchaseOrderItemsInput>, Prisma.Purchasing_RequisitionsUncheckedUpdateWithoutPurchaseOrderItemsInput>;
};
export type Purchasing_RequisitionsCreateNestedOneWithoutMaterialWarehousingItemsInput = {
    create?: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutMaterialWarehousingItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutMaterialWarehousingItemsInput>;
    connectOrCreate?: Prisma.Purchasing_RequisitionsCreateOrConnectWithoutMaterialWarehousingItemsInput;
    connect?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
};
export type Purchasing_RequisitionsUpdateOneRequiredWithoutMaterialWarehousingItemsNestedInput = {
    create?: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutMaterialWarehousingItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutMaterialWarehousingItemsInput>;
    connectOrCreate?: Prisma.Purchasing_RequisitionsCreateOrConnectWithoutMaterialWarehousingItemsInput;
    upsert?: Prisma.Purchasing_RequisitionsUpsertWithoutMaterialWarehousingItemsInput;
    connect?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateToOneWithWhereWithoutMaterialWarehousingItemsInput, Prisma.Purchasing_RequisitionsUpdateWithoutMaterialWarehousingItemsInput>, Prisma.Purchasing_RequisitionsUncheckedUpdateWithoutMaterialWarehousingItemsInput>;
};
export type Purchasing_RequisitionsCreateWithoutPurchaseRequisitionItemsInput = {
    requisitionId: string;
    requisitionDate: Date | string;
    department: string;
    requester: string;
    soNo: string;
    note?: string | null;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsCreateNestedManyWithoutRequisitionInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsCreateNestedManyWithoutRequisitionInput;
};
export type Purchasing_RequisitionsUncheckedCreateWithoutPurchaseRequisitionItemsInput = {
    requisitionId: string;
    requisitionDate: Date | string;
    department: string;
    requester: string;
    soNo: string;
    note?: string | null;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedCreateNestedManyWithoutRequisitionInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedCreateNestedManyWithoutRequisitionInput;
};
export type Purchasing_RequisitionsCreateOrConnectWithoutPurchaseRequisitionItemsInput = {
    where: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutPurchaseRequisitionItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutPurchaseRequisitionItemsInput>;
};
export type Purchasing_RequisitionsUpsertWithoutPurchaseRequisitionItemsInput = {
    update: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateWithoutPurchaseRequisitionItemsInput, Prisma.Purchasing_RequisitionsUncheckedUpdateWithoutPurchaseRequisitionItemsInput>;
    create: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutPurchaseRequisitionItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutPurchaseRequisitionItemsInput>;
    where?: Prisma.Purchasing_RequisitionsWhereInput;
};
export type Purchasing_RequisitionsUpdateToOneWithWhereWithoutPurchaseRequisitionItemsInput = {
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    data: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateWithoutPurchaseRequisitionItemsInput, Prisma.Purchasing_RequisitionsUncheckedUpdateWithoutPurchaseRequisitionItemsInput>;
};
export type Purchasing_RequisitionsUpdateWithoutPurchaseRequisitionItemsInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUpdateManyWithoutRequisitionNestedInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUpdateManyWithoutRequisitionNestedInput;
};
export type Purchasing_RequisitionsUncheckedUpdateWithoutPurchaseRequisitionItemsInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput;
};
export type Purchasing_RequisitionsCreateWithoutPurchaseOrderItemsInput = {
    requisitionId: string;
    requisitionDate: Date | string;
    department: string;
    requester: string;
    soNo: string;
    note?: string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsCreateNestedManyWithoutRequisitionInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsCreateNestedManyWithoutRequisitionInput;
};
export type Purchasing_RequisitionsUncheckedCreateWithoutPurchaseOrderItemsInput = {
    requisitionId: string;
    requisitionDate: Date | string;
    department: string;
    requester: string;
    soNo: string;
    note?: string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsUncheckedCreateNestedManyWithoutRequisitionInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedCreateNestedManyWithoutRequisitionInput;
};
export type Purchasing_RequisitionsCreateOrConnectWithoutPurchaseOrderItemsInput = {
    where: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutPurchaseOrderItemsInput>;
};
export type Purchasing_RequisitionsUpsertWithoutPurchaseOrderItemsInput = {
    update: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_RequisitionsUncheckedUpdateWithoutPurchaseOrderItemsInput>;
    create: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutPurchaseOrderItemsInput>;
    where?: Prisma.Purchasing_RequisitionsWhereInput;
};
export type Purchasing_RequisitionsUpdateToOneWithWhereWithoutPurchaseOrderItemsInput = {
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    data: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_RequisitionsUncheckedUpdateWithoutPurchaseOrderItemsInput>;
};
export type Purchasing_RequisitionsUpdateWithoutPurchaseOrderItemsInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsUpdateManyWithoutRequisitionNestedInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUpdateManyWithoutRequisitionNestedInput;
};
export type Purchasing_RequisitionsUncheckedUpdateWithoutPurchaseOrderItemsInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput;
    materialWarehousingItems?: Prisma.Material_Warehousing_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput;
};
export type Purchasing_RequisitionsCreateWithoutMaterialWarehousingItemsInput = {
    requisitionId: string;
    requisitionDate: Date | string;
    department: string;
    requester: string;
    soNo: string;
    note?: string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsCreateNestedManyWithoutRequisitionInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsCreateNestedManyWithoutRequisitionInput;
};
export type Purchasing_RequisitionsUncheckedCreateWithoutMaterialWarehousingItemsInput = {
    requisitionId: string;
    requisitionDate: Date | string;
    department: string;
    requester: string;
    soNo: string;
    note?: string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsUncheckedCreateNestedManyWithoutRequisitionInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedCreateNestedManyWithoutRequisitionInput;
};
export type Purchasing_RequisitionsCreateOrConnectWithoutMaterialWarehousingItemsInput = {
    where: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutMaterialWarehousingItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutMaterialWarehousingItemsInput>;
};
export type Purchasing_RequisitionsUpsertWithoutMaterialWarehousingItemsInput = {
    update: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateWithoutMaterialWarehousingItemsInput, Prisma.Purchasing_RequisitionsUncheckedUpdateWithoutMaterialWarehousingItemsInput>;
    create: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateWithoutMaterialWarehousingItemsInput, Prisma.Purchasing_RequisitionsUncheckedCreateWithoutMaterialWarehousingItemsInput>;
    where?: Prisma.Purchasing_RequisitionsWhereInput;
};
export type Purchasing_RequisitionsUpdateToOneWithWhereWithoutMaterialWarehousingItemsInput = {
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    data: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateWithoutMaterialWarehousingItemsInput, Prisma.Purchasing_RequisitionsUncheckedUpdateWithoutMaterialWarehousingItemsInput>;
};
export type Purchasing_RequisitionsUpdateWithoutMaterialWarehousingItemsInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsUpdateManyWithoutRequisitionNestedInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUpdateManyWithoutRequisitionNestedInput;
};
export type Purchasing_RequisitionsUncheckedUpdateWithoutMaterialWarehousingItemsInput = {
    requisitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requisitionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.StringFieldUpdateOperationsInput | string;
    requester?: Prisma.StringFieldUpdateOperationsInput | string;
    soNo?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseRequisitionItems?: Prisma.Purchase_Requisition_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedUpdateManyWithoutRequisitionNestedInput;
};
/**
 * Count Type Purchasing_RequisitionsCountOutputType
 */
export type Purchasing_RequisitionsCountOutputType = {
    purchaseRequisitionItems: number;
    purchaseOrderItems: number;
    materialWarehousingItems: number;
};
export type Purchasing_RequisitionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseRequisitionItems?: boolean | Purchasing_RequisitionsCountOutputTypeCountPurchaseRequisitionItemsArgs;
    purchaseOrderItems?: boolean | Purchasing_RequisitionsCountOutputTypeCountPurchaseOrderItemsArgs;
    materialWarehousingItems?: boolean | Purchasing_RequisitionsCountOutputTypeCountMaterialWarehousingItemsArgs;
};
/**
 * Purchasing_RequisitionsCountOutputType without action
 */
export type Purchasing_RequisitionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_RequisitionsCountOutputType
     */
    select?: Prisma.Purchasing_RequisitionsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Purchasing_RequisitionsCountOutputType without action
 */
export type Purchasing_RequisitionsCountOutputTypeCountPurchaseRequisitionItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
};
/**
 * Purchasing_RequisitionsCountOutputType without action
 */
export type Purchasing_RequisitionsCountOutputTypeCountPurchaseOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Purchase_Order_ItemsWhereInput;
};
/**
 * Purchasing_RequisitionsCountOutputType without action
 */
export type Purchasing_RequisitionsCountOutputTypeCountMaterialWarehousingItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Material_Warehousing_ItemsWhereInput;
};
export type Purchasing_RequisitionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    requisitionId?: boolean;
    requisitionDate?: boolean;
    department?: boolean;
    requester?: boolean;
    soNo?: boolean;
    note?: boolean;
    purchaseRequisitionItems?: boolean | Prisma.Purchasing_Requisitions$purchaseRequisitionItemsArgs<ExtArgs>;
    purchaseOrderItems?: boolean | Prisma.Purchasing_Requisitions$purchaseOrderItemsArgs<ExtArgs>;
    materialWarehousingItems?: boolean | Prisma.Purchasing_Requisitions$materialWarehousingItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Purchasing_RequisitionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchasing_Requisitions"]>;
export type Purchasing_RequisitionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    requisitionId?: boolean;
    requisitionDate?: boolean;
    department?: boolean;
    requester?: boolean;
    soNo?: boolean;
    note?: boolean;
}, ExtArgs["result"]["purchasing_Requisitions"]>;
export type Purchasing_RequisitionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    requisitionId?: boolean;
    requisitionDate?: boolean;
    department?: boolean;
    requester?: boolean;
    soNo?: boolean;
    note?: boolean;
}, ExtArgs["result"]["purchasing_Requisitions"]>;
export type Purchasing_RequisitionsSelectScalar = {
    requisitionId?: boolean;
    requisitionDate?: boolean;
    department?: boolean;
    requester?: boolean;
    soNo?: boolean;
    note?: boolean;
};
export type Purchasing_RequisitionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"requisitionId" | "requisitionDate" | "department" | "requester" | "soNo" | "note", ExtArgs["result"]["purchasing_Requisitions"]>;
export type Purchasing_RequisitionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseRequisitionItems?: boolean | Prisma.Purchasing_Requisitions$purchaseRequisitionItemsArgs<ExtArgs>;
    purchaseOrderItems?: boolean | Prisma.Purchasing_Requisitions$purchaseOrderItemsArgs<ExtArgs>;
    materialWarehousingItems?: boolean | Prisma.Purchasing_Requisitions$materialWarehousingItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Purchasing_RequisitionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type Purchasing_RequisitionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type Purchasing_RequisitionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $Purchasing_RequisitionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Purchasing_Requisitions";
    objects: {
        purchaseRequisitionItems: Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>[];
        purchaseOrderItems: Prisma.$Purchase_Order_ItemsPayload<ExtArgs>[];
        materialWarehousingItems: Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        requisitionId: string;
        requisitionDate: Date;
        department: string;
        requester: string;
        soNo: string;
        note: string | null;
    }, ExtArgs["result"]["purchasing_Requisitions"]>;
    composites: {};
};
export type Purchasing_RequisitionsGetPayload<S extends boolean | null | undefined | Purchasing_RequisitionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload, S>;
export type Purchasing_RequisitionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Purchasing_RequisitionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Purchasing_RequisitionsCountAggregateInputType | true;
};
export interface Purchasing_RequisitionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Purchasing_Requisitions'];
        meta: {
            name: 'Purchasing_Requisitions';
        };
    };
    /**
     * Find zero or one Purchasing_Requisitions that matches the filter.
     * @param {Purchasing_RequisitionsFindUniqueArgs} args - Arguments to find a Purchasing_Requisitions
     * @example
     * // Get one Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Purchasing_RequisitionsFindUniqueArgs>(args: Prisma.SelectSubset<T, Purchasing_RequisitionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Purchasing_Requisitions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Purchasing_RequisitionsFindUniqueOrThrowArgs} args - Arguments to find a Purchasing_Requisitions
     * @example
     * // Get one Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Purchasing_RequisitionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Purchasing_RequisitionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchasing_Requisitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_RequisitionsFindFirstArgs} args - Arguments to find a Purchasing_Requisitions
     * @example
     * // Get one Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Purchasing_RequisitionsFindFirstArgs>(args?: Prisma.SelectSubset<T, Purchasing_RequisitionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchasing_Requisitions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_RequisitionsFindFirstOrThrowArgs} args - Arguments to find a Purchasing_Requisitions
     * @example
     * // Get one Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Purchasing_RequisitionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Purchasing_RequisitionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Purchasing_Requisitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_RequisitionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.findMany()
     *
     * // Get first 10 Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.findMany({ take: 10 })
     *
     * // Only select the `requisitionId`
     * const purchasing_RequisitionsWithRequisitionIdOnly = await prisma.purchasing_Requisitions.findMany({ select: { requisitionId: true } })
     *
     */
    findMany<T extends Purchasing_RequisitionsFindManyArgs>(args?: Prisma.SelectSubset<T, Purchasing_RequisitionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Purchasing_Requisitions.
     * @param {Purchasing_RequisitionsCreateArgs} args - Arguments to create a Purchasing_Requisitions.
     * @example
     * // Create one Purchasing_Requisitions
     * const Purchasing_Requisitions = await prisma.purchasing_Requisitions.create({
     *   data: {
     *     // ... data to create a Purchasing_Requisitions
     *   }
     * })
     *
     */
    create<T extends Purchasing_RequisitionsCreateArgs>(args: Prisma.SelectSubset<T, Purchasing_RequisitionsCreateArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Purchasing_Requisitions.
     * @param {Purchasing_RequisitionsCreateManyArgs} args - Arguments to create many Purchasing_Requisitions.
     * @example
     * // Create many Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Purchasing_RequisitionsCreateManyArgs>(args?: Prisma.SelectSubset<T, Purchasing_RequisitionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Purchasing_Requisitions and returns the data saved in the database.
     * @param {Purchasing_RequisitionsCreateManyAndReturnArgs} args - Arguments to create many Purchasing_Requisitions.
     * @example
     * // Create many Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Purchasing_Requisitions and only return the `requisitionId`
     * const purchasing_RequisitionsWithRequisitionIdOnly = await prisma.purchasing_Requisitions.createManyAndReturn({
     *   select: { requisitionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Purchasing_RequisitionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Purchasing_RequisitionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Purchasing_Requisitions.
     * @param {Purchasing_RequisitionsDeleteArgs} args - Arguments to delete one Purchasing_Requisitions.
     * @example
     * // Delete one Purchasing_Requisitions
     * const Purchasing_Requisitions = await prisma.purchasing_Requisitions.delete({
     *   where: {
     *     // ... filter to delete one Purchasing_Requisitions
     *   }
     * })
     *
     */
    delete<T extends Purchasing_RequisitionsDeleteArgs>(args: Prisma.SelectSubset<T, Purchasing_RequisitionsDeleteArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Purchasing_Requisitions.
     * @param {Purchasing_RequisitionsUpdateArgs} args - Arguments to update one Purchasing_Requisitions.
     * @example
     * // Update one Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Purchasing_RequisitionsUpdateArgs>(args: Prisma.SelectSubset<T, Purchasing_RequisitionsUpdateArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Purchasing_Requisitions.
     * @param {Purchasing_RequisitionsDeleteManyArgs} args - Arguments to filter Purchasing_Requisitions to delete.
     * @example
     * // Delete a few Purchasing_Requisitions
     * const { count } = await prisma.purchasing_Requisitions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Purchasing_RequisitionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, Purchasing_RequisitionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchasing_Requisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_RequisitionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Purchasing_RequisitionsUpdateManyArgs>(args: Prisma.SelectSubset<T, Purchasing_RequisitionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchasing_Requisitions and returns the data updated in the database.
     * @param {Purchasing_RequisitionsUpdateManyAndReturnArgs} args - Arguments to update many Purchasing_Requisitions.
     * @example
     * // Update many Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Purchasing_Requisitions and only return the `requisitionId`
     * const purchasing_RequisitionsWithRequisitionIdOnly = await prisma.purchasing_Requisitions.updateManyAndReturn({
     *   select: { requisitionId: true },
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
    updateManyAndReturn<T extends Purchasing_RequisitionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Purchasing_RequisitionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Purchasing_Requisitions.
     * @param {Purchasing_RequisitionsUpsertArgs} args - Arguments to update or create a Purchasing_Requisitions.
     * @example
     * // Update or create a Purchasing_Requisitions
     * const purchasing_Requisitions = await prisma.purchasing_Requisitions.upsert({
     *   create: {
     *     // ... data to create a Purchasing_Requisitions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchasing_Requisitions we want to update
     *   }
     * })
     */
    upsert<T extends Purchasing_RequisitionsUpsertArgs>(args: Prisma.SelectSubset<T, Purchasing_RequisitionsUpsertArgs<ExtArgs>>): Prisma.Prisma__Purchasing_RequisitionsClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_RequisitionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Purchasing_Requisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_RequisitionsCountArgs} args - Arguments to filter Purchasing_Requisitions to count.
     * @example
     * // Count the number of Purchasing_Requisitions
     * const count = await prisma.purchasing_Requisitions.count({
     *   where: {
     *     // ... the filter for the Purchasing_Requisitions we want to count
     *   }
     * })
    **/
    count<T extends Purchasing_RequisitionsCountArgs>(args?: Prisma.Subset<T, Purchasing_RequisitionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Purchasing_RequisitionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Purchasing_Requisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_RequisitionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Purchasing_RequisitionsAggregateArgs>(args: Prisma.Subset<T, Purchasing_RequisitionsAggregateArgs>): Prisma.PrismaPromise<GetPurchasing_RequisitionsAggregateType<T>>;
    /**
     * Group by Purchasing_Requisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_RequisitionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Purchasing_RequisitionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Purchasing_RequisitionsGroupByArgs['orderBy'];
    } : {
        orderBy?: Purchasing_RequisitionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Purchasing_RequisitionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasing_RequisitionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Purchasing_Requisitions model
     */
    readonly fields: Purchasing_RequisitionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Purchasing_Requisitions.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Purchasing_RequisitionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchaseRequisitionItems<T extends Prisma.Purchasing_Requisitions$purchaseRequisitionItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchasing_Requisitions$purchaseRequisitionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchase_Requisition_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchaseOrderItems<T extends Prisma.Purchasing_Requisitions$purchaseOrderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchasing_Requisitions$purchaseOrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materialWarehousingItems<T extends Prisma.Purchasing_Requisitions$materialWarehousingItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchasing_Requisitions$materialWarehousingItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Purchasing_Requisitions model
 */
export interface Purchasing_RequisitionsFieldRefs {
    readonly requisitionId: Prisma.FieldRef<"Purchasing_Requisitions", 'String'>;
    readonly requisitionDate: Prisma.FieldRef<"Purchasing_Requisitions", 'DateTime'>;
    readonly department: Prisma.FieldRef<"Purchasing_Requisitions", 'String'>;
    readonly requester: Prisma.FieldRef<"Purchasing_Requisitions", 'String'>;
    readonly soNo: Prisma.FieldRef<"Purchasing_Requisitions", 'String'>;
    readonly note: Prisma.FieldRef<"Purchasing_Requisitions", 'String'>;
}
/**
 * Purchasing_Requisitions findUnique
 */
export type Purchasing_RequisitionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchasing_Requisitions to fetch.
     */
    where: Prisma.Purchasing_RequisitionsWhereUniqueInput;
};
/**
 * Purchasing_Requisitions findUniqueOrThrow
 */
export type Purchasing_RequisitionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchasing_Requisitions to fetch.
     */
    where: Prisma.Purchasing_RequisitionsWhereUniqueInput;
};
/**
 * Purchasing_Requisitions findFirst
 */
export type Purchasing_RequisitionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchasing_Requisitions to fetch.
     */
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchasing_Requisitions to fetch.
     */
    orderBy?: Prisma.Purchasing_RequisitionsOrderByWithRelationInput | Prisma.Purchasing_RequisitionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchasing_Requisitions.
     */
    cursor?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchasing_Requisitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchasing_Requisitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchasing_Requisitions.
     */
    distinct?: Prisma.Purchasing_RequisitionsScalarFieldEnum | Prisma.Purchasing_RequisitionsScalarFieldEnum[];
};
/**
 * Purchasing_Requisitions findFirstOrThrow
 */
export type Purchasing_RequisitionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchasing_Requisitions to fetch.
     */
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchasing_Requisitions to fetch.
     */
    orderBy?: Prisma.Purchasing_RequisitionsOrderByWithRelationInput | Prisma.Purchasing_RequisitionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchasing_Requisitions.
     */
    cursor?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchasing_Requisitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchasing_Requisitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchasing_Requisitions.
     */
    distinct?: Prisma.Purchasing_RequisitionsScalarFieldEnum | Prisma.Purchasing_RequisitionsScalarFieldEnum[];
};
/**
 * Purchasing_Requisitions findMany
 */
export type Purchasing_RequisitionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
    /**
     * Filter, which Purchasing_Requisitions to fetch.
     */
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchasing_Requisitions to fetch.
     */
    orderBy?: Prisma.Purchasing_RequisitionsOrderByWithRelationInput | Prisma.Purchasing_RequisitionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Purchasing_Requisitions.
     */
    cursor?: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchasing_Requisitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchasing_Requisitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchasing_Requisitions.
     */
    distinct?: Prisma.Purchasing_RequisitionsScalarFieldEnum | Prisma.Purchasing_RequisitionsScalarFieldEnum[];
};
/**
 * Purchasing_Requisitions create
 */
export type Purchasing_RequisitionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Purchasing_Requisitions.
     */
    data: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateInput, Prisma.Purchasing_RequisitionsUncheckedCreateInput>;
};
/**
 * Purchasing_Requisitions createMany
 */
export type Purchasing_RequisitionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchasing_Requisitions.
     */
    data: Prisma.Purchasing_RequisitionsCreateManyInput | Prisma.Purchasing_RequisitionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Purchasing_Requisitions createManyAndReturn
 */
export type Purchasing_RequisitionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * The data used to create many Purchasing_Requisitions.
     */
    data: Prisma.Purchasing_RequisitionsCreateManyInput | Prisma.Purchasing_RequisitionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Purchasing_Requisitions update
 */
export type Purchasing_RequisitionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Purchasing_Requisitions.
     */
    data: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateInput, Prisma.Purchasing_RequisitionsUncheckedUpdateInput>;
    /**
     * Choose, which Purchasing_Requisitions to update.
     */
    where: Prisma.Purchasing_RequisitionsWhereUniqueInput;
};
/**
 * Purchasing_Requisitions updateMany
 */
export type Purchasing_RequisitionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchasing_Requisitions.
     */
    data: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateManyMutationInput, Prisma.Purchasing_RequisitionsUncheckedUpdateManyInput>;
    /**
     * Filter which Purchasing_Requisitions to update
     */
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    /**
     * Limit how many Purchasing_Requisitions to update.
     */
    limit?: number;
};
/**
 * Purchasing_Requisitions updateManyAndReturn
 */
export type Purchasing_RequisitionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * The data used to update Purchasing_Requisitions.
     */
    data: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateManyMutationInput, Prisma.Purchasing_RequisitionsUncheckedUpdateManyInput>;
    /**
     * Filter which Purchasing_Requisitions to update
     */
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    /**
     * Limit how many Purchasing_Requisitions to update.
     */
    limit?: number;
};
/**
 * Purchasing_Requisitions upsert
 */
export type Purchasing_RequisitionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Purchasing_Requisitions to update in case it exists.
     */
    where: Prisma.Purchasing_RequisitionsWhereUniqueInput;
    /**
     * In case the Purchasing_Requisitions found by the `where` argument doesn't exist, create a new Purchasing_Requisitions with this data.
     */
    create: Prisma.XOR<Prisma.Purchasing_RequisitionsCreateInput, Prisma.Purchasing_RequisitionsUncheckedCreateInput>;
    /**
     * In case the Purchasing_Requisitions was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Purchasing_RequisitionsUpdateInput, Prisma.Purchasing_RequisitionsUncheckedUpdateInput>;
};
/**
 * Purchasing_Requisitions delete
 */
export type Purchasing_RequisitionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
    /**
     * Filter which Purchasing_Requisitions to delete.
     */
    where: Prisma.Purchasing_RequisitionsWhereUniqueInput;
};
/**
 * Purchasing_Requisitions deleteMany
 */
export type Purchasing_RequisitionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchasing_Requisitions to delete
     */
    where?: Prisma.Purchasing_RequisitionsWhereInput;
    /**
     * Limit how many Purchasing_Requisitions to delete.
     */
    limit?: number;
};
/**
 * Purchasing_Requisitions.purchaseRequisitionItems
 */
export type Purchasing_Requisitions$purchaseRequisitionItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.Purchase_Requisition_ItemsWhereInput;
    orderBy?: Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput | Prisma.Purchase_Requisition_ItemsOrderByWithRelationInput[];
    cursor?: Prisma.Purchase_Requisition_ItemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Purchase_Requisition_ItemsScalarFieldEnum | Prisma.Purchase_Requisition_ItemsScalarFieldEnum[];
};
/**
 * Purchasing_Requisitions.purchaseOrderItems
 */
export type Purchasing_Requisitions$purchaseOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.Purchase_Order_ItemsWhereInput;
    orderBy?: Prisma.Purchase_Order_ItemsOrderByWithRelationInput | Prisma.Purchase_Order_ItemsOrderByWithRelationInput[];
    cursor?: Prisma.Purchase_Order_ItemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Purchase_Order_ItemsScalarFieldEnum | Prisma.Purchase_Order_ItemsScalarFieldEnum[];
};
/**
 * Purchasing_Requisitions.materialWarehousingItems
 */
export type Purchasing_Requisitions$materialWarehousingItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Purchasing_Requisitions without action
 */
export type Purchasing_RequisitionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Requisitions
     */
    select?: Prisma.Purchasing_RequisitionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Requisitions
     */
    omit?: Prisma.Purchasing_RequisitionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_RequisitionsInclude<ExtArgs> | null;
};
//# sourceMappingURL=Purchasing_Requisitions.d.ts.map