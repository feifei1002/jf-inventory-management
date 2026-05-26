"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import { Supplier } from "../lib/types";

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
      s.supplierId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Suppliers</h1>
          <p className="text-sm text-gray-500">Nhà Cung Cấp / 供應商</p>
        </div>
        <button
          onClick={() => router.push("/suppliers/create")}
          className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
        >
          + New Supplier
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* ── Search ── */}
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by supplier ID or name..."
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
            Loading suppliers...
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm mb-4">
              {search ? "No suppliers match your search" : "No suppliers yet"}
            </p>
            {!search && (
              <button
                onClick={() => router.push("/suppliers/create")}
                className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
              >
                Add your first supplier
              </button>
            )}
          </div>
        )}

        {/* ── Suppliers table ── */}
        {!loading && filtered.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-900">
                  {[
                    "Supplier ID",
                    "Name",
                    "Type",
                    "Contact Person",
                    "Telephone",
                    "Payment Term",
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
                        ? "bg-white border-b border-gray-100 hover:bg-blue-50/40 transition-colors"
                        : "bg-gray-50/60 border-b border-gray-100 hover:bg-blue-50/40 transition-colors"
                    }
                  >
                    <td className="px-4 py-3">
                      <span className="font-mono text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        {supplier.supplierId}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-xs font-semibold text-gray-800">
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
                      <button
                        onClick={() =>
                          router.push(`/suppliers/${supplier.supplierId}`)
                        }
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
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