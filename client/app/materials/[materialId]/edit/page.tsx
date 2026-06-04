"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { api } from "../../../lib/api";
import { Supplier } from "../../../lib/types";

const UNITS = ["tấm", "cái", "kg", "m", "m2", "cuộn", "bộ", "hộp", "thùng"];

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

export default function EditMaterialPage() {
  const router = useRouter();
  const { materialId } = useParams<{ materialId: string }>();

  const [name, setName] = useState("");
  const [specification, setSpecification] = useState("");
  const [unit, setUnit] = useState("tấm");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState<"VND" | "TWD" | "USD">("VND");
  const [supplierId, setSupplierId] = useState("");
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      api.getMaterial(materialId),
      api.getSuppliers(),
    ])
      .then(([material, supplierList]) => {
        setName(material.name ?? "");
        setSpecification(material.specification ?? "");
        setUnit(material.unit ?? "tấm");
        setPrice(String(material.price ?? ""));
        setCurrency(material.currency ?? "VND");
        setSupplierId(material.supplierId ?? "");
        setSuppliers(supplierList);
      })
      .catch(() => setError("Failed to load material"))
      .finally(() => setLoading(false));
  }, [materialId]);

  const selectedSupplier = suppliers.find((s) => s.supplierId === supplierId);

  const handleSubmit = async () => {
    setError("");
    if (!name || !unit || !supplierId) {
      setError("Name, unit and supplier are required");
      return;
    }
    setSubmitting(true);
    try {
      await api.updateMaterial(materialId, {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <p className="text-gray-400  text-sm">Loading material...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">Edit Material</h1>
          <p className="text-sm text-gray-500  font-mono">{materialId}</p>
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
              Material Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                Material ID
              </label>
              <input
                value={materialId}
                readOnly
                className="w-full text-sm px-3 py-2 border border-gray-200  rounded-lg bg-gray-50 text-gray-400 font-mono"
              />
            </div>
            <Field label="Unit" required>
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
            <Field label="Material Name" required>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Specification">
              <input
                value={specification}
                onChange={(e) => setSpecification(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Price">
              <input
                type="number"
                min={0}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Currency">
              <select
                value={currency}
                onChange={(e) =>
                  setCurrency(e.target.value as "VND" | "TWD" | "USD")
                }
                className={inputClass + " bg-white"}
              >
                <option value="VND">VND — Vietnamese Dong</option>
                <option value="TWD">TWD — Taiwan Dollar</option>
                <option value="USD">USD — US Dollar</option>
              </select>
            </Field>
          </div>
        </div>

        {/* ── Supplier ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Supplier / Nhà Cung Cấp
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