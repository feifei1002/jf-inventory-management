"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { WarehousingForm } from "../../lib/types";

export default function WarehousingFormDetailPage() {
  const { formId } = useParams<{ formId: string }>();
  const router = useRouter();
  const [form, setForm] = useState<WarehousingForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    api
      .getWarehousingForm(formId)
      .then(setForm)
      .catch(() => setError("Failed to load warehousing form"))
      .finally(() => setLoading(false));
  }, [formId]);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const url = api.getWarehousingExportUrl(formId);
      const res = await fetch(url);
      if (!res.ok) throw new Error("Export failed");
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${formId}.xlsx`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch {
      setError("Failed to download Excel file");
    } finally {
      setDownloading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading warehousing form...</p>
      </div>
    );
  }

  if (error || !form) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500 text-sm">{error || "Form not found"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Warehousing Form
          </h1>
          <p className="text-sm text-gray-500">入庫單 / Phiếu Nhập Kho</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono bg-brand-green-50 text-brand-green px-3 py-1 rounded-full border border-brand-green-100">
            {form.formId}
          </span>
          <button
            onClick={() => router.push("/warehousing")}
            className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-200 rounded-lg"
          >
            ← Back
          </button>
          <button
            onClick={() => router.push(`/warehousing/${formId}/edit`)}
            className="text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 px-5 py-2 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark disabled:opacity-50 px-5 py-2 rounded-lg flex items-center gap-2"
          >
            {downloading ? "Generating..." : "Download Excel"}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* ── Success banner ── */}
        <div className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-4 flex items-center gap-3">
          <span className="text-brand-green text-lg">✓</span>
          <div>
            <p className="text-sm font-semibold text-brand-green-dark">
              Inventory updated successfully
            </p>
            <p className="text-xs text-brand-green mt-0.5">
              All received items have been added to stock
            </p>
          </div>
        </div>

        {/* ── Form Info ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Form Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Form ID</p>
              <p className="text-sm font-mono font-semibold text-brand-green">
                {form.formId}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Date</p>
              <p className="text-sm text-gray-800">
                {new Date(form.date).toLocaleDateString("vi-VN")}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Invoice No.</p>
              <p className="text-sm font-mono text-gray-800">{form.invoiceNo}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">PO Number</p>
              <p className="text-sm font-mono font-semibold text-gray-800">
                {form.purchaseId}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Payment Term</p>
              <p className="text-sm text-gray-800">{form.paymentTerm ?? "—"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Delivery Note</p>
              <p className="text-sm text-gray-800">{form.deliveryNote ?? "—"}</p>
            </div>
          </div>
        </div>

        {/* ── Supplier Info ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Supplier / Nhà Cung Cấp
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Supplier</p>
              <p className="text-sm font-semibold text-gray-800">
                {form.supplierId} — {form.supplierName}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Contact</p>
              <p className="text-sm text-gray-800">
                {form.contactPerson ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Telephone</p>
              <p className="text-sm text-gray-800">{form.supplierTelephone}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Fax</p>
              <p className="text-sm text-gray-800">{form.supplierFax ?? "—"}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-gray-400 mb-0.5">Address</p>
              <p className="text-sm text-gray-800">{form.supplierAddress}</p>
            </div>
          </div>
        </div>

        {/* ── Items ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Received Items / Hàng Nhập Kho
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  {[
                    "#",
                    "Product Code",
                    "Product Name",
                    "Specification",
                    "Qty",
                    "Unit",
                    "Delivery Date",
                    "PR No.",
                    "Delivery Place",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2 text-left text-xs font-semibold text-gray-500 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {form.materialWarehousingItems?.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white border-b border-gray-100"
                        : "bg-brand-green-50/20 border-b border-gray-100"
                    }
                  >
                    <td className="px-4 py-2 text-xs text-gray-400">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-xs font-mono text-brand-green">
                      {item.productId}
                    </td>
                    <td className="px-4 py-2 text-xs font-semibold text-gray-800">
                      {item.productName}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-600">
                      {item.productSpecification}
                    </td>
                    <td className="px-4 py-2 text-xs text-center font-semibold text-gray-800">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-600">
                      {item.productUnit}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-600 whitespace-nowrap">
                      {new Date(item.deliveryDate).toLocaleDateString("vi-VN")}
                    </td>
                    <td className="px-4 py-2 text-xs font-mono text-gray-600">
                      {item.requisitionId}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-600">
                      {item.deliveryPlace}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-400">
              {form.materialWarehousingItems?.length ?? 0} item
              {(form.materialWarehousingItems?.length ?? 0) !== 1 ? "s" : ""} received
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}