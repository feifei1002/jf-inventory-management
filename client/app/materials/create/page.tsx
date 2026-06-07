"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { Supplier } from "../../lib/types";

const UNITS = ["cây", "pcs", "Bộ", "P", "set", "Xe", "Bình", "Cuộn", "tấm", "M", "kg", "bộ ", "hộp", "pes",
  "bộ 組", "cái", "đôi", "箱", "盒", "桶", "Phuy", "Bính", "cuốn", "捲", "kgw", "thùng", "lit", "罐",
"Lon", "bao", "捆", "ram", "cục", "m2", "PO", "支", "套", "次", "M³", "Chai", "式", "bo", "chuyến",
];

const Field = ({
    label,
    required,
    children,
  }: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
  }) => (
    <div>
      <label className="block text-xs font-medium text-gray-500  mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );

const inputClass =
  "w-full text-sm px-3 py-2 border border-gray-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green      ";


export default function CreateMaterialPage() {
  const router = useRouter();

  const [materialId, setMaterialId] = useState("");
  const [name, setName] = useState("");
  const [specification, setSpecification] = useState("");
  const [unit, setUnit] = useState("tấm");
  const [price, setPrice] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [currency, setCurrency] = useState<"VND" | "TWD" | "USD">("VND");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    api.getSuppliers().then(setSuppliers).catch(console.error);
  }, []);

  const selectedSupplier = suppliers.find((s) => s.supplierId === supplierId);

  const handleSubmit = async () => {
    setError("");
    if (!materialId || !name || !unit || !supplierId) {
      setError("Material ID, name, unit and supplier are required");
      return;
    }
    setSubmitting(true);
    try {
      await api.createMaterial({
        materialId,
        name,
        specification,
        unit,
        price: Number(price) || 0,
        currency,
        supplierId,
        supplierName: selectedSupplier?.name ?? "",
      });
      router.push("/materials");
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">New Material</h1>
          <p className="text-sm text-gray-500 ">Nguyên liệu / 材料</p>
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
            {submitting ? "Saving..." : "Save Material"}
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* ── Material Info ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Material Information 材料資訊
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <Field label="Material ID 料號" required>
              <input
                value={materialId}
                onChange={(e) => setMaterialId(e.target.value)}
                className={inputClass}
                placeholder="e.g. 211112-1012201695"
              />
            </Field>
            <Field label="Unit 單位" required>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className={inputClass + " bg-white"}
              >
                {UNITS.map((u) => (
                  <option key={u}>{u}</option>
                ))}
              </select>
            </Field>
            <Field label="Material Name 品名" required>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder="e.g. SPCC光板 Thép Tấm"
              />
            </Field>
            <Field label="Price (₫) 價格" required>
              <input
                type="number"
                min={0}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={inputClass}
                placeholder="e.g. 19000"
              />
            </Field>
            <Field label="Currency 貨幣" required>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as "VND" | "TWD" | "USD")}
                className={inputClass + " bg-white"}
              >
                <option value="VND">VND — Vietnamese Dong</option>
                <option value="TWD">TWD — Taiwan Dollar</option>
                <option value="USD">USD — US Dollar</option>
              </select>
            </Field>
            <Field label="Specification 規格">
              <input
                value={specification}
                onChange={(e) => setSpecification(e.target.value)}
                className={inputClass}
                placeholder="e.g. 1.0t*1220W*1695L"
              />
            </Field>
          </div>
        </div>

        {/* ── Supplier ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Supplier / Nhà Cung Cấp 供應商
            </h2>
          </div>
          <div className="p-5 space-y-4">
            <Field label="Select Supplier" required>
              <select
                value={supplierId}
                onChange={(e) => setSupplierId(e.target.value)}
                className={inputClass + " bg-white"}
              >
                <option value="">-- Select a supplier --</option>
                {suppliers.map((s) => (
                  <option key={s.supplierId} value={s.supplierId}>
                    {s.supplierId} — {s.name}
                  </option>
                ))}
              </select>
            </Field>

            {selectedSupplier && (
              <div className="bg-brand-green-50 rounded-lg p-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-400">Contact</p>
                  <p className="text-xs font-semibold text-gray-700">
                    {selectedSupplier.contactPerson ?? "—"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Telephone</p>
                  <p className="text-xs font-semibold text-gray-700">
                    {selectedSupplier.telephone}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Payment Term</p>
                  <p className="text-xs font-semibold text-gray-700">
                    {selectedSupplier.paymentTerm ?? "—"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Address</p>
                  <p className="text-xs font-semibold text-gray-700">
                    {selectedSupplier.address ?? "—"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}