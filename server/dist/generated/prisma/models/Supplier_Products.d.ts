import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Supplier_Products
 *
 */
export type Supplier_ProductsModel = runtime.Types.Result.DefaultSelection<Prisma.$Supplier_ProductsPayload>;
export type AggregateSupplier_Products = {
    _count: Supplier_ProductsCountAggregateOutputType | null;
    _min: Supplier_ProductsMinAggregateOutputType | null;
    _max: Supplier_ProductsMaxAggregateOutputType | null;
};
export type Supplier_ProductsMinAggregateOutputType = {
    supplierId: string | null;
    productId: string | null;
};
export type Supplier_ProductsMaxAggregateOutputType = {
    supplierId: string | null;
    productId: string | null;
};
export type Supplier_ProductsCountAggregateOutputType = {
    supplierId: number;
    productId: number;
    _all: number;
};
export type Supplier_ProductsMinAggregateInputType = {
    supplierId?: true;
    productId?: true;
};
export type Supplier_ProductsMaxAggregateInputType = {
    supplierId?: true;
    productId?: true;
};
export type Supplier_ProductsCountAggregateInputType = {
    supplierId?: true;
    productId?: true;
    _all?: true;
};
export type Supplier_ProductsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier_Products to aggregate.
     */
    where?: Prisma.Supplier_ProductsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Supplier_Products to fetch.
     */
    orderBy?: Prisma.Supplier_ProductsOrderByWithRelationInput | Prisma.Supplier_ProductsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Supplier_ProductsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Supplier_Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Supplier_Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Supplier_Products
    **/
    _count?: true | Supplier_ProductsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Supplier_ProductsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Supplier_ProductsMaxAggregateInputType;
};
export type GetSupplier_ProductsAggregateType<T extends Supplier_ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplier_Products]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplier_Products[P]> : Prisma.GetScalarType<T[P], AggregateSupplier_Products[P]>;
};
export type Supplier_ProductsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Supplier_ProductsWhereInput;
    orderBy?: Prisma.Supplier_ProductsOrderByWithAggregationInput | Prisma.Supplier_ProductsOrderByWithAggregationInput[];
    by: Prisma.Supplier_ProductsScalarFieldEnum[] | Prisma.Supplier_ProductsScalarFieldEnum;
    having?: Prisma.Supplier_ProductsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Supplier_ProductsCountAggregateInputType | true;
    _min?: Supplier_ProductsMinAggregateInputType;
    _max?: Supplier_ProductsMaxAggregateInputType;
};
export type Supplier_ProductsGroupByOutputType = {
    supplierId: string;
    productId: string;
    _count: Supplier_ProductsCountAggregateOutputType | null;
    _min: Supplier_ProductsMinAggregateOutputType | null;
    _max: Supplier_ProductsMaxAggregateOutputType | null;
};
export type GetSupplier_ProductsGroupByPayload<T extends Supplier_ProductsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Supplier_ProductsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Supplier_ProductsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Supplier_ProductsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Supplier_ProductsGroupByOutputType[P]>;
}>>;
export type Supplier_ProductsWhereInput = {
    AND?: Prisma.Supplier_ProductsWhereInput | Prisma.Supplier_ProductsWhereInput[];
    OR?: Prisma.Supplier_ProductsWhereInput[];
    NOT?: Prisma.Supplier_ProductsWhereInput | Prisma.Supplier_ProductsWhereInput[];
    supplierId?: Prisma.StringFilter<"Supplier_Products"> | string;
    productId?: Prisma.StringFilter<"Supplier_Products"> | string;
    supplier?: Prisma.XOR<Prisma.SuppliersScalarRelationFilter, Prisma.SuppliersWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
};
export type Supplier_ProductsOrderByWithRelationInput = {
    supplierId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    supplier?: Prisma.SuppliersOrderByWithRelationInput;
    product?: Prisma.ProductsOrderByWithRelationInput;
};
export type Supplier_ProductsWhereUniqueInput = Prisma.AtLeast<{
    supplierId_productId?: Prisma.Supplier_ProductsSupplierIdProductIdCompoundUniqueInput;
    AND?: Prisma.Supplier_ProductsWhereInput | Prisma.Supplier_ProductsWhereInput[];
    OR?: Prisma.Supplier_ProductsWhereInput[];
    NOT?: Prisma.Supplier_ProductsWhereInput | Prisma.Supplier_ProductsWhereInput[];
    supplierId?: Prisma.StringFilter<"Supplier_Products"> | string;
    productId?: Prisma.StringFilter<"Supplier_Products"> | string;
    supplier?: Prisma.XOR<Prisma.SuppliersScalarRelationFilter, Prisma.SuppliersWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
}, "supplierId_productId">;
export type Supplier_ProductsOrderByWithAggregationInput = {
    supplierId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    _count?: Prisma.Supplier_ProductsCountOrderByAggregateInput;
    _max?: Prisma.Supplier_ProductsMaxOrderByAggregateInput;
    _min?: Prisma.Supplier_ProductsMinOrderByAggregateInput;
};
export type Supplier_ProductsScalarWhereWithAggregatesInput = {
    AND?: Prisma.Supplier_ProductsScalarWhereWithAggregatesInput | Prisma.Supplier_ProductsScalarWhereWithAggregatesInput[];
    OR?: Prisma.Supplier_ProductsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Supplier_ProductsScalarWhereWithAggregatesInput | Prisma.Supplier_ProductsScalarWhereWithAggregatesInput[];
    supplierId?: Prisma.StringWithAggregatesFilter<"Supplier_Products"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"Supplier_Products"> | string;
};
export type Supplier_ProductsCreateInput = {
    supplier: Prisma.SuppliersCreateNestedOneWithoutSupplierProductsInput;
    product: Prisma.ProductsCreateNestedOneWithoutSupplierProductsInput;
};
export type Supplier_ProductsUncheckedCreateInput = {
    supplierId: string;
    productId: string;
};
export type Supplier_ProductsUpdateInput = {
    supplier?: Prisma.SuppliersUpdateOneRequiredWithoutSupplierProductsNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutSupplierProductsNestedInput;
};
export type Supplier_ProductsUncheckedUpdateInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Supplier_ProductsCreateManyInput = {
    supplierId: string;
    productId: string;
};
export type Supplier_ProductsUpdateManyMutationInput = {};
export type Supplier_ProductsUncheckedUpdateManyInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Supplier_ProductsListRelationFilter = {
    every?: Prisma.Supplier_ProductsWhereInput;
    some?: Prisma.Supplier_ProductsWhereInput;
    none?: Prisma.Supplier_ProductsWhereInput;
};
export type Supplier_ProductsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Supplier_ProductsSupplierIdProductIdCompoundUniqueInput = {
    supplierId: string;
    productId: string;
};
export type Supplier_ProductsCountOrderByAggregateInput = {
    supplierId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
};
export type Supplier_ProductsMaxOrderByAggregateInput = {
    supplierId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
};
export type Supplier_ProductsMinOrderByAggregateInput = {
    supplierId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
};
export type Supplier_ProductsCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutSupplierInput, Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput> | Prisma.Supplier_ProductsCreateWithoutSupplierInput[] | Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Supplier_ProductsCreateOrConnectWithoutSupplierInput | Prisma.Supplier_ProductsCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.Supplier_ProductsCreateManySupplierInputEnvelope;
    connect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
};
export type Supplier_ProductsUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutSupplierInput, Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput> | Prisma.Supplier_ProductsCreateWithoutSupplierInput[] | Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Supplier_ProductsCreateOrConnectWithoutSupplierInput | Prisma.Supplier_ProductsCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.Supplier_ProductsCreateManySupplierInputEnvelope;
    connect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
};
export type Supplier_ProductsUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutSupplierInput, Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput> | Prisma.Supplier_ProductsCreateWithoutSupplierInput[] | Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Supplier_ProductsCreateOrConnectWithoutSupplierInput | Prisma.Supplier_ProductsCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.Supplier_ProductsUpsertWithWhereUniqueWithoutSupplierInput | Prisma.Supplier_ProductsUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.Supplier_ProductsCreateManySupplierInputEnvelope;
    set?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    disconnect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    delete?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    connect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    update?: Prisma.Supplier_ProductsUpdateWithWhereUniqueWithoutSupplierInput | Prisma.Supplier_ProductsUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.Supplier_ProductsUpdateManyWithWhereWithoutSupplierInput | Prisma.Supplier_ProductsUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.Supplier_ProductsScalarWhereInput | Prisma.Supplier_ProductsScalarWhereInput[];
};
export type Supplier_ProductsUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutSupplierInput, Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput> | Prisma.Supplier_ProductsCreateWithoutSupplierInput[] | Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.Supplier_ProductsCreateOrConnectWithoutSupplierInput | Prisma.Supplier_ProductsCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.Supplier_ProductsUpsertWithWhereUniqueWithoutSupplierInput | Prisma.Supplier_ProductsUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.Supplier_ProductsCreateManySupplierInputEnvelope;
    set?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    disconnect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    delete?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    connect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    update?: Prisma.Supplier_ProductsUpdateWithWhereUniqueWithoutSupplierInput | Prisma.Supplier_ProductsUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.Supplier_ProductsUpdateManyWithWhereWithoutSupplierInput | Prisma.Supplier_ProductsUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.Supplier_ProductsScalarWhereInput | Prisma.Supplier_ProductsScalarWhereInput[];
};
export type Supplier_ProductsCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutProductInput, Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput> | Prisma.Supplier_ProductsCreateWithoutProductInput[] | Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Supplier_ProductsCreateOrConnectWithoutProductInput | Prisma.Supplier_ProductsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.Supplier_ProductsCreateManyProductInputEnvelope;
    connect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
};
export type Supplier_ProductsUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutProductInput, Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput> | Prisma.Supplier_ProductsCreateWithoutProductInput[] | Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Supplier_ProductsCreateOrConnectWithoutProductInput | Prisma.Supplier_ProductsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.Supplier_ProductsCreateManyProductInputEnvelope;
    connect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
};
export type Supplier_ProductsUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutProductInput, Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput> | Prisma.Supplier_ProductsCreateWithoutProductInput[] | Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Supplier_ProductsCreateOrConnectWithoutProductInput | Prisma.Supplier_ProductsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.Supplier_ProductsUpsertWithWhereUniqueWithoutProductInput | Prisma.Supplier_ProductsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.Supplier_ProductsCreateManyProductInputEnvelope;
    set?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    disconnect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    delete?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    connect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    update?: Prisma.Supplier_ProductsUpdateWithWhereUniqueWithoutProductInput | Prisma.Supplier_ProductsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.Supplier_ProductsUpdateManyWithWhereWithoutProductInput | Prisma.Supplier_ProductsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.Supplier_ProductsScalarWhereInput | Prisma.Supplier_ProductsScalarWhereInput[];
};
export type Supplier_ProductsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutProductInput, Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput> | Prisma.Supplier_ProductsCreateWithoutProductInput[] | Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.Supplier_ProductsCreateOrConnectWithoutProductInput | Prisma.Supplier_ProductsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.Supplier_ProductsUpsertWithWhereUniqueWithoutProductInput | Prisma.Supplier_ProductsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.Supplier_ProductsCreateManyProductInputEnvelope;
    set?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    disconnect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    delete?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    connect?: Prisma.Supplier_ProductsWhereUniqueInput | Prisma.Supplier_ProductsWhereUniqueInput[];
    update?: Prisma.Supplier_ProductsUpdateWithWhereUniqueWithoutProductInput | Prisma.Supplier_ProductsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.Supplier_ProductsUpdateManyWithWhereWithoutProductInput | Prisma.Supplier_ProductsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.Supplier_ProductsScalarWhereInput | Prisma.Supplier_ProductsScalarWhereInput[];
};
export type Supplier_ProductsCreateWithoutSupplierInput = {
    product: Prisma.ProductsCreateNestedOneWithoutSupplierProductsInput;
};
export type Supplier_ProductsUncheckedCreateWithoutSupplierInput = {
    productId: string;
};
export type Supplier_ProductsCreateOrConnectWithoutSupplierInput = {
    where: Prisma.Supplier_ProductsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutSupplierInput, Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput>;
};
export type Supplier_ProductsCreateManySupplierInputEnvelope = {
    data: Prisma.Supplier_ProductsCreateManySupplierInput | Prisma.Supplier_ProductsCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type Supplier_ProductsUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.Supplier_ProductsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Supplier_ProductsUpdateWithoutSupplierInput, Prisma.Supplier_ProductsUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutSupplierInput, Prisma.Supplier_ProductsUncheckedCreateWithoutSupplierInput>;
};
export type Supplier_ProductsUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.Supplier_ProductsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Supplier_ProductsUpdateWithoutSupplierInput, Prisma.Supplier_ProductsUncheckedUpdateWithoutSupplierInput>;
};
export type Supplier_ProductsUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.Supplier_ProductsScalarWhereInput;
    data: Prisma.XOR<Prisma.Supplier_ProductsUpdateManyMutationInput, Prisma.Supplier_ProductsUncheckedUpdateManyWithoutSupplierInput>;
};
export type Supplier_ProductsScalarWhereInput = {
    AND?: Prisma.Supplier_ProductsScalarWhereInput | Prisma.Supplier_ProductsScalarWhereInput[];
    OR?: Prisma.Supplier_ProductsScalarWhereInput[];
    NOT?: Prisma.Supplier_ProductsScalarWhereInput | Prisma.Supplier_ProductsScalarWhereInput[];
    supplierId?: Prisma.StringFilter<"Supplier_Products"> | string;
    productId?: Prisma.StringFilter<"Supplier_Products"> | string;
};
export type Supplier_ProductsCreateWithoutProductInput = {
    supplier: Prisma.SuppliersCreateNestedOneWithoutSupplierProductsInput;
};
export type Supplier_ProductsUncheckedCreateWithoutProductInput = {
    supplierId: string;
};
export type Supplier_ProductsCreateOrConnectWithoutProductInput = {
    where: Prisma.Supplier_ProductsWhereUniqueInput;
    create: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutProductInput, Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput>;
};
export type Supplier_ProductsCreateManyProductInputEnvelope = {
    data: Prisma.Supplier_ProductsCreateManyProductInput | Prisma.Supplier_ProductsCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type Supplier_ProductsUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.Supplier_ProductsWhereUniqueInput;
    update: Prisma.XOR<Prisma.Supplier_ProductsUpdateWithoutProductInput, Prisma.Supplier_ProductsUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.Supplier_ProductsCreateWithoutProductInput, Prisma.Supplier_ProductsUncheckedCreateWithoutProductInput>;
};
export type Supplier_ProductsUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.Supplier_ProductsWhereUniqueInput;
    data: Prisma.XOR<Prisma.Supplier_ProductsUpdateWithoutProductInput, Prisma.Supplier_ProductsUncheckedUpdateWithoutProductInput>;
};
export type Supplier_ProductsUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.Supplier_ProductsScalarWhereInput;
    data: Prisma.XOR<Prisma.Supplier_ProductsUpdateManyMutationInput, Prisma.Supplier_ProductsUncheckedUpdateManyWithoutProductInput>;
};
export type Supplier_ProductsCreateManySupplierInput = {
    productId: string;
};
export type Supplier_ProductsUpdateWithoutSupplierInput = {
    product?: Prisma.ProductsUpdateOneRequiredWithoutSupplierProductsNestedInput;
};
export type Supplier_ProductsUncheckedUpdateWithoutSupplierInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Supplier_ProductsUncheckedUpdateManyWithoutSupplierInput = {
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Supplier_ProductsCreateManyProductInput = {
    supplierId: string;
};
export type Supplier_ProductsUpdateWithoutProductInput = {
    supplier?: Prisma.SuppliersUpdateOneRequiredWithoutSupplierProductsNestedInput;
};
export type Supplier_ProductsUncheckedUpdateWithoutProductInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Supplier_ProductsUncheckedUpdateManyWithoutProductInput = {
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Supplier_ProductsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplierId?: boolean;
    productId?: boolean;
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplier_Products"]>;
export type Supplier_ProductsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplierId?: boolean;
    productId?: boolean;
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplier_Products"]>;
export type Supplier_ProductsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplierId?: boolean;
    productId?: boolean;
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplier_Products"]>;
export type Supplier_ProductsSelectScalar = {
    supplierId?: boolean;
    productId?: boolean;
};
export type Supplier_ProductsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"supplierId" | "productId", ExtArgs["result"]["supplier_Products"]>;
export type Supplier_ProductsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type Supplier_ProductsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type Supplier_ProductsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SuppliersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type $Supplier_ProductsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Supplier_Products";
    objects: {
        supplier: Prisma.$SuppliersPayload<ExtArgs>;
        product: Prisma.$ProductsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        supplierId: string;
        productId: string;
    }, ExtArgs["result"]["supplier_Products"]>;
    composites: {};
};
export type Supplier_ProductsGetPayload<S extends boolean | null | undefined | Supplier_ProductsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload, S>;
export type Supplier_ProductsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Supplier_ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Supplier_ProductsCountAggregateInputType | true;
};
export interface Supplier_ProductsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Supplier_Products'];
        meta: {
            name: 'Supplier_Products';
        };
    };
    /**
     * Find zero or one Supplier_Products that matches the filter.
     * @param {Supplier_ProductsFindUniqueArgs} args - Arguments to find a Supplier_Products
     * @example
     * // Get one Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Supplier_ProductsFindUniqueArgs>(args: Prisma.SelectSubset<T, Supplier_ProductsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Supplier_ProductsClient<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Supplier_Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Supplier_ProductsFindUniqueOrThrowArgs} args - Arguments to find a Supplier_Products
     * @example
     * // Get one Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Supplier_ProductsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Supplier_ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Supplier_ProductsClient<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Supplier_Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Supplier_ProductsFindFirstArgs} args - Arguments to find a Supplier_Products
     * @example
     * // Get one Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Supplier_ProductsFindFirstArgs>(args?: Prisma.SelectSubset<T, Supplier_ProductsFindFirstArgs<ExtArgs>>): Prisma.Prisma__Supplier_ProductsClient<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Supplier_Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Supplier_ProductsFindFirstOrThrowArgs} args - Arguments to find a Supplier_Products
     * @example
     * // Get one Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Supplier_ProductsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Supplier_ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Supplier_ProductsClient<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Supplier_Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Supplier_ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.findMany()
     *
     * // Get first 10 Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.findMany({ take: 10 })
     *
     * // Only select the `supplierId`
     * const supplier_ProductsWithSupplierIdOnly = await prisma.supplier_Products.findMany({ select: { supplierId: true } })
     *
     */
    findMany<T extends Supplier_ProductsFindManyArgs>(args?: Prisma.SelectSubset<T, Supplier_ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Supplier_Products.
     * @param {Supplier_ProductsCreateArgs} args - Arguments to create a Supplier_Products.
     * @example
     * // Create one Supplier_Products
     * const Supplier_Products = await prisma.supplier_Products.create({
     *   data: {
     *     // ... data to create a Supplier_Products
     *   }
     * })
     *
     */
    create<T extends Supplier_ProductsCreateArgs>(args: Prisma.SelectSubset<T, Supplier_ProductsCreateArgs<ExtArgs>>): Prisma.Prisma__Supplier_ProductsClient<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Supplier_Products.
     * @param {Supplier_ProductsCreateManyArgs} args - Arguments to create many Supplier_Products.
     * @example
     * // Create many Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Supplier_ProductsCreateManyArgs>(args?: Prisma.SelectSubset<T, Supplier_ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Supplier_Products and returns the data saved in the database.
     * @param {Supplier_ProductsCreateManyAndReturnArgs} args - Arguments to create many Supplier_Products.
     * @example
     * // Create many Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Supplier_Products and only return the `supplierId`
     * const supplier_ProductsWithSupplierIdOnly = await prisma.supplier_Products.createManyAndReturn({
     *   select: { supplierId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Supplier_ProductsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Supplier_ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Supplier_Products.
     * @param {Supplier_ProductsDeleteArgs} args - Arguments to delete one Supplier_Products.
     * @example
     * // Delete one Supplier_Products
     * const Supplier_Products = await prisma.supplier_Products.delete({
     *   where: {
     *     // ... filter to delete one Supplier_Products
     *   }
     * })
     *
     */
    delete<T extends Supplier_ProductsDeleteArgs>(args: Prisma.SelectSubset<T, Supplier_ProductsDeleteArgs<ExtArgs>>): Prisma.Prisma__Supplier_ProductsClient<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Supplier_Products.
     * @param {Supplier_ProductsUpdateArgs} args - Arguments to update one Supplier_Products.
     * @example
     * // Update one Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Supplier_ProductsUpdateArgs>(args: Prisma.SelectSubset<T, Supplier_ProductsUpdateArgs<ExtArgs>>): Prisma.Prisma__Supplier_ProductsClient<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Supplier_Products.
     * @param {Supplier_ProductsDeleteManyArgs} args - Arguments to filter Supplier_Products to delete.
     * @example
     * // Delete a few Supplier_Products
     * const { count } = await prisma.supplier_Products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Supplier_ProductsDeleteManyArgs>(args?: Prisma.SelectSubset<T, Supplier_ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Supplier_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Supplier_ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Supplier_ProductsUpdateManyArgs>(args: Prisma.SelectSubset<T, Supplier_ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Supplier_Products and returns the data updated in the database.
     * @param {Supplier_ProductsUpdateManyAndReturnArgs} args - Arguments to update many Supplier_Products.
     * @example
     * // Update many Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Supplier_Products and only return the `supplierId`
     * const supplier_ProductsWithSupplierIdOnly = await prisma.supplier_Products.updateManyAndReturn({
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
    updateManyAndReturn<T extends Supplier_ProductsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Supplier_ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Supplier_Products.
     * @param {Supplier_ProductsUpsertArgs} args - Arguments to update or create a Supplier_Products.
     * @example
     * // Update or create a Supplier_Products
     * const supplier_Products = await prisma.supplier_Products.upsert({
     *   create: {
     *     // ... data to create a Supplier_Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier_Products we want to update
     *   }
     * })
     */
    upsert<T extends Supplier_ProductsUpsertArgs>(args: Prisma.SelectSubset<T, Supplier_ProductsUpsertArgs<ExtArgs>>): Prisma.Prisma__Supplier_ProductsClient<runtime.Types.Result.GetResult<Prisma.$Supplier_ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Supplier_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Supplier_ProductsCountArgs} args - Arguments to filter Supplier_Products to count.
     * @example
     * // Count the number of Supplier_Products
     * const count = await prisma.supplier_Products.count({
     *   where: {
     *     // ... the filter for the Supplier_Products we want to count
     *   }
     * })
    **/
    count<T extends Supplier_ProductsCountArgs>(args?: Prisma.Subset<T, Supplier_ProductsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Supplier_ProductsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Supplier_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Supplier_ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Supplier_ProductsAggregateArgs>(args: Prisma.Subset<T, Supplier_ProductsAggregateArgs>): Prisma.PrismaPromise<GetSupplier_ProductsAggregateType<T>>;
    /**
     * Group by Supplier_Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Supplier_ProductsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Supplier_ProductsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Supplier_ProductsGroupByArgs['orderBy'];
    } : {
        orderBy?: Supplier_ProductsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Supplier_ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplier_ProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Supplier_Products model
     */
    readonly fields: Supplier_ProductsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Supplier_Products.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Supplier_ProductsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    supplier<T extends Prisma.SuppliersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SuppliersDefaultArgs<ExtArgs>>): Prisma.Prisma__SuppliersClient<runtime.Types.Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Supplier_Products model
 */
export interface Supplier_ProductsFieldRefs {
    readonly supplierId: Prisma.FieldRef<"Supplier_Products", 'String'>;
    readonly productId: Prisma.FieldRef<"Supplier_Products", 'String'>;
}
/**
 * Supplier_Products findUnique
 */
export type Supplier_ProductsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Supplier_Products to fetch.
     */
    where: Prisma.Supplier_ProductsWhereUniqueInput;
};
/**
 * Supplier_Products findUniqueOrThrow
 */
export type Supplier_ProductsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Supplier_Products to fetch.
     */
    where: Prisma.Supplier_ProductsWhereUniqueInput;
};
/**
 * Supplier_Products findFirst
 */
export type Supplier_ProductsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Supplier_Products to fetch.
     */
    where?: Prisma.Supplier_ProductsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Supplier_Products to fetch.
     */
    orderBy?: Prisma.Supplier_ProductsOrderByWithRelationInput | Prisma.Supplier_ProductsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Supplier_Products.
     */
    cursor?: Prisma.Supplier_ProductsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Supplier_Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Supplier_Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Supplier_Products.
     */
    distinct?: Prisma.Supplier_ProductsScalarFieldEnum | Prisma.Supplier_ProductsScalarFieldEnum[];
};
/**
 * Supplier_Products findFirstOrThrow
 */
export type Supplier_ProductsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Supplier_Products to fetch.
     */
    where?: Prisma.Supplier_ProductsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Supplier_Products to fetch.
     */
    orderBy?: Prisma.Supplier_ProductsOrderByWithRelationInput | Prisma.Supplier_ProductsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Supplier_Products.
     */
    cursor?: Prisma.Supplier_ProductsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Supplier_Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Supplier_Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Supplier_Products.
     */
    distinct?: Prisma.Supplier_ProductsScalarFieldEnum | Prisma.Supplier_ProductsScalarFieldEnum[];
};
/**
 * Supplier_Products findMany
 */
export type Supplier_ProductsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Supplier_Products to fetch.
     */
    where?: Prisma.Supplier_ProductsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Supplier_Products to fetch.
     */
    orderBy?: Prisma.Supplier_ProductsOrderByWithRelationInput | Prisma.Supplier_ProductsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Supplier_Products.
     */
    cursor?: Prisma.Supplier_ProductsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Supplier_Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Supplier_Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Supplier_Products.
     */
    distinct?: Prisma.Supplier_ProductsScalarFieldEnum | Prisma.Supplier_ProductsScalarFieldEnum[];
};
/**
 * Supplier_Products create
 */
export type Supplier_ProductsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Supplier_Products.
     */
    data: Prisma.XOR<Prisma.Supplier_ProductsCreateInput, Prisma.Supplier_ProductsUncheckedCreateInput>;
};
/**
 * Supplier_Products createMany
 */
export type Supplier_ProductsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Supplier_Products.
     */
    data: Prisma.Supplier_ProductsCreateManyInput | Prisma.Supplier_ProductsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Supplier_Products createManyAndReturn
 */
export type Supplier_ProductsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier_Products
     */
    select?: Prisma.Supplier_ProductsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier_Products
     */
    omit?: Prisma.Supplier_ProductsOmit<ExtArgs> | null;
    /**
     * The data used to create many Supplier_Products.
     */
    data: Prisma.Supplier_ProductsCreateManyInput | Prisma.Supplier_ProductsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Supplier_ProductsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Supplier_Products update
 */
export type Supplier_ProductsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Supplier_Products.
     */
    data: Prisma.XOR<Prisma.Supplier_ProductsUpdateInput, Prisma.Supplier_ProductsUncheckedUpdateInput>;
    /**
     * Choose, which Supplier_Products to update.
     */
    where: Prisma.Supplier_ProductsWhereUniqueInput;
};
/**
 * Supplier_Products updateMany
 */
