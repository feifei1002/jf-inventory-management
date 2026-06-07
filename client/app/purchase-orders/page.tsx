"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import { PurchaseOrder } from "../lib/types";
import { Plus, Search } from "lucide-react";

export default function PurchaseOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<PurchaseOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .getPurchaseOrders()
      .then(setOrders)
      .catch(() => setError("Failed to load purchase orders"))
      .finally(() => setLoading(false));
  }, []);

  const fmt = (n: number) =>
    Number(n).toLocaleString("vi-VN", { minimumFractionDigits: 0 });

  const filtered = orders.filter(
    (o) =>
      o.purchaseId.toLowerCase().includes(search.toLowerCase()) ||
      o.supplierId.toLowerCase().includes(search.toLowerCase()) ||
      o.supplierName.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (purchaseId: string) => {
    if (!confirm(`Are you sure you want to delete purchase order "${purchaseId}"? This cannot be undone.`)) return;
    try {
      await api.deletePurchaseOrder(purchaseId);
      setOrders((prev) => prev.filter((o) => o.purchaseId !== purchaseId));
    } catch (err: any) {
      alert(err.message ?? "Failed to delete purchase order");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">Purchase Orders</h1>
          <p className="text-sm text-gray-500 ">採購單 / Đơn Đặt Hàng</p>
        </div>
        <button
          onClick={() => router.push("/purchase-orders/create")}
          className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Purchase Order
        </button>
      </div>

      <div className="max-w-8xl mx-auto px-6 py-8 space-y-6">
        {/* ── Search ── */}
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by PO number, supplier ID or supplier name..."
            className="w-full text-sm px-4 py-3 pl-10 border border-gray-200  rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-green       shadow-sm"
          />
          <span className="absolute left-3 top-3.5 text-gray-400  text-sm">
            <Search className="w-5 h-5" />
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
          <div className="text-center py-20 text-gray-400  text-sm">
            Loading purchase orders...
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400  text-sm mb-4">
              {search
                ? "No orders match your search"
                : "No purchase orders yet"}
            </p>
            {!search && (
              <button
                onClick={() => router.push("/purchase-orders/create")}
                className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg"
              >
                Create your first PO
              </button>
            )}
          </div>
        )}

        {/* ── Orders table ── */}
        {!loading && filtered.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-green">
                  {[
                    "PO Number 採購單號",
                    "Date 日期",
                    "Supplier 供應商",
                    "Contact 聯絡人",
                    "Items 項目",
                    "Subtotal 小計",
                    "VAT 稅額",
                    "Total 總計",
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
                {filtered.map((order, index) => (
                  <tr
                    key={order.purchaseId}
                    className={
                      index % 2 === 0
                        ? "bg-white border-b border-gray-100  hover:bg-brand-green-50/40  transition-colors"
                        : "bg-gray-50/60   border-b border-gray-100  hover:bg-brand-green-50/40  transition-colors"
                    }
                  >
                    <td className="px-4 py-3">
                      <span className="font-mono text-xs font-semibold text-brand-green-dark bg-brand-green-50 px-2 py-0.5 rounded">
                        {order.purchaseId}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">
                      {new Date(order.purchaseDate).toLocaleDateString("vi-VN")}
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-xs font-semibold text-gray-800  ">
                        {order.supplierName}
                      </p>
                      <p className="text-xs text-gray-400">{order.supplierId}</p>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-600">
                      {order.contactPerson}
                    </td>
                    <td className="px-4 py-3 text-xs text-center text-gray-600">
                      {order.purchaseOrderItems?.length ?? 0}
                    </td>
                    <td className="px-4 py-3 text-xs text-right font-mono text-gray-700">
                      {fmt(order.subtotal)}
                    </td>
                    <td className="px-4 py-3 text-xs text-right font-mono text-gray-500 ">
                      {fmt(order.vat)}
                    </td>
                    <td className="px-4 py-3 text-xs text-right font-mono font-bold text-blue-900">
                      {fmt(order.finalTotal)} {order.currency}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => router.push(`/purchase-orders/${order.purchaseId}`)}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View
                        </button>
                        <span className="text-gray-300">/</span>
                        <button
                          onClick={() => router.push(`/purchase-orders/${order.purchaseId}/edit`)}
                          className="text-xs text-amber-600 hover:text-amber-800 font-medium"
                        >
                          Edit
                        </button>
                        <span className="text-gray-300">/</span>
                        
                          <a href={api.getExportUrl(order.purchaseId)}
                          download={`${order.purchaseId}.xlsx`}
                          className="text-xs text-green-600 hover:text-green-800 font-medium"
                        >
                          Excel
                        </a>
                        <span className="text-gray-300">/</span>
                        <button
                          onClick={() => handleDelete(order.purchaseId)}
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

            {/* ── Footer count ── */}
            <div className="px-4 py-3 bg-gray-50  border-t border-gray-200  ">
              <p className="text-xs text-gray-400">
                {filtered.length} order{filtered.length !== 1 ? "s" : ""}
                {search && ` matching "${search}"`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}