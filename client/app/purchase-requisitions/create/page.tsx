"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { Product } from "../../lib/types";

const DEPARTMENTS = [
  "管理部 AD",
  "生產部 MD",
  "業務部 SD",
  "採購部 PD",
];

const DELIVERY_PLACES = ["J&F Factory", "J&F Office", "J&F Warehouse"];

const generatePRId = () => {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const seq = String(Math.floor(Math.random() * 999) + 1).padStart(3, "0");
  return `PR-${yy}${mm}${seq}`;
};

const emptyItem = () => ({
  productId: "",
  productName: "",
  productSpecification: "",
  quantity: 1,
  weight: "",
  productUnit: "tấm",
  requiredDate: "",
  purpose: "",
  deliveryPlace: "J&F Factory",
});

const inputClass =
  "w-full text-sm px-3 py-2 border border-gray-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green      ";

export default function CreatePurchaseRequisitionPage() {
  const router = useRouter();

  const [requisitionId] = useState(generatePRId());
  const [requisitionDate, setRequisitionDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [requester, setRequester] = useState("");
  const [soNo, setSoNo] = useState("");
  const [note, setNote] = useState("");
  const [items, setItems] = useState([emptyItem()]);
  const [products, setProducts] = useState<Product[]>([]);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    api.getProducts().then(setProducts).catch(console.error);
  }, []);

  const updateItem = (index: number, field: string, value: string | number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  // Auto fill product details when product is selected
  const handleProductSelect = (index: number, productId: string) => {
    const product = products.find((p) => p.productId === productId);
    if (product) {
      setItems((prev) =>
        prev.map((item, i) =>
          i === index
            ? {
                ...item,
                productId: product.productId,
                productName: product.name,
                productSpecification: product.specification,
                productUnit: product.unit,
              }
            : item
        )
      );
    } else {
      updateItem(index, "productId", productId);
    }
  };

  const addItem = () => setItems((prev) => [...prev, emptyItem()]);
  const removeItem = (index: number) =>
    setItems((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async () => {
    setError("");
    if (!requester) {
      setError("Requester name is required");
      return;
    }
    if (items.some((i) => !i.productName || !i.requiredDate)) {
      setError("Please fill in all product names and required dates");
      return;
    }
    setSubmitting(true);
    try {
      await api.createPurchaseRequisition({
        requisitionId,
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

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">
            New Purchase Requisition
          </h1>
          <p className="text-sm text-gray-500 ">請購單 / Đơn Đề Nghị Mua Hàng</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono bg-brand-green-50 text-brand-green-dark px-3 py-1 rounded-full border border-blue-200">
            {requisitionId}
          </span>
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
            {submitting ? "Saving..." : "Save Requisition"}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* ── Requisition Info ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Requisition Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                PR Number
              </label>
              <input
                value={requisitionId}
                readOnly
                className="w-full text-sm px-3 py-2 border border-gray-200  rounded-lg bg-gray-50 text-gray-500  font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                Date
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
                SO Number
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
                Department <span className="text-red-500">*</span>
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
                Requester <span className="text-red-500">*</span>
              </label>
              <input
                value={requester}
                onChange={(e) => setRequester(e.target.value)}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                Note
              </label>
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className={inputClass}
                placeholder="Optional note"
              />
            </div>
          </div>
        </div>

        {/* ── Line Items ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Items / Mặt Hàng
            </h2>
            <button
              onClick={addItem}
              className="text-xs font-semibold text-blue-900 bg-white hover:bg-brand-green-50 px-3 py-1 rounded-full"
            >
              + Add Item
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50  border-b border-gray-200  ">
                  {[
                    "#",
                    "Select Product",
                    "Product Name",
                    "Specification",
                    "Qty",
                    "Unit",
                    "Weight (kg)",
                    "Required Date",
                    "Purpose",
                    "Delivery Place",
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
                        value={item.productId}
                        onChange={(e) =>
                          handleProductSelect(index, e.target.value)
                        }
                        className="w-40 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green       bg-white"
                      >
                        <option value="">-- Select --</option>
                        {products.map((p) => (
                          <option key={p.productId} value={p.productId}>
                            {p.productId}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="px-2 py-1">
                      <input
                        value={item.productName}
                        onChange={(e) =>
                          updateItem(index, "productName", e.target.value)
                        }
                        className="w-36 text-xs px-2 py-1.5 border border-gray-200  rounded focus:outline-none focus:ring-1 focus:ring-brand-green      "
                        placeholder="Product name"
                      />
                    </td>

                    <td className="px-2 py-1">
                      <input
                        value={item.productSpecification}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "productSpecification",
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
                        value={item.productUnit}
                        onChange={(e) =>
                          updateItem(index, "productUnit", e.target.value)
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