export type Supplier_ProductsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Supplier_Products.
     */
    data: Prisma.XOR<Prisma.Supplier_ProductsUpdateManyMutationInput, Prisma.Supplier_ProductsUncheckedUpdateManyInput>;
    /**
     * Filter which Supplier_Products to update
     */
    where?: Prisma.Supplier_ProductsWhereInput;
    /**
     * Limit how many Supplier_Products to update.
     */
    limit?: number;
};
/**
 * Supplier_Products updateManyAndReturn
 */
export type Supplier_ProductsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier_Products
     */
    select?: Prisma.Supplier_ProductsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier_Products
     */
    omit?: Prisma.Supplier_ProductsOmit<ExtArgs> | null;
    /**
     * The data used to update Supplier_Products.
     */
    data: Prisma.XOR<Prisma.Supplier_ProductsUpdateManyMutationInput, Prisma.Supplier_ProductsUncheckedUpdateManyInput>;
    /**
     * Filter which Supplier_Products to update
     */
    where?: Prisma.Supplier_ProductsWhereInput;
    /**
     * Limit how many Supplier_Products to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Supplier_ProductsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Supplier_Products upsert
 */
export type Supplier_ProductsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Supplier_Products to update in case it exists.
     */
    where: Prisma.Supplier_ProductsWhereUniqueInput;
    /**
     * In case the Supplier_Products found by the `where` argument doesn't exist, create a new Supplier_Products with this data.
     */
    create: Prisma.XOR<Prisma.Supplier_ProductsCreateInput, Prisma.Supplier_ProductsUncheckedCreateInput>;
    /**
     * In case the Supplier_Products was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Supplier_ProductsUpdateInput, Prisma.Supplier_ProductsUncheckedUpdateInput>;
};
/**
 * Supplier_Products delete
 */
export type Supplier_ProductsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Supplier_Products to delete.
     */
    where: Prisma.Supplier_ProductsWhereUniqueInput;
};
/**
 * Supplier_Products deleteMany
 */
export type Supplier_ProductsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier_Products to delete
     */
    where?: Prisma.Supplier_ProductsWhereInput;
    /**
     * Limit how many Supplier_Products to delete.
     */
    limit?: number;
};
/**
 * Supplier_Products without action
 */
export type Supplier_ProductsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Supplier_Products.d.ts.map