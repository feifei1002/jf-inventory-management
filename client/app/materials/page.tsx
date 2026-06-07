"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import { Material } from "../lib/types";
import { Plus, Search } from "lucide-react";

export default function MaterialsPage() {
  const router = useRouter();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .getMaterials()
      .then(setMaterials)
      .catch(() => setError("Failed to load materials"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = materials.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.materialId.toLowerCase().includes(search.toLowerCase()) ||
      m.supplierId.toLowerCase().includes(search.toLowerCase()) ||
      m.supplierName.toLowerCase().includes(search.toLowerCase())
  );

  const fmt = (n: number) =>
    Number(n).toLocaleString("vi-VN", { minimumFractionDigits: 0 });

  const handleDelete = async (materialId: string, name: string) => {
    if (!confirm(`Are you sure you want to delete material "${name}"? This cannot be undone.`)) return;
    try {
      await api.deleteMaterial(materialId);
      setMaterials((prev) => prev.filter((m) => m.materialId !== materialId));
    } catch (err: any) {
      alert(err.message ?? "Failed to delete material");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">Materials</h1>
          <p className="text-sm text-gray-500 ">材料 / Nguyên liệu </p>
        </div>
        <button
          onClick={() => router.push("/materials/create")}
          className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Material
        </button>
      </div>

      <div className="max-w-8xl mx-auto px-6 py-8 space-y-6">
        {/* ── Search ── */}
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by material ID, name, supplier ID or supplier name..."
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
            Loading materials...
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400  text-sm mb-4">
              {search ? "No materials match your search" : "No materials yet"}
            </p>
            {!search && (
              <button
                onClick={() => router.push("/materials/create")}
                className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg"
              >
                Add your first material
              </button>
            )}
          </div>
        )}

        {/* ── Materials table ── */}
        {!loading && filtered.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-green">
                    {[
                      "Material ID 料號",
                      "Name 品名",
                      "Specification 規格",
                      "Unit 單位",
                      "Price 價格",
                      "Supplier 供應商",
                      "Last Purchase 最後購買",
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
                  {filtered.map((material, index) => (
                    <tr
                      key={material.materialId}
                      className={
                        index % 2 === 0
                          ? "bg-white border-b border-gray-100  hover:bg-brand-green-50/40  transition-colors"
                          : "bg-gray-50/60   border-b border-gray-100  hover:bg-brand-green-50/40  transition-colors"
                      }
                    >
                      <td className="px-4 py-3">
                        <span className="font-mono text-xs font-semibold text-brand-green-dark bg-brand-green-50 px-2 py-0.5 rounded">
                          {material.materialId}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-800  ">
                        {material.name}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {material.specification}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {material.unit}
                      </td>
                      <td className="px-4 py-3 text-xs font-mono text-gray-800  ">
                        {fmt(material.price)} {material.currency ?? "VND"}
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-semibold text-gray-800  ">
                          {material.supplierName}
                        </p>
                        <p className="text-xs text-gray-400">
                          {material.supplierId}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {new Date(material.lastPurchaseDate).toLocaleDateString(
                          "vi-VN"
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => router.push(`/materials/${material.materialId}`)}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View
                          </button>
                          <span className="text-gray-300">/</span>
                          <button
                            onClick={() => router.push(`/materials/${material.materialId}/edit`)}
                            className="text-xs text-amber-600 hover:text-amber-800 font-medium"
                          >
                            Edit
                          </button>
                          <span className="text-gray-300">/</span>
                          <button
                            onClick={() => handleDelete(material.materialId, material.name)}
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
                {filtered.length} material{filtered.length !== 1 ? "s" : ""}
                {search && ` matching "${search}"`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}