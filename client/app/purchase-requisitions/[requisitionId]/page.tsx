"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { PurchaseRequisition } from "../../lib/types";

export default function PurchaseRequisitionDetailPage() {
  const { requisitionId } = useParams<{ requisitionId: string }>();
  const router = useRouter();
  const [pr, setPr] = useState<PurchaseRequisition | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getPurchaseRequisition(requisitionId)
      .then(setPr)
      .catch(() => setError("Failed to load requisition"))
      .finally(() => setLoading(false));
  }, [requisitionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <p className="text-gray-400  text-sm">Loading requisition...</p>
      </div>
    );
  }

  if (error || !pr) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <p className="text-red-500 text-sm">
          {error || "Requisition not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">
            Purchase Requisition
          </h1>
          <p className="text-sm text-gray-500 ">請購單 / Đơn Đề Nghị Mua Hàng</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono bg-brand-green-50 text-brand-green-dark px-3 py-1 rounded-full border border-blue-200">
            {pr.requisitionId}
          </span>
          <button
            onClick={() => router.push("/purchase-requisitions")}
            className="text-sm text-gray-500  hover:text-gray-700 px-4 py-2 border border-gray-200  rounded-lg"
          >
            ← Back
          </button>
          <button
            onClick={() =>
              router.push(`/purchase-requisitions/${requisitionId}/edit`)
            }
            className="text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 px-5 py-2 rounded-lg"
          >
            Edit
          </button>
          
            <a href={api.getPRExportUrl(requisitionId)}
            download={`${requisitionId}.xlsx`}
            className="text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg"
          >
            Download Excel
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* ── Requisition Info ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Requisition Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-gray-400  mb-0.5">PR Number</p>
              <p className="text-sm font-mono font-semibold text-brand-green-dark">
                {pr.requisitionId}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Date</p>
              <p className="text-sm text-gray-800  ">
                {new Date(pr.requisitionDate).toLocaleDateString("vi-VN")}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">SO Number</p>
              <p className="text-sm font-mono text-gray-800  ">
                {pr.soNo ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Department</p>
              <p className="text-sm text-gray-800  ">{pr.department}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Requester</p>
              <p className="text-sm text-gray-800  ">{pr.requester}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Note</p>
              <p className="text-sm text-gray-800  ">{pr.note ?? "—"}</p>
            </div>
          </div>
        </div>

        {/* ── Line Items ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Items / Mặt Hàng
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50  border-b border-gray-200  ">
                  {[
                    "#",
                    "Product ID",
                    "Product Name",
                    "Specification",
                    "Qty",
                    "Weight",
                    "Required Date",
                    "Purpose",
                    "Delivery Place",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2 text-left text-xs font-semibold text-gray-500  whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pr.purchaseRequisitionItems?.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white border-b border-gray-100 "
                        : "bg-brand-green-50/30 border-b border-gray-100"
                    }
                  >
                    <td className="px-4 py-2 text-xs text-gray-400">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-xs font-mono text-brand-green-dark">
                      {item.productId}
                    </td>
                    <td className="px-4 py-2 text-xs font-semibold text-gray-800  ">
                      {item.productName}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-600">
                      {item.productSpecification}
                    </td>
                    <td className="px-4 py-2 text-xs text-center text-gray-800  ">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-2 text-xs text-center text-gray-600">
                      {item.weight ?? "—"}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-600 whitespace-nowrap">
                      {new Date(item.requiredDate).toLocaleDateString("vi-VN")}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-600">
                      {item.purpose ?? "—"}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-600">
                      {item.deliveryPlace}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-gray-50  border-t border-gray-200  ">
            <p className="text-xs text-gray-400">
              {pr.purchaseRequisitionItems?.length ?? 0} item
              {(pr.purchaseRequisitionItems?.length ?? 0) !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}