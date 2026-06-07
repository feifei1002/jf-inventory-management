"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { Material } from "../../lib/types";
import { ArrowLeft } from "lucide-react";

export default function MaterialDetailPage() {
  const { materialId } = useParams<{ materialId: string }>();
  const router = useRouter();
  const [material, setMaterial] = useState<Material | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getMaterial(materialId)
      .then(setMaterial)
      .catch(() => setError("Failed to load material"))
      .finally(() => setLoading(false));
  }, [materialId]);

  const fmt = (n: number) =>
    Number(n).toLocaleString("vi-VN", { minimumFractionDigits: 0 });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <p className="text-gray-400  text-sm">Loading material...</p>
      </div>
    );
  }

  if (error || !material) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <p className="text-red-500 text-sm">{error || "Material not found"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">Material Detail</h1>
          <p className="text-sm text-gray-500  font-mono">{material.materialId}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/materials")}
            className="text-sm text-gray-500  hover:text-gray-700 px-4 py-2 border border-gray-200  rounded-lg hover:border-brand-green transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button
            onClick={() => router.push(`/materials/${materialId}/edit`)}
            className="text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 px-5 py-2 rounded-lg"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Material Information 材料資訊
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Material ID 料號</p>
              <p className="text-sm font-mono font-semibold text-gray-800  ">
                {material.materialId}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Name 品名</p>
              <p className="text-sm font-semibold text-gray-800  ">
                {material.name}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Specification 規格</p>
              <p className="text-sm text-gray-800  ">{material.specification}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Unit 單位</p>
              <p className="text-sm text-gray-800  ">{material.unit}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Price 價格</p>
              <p className="text-sm font-mono font-semibold text-gray-800  ">
                {fmt(material.price)} {material.currency ?? "VND"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Last Purchase Date 最後採購日期</p>
              <p className="text-sm text-gray-800  ">
                {new Date(material.lastPurchaseDate).toLocaleDateString("vi-VN")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Supplier / Nhà Cung Cấp 供應商
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Supplier ID 供應商編號</p>
              <p className="text-sm font-mono font-semibold text-brand-green-dark">
                {material.supplierId}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Supplier Name 供應商名稱</p>
              <p className="text-sm font-semibold text-gray-800  ">
                {material.supplierName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}