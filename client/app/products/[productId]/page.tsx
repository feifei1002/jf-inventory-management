"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { Product } from "../../lib/types";

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getProduct(productId)
      .then(setProduct)
      .catch(() => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [productId]);

  const fmt = (n: number) =>
    Number(n).toLocaleString("vi-VN", { minimumFractionDigits: 0 });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500 text-sm">{error || "Product not found"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Product Detail</h1>
          <p className="text-sm text-gray-500 font-mono">{product.productId}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/products")}
            className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-200 rounded-lg"
          >
            ← Back
          </button>
          <button
            onClick={() => router.push(`/products/${productId}/edit`)}
            className="text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-900 px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Product Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Product ID</p>
              <p className="text-sm font-mono font-semibold text-gray-800">
                {product.productId}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Name</p>
              <p className="text-sm font-semibold text-gray-800">
                {product.name}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Specification</p>
              <p className="text-sm text-gray-800">{product.specification}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Unit</p>
              <p className="text-sm text-gray-800">{product.unit}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Price</p>
              <p className="text-sm font-mono font-semibold text-gray-800">
                {fmt(product.price)} {product.currency ?? "VND"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Last Purchase Date</p>
              <p className="text-sm text-gray-800">
                {new Date(product.lastPurchaseDate).toLocaleDateString("vi-VN")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-900 px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Supplier / Nhà Cung Cấp
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Supplier ID</p>
              <p className="text-sm font-mono font-semibold text-blue-700">
                {product.supplierId}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Supplier Name</p>
              <p className="text-sm font-semibold text-gray-800">
                {product.supplierName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}