"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import { Product } from "../lib/types";

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .getProducts()
      .then(setProducts)
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.productId.toLowerCase().includes(search.toLowerCase()) ||
      p.specification.toLowerCase().includes(search.toLowerCase())
  );

  const fmt = (n: number) =>
    Number(n).toLocaleString("vi-VN", { minimumFractionDigits: 0 });

  const handleDelete = async (productId: string, name: string) => {
    if (!confirm(`Are you sure you want to delete product "${name}"? This cannot be undone.`)) return;
    try {
      await api.deleteProduct(productId);
      setProducts((prev) => prev.filter((p) => p.productId !== productId));
    } catch (err: any) {
      alert(err.message ?? "Failed to delete product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Products</h1>
          <p className="text-sm text-gray-500">Sản Phẩm / 產品</p>
        </div>
        <button
          onClick={() => router.push("/products/create")}
          className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
        >
          + New Product
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* ── Search ── */}
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product ID, name or specification..."
            className="w-full text-sm px-4 py-3 pl-10 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <span className="absolute left-3 top-3.5 text-gray-400 text-sm">
            🔍
          </span>
        </div>

        {/* ── Error ── */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* ── Loading ── */}
        {loading && (
          <div className="text-center py-20 text-gray-400 text-sm">
            Loading products...
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm mb-4">
              {search ? "No products match your search" : "No products yet"}
            </p>
            {!search && (
              <button
                onClick={() => router.push("/products/create")}
                className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
              >
                Add your first product
              </button>
            )}
          </div>
        )}

        {/* ── Products table ── */}
        {!loading && filtered.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-900">
                  {[
                    "Product ID",
                    "Name",
                    "Specification",
                    "Unit",
                    "Price",
                    "Supplier",
                    "Last Purchase",
                    "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs font-semibold text-white whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((product, index) => (
                  <tr
                    key={product.productId}
                    className={
                      index % 2 === 0
                        ? "bg-white border-b border-gray-100 hover:bg-blue-50/40 transition-colors"
                        : "bg-gray-50/60 border-b border-gray-100 hover:bg-blue-50/40 transition-colors"
                    }
                  >
                    <td className="px-4 py-3">
                      <span className="font-mono text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        {product.productId}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-800">
                      {product.name}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {product.specification}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {product.unit}
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-gray-800">
                      {fmt(product.price)} {product.currency ?? "VND"}
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-xs font-semibold text-gray-800">
                        {product.supplierName}
                      </p>
                      <p className="text-xs text-gray-400">
                        {product.supplierId}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {new Date(product.lastPurchaseDate).toLocaleDateString(
                        "vi-VN"
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => router.push(`/products/${product.productId}`)}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View
                        </button>
                        <span className="text-gray-300">/</span>
                        <button
                          onClick={() => router.push(`/products/${product.productId}/edit`)}
                          className="text-xs text-orange-600 hover:text-orange-800 font-medium"
                        >
                          Edit
                        </button>
                        <span className="text-gray-300">/</span>
                        <button
                          onClick={() => handleDelete(product.productId, product.name)}
                          className="text-xs text-red-500 hover:text-red-700 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
                {search && ` matching "${search}"`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}