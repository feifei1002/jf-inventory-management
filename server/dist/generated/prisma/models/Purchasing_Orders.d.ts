import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Purchasing_Orders
 *
 */
export type Purchasing_OrdersModel = runtime.Types.Result.DefaultSelection<Prisma.$Purchasing_OrdersPayload>;
export type AggregatePurchasing_Orders = {
    _count: Purchasing_OrdersCountAggregateOutputType | null;
    _avg: Purchasing_OrdersAvgAggregateOutputType | null;
    _sum: Purchasing_OrdersSumAggregateOutputType | null;
    _min: Purchasing_OrdersMinAggregateOutputType | null;
    _max: Purchasing_OrdersMaxAggregateOutputType | null;
};
export type Purchasing_OrdersAvgAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    vat: runtime.Decimal | null;
    finalTotal: runtime.Decimal | null;
};
export type Purchasing_OrdersSumAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    vat: runtime.Decimal | null;
    finalTotal: runtime.Decimal | null;
};
export type Purchasing_OrdersMinAggregateOutputType = {
    purchaseId: string | null;
    purchaseDate: Date | null;
    supplierId: string | null;
    supplierName: string | null;
    contactPerson: string | null;
    paymentTerm: string | null;
    supplierAddress: string | null;
    subtotal: runtime.Decimal | null;
    vat: runtime.Decimal | null;
    finalTotal: runtime.Decimal | null;
};
export type Purchasing_OrdersMaxAggregateOutputType = {
    purchaseId: string | null;
    purchaseDate: Date | null;
    supplierId: string | null;
    supplierName: string | null;
    contactPerson: string | null;
    paymentTerm: string | null;
    supplierAddress: string | null;
    subtotal: runtime.Decimal | null;
    vat: runtime.Decimal | null;
    finalTotal: runtime.Decimal | null;
};
export type Purchasing_OrdersCountAggregateOutputType = {
    purchaseId: number;
    purchaseDate: number;
    supplierId: number;
    supplierName: number;
    contactPerson: number;
    paymentTerm: number;
    supplierAddress: number;
    subtotal: number;
    vat: number;
    finalTotal: number;
    _all: number;
};
export type Purchasing_OrdersAvgAggregateInputType = {
    subtotal?: true;
    vat?: true;
    finalTotal?: true;
};
export type Purchasing_OrdersSumAggregateInputType = {
    subtotal?: true;
    vat?: true;
    finalTotal?: true;
};
export type Purchasing_OrdersMinAggregateInputType = {
    purchaseId?: true;
    purchaseDate?: true;
    supplierId?: true;
    supplierName?: true;
    contactPerson?: true;
    paymentTerm?: true;
    supplierAddress?: true;
    subtotal?: true;
    vat?: true;
    finalTotal?: true;
};
export type Purchasing_OrdersMaxAggregateInputType = {
    purchaseId?: true;
    purchaseDate?: true;
    supplierId?: true;
    supplierName?: true;
    contactPerson?: true;
    paymentTerm?: true;
    supplierAddress?: true;
    subtotal?: true;
    vat?: true;
    finalTotal?: true;
};
export type Purchasing_OrdersCountAggregateInputType = {
    purchaseId?: true;
    purchaseDate?: true;
    supplierId?: true;
    supplierName?: true;
    contactPerson?: true;
    paymentTerm?: true;
    supplierAddress?: true;
    subtotal?: true;
    vat?: true;
    finalTotal?: true;
    _all?: true;
};
export type Purchasing_OrdersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchasing_Orders to aggregate.
     */
    where?: Prisma.Purchasing_OrdersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchasing_Orders to fetch.
     */
    orderBy?: Prisma.Purchasing_OrdersOrderByWithRelationInput | Prisma.Purchasing_OrdersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Purchasing_OrdersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchasing_Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchasing_Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Purchasing_Orders
    **/
    _count?: true | Purchasing_OrdersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Purchasing_OrdersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Purchasing_OrdersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Purchasing_OrdersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Purchasing_OrdersMaxAggregateInputType;
};
export type GetPurchasing_OrdersAggregateType<T extends Purchasing_OrdersAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchasing_Orders]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchasing_Orders[P]> : Prisma.GetScalarType<T[P], AggregatePurchasing_Orders[P]>;
};
export type Purchasing_OrdersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Purchasing_OrdersWhereInput;
    orderBy?: Prisma.Purchasing_OrdersOrderByWithAggregationInput | Prisma.Purchasing_OrdersOrderByWithAggregationInput[];
    by: Prisma.Purchasing_OrdersScalarFieldEnum[] | Prisma.Purchasing_OrdersScalarFieldEnum;
    having?: Prisma.Purchasing_OrdersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Purchasing_OrdersCountAggregateInputType | true;
    _avg?: Purchasing_OrdersAvgAggregateInputType;
    _sum?: Purchasing_OrdersSumAggregateInputType;
    _min?: Purchasing_OrdersMinAggregateInputType;
    _max?: Purchasing_OrdersMaxAggregateInputType;
};
export type Purchasing_OrdersGroupByOutputType = {
    purchaseId: string;
    purchaseDate: Date;
    supplierId: string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal;
    vat: runtime.Decimal;
    finalTotal: runtime.Decimal;
    _count: Purchasing_OrdersCountAggregateOutputType | null;
    _avg: Purchasing_OrdersAvgAggregateOutputType | null;
    _sum: Purchasing_OrdersSumAggregateOutputType | null;
    _min: Purchasing_OrdersMinAggregateOutputType | null;
    _max: Purchasing_OrdersMaxAggregateOutputType | null;
};
export type GetPurchasing_OrdersGroupByPayload<T extends Purchasing_OrdersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Purchasing_OrdersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Purchasing_OrdersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Purchasing_OrdersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Purchasing_OrdersGroupByOutputType[P]>;
}>>;
export type Purchasing_OrdersWhereInput = {
    AND?: Prisma.Purchasing_OrdersWhereInput | Prisma.Purchasing_OrdersWhereInput[];
    OR?: Prisma.Purchasing_OrdersWhereInput[];
    NOT?: Prisma.Purchasing_OrdersWhereInput | Prisma.Purchasing_OrdersWhereInput[];
    purchaseId?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    purchaseDate?: Prisma.DateTimeFilter<"Purchasing_Orders"> | Date | string;
    supplierId?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    supplierName?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    contactPerson?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    paymentTerm?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    supplierAddress?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    subtotal?: Prisma.DecimalFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.XOR<Prisma.SuppliersScalarRelationFilter, Prisma.SuppliersWhereInput>;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsListRelationFilter;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsListRelationFilter;
};
export type Purchasing_OrdersOrderByWithRelationInput = {
    purchaseId?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    vat?: Prisma.SortOrder;
    finalTotal?: Prisma.SortOrder;
    supplier?: Prisma.SuppliersOrderByWithRelationInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsOrderByRelationAggregateInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsOrderByRelationAggregateInput;
};
export type Purchasing_OrdersWhereUniqueInput = Prisma.AtLeast<{
    purchaseId?: string;
    AND?: Prisma.Purchasing_OrdersWhereInput | Prisma.Purchasing_OrdersWhereInput[];
    OR?: Prisma.Purchasing_OrdersWhereInput[];
    NOT?: Prisma.Purchasing_OrdersWhereInput | Prisma.Purchasing_OrdersWhereInput[];
    purchaseDate?: Prisma.DateTimeFilter<"Purchasing_Orders"> | Date | string;
    supplierId?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    supplierName?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    contactPerson?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    paymentTerm?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    supplierAddress?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    subtotal?: Prisma.DecimalFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.XOR<Prisma.SuppliersScalarRelationFilter, Prisma.SuppliersWhereInput>;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsListRelationFilter;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsListRelationFilter;
}, "purchaseId">;
export type Purchasing_OrdersOrderByWithAggregationInput = {
    purchaseId?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    vat?: Prisma.SortOrder;
    finalTotal?: Prisma.SortOrder;
    _count?: Prisma.Purchasing_OrdersCountOrderByAggregateInput;
    _avg?: Prisma.Purchasing_OrdersAvgOrderByAggregateInput;
    _max?: Prisma.Purchasing_OrdersMaxOrderByAggregateInput;
    _min?: Prisma.Purchasing_OrdersMinOrderByAggregateInput;
    _sum?: Prisma.Purchasing_OrdersSumOrderByAggregateInput;
};
export type Purchasing_OrdersScalarWhereWithAggregatesInput = {
    AND?: Prisma.Purchasing_OrdersScalarWhereWithAggregatesInput | Prisma.Purchasing_OrdersScalarWhereWithAggregatesInput[];
    OR?: Prisma.Purchasing_OrdersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Purchasing_OrdersScalarWhereWithAggregatesInput | Prisma.Purchasing_OrdersScalarWhereWithAggregatesInput[];
    purchaseId?: Prisma.StringWithAggregatesFilter<"Purchasing_Orders"> | string;
    purchaseDate?: Prisma.DateTimeWithAggregatesFilter<"Purchasing_Orders"> | Date | string;
    supplierId?: Prisma.StringWithAggregatesFilter<"Purchasing_Orders"> | string;
    supplierName?: Prisma.StringWithAggregatesFilter<"Purchasing_Orders"> | string;
    contactPerson?: Prisma.StringWithAggregatesFilter<"Purchasing_Orders"> | string;
    paymentTerm?: Prisma.StringWithAggregatesFilter<"Purchasing_Orders"> | string;
    supplierAddress?: Prisma.StringWithAggregatesFilter<"Purchasing_Orders"> | string;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalWithAggregatesFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalWithAggregatesFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Purchasing_OrdersCreateInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier: Prisma.SuppliersCreateNestedOneWithoutPurchasingOrdersInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsCreateNestedManyWithoutPurchaseInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsCreateNestedManyWithoutPurchaseInput;
};
export type Purchasing_OrdersUncheckedCreateInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierId: string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedCreateNestedManyWithoutPurchaseInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedCreateNestedManyWithoutPurchaseInput;
};
export type Purchasing_OrdersUpdateInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.SuppliersUpdateOneRequiredWithoutPurchasingOrdersNestedInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUpdateManyWithoutPurchaseNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUpdateManyWithoutPurchaseNestedInput;
};
export type Purchasing_OrdersUncheckedUpdateInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedUpdateManyWithoutPurchaseNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedUpdateManyWithoutPurchaseNestedInput;
};
export type Purchasing_OrdersCreateManyInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierId: string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Purchasing_OrdersUpdateManyMutationInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Purchasing_OrdersUncheckedUpdateManyInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Purchasing_OrdersListRelationFilter = {
    every?: Prisma.Purchasing_OrdersWhereInput;
    some?: Prisma.Purchasing_OrdersWhereInput;
    none?: Prisma.Purchasing_OrdersWhereInput;
};
export type Purchasing_OrdersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Purchasing_OrdersCountOrderByAggregateInput = {
    purchaseId?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    vat?: Prisma.SortOrder;
    finalTotal?: Prisma.SortOrder;
};
export type Purchasing_OrdersAvgOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    vat?: Prisma.SortOrder;
    finalTotal?: Prisma.SortOrder;
};
export type Purchasing_OrdersMaxOrderByAggregateInput = {
    purchaseId?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    vat?: Prisma.SortOrder;
    finalTotal?: Prisma.SortOrder;
};
export type Purchasing_OrdersMinOrderByAggregateInput = {
    purchaseId?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    supplierName?: Prisma.SortOrder;
    contactPerson?: Prisma.SortOrder;
    paymentTerm?: Prisma.SortOrder;
    supplierAddress?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    vat?: Prisma.SortOrder;
    finalTotal?: Prisma.SortOrder;
};
export type Purchasing_OrdersSumOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    vat?: Prisma.SortOrder;
    finalTotal?: Prisma.SortOrder;
};
export type Purchasing_OrdersScalarRelationFilter = {
    is?: Prisma.Purchasing_OrdersWhereInput;
    isNot?: Prisma.Purchasing_OrdersWhereInput;
};
export type Purchasing_OrdersCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutSupplierInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput> | Prisma.Purchasing_OrdersCreateWithoutSupplierInput[] | Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Purchasing_OrdersCreateOrConnectWithoutSupplierInput | Prisma.Purchasing_OrdersCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.Purchasing_OrdersCreateManySupplierInputEnvelope;
    connect?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
};
export type Purchasing_OrdersUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutSupplierInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput> | Prisma.Purchasing_OrdersCreateWithoutSupplierInput[] | Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Purchasing_OrdersCreateOrConnectWithoutSupplierInput | Prisma.Purchasing_OrdersCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.Purchasing_OrdersCreateManySupplierInputEnvelope;
    connect?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
};
export type Purchasing_OrdersUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutSupplierInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput> | Prisma.Purchasing_OrdersCreateWithoutSupplierInput[] | Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Purchasing_OrdersCreateOrConnectWithoutSupplierInput | Prisma.Purchasing_OrdersCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.Purchasing_OrdersUpsertWithWhereUniqueWithoutSupplierInput | Prisma.Purchasing_OrdersUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.Purchasing_OrdersCreateManySupplierInputEnvelope;
    set?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
    disconnect?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
    delete?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
    connect?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
    update?: Prisma.Purchasing_OrdersUpdateWithWhereUniqueWithoutSupplierInput | Prisma.Purchasing_OrdersUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.Purchasing_OrdersUpdateManyWithWhereWithoutSupplierInput | Prisma.Purchasing_OrdersUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.Purchasing_OrdersScalarWhereInput | Prisma.Purchasing_OrdersScalarWhereInput[];
};
export type Purchasing_OrdersUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutSupplierInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput> | Prisma.Purchasing_OrdersCreateWithoutSupplierInput[] | Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Purchasing_OrdersCreateOrConnectWithoutSupplierInput | Prisma.Purchasing_OrdersCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.Purchasing_OrdersUpsertWithWhereUniqueWithoutSupplierInput | Prisma.Purchasing_OrdersUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.Purchasing_OrdersCreateManySupplierInputEnvelope;
    set?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
    disconnect?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
    delete?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
    connect?: Prisma.Purchasing_OrdersWhereUniqueInput | Prisma.Purchasing_OrdersWhereUniqueInput[];
    update?: Prisma.Purchasing_OrdersUpdateWithWhereUniqueWithoutSupplierInput | Prisma.Purchasing_OrdersUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.Purchasing_OrdersUpdateManyWithWhereWithoutSupplierInput | Prisma.Purchasing_OrdersUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.Purchasing_OrdersScalarWhereInput | Prisma.Purchasing_OrdersScalarWhereInput[];
};
export type Purchasing_OrdersCreateNestedOneWithoutPurchaseOrderItemsInput = {
    create?: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutPurchaseOrderItemsInput>;
    connectOrCreate?: Prisma.Purchasing_OrdersCreateOrConnectWithoutPurchaseOrderItemsInput;
    connect?: Prisma.Purchasing_OrdersWhereUniqueInput;
};
export type Purchasing_OrdersUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutPurchaseOrderItemsInput>;
    connectOrCreate?: Prisma.Purchasing_OrdersCreateOrConnectWithoutPurchaseOrderItemsInput;
    upsert?: Prisma.Purchasing_OrdersUpsertWithoutPurchaseOrderItemsInput;
    connect?: Prisma.Purchasing_OrdersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Purchasing_OrdersUpdateToOneWithWhereWithoutPurchaseOrderItemsInput, Prisma.Purchasing_OrdersUpdateWithoutPurchaseOrderItemsInput>, Prisma.Purchasing_OrdersUncheckedUpdateWithoutPurchaseOrderItemsInput>;
};
export type Purchasing_OrdersCreateNestedOneWithoutMaterialWarehousingFormsInput = {
    create?: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutMaterialWarehousingFormsInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutMaterialWarehousingFormsInput>;
    connectOrCreate?: Prisma.Purchasing_OrdersCreateOrConnectWithoutMaterialWarehousingFormsInput;
    connect?: Prisma.Purchasing_OrdersWhereUniqueInput;
};
export type Purchasing_OrdersUpdateOneRequiredWithoutMaterialWarehousingFormsNestedInput = {
    create?: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutMaterialWarehousingFormsInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutMaterialWarehousingFormsInput>;
    connectOrCreate?: Prisma.Purchasing_OrdersCreateOrConnectWithoutMaterialWarehousingFormsInput;
    upsert?: Prisma.Purchasing_OrdersUpsertWithoutMaterialWarehousingFormsInput;
    connect?: Prisma.Purchasing_OrdersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Purchasing_OrdersUpdateToOneWithWhereWithoutMaterialWarehousingFormsInput, Prisma.Purchasing_OrdersUpdateWithoutMaterialWarehousingFormsInput>, Prisma.Purchasing_OrdersUncheckedUpdateWithoutMaterialWarehousingFormsInput>;
};
export type Purchasing_OrdersCreateWithoutSupplierInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsCreateNestedManyWithoutPurchaseInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsCreateNestedManyWithoutPurchaseInput;
};
export type Purchasing_OrdersUncheckedCreateWithoutSupplierInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedCreateNestedManyWithoutPurchaseInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedCreateNestedManyWithoutPurchaseInput;
};
export type Purchasing_OrdersCreateOrConnectWithoutSupplierInput = {
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutSupplierInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput>;
};
export type Purchasing_OrdersCreateManySupplierInputEnvelope = {
    data: Prisma.Purchasing_OrdersCreateManySupplierInput | Prisma.Purchasing_OrdersCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type Purchasing_OrdersUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
    update: Prisma.XOR<Prisma.Purchasing_OrdersUpdateWithoutSupplierInput, Prisma.Purchasing_OrdersUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutSupplierInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutSupplierInput>;
};
export type Purchasing_OrdersUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
    data: Prisma.XOR<Prisma.Purchasing_OrdersUpdateWithoutSupplierInput, Prisma.Purchasing_OrdersUncheckedUpdateWithoutSupplierInput>;
};
export type Purchasing_OrdersUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.Purchasing_OrdersScalarWhereInput;
    data: Prisma.XOR<Prisma.Purchasing_OrdersUpdateManyMutationInput, Prisma.Purchasing_OrdersUncheckedUpdateManyWithoutSupplierInput>;
};
export type Purchasing_OrdersScalarWhereInput = {
    AND?: Prisma.Purchasing_OrdersScalarWhereInput | Prisma.Purchasing_OrdersScalarWhereInput[];
    OR?: Prisma.Purchasing_OrdersScalarWhereInput[];
    NOT?: Prisma.Purchasing_OrdersScalarWhereInput | Prisma.Purchasing_OrdersScalarWhereInput[];
    purchaseId?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    purchaseDate?: Prisma.DateTimeFilter<"Purchasing_Orders"> | Date | string;
    supplierId?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    supplierName?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    contactPerson?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    paymentTerm?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    supplierAddress?: Prisma.StringFilter<"Purchasing_Orders"> | string;
    subtotal?: Prisma.DecimalFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFilter<"Purchasing_Orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Purchasing_OrdersCreateWithoutPurchaseOrderItemsInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier: Prisma.SuppliersCreateNestedOneWithoutPurchasingOrdersInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsCreateNestedManyWithoutPurchaseInput;
};
export type Purchasing_OrdersUncheckedCreateWithoutPurchaseOrderItemsInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierId: string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedCreateNestedManyWithoutPurchaseInput;
};
export type Purchasing_OrdersCreateOrConnectWithoutPurchaseOrderItemsInput = {
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutPurchaseOrderItemsInput>;
};
export type Purchasing_OrdersUpsertWithoutPurchaseOrderItemsInput = {
    update: Prisma.XOR<Prisma.Purchasing_OrdersUpdateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_OrdersUncheckedUpdateWithoutPurchaseOrderItemsInput>;
    create: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutPurchaseOrderItemsInput>;
    where?: Prisma.Purchasing_OrdersWhereInput;
};
export type Purchasing_OrdersUpdateToOneWithWhereWithoutPurchaseOrderItemsInput = {
    where?: Prisma.Purchasing_OrdersWhereInput;
    data: Prisma.XOR<Prisma.Purchasing_OrdersUpdateWithoutPurchaseOrderItemsInput, Prisma.Purchasing_OrdersUncheckedUpdateWithoutPurchaseOrderItemsInput>;
};
export type Purchasing_OrdersUpdateWithoutPurchaseOrderItemsInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.SuppliersUpdateOneRequiredWithoutPurchasingOrdersNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUpdateManyWithoutPurchaseNestedInput;
};
export type Purchasing_OrdersUncheckedUpdateWithoutPurchaseOrderItemsInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedUpdateManyWithoutPurchaseNestedInput;
};
export type Purchasing_OrdersCreateWithoutMaterialWarehousingFormsInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier: Prisma.SuppliersCreateNestedOneWithoutPurchasingOrdersInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsCreateNestedManyWithoutPurchaseInput;
};
export type Purchasing_OrdersUncheckedCreateWithoutMaterialWarehousingFormsInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierId: string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedCreateNestedManyWithoutPurchaseInput;
};
export type Purchasing_OrdersCreateOrConnectWithoutMaterialWarehousingFormsInput = {
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
    create: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutMaterialWarehousingFormsInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutMaterialWarehousingFormsInput>;
};
export type Purchasing_OrdersUpsertWithoutMaterialWarehousingFormsInput = {
    update: Prisma.XOR<Prisma.Purchasing_OrdersUpdateWithoutMaterialWarehousingFormsInput, Prisma.Purchasing_OrdersUncheckedUpdateWithoutMaterialWarehousingFormsInput>;
    create: Prisma.XOR<Prisma.Purchasing_OrdersCreateWithoutMaterialWarehousingFormsInput, Prisma.Purchasing_OrdersUncheckedCreateWithoutMaterialWarehousingFormsInput>;
    where?: Prisma.Purchasing_OrdersWhereInput;
};
export type Purchasing_OrdersUpdateToOneWithWhereWithoutMaterialWarehousingFormsInput = {
    where?: Prisma.Purchasing_OrdersWhereInput;
    data: Prisma.XOR<Prisma.Purchasing_OrdersUpdateWithoutMaterialWarehousingFormsInput, Prisma.Purchasing_OrdersUncheckedUpdateWithoutMaterialWarehousingFormsInput>;
};
export type Purchasing_OrdersUpdateWithoutMaterialWarehousingFormsInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.SuppliersUpdateOneRequiredWithoutPurchasingOrdersNestedInput;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUpdateManyWithoutPurchaseNestedInput;
};
export type Purchasing_OrdersUncheckedUpdateWithoutMaterialWarehousingFormsInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedUpdateManyWithoutPurchaseNestedInput;
};
export type Purchasing_OrdersCreateManySupplierInput = {
    purchaseId: string;
    purchaseDate: Date | string;
    supplierName: string;
    contactPerson: string;
    paymentTerm: string;
    supplierAddress: string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat: runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Purchasing_OrdersUpdateWithoutSupplierInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUpdateManyWithoutPurchaseNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUpdateManyWithoutPurchaseNestedInput;
};
export type Purchasing_OrdersUncheckedUpdateWithoutSupplierInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchaseOrderItems?: Prisma.Purchase_Order_ItemsUncheckedUpdateManyWithoutPurchaseNestedInput;
    materialWarehousingForms?: Prisma.Material_Warehousing_FormsUncheckedUpdateManyWithoutPurchaseNestedInput;
};
export type Purchasing_OrdersUncheckedUpdateManyWithoutSupplierInput = {
    purchaseId?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierName?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPerson?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentTerm?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vat?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    finalTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
/**
 * Count Type Purchasing_OrdersCountOutputType
 */
export type Purchasing_OrdersCountOutputType = {
    purchaseOrderItems: number;
    materialWarehousingForms: number;
};
export type Purchasing_OrdersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrderItems?: boolean | Purchasing_OrdersCountOutputTypeCountPurchaseOrderItemsArgs;
    materialWarehousingForms?: boolean | Purchasing_OrdersCountOutputTypeCountMaterialWarehousingFormsArgs;
};
/**
 * Purchasing_OrdersCountOutputType without action
 */
