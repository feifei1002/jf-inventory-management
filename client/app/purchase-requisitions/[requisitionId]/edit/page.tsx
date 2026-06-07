"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { api } from "../../../lib/api";
import { Material } from "../../../lib/types";
import { Plus } from "lucide-react";

const DEPARTMENTS = [
  "管理部",
  "生產部",
  "業務部",
  "採購部",
];

const DELIVERY_PLACES = ["J&F Factory", "J&F Office", "J&F Warehouse"];

const inputClass =
  "w-full text-sm px-3 py-2 border border-gray-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green      ";

export default function EditPurchaseRequisitionPage() {
  const router = useRouter();
  const { requisitionId } = useParams<{ requisitionId: string }>();

  const [requisitionDate, setRequisitionDate] = useState("");
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [requester, setRequester] = useState("");
  const [soNo, setSoNo] = useState("");
  const [note, setNote] = useState("");
  const [items, setItems] = useState<any[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      api.getPurchaseRequisition(requisitionId),
      api.getMaterials(),
    ])
      .then(([pr, materialList]) => {
        setRequisitionDate(
          new Date(pr.requisitionDate).toISOString().split("T")[0]
        );
        setDepartment(pr.department ?? DEPARTMENTS[0]);
        setRequester(pr.requester ?? "");
        setSoNo(pr.soNo ?? "");
        setNote(pr.note ?? "");
        setItems(
          pr.purchaseRequisitionItems?.map((item: any) => ({
            materialId: item.materialId,
            materialName: item.materialName,
            materialSpecification: item.materialSpecification,
            quantity: item.quantity,
            weight: item.weight ?? "",
            materialUnit: item.materialUnit ?? "tấm",
            requiredDate: new Date(item.requiredDate)
              .toISOString()
              .split("T")[0],
            purpose: item.purpose ?? "",
            deliveryPlace: item.deliveryPlace,
          })) ?? []
        );
        setMaterials(materialList);
      })
      .catch(() => setError("Failed to load requisition"))
      .finally(() => setLoading(false));
  }, [requisitionId]);

  const updateItem = (index: number, field: string, value: string | number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleMaterialSelect = (index: number, materialId: string) => {
    const material = materials.find((m) => m.materialId === materialId);
    if (material) {
      setItems((prev) =>
        prev.map((item, i) =>
          i === index
            ? {
                ...item,
                materialId: material.materialId,
                materialName: material.name,
                materialSpecification: material.specification,
                materialUnit: material.unit,
              }
            : item
        )
      );
    } else {
      updateItem(index, "materialId", materialId);
    }
  };

  const addItem = () =>
    setItems((prev) => [
      ...prev,
      {
        materialId: "",
        materialName: "",
        materialSpecification: "",
        quantity: 1,
        weight: "",
        materialUnit: "tấm",
        requiredDate: "",
        purpose: "",
        deliveryPlace: "J&F Factory",
      },
    ]);

  const removeItem = (index: number) =>
    setItems((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async () => {
    setError("");
    if (!requester) {
      setError("Requester name is required");
      return;
    }
    if (items.some((i) => !i.materialName || !i.requiredDate)) {
      setError("Please fill in all material names and required dates");
      return;
    }
    setSubmitting(true);
    try {
      await api.updatePurchaseRequisition(requisitionId, {
        requisitionDate,
        department,
        requester,
        soNo: soNo || null,
        note: note || null,
        items,
      });
      router.push("/purchase-requisitions");
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <p className="text-gray-400  text-sm">Loading requisition...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">
            Edit Purchase Requisition
          </h1>
          <p className="text-sm text-gray-500  font-mono">{requisitionId}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="text-sm text-gray-500  hover:text-gray-700 px-4 py-2 border border-gray-200  rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark disabled:opacity-50 px-5 py-2 rounded-lg"
          >
            {submitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 py-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* ── Requisition Info ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Requisition Information 請購單資訊
            </h2>
          </div>
          <div className="p-5 grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                PR Number 請購單號
              </label>
              <input
                value={requisitionId}
                readOnly
                className="w-full text-sm px-3 py-2 border border-gray-200  rounded-lg bg-gray-50 text-gray-400 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                Date 日期
              </label>
              <input
                type="date"
                value={requisitionDate}
                onChange={(e) => setRequisitionDate(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                SO Number SO單號
              </label>
              <input
                value={soNo}
                onChange={(e) => setSoNo(e.target.value)}
                className={inputClass}
                placeholder="e.g. SO-2511006"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                Department 部門 <span className="text-red-500">*</span>
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className={inputClass + " bg-white"}
              >
                {DEPARTMENTS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                Requester 請購人 <span className="text-red-500">*</span>
              </label>
              <input
                value={requester}
                onChange={(e) => setRequester(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                Note 備註
              </label>
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* ── Line Items ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Items 項目
            </h2>
            <button
              onClick={addItem}
              className="text-xs font-semibold text-blue-900 bg-white hover:bg-brand-green-50 px-3 py-1 rounded-full flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Item
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50  border-b border-gray-200  ">
                  {[
                    "STT",
                    "Material ID 料號",
                    "Material Name 品名",
                    "Specification 規格",
                    "Quantity 數量",
                    "Unit 單位",
                    "Weight 重量 (kg)",
                    "Required Date 需求日期",
                    "Purpose 使用說明",
                    "Delivery Place 交貨地點",
                    "",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-left text-xs font-semibold text-gray-500  whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-brand-green-50/30"
                    }
                  >
                    <td className="px-3 py-2 text-gray-400 text-xs">
                      {index + 1}
                    </td>
                    <td className="px-2 py-1">
                      <select
                        value={item.materialId}
                        onChange={(e) =>
                          handleMaterialSelect(index, e.target.value)
                        }
                        className="w-40 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green       bg-white"
                      >
                        <option value="">-- Select --</option>
                        {materials.map((m) => (
                          <option key={m.materialId} value={m.materialId}>
                            {m.materialId}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-2 py-1">
                      <input
                        value={item.materialName}
                        onChange={(e) =>
                          updateItem(index, "materialName", e.target.value)
                        }
                        className="w-36 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green      "
                        placeholder="Material name"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        value={item.materialSpecification}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "materialSpecification",
                            e.target.value
                          )
                        }
                        className="w-36 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green      "
                        placeholder="e.g. 1.0t*1220W"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) =>
                          updateItem(index, "quantity", Number(e.target.value))
                        }
                        className="w-16 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green       text-right"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        value={item.materialUnit}
                        onChange={(e) =>
                          updateItem(index, "materialUnit", e.target.value)
                        }
                        className="w-16 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green      "
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="number"
                        min={0}
                        value={item.weight}
                        onChange={(e) =>
                          updateItem(index, "weight", e.target.value)
                        }
                        className="w-20 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green       text-right"
                        placeholder="0.00"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="date"
                        value={item.requiredDate}
                        onChange={(e) =>
                          updateItem(index, "requiredDate", e.target.value)
                        }
                        className="w-32 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green      "
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        value={item.purpose}
                        onChange={(e) =>
                          updateItem(index, "purpose", e.target.value)
                        }
                        className="w-28 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green      "
                        placeholder="Purpose"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <select
                        value={item.deliveryPlace}
                        onChange={(e) =>
                          updateItem(index, "deliveryPlace", e.target.value)
                        }
                        className="w-28 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green       bg-white"
                      >
                        {DELIVERY_PLACES.map((p) => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-2 py-1">
                      {items.length > 1 && (
                        <button
                          onClick={() => removeItem(index)}
                          className="text-red-400 hover:text-red-600 text-lg leading-none"
                        >
                          ×
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}