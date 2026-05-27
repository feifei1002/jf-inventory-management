"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { PurchaseOrder } from "../../lib/types";

export default function PurchaseOrderDetailPage() {
  const { purchaseId } = useParams<{ purchaseId: string }>();
  const router = useRouter();

  const [po, setPo] = useState<PurchaseOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    api
      .getPurchaseOrder(purchaseId)
      .then(setPo)
      .catch(() => setError("Failed to load purchase order"))
      .finally(() => setLoading(false));
  }, [purchaseId]);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const url = api.getExportUrl(purchaseId);
      const res = await fetch(url);
      if (!res.ok) throw new Error("Export failed");
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${purchaseId}.xlsx`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch {
      setError("Failed to download Excel file");
    } finally {
      setDownloading(false);
    }
  };

  const fmt = (n: number) =>
    Number(n).toLocaleString("vi-VN", { minimumFractionDigits: 0 });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 `` flex items-center justify-center">
        <div className="text-gray-400 `` text-sm">Loading purchase order...</div>
      </div>
    );
  }

  if (error || !po) {
    return (
      <div className="min-h-screen bg-gray-50 `` flex items-center justify-center">
        <div className="text-red-500 text-sm">{error || "Order not found"}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 `` pb-20 ``">
      {/* ── Top bar ── */}
      <div className="bg-white`` border-b border-gray-200 `` px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white``">
        <div>
          <h1 className="text-xl font-bold text-gray-800 `` ``">Purchase Order</h1>
          <p className="text-sm text-gray-500 ``">ĐƠN ĐẶT HÀNG / 採購單</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono bg-brand-green-50 text-brand-green-dark px-3 py-1 rounded-full border border-blue-200">
            {po.purchaseId}
          </span>
          <button
            onClick={() => router.push("/purchase-orders")}
            className="text-sm text-gray-500 `` hover:text-gray-700 px-4 py-2 border border-gray-200 `` rounded-lg"
          >
            ← Back
          </button>
          <button
            onClick={() => router.push(`/purchase-orders/${purchaseId}/edit`)}
            className="text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 px-5 py-2 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="text-sm font-semibold text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 px-5 py-2 rounded-lg flex items-center gap-2"
          >
            {downloading ? (
              "Generating..."
            ) : (
              <>
                <span>Download Excel</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* ── Order Info ── */}
        <div className="bg-white`` rounded-xl border border-gray-200 `` shadow-sm overflow-hidden`` ``">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Order Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 `` mb-0.5">PO Number</p>
              <p className="text-sm font-mono font-semibold text-gray-800 `` ``">
                {po.purchaseId}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 `` mb-0.5">PO Date</p>
              <p className="text-sm text-gray-800 `` ``">
                {new Date(po.purchaseDate).toLocaleDateString("vi-VN")}
              </p>
            </div>
          </div>
        </div>

        {/* ── Supplier Info ── */}
        <div className="bg-white`` rounded-xl border border-gray-200 `` shadow-sm overflow-hidden`` ``">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Supplier / Nhà Cung Cấp
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 `` mb-0.5">Supplier</p>
              <p className="text-sm font-semibold text-gray-800 `` ``">
                {po.supplierId} — {po.supplierName}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 `` mb-0.5">Contact Person</p>
              <p className="text-sm text-gray-800 `` ``">{po.contactPerson}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 `` mb-0.5">Payment Terms</p>
              <p className="text-sm text-gray-800 `` ``">{po.paymentTerm}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 `` mb-0.5">Address</p>
              <p className="text-sm text-gray-800 `` ``">{po.supplierAddress}</p>
            </div>
          </div>
        </div>

        {/* ── Line Items ── */}
        <div className="bg-white`` rounded-xl border border-gray-200 `` shadow-sm overflow-hidden`` ``">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Line Items / Mặt Hàng
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 `` border-b border-gray-200 `` ``">
                  {[
                    "#", "Product Code", "Product Name", "Specification",
                    "Qty", "Unit", "Unit Price", "Total", "VAT",
                    "Delivery Date", "PR No.", "Delivery Place",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-left text-xs font-semibold text-gray-500 `` whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {po.purchaseOrderItems?.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white`` border-b border-gray-100 ``"
                        : "bg-brand-green-50/30 border-b border-gray-100"
                    }
                  >
                    <td className="px-3 py-2 text-gray-400 text-xs">
                      {index + 1}
                    </td>
                    <td className="px-3 py-2 text-xs font-mono text-gray-600````">
                      {item.productId}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-800 `` ``">
                      {item.productName}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-600````">
                      {item.productSpecification}
                    </td>
                    <td className="px-3 py-2 text-xs text-right">
                      {item.quantity}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-600````">
                      {item.productUnit}
                    </td>
                    <td className="px-3 py-2 text-xs text-right font-mono">
                      {fmt(item.productPrice)}
                    </td>
                    <td className="px-3 py-2 text-xs text-right font-mono font-semibold">
                      {fmt(item.totalPrice)}
                    </td>
                    <td className="px-3 py-2 text-xs text-center">
                      {item.VAT}%
                    </td>
                    <td className="px-3 py-2 text-xs whitespace-nowrap">
                      {new Date(item.deliveryDate).toLocaleDateString("vi-VN")}
                    </td>
                    <td className="px-3 py-2 text-xs font-mono text-gray-600````">
                      {item.requisitionId}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-600````">
                      {item.deliveryPlace}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Totals ── */}
          <div className="border-t border-gray-200 `` p-5 flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-sm text-gray-600````">
                <span>Subtotal</span>
                <span className="font-mono">{fmt(po.subtotal)} {po.currency ?? "VND"}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600````">
                <span>VAT (10%)</span>
                <span className="font-mono">{fmt(po.vat)} {po.currency ?? "VND"}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-blue-900 border-t border-gray-200 `` pt-2">
                <span>Total</span>
                <span className="font-mono">{fmt(po.finalTotal)} {po.currency ?? "VND"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Success banner ── */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-green-800">
              Purchase order saved successfully
            </p>
            <p className="text-xs text-green-600 mt-0.5">
              Click Download Excel to generate the formatted 採購單 spreadsheet
            </p>
          </div>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="text-sm font-semibold text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 px-4 py-2 rounded-lg"
          >
            {downloading ? "Generating..." : "📥 Download Excel"}
          </button>
        </div>
      </div>
    </div>
  );
}