export type Purchasing_OrdersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_OrdersCountOutputType
     */
    select?: Prisma.Purchasing_OrdersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Purchasing_OrdersCountOutputType without action
 */
export type Purchasing_OrdersCountOutputTypeCountPurchaseOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Purchase_Order_ItemsWhereInput;
};
/**
 * Purchasing_OrdersCountOutputType without action
 */
export type Purchasing_OrdersCountOutputTypeCountMaterialWarehousingFormsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Material_Warehousing_FormsWhereInput;
};
export type Purchasing_OrdersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchaseId?: boolean;
    purchaseDate?: boolean;
    supplierId?: boolean;
    supplierName?: boolean;
    contactPerson?: boolean;
    paymentTerm?: boolean;
    supplierAddress?: boolean;
    subtotal?: boolean;
    vat?: boolean;
    finalTotal?: boolean;
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    purchaseOrderItems?: boolean | Prisma.Purchasing_Orders$purchaseOrderItemsArgs<ExtArgs>;
    materialWarehousingForms?: boolean | Prisma.Purchasing_Orders$materialWarehousingFormsArgs<ExtArgs>;
    _count?: boolean | Prisma.Purchasing_OrdersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchasing_Orders"]>;
export type Purchasing_OrdersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchaseId?: boolean;
    purchaseDate?: boolean;
    supplierId?: boolean;
    supplierName?: boolean;
    contactPerson?: boolean;
    paymentTerm?: boolean;
    supplierAddress?: boolean;
    subtotal?: boolean;
    vat?: boolean;
    finalTotal?: boolean;
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchasing_Orders"]>;
export type Purchasing_OrdersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchaseId?: boolean;
    purchaseDate?: boolean;
    supplierId?: boolean;
    supplierName?: boolean;
    contactPerson?: boolean;
    paymentTerm?: boolean;
    supplierAddress?: boolean;
    subtotal?: boolean;
    vat?: boolean;
    finalTotal?: boolean;
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchasing_Orders"]>;
export type Purchasing_OrdersSelectScalar = {
    purchaseId?: boolean;
    purchaseDate?: boolean;
    supplierId?: boolean;
    supplierName?: boolean;
    contactPerson?: boolean;
    paymentTerm?: boolean;
    supplierAddress?: boolean;
    subtotal?: boolean;
    vat?: boolean;
    finalTotal?: boolean;
};
export type Purchasing_OrdersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"purchaseId" | "purchaseDate" | "supplierId" | "supplierName" | "contactPerson" | "paymentTerm" | "supplierAddress" | "subtotal" | "vat" | "finalTotal", ExtArgs["result"]["purchasing_Orders"]>;
export type Purchasing_OrdersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    purchaseOrderItems?: boolean | Prisma.Purchasing_Orders$purchaseOrderItemsArgs<ExtArgs>;
    materialWarehousingForms?: boolean | Prisma.Purchasing_Orders$materialWarehousingFormsArgs<ExtArgs>;
    _count?: boolean | Prisma.Purchasing_OrdersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type Purchasing_OrdersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
};
export type Purchasing_OrdersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
};
export type $Purchasing_OrdersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Purchasing_Orders";
    objects: {
        supplier: Prisma.$SuppliersPayload<ExtArgs>;
        purchaseOrderItems: Prisma.$Purchase_Order_ItemsPayload<ExtArgs>[];
        materialWarehousingForms: Prisma.$Material_Warehousing_FormsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        purchaseId: string;
        purchaseDate: Date;
        supplierId: string;
        supplierName: string;
        contactPerson: string;
        paymentTerm: string;
        supplierAddress: string;
        subtotal: runtime.Decimal;
        vat: runtime.Decimal;
        finalTotal: runtime.Decimal;
    }, ExtArgs["result"]["purchasing_Orders"]>;
    composites: {};
};
export type Purchasing_OrdersGetPayload<S extends boolean | null | undefined | Purchasing_OrdersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload, S>;
export type Purchasing_OrdersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Purchasing_OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Purchasing_OrdersCountAggregateInputType | true;
};
export interface Purchasing_OrdersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Purchasing_Orders'];
        meta: {
            name: 'Purchasing_Orders';
        };
    };
    /**
     * Find zero or one Purchasing_Orders that matches the filter.
     * @param {Purchasing_OrdersFindUniqueArgs} args - Arguments to find a Purchasing_Orders
     * @example
     * // Get one Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Purchasing_OrdersFindUniqueArgs>(args: Prisma.SelectSubset<T, Purchasing_OrdersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Purchasing_Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Purchasing_OrdersFindUniqueOrThrowArgs} args - Arguments to find a Purchasing_Orders
     * @example
     * // Get one Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Purchasing_OrdersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Purchasing_OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchasing_Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_OrdersFindFirstArgs} args - Arguments to find a Purchasing_Orders
     * @example
     * // Get one Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Purchasing_OrdersFindFirstArgs>(args?: Prisma.SelectSubset<T, Purchasing_OrdersFindFirstArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Purchasing_Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_OrdersFindFirstOrThrowArgs} args - Arguments to find a Purchasing_Orders
     * @example
     * // Get one Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Purchasing_OrdersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Purchasing_OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Purchasing_Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.findMany()
     *
     * // Get first 10 Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.findMany({ take: 10 })
     *
     * // Only select the `purchaseId`
     * const purchasing_OrdersWithPurchaseIdOnly = await prisma.purchasing_Orders.findMany({ select: { purchaseId: true } })
     *
     */
    findMany<T extends Purchasing_OrdersFindManyArgs>(args?: Prisma.SelectSubset<T, Purchasing_OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Purchasing_Orders.
     * @param {Purchasing_OrdersCreateArgs} args - Arguments to create a Purchasing_Orders.
     * @example
     * // Create one Purchasing_Orders
     * const Purchasing_Orders = await prisma.purchasing_Orders.create({
     *   data: {
     *     // ... data to create a Purchasing_Orders
     *   }
     * })
     *
     */
    create<T extends Purchasing_OrdersCreateArgs>(args: Prisma.SelectSubset<T, Purchasing_OrdersCreateArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Purchasing_Orders.
     * @param {Purchasing_OrdersCreateManyArgs} args - Arguments to create many Purchasing_Orders.
     * @example
     * // Create many Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Purchasing_OrdersCreateManyArgs>(args?: Prisma.SelectSubset<T, Purchasing_OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Purchasing_Orders and returns the data saved in the database.
     * @param {Purchasing_OrdersCreateManyAndReturnArgs} args - Arguments to create many Purchasing_Orders.
     * @example
     * // Create many Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Purchasing_Orders and only return the `purchaseId`
     * const purchasing_OrdersWithPurchaseIdOnly = await prisma.purchasing_Orders.createManyAndReturn({
     *   select: { purchaseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Purchasing_OrdersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Purchasing_OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Purchasing_Orders.
     * @param {Purchasing_OrdersDeleteArgs} args - Arguments to delete one Purchasing_Orders.
     * @example
     * // Delete one Purchasing_Orders
     * const Purchasing_Orders = await prisma.purchasing_Orders.delete({
     *   where: {
     *     // ... filter to delete one Purchasing_Orders
     *   }
     * })
     *
     */
    delete<T extends Purchasing_OrdersDeleteArgs>(args: Prisma.SelectSubset<T, Purchasing_OrdersDeleteArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Purchasing_Orders.
     * @param {Purchasing_OrdersUpdateArgs} args - Arguments to update one Purchasing_Orders.
     * @example
     * // Update one Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Purchasing_OrdersUpdateArgs>(args: Prisma.SelectSubset<T, Purchasing_OrdersUpdateArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Purchasing_Orders.
     * @param {Purchasing_OrdersDeleteManyArgs} args - Arguments to filter Purchasing_Orders to delete.
     * @example
     * // Delete a few Purchasing_Orders
     * const { count } = await prisma.purchasing_Orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Purchasing_OrdersDeleteManyArgs>(args?: Prisma.SelectSubset<T, Purchasing_OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchasing_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Purchasing_OrdersUpdateManyArgs>(args: Prisma.SelectSubset<T, Purchasing_OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Purchasing_Orders and returns the data updated in the database.
     * @param {Purchasing_OrdersUpdateManyAndReturnArgs} args - Arguments to update many Purchasing_Orders.
     * @example
     * // Update many Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Purchasing_Orders and only return the `purchaseId`
     * const purchasing_OrdersWithPurchaseIdOnly = await prisma.purchasing_Orders.updateManyAndReturn({
     *   select: { purchaseId: true },
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
    updateManyAndReturn<T extends Purchasing_OrdersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Purchasing_OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Purchasing_Orders.
     * @param {Purchasing_OrdersUpsertArgs} args - Arguments to update or create a Purchasing_Orders.
     * @example
     * // Update or create a Purchasing_Orders
     * const purchasing_Orders = await prisma.purchasing_Orders.upsert({
     *   create: {
     *     // ... data to create a Purchasing_Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchasing_Orders we want to update
     *   }
     * })
     */
    upsert<T extends Purchasing_OrdersUpsertArgs>(args: Prisma.SelectSubset<T, Purchasing_OrdersUpsertArgs<ExtArgs>>): Prisma.Prisma__Purchasing_OrdersClient<runtime.Types.Result.GetResult<Prisma.$Purchasing_OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Purchasing_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_OrdersCountArgs} args - Arguments to filter Purchasing_Orders to count.
     * @example
     * // Count the number of Purchasing_Orders
     * const count = await prisma.purchasing_Orders.count({
     *   where: {
     *     // ... the filter for the Purchasing_Orders we want to count
     *   }
     * })
    **/
    count<T extends Purchasing_OrdersCountArgs>(args?: Prisma.Subset<T, Purchasing_OrdersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Purchasing_OrdersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Purchasing_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Purchasing_OrdersAggregateArgs>(args: Prisma.Subset<T, Purchasing_OrdersAggregateArgs>): Prisma.PrismaPromise<GetPurchasing_OrdersAggregateType<T>>;
    /**
     * Group by Purchasing_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchasing_OrdersGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Purchasing_OrdersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Purchasing_OrdersGroupByArgs['orderBy'];
    } : {
        orderBy?: Purchasing_OrdersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Purchasing_OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasing_OrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Purchasing_Orders model
     */
    readonly fields: Purchasing_OrdersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Purchasing_Orders.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Purchasing_OrdersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    supplier<T extends Prisma.SuppliersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SuppliersDefaultArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    purchaseOrderItems<T extends Prisma.Purchasing_Orders$purchaseOrderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchasing_Orders$purchaseOrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Purchase_Order_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materialWarehousingForms<T extends Prisma.Purchasing_Orders$materialWarehousingFormsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Purchasing_Orders$materialWarehousingFormsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Material_Warehousing_FormsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Purchasing_Orders model
 */
export interface Purchasing_OrdersFieldRefs {
    readonly purchaseId: Prisma.FieldRef<"Purchasing_Orders", 'String'>;
    readonly purchaseDate: Prisma.FieldRef<"Purchasing_Orders", 'DateTime'>;
    readonly supplierId: Prisma.FieldRef<"Purchasing_Orders", 'String'>;
    readonly supplierName: Prisma.FieldRef<"Purchasing_Orders", 'String'>;
    readonly contactPerson: Prisma.FieldRef<"Purchasing_Orders", 'String'>;
    readonly paymentTerm: Prisma.FieldRef<"Purchasing_Orders", 'String'>;
    readonly supplierAddress: Prisma.FieldRef<"Purchasing_Orders", 'String'>;
    readonly subtotal: Prisma.FieldRef<"Purchasing_Orders", 'Decimal'>;
    readonly vat: Prisma.FieldRef<"Purchasing_Orders", 'Decimal'>;
    readonly finalTotal: Prisma.FieldRef<"Purchasing_Orders", 'Decimal'>;
}
/**
 * Purchasing_Orders findUnique
 */
export type Purchasing_OrdersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchasing_Orders to fetch.
     */
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
};
/**
 * Purchasing_Orders findUniqueOrThrow
 */
export type Purchasing_OrdersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchasing_Orders to fetch.
     */
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
};
/**
 * Purchasing_Orders findFirst
 */
export type Purchasing_OrdersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchasing_Orders to fetch.
     */
    where?: Prisma.Purchasing_OrdersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchasing_Orders to fetch.
     */
    orderBy?: Prisma.Purchasing_OrdersOrderByWithRelationInput | Prisma.Purchasing_OrdersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchasing_Orders.
     */
    cursor?: Prisma.Purchasing_OrdersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchasing_Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchasing_Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchasing_Orders.
     */
    distinct?: Prisma.Purchasing_OrdersScalarFieldEnum | Prisma.Purchasing_OrdersScalarFieldEnum[];
};
/**
 * Purchasing_Orders findFirstOrThrow
 */
export type Purchasing_OrdersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchasing_Orders to fetch.
     */
    where?: Prisma.Purchasing_OrdersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchasing_Orders to fetch.
     */
    orderBy?: Prisma.Purchasing_OrdersOrderByWithRelationInput | Prisma.Purchasing_OrdersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Purchasing_Orders.
     */
    cursor?: Prisma.Purchasing_OrdersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchasing_Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchasing_Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchasing_Orders.
     */
    distinct?: Prisma.Purchasing_OrdersScalarFieldEnum | Prisma.Purchasing_OrdersScalarFieldEnum[];
};
/**
 * Purchasing_Orders findMany
 */
export type Purchasing_OrdersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Purchasing_Orders to fetch.
     */
    where?: Prisma.Purchasing_OrdersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Purchasing_Orders to fetch.
     */
    orderBy?: Prisma.Purchasing_OrdersOrderByWithRelationInput | Prisma.Purchasing_OrdersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Purchasing_Orders.
     */
    cursor?: Prisma.Purchasing_OrdersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Purchasing_Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Purchasing_Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Purchasing_Orders.
     */
    distinct?: Prisma.Purchasing_OrdersScalarFieldEnum | Prisma.Purchasing_OrdersScalarFieldEnum[];
};
/**
 * Purchasing_Orders create
 */
export type Purchasing_OrdersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Purchasing_Orders.
     */
    data: Prisma.XOR<Prisma.Purchasing_OrdersCreateInput, Prisma.Purchasing_OrdersUncheckedCreateInput>;
};
/**
 * Purchasing_Orders createMany
 */
export type Purchasing_OrdersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchasing_Orders.
     */
    data: Prisma.Purchasing_OrdersCreateManyInput | Prisma.Purchasing_OrdersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Purchasing_Orders createManyAndReturn
 */
export type Purchasing_OrdersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Orders
     */
    select?: Prisma.Purchasing_OrdersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Orders
     */
    omit?: Prisma.Purchasing_OrdersOmit<ExtArgs> | null;
    /**
     * The data used to create many Purchasing_Orders.
     */
    data: Prisma.Purchasing_OrdersCreateManyInput | Prisma.Purchasing_OrdersCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_OrdersIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Purchasing_Orders update
 */
export type Purchasing_OrdersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Purchasing_Orders.
     */
    data: Prisma.XOR<Prisma.Purchasing_OrdersUpdateInput, Prisma.Purchasing_OrdersUncheckedUpdateInput>;
    /**
     * Choose, which Purchasing_Orders to update.
     */
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
};
/**
 * Purchasing_Orders updateMany
 */
export type Purchasing_OrdersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchasing_Orders.
     */
    data: Prisma.XOR<Prisma.Purchasing_OrdersUpdateManyMutationInput, Prisma.Purchasing_OrdersUncheckedUpdateManyInput>;
    /**
     * Filter which Purchasing_Orders to update
     */
    where?: Prisma.Purchasing_OrdersWhereInput;
    /**
     * Limit how many Purchasing_Orders to update.
     */
    limit?: number;
};
/**
 * Purchasing_Orders updateManyAndReturn
 */
export type Purchasing_OrdersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchasing_Orders
     */
    select?: Prisma.Purchasing_OrdersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Purchasing_Orders
     */
    omit?: Prisma.Purchasing_OrdersOmit<ExtArgs> | null;
    /**
     * The data used to update Purchasing_Orders.
     */
    data: Prisma.XOR<Prisma.Purchasing_OrdersUpdateManyMutationInput, Prisma.Purchasing_OrdersUncheckedUpdateManyInput>;
    /**
     * Filter which Purchasing_Orders to update
     */
    where?: Prisma.Purchasing_OrdersWhereInput;
    /**
     * Limit how many Purchasing_Orders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Purchasing_OrdersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Purchasing_Orders upsert
 */
export type Purchasing_OrdersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Purchasing_Orders to update in case it exists.
     */
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
    /**
     * In case the Purchasing_Orders found by the `where` argument doesn't exist, create a new Purchasing_Orders with this data.
     */
    create: Prisma.XOR<Prisma.Purchasing_OrdersCreateInput, Prisma.Purchasing_OrdersUncheckedCreateInput>;
    /**
     * In case the Purchasing_Orders was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Purchasing_OrdersUpdateInput, Prisma.Purchasing_OrdersUncheckedUpdateInput>;
};
/**
 * Purchasing_Orders delete
 */
export type Purchasing_OrdersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Purchasing_Orders to delete.
     */
    where: Prisma.Purchasing_OrdersWhereUniqueInput;
};
/**
 * Purchasing_Orders deleteMany
 */
export type Purchasing_OrdersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Purchasing_Orders to delete
     */
    where?: Prisma.Purchasing_OrdersWhereInput;
    /**
     * Limit how many Purchasing_Orders to delete.
     */
    limit?: number;
};
/**
 * Purchasing_Orders.purchaseOrderItems
 */
export type Purchasing_Orders$purchaseOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Purchasing_Orders.materialWarehousingForms
 */
export type Purchasing_Orders$materialWarehousingFormsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Purchasing_Orders without action
 */
export type Purchasing_OrdersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Purchasing_Orders.d.ts.map