"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import { WarehousingForm } from "../lib/types";
import { Plus, Search } from "lucide-react";

export default function WarehousingPage() {
  const router = useRouter();
  const [forms, setForms] = useState<WarehousingForm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .getWarehousingForms()
      .then(setForms)
      .catch(() => setError("Failed to load warehousing forms"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = forms.filter(
    (f) =>
      f.formId.toLowerCase().includes(search.toLowerCase()) ||
      f.supplierName.toLowerCase().includes(search.toLowerCase()) ||
      f.purchaseId.toLowerCase().includes(search.toLowerCase()) ||
      f.invoiceNo.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (formId: string) => {
    if (!confirm(`Are you sure you want to delete form "${formId}"? This will reverse the inventory changes.`)) return;
    try {
      await api.deleteWarehousingForm(formId);
      setForms((prev) => prev.filter((f) => f.formId !== formId));
    } catch (err: any) {
      alert(err.message ?? "Failed to delete warehousing form");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Material Warehousing
          </h1>
          <p className="text-sm text-gray-500">入庫單 / Phiếu Nhập Kho</p>
        </div>
        <button
          onClick={() => router.push("/warehousing/create")}
          className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Warehousing Form
        </button>
      </div>

      <div className="max-w-8xl mx-auto px-6 py-8 space-y-6">
        {/* ── Search ── */}
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by form ID, supplier, PO number or invoice..."
            className="w-full text-sm px-4 py-3 pl-10 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
          />
          <span className="absolute left-3 top-3.5 text-gray-400 text-sm">
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
          <div className="text-center py-20 text-gray-400 text-sm">
            Loading warehousing forms...
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm mb-4">
              {search ? "No forms match your search" : "No warehousing forms yet"}
            </p>
            {!search && (
              <button
                onClick={() => router.push("/warehousing/create")}
                className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg"
              >
                Create your first form
              </button>
            )}
          </div>
        )}

        {/* ── Table ── */}
        {!loading && filtered.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-green">
                    {[
                      "Form ID 入庫單號",
                      "Date 日期",
                      "Supplier 供應商",
                      "PO Number 採購單號",
                      "Invoice No. 發票號碼",
                      "Items 項目數",
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
                  {filtered.map((form, index) => (
                    <tr
                      key={form.formId}
                      className={
                        index % 2 === 0
                          ? "bg-white border-b border-gray-100 hover:bg-brand-green-50/40 transition-colors"
                          : "bg-gray-50/60 border-b border-gray-100 hover:bg-brand-green-50/40 transition-colors"
                      }
                    >
                      <td className="px-4 py-3">
                        <span className="font-mono text-xs font-semibold text-brand-green bg-brand-green-50 px-2 py-0.5 rounded">
                          {form.formId}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">
                        {new Date(form.date).toLocaleDateString("vi-VN")}
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-semibold text-gray-800">
                          {form.supplierName}
                        </p>
                        <p className="text-xs text-gray-400">{form.supplierId}</p>
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-gray-600">
                        {form.purchaseId}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {form.invoiceNo}
                      </td>
                      <td className="px-4 py-3 text-xs text-center text-gray-600">
                        {form.materialWarehousingItems?.length ?? 0}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => router.push(`/warehousing/${form.formId}`)}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View
                          </button>
                          <span className="text-gray-300">/</span>
                          <button
                            onClick={() => router.push(`/warehousing/${form.formId}/edit`)}
                            className="text-xs text-amber-600 hover:text-amber-800 font-medium"
                          >
                            Edit
                          </button>
                          <span className="text-gray-300">/</span>
                          
                          <a href={api.getWarehousingExportUrl(form.formId)}
                            download={`${form.formId}.xlsx`}
                            className="text-xs text-brand-green hover:text-brand-green-dark font-medium"
                          >
                            Excel
                          </a>
                          <span className="text-gray-300">/</span>
                          <button
                            onClick={() => handleDelete(form.formId)}
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
            </div>
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                {filtered.length} form{filtered.length !== 1 ? "s" : ""}
                {search && ` matching "${search}"`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}