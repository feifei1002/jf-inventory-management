"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import { Supplier } from "../lib/types";
import { Plus, Search } from "lucide-react";

export default function SuppliersPage() {
  const router = useRouter();
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .getSuppliers()
      .then(setSuppliers)
      .catch(() => setError("Failed to load suppliers"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = suppliers.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.supplierId.toLowerCase().includes(search.toLowerCase()) ||
      s.type.toLowerCase().includes(search.toLowerCase()) ||
      s.contactPerson?.toLowerCase().includes(search.toLowerCase()) ||
      s.telephone.toLowerCase().includes(search.toLowerCase()) ||
      s.MST?.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (supplierId: string, name: string) => {
    if (!confirm(`Are you sure you want to delete supplier "${name}"? This cannot be undone.`)) return;
    try {
      await api.deleteSupplier(supplierId);
      setSuppliers((prev) => prev.filter((s) => s.supplierId !== supplierId));
    } catch (err: any) {
      alert(err.message ?? "Failed to delete supplier");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">Suppliers</h1>
          <p className="text-sm text-gray-500 ">供應商 / Nhà Cung Cấp</p>
        </div>
        <button
          onClick={() => router.push("/suppliers/create")}
          className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Supplier
        </button>
      </div>

      <div className="max-w-8xl mx-auto px-6 py-8 space-y-6">
        {/* ── Search ── */}
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by supplier ID, name, contact person, type or MST..."
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
            Loading suppliers...
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400  text-sm mb-4">
              {search ? "No suppliers match your search" : "No suppliers yet"}
            </p>
            {!search && (
              <button
                onClick={() => router.push("/suppliers/create")}
                className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg"
              >
                Add your first supplier
              </button>
            )}
          </div>
        )}

        {/* ── Suppliers table ── */}
        {!loading && filtered.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-green">
                    {[
                      "Supplier ID 廠商編號",
                      "Name 廠商名稱",
                      "Type 供應產品",
                      "Contact Person 聯絡人",
                      "Telephone 電話",
                      "Payment Term 付款條件",
                      "MST",
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
                  {filtered.map((supplier, index) => (
                    <tr
                      key={supplier.supplierId}
                      className={
                        index % 2 === 0
                          ? "bg-white border-b border-gray-100  hover:bg-brand-green-50/40  transition-colors"
                          : "bg-gray-50/60   border-b border-gray-100  hover:bg-brand-green-50/40  transition-colors"
                      }
                    >
                      <td className="px-4 py-3">
                        <span className="font-mono text-xs font-semibold text-brand-green-dark bg-brand-green-50 px-2 py-0.5 rounded">
                          {supplier.supplierId}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-semibold text-gray-800  ">
                          {supplier.name}
                        </p>
                        {supplier.email && (
                          <p className="text-xs text-gray-400">{supplier.email}</p>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {supplier.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {supplier.contactPerson ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {supplier.telephone}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {supplier.paymentTerm ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-gray-600">
                        {supplier.MST ?? "—"}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => router.push(`/suppliers/${supplier.supplierId}`)}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View
                          </button>
                          <span className="text-gray-300">/</span>
                          <button
                            onClick={() => router.push(`/suppliers/${supplier.supplierId}/edit`)}
                            className="text-xs text-amber-600 hover:text-amber-800 font-medium"
                          >
                            Edit
                          </button>
                          <span className="text-gray-300">/</span>
                          <button
                            onClick={() => handleDelete(supplier.supplierId, supplier.name)}
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
            <div className="px-4 py-3 bg-gray-50  border-t border-gray-200  ">
              <p className="text-xs text-gray-400">
                {filtered.length} supplier{filtered.length !== 1 ? "s" : ""}
                {search && ` matching "${search}"`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}