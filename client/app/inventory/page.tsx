"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import { InventoryItem } from "../lib/types";

export default function InventoryPage() {
  const router = useRouter();
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editStock, setEditStock] = useState<number>(0);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api
      .getInventory()
      .then(setInventory)
      .catch(() => setError("Failed to load inventory"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = inventory.filter(
    (item) =>
      item.materialName.toLowerCase().includes(search.toLowerCase()) ||
      item.materialId.toLowerCase().includes(search.toLowerCase()) ||
      item.materialSpecification.toLowerCase().includes(search.toLowerCase())
  );

  const handleEditStock = (item: InventoryItem) => {
    setEditingId(item.materialId);
    setEditStock(item.currentStock);
  };

  const handleSaveStock = async (materialId: string) => {
    setSaving(true);
    try {
      const updated = await api.updateInventory(materialId, {
        currentStock: editStock,
      });
      setInventory((prev) =>
        prev.map((item) =>
          item.materialId === materialId
            ? { ...item, currentStock: updated.currentStock, lastUpdated: updated.lastUpdated }
            : item
        )
      );
      setEditingId(null);
    } catch (err: any) {
      alert(err.message ?? "Failed to update stock");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => setEditingId(null);

  const getStockStatus = (stock: number) => {
    if (stock <= 0) return { label: "Out of Stock", class: "bg-red-100 text-red-700" };
    if (stock <= 10) return { label: "Low Stock", class: "bg-amber-100 text-amber-700" };
    return { label: "In Stock", class: "bg-brand-green-100 text-brand-green-dark" };
  };

  const totalItems = inventory.length;
  const outOfStock = inventory.filter((i) => i.currentStock <= 0).length;
  const lowStock = inventory.filter((i) => i.currentStock > 0 && i.currentStock <= 10).length;
  const inStock = inventory.filter((i) => i.currentStock > 10).length;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Inventory</h1>
          <p className="text-sm text-gray-500">Tồn Kho / 庫存</p>
        </div>
        <button
          onClick={() => router.push("/warehousing/create")}
          className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg"
        >
          + Receive Stock
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* ── Summary cards ── */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-xs text-gray-400 mb-1">Total Materials</p>
            <p className="text-2xl font-bold text-gray-800">{totalItems}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-xs text-gray-400 mb-1">In Stock</p>
            <p className="text-2xl font-bold text-brand-green">{inStock}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-xs text-gray-400 mb-1">Low Stock</p>
            <p className="text-2xl font-bold text-amber-600">{lowStock}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-xs text-gray-400 mb-1">Out of Stock</p>
            <p className="text-2xl font-bold text-red-600">{outOfStock}</p>
          </div>
        </div>

        {/* ── Search ── */}
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by material ID, name or specification..."
            className="w-full text-sm px-4 py-3 pl-10 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
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
            Loading inventory...
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm mb-4">
              {search
                ? "No items match your search"
                : "No inventory yet — receive stock using a warehousing form"}
            </p>
            {!search && (
              <button
                onClick={() => router.push("/warehousing/create")}
                className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark px-5 py-2 rounded-lg"
              >
                Receive Stock
              </button>
            )}
          </div>
        )}

        {/* ── Inventory table ── */}
        {!loading && filtered.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-green">
                  {[
                    "Material ID",
                    "Material Name",
                    "Specification",
                    "Unit",
                    "Current Stock",
                    "Status",
                    "Supplier",
                    "Last Updated",
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
                {filtered.map((item, index) => {
                  const status = getStockStatus(item.currentStock);
                  const isEditing = editingId === item.materialId;

                  return (
                    <tr
                      key={item.materialId}
                      className={
                        index % 2 === 0
                          ? "bg-white border-b border-gray-100 hover:bg-brand-green-50/40 transition-colors"
                          : "bg-gray-50/60 border-b border-gray-100 hover:bg-brand-green-50/40 transition-colors"
                      }
                    >
                      <td className="px-4 py-3">
                        <span className="font-mono text-xs font-semibold text-brand-green bg-brand-green-50 px-2 py-0.5 rounded">
                          {item.materialId}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-800">
                        {item.materialName}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {item.materialSpecification}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {item.unit}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="number"
                            min={0}
                            value={editStock}
                            onChange={(e) => setEditStock(Number(e.target.value))}
                            className="w-24 text-xs px-2 py-1 border border-brand-green rounded focus:outline-none focus:ring-1 focus:ring-brand-green text-right font-mono"
                            autoFocus
                          />
                        ) : (
                          <span className="text-xs font-mono font-bold text-gray-800">
                            {item.currentStock.toLocaleString()}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${status.class}`}>
                          {status.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-semibold text-gray-800">
                          {item.supplierName ?? "—"}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.supplierId ?? ""}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">
                        {new Date(item.lastUpdated).toLocaleDateString("vi-VN")}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleSaveStock(item.materialId)}
                              disabled={saving}
                              className="text-xs text-white bg-brand-green hover:bg-brand-green-dark px-2 py-1 rounded font-medium disabled:opacity-50"
                            >
                              {saving ? "..." : "Save"}
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="text-xs text-gray-500 hover:text-gray-700 font-medium"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleEditStock(item)}
                            className="text-xs text-amber-600 hover:text-amber-800 font-medium"
                          >
                            Adjust Stock
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
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