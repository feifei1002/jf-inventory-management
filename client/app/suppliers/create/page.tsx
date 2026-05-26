"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";

const SUPPLIER_TYPES = [
  "Steel",
  "Electronics",
  "Packaging",
  "Chemical",
  "Mechanical",
  "General",
];

export default function CreateSupplierPage() {
  const router = useRouter();

  const [supplierId, setSupplierId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("General");
  const [contactPerson, setContactPerson] = useState("");
  const [telephone, setTelephone] = useState("");
  const [fax, setFax] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("月底結帳次月30日轉帳");
  const [tax, setTax] = useState("0.1");
  const [MST, setMST] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!supplierId || !name || !telephone) {
      setError("Supplier ID, name and telephone are required");
      return;
    }
    setSubmitting(true);
    try {
      await api.createSupplier({
        supplierId,
        name,
        type,
        contactPerson,
        telephone,
        fax,
        mobileNo,
        address,
        email,
        paymentTerm,
        tax,
        MST,
      });
      router.push("/suppliers");
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

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
      <label className="block text-xs font-medium text-gray-500 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );

  const inputClass =
    "w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-800">New Supplier</h1>
          <p className="text-sm text-gray-500">Nhà Cung Cấp / 供應商</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-200 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-5 py-2 rounded-lg"
          >
            {submitting ? "Saving..." : "Save Supplier"}
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* ── Basic Info ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-900 px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Basic Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <Field label="Supplier ID" required>
              <input
                value={supplierId}
                onChange={(e) => setSupplierId(e.target.value)}
                className={inputClass}
                placeholder="e.g. VC01021-1"
              />
            </Field>
            <Field label="Type">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={inputClass + " bg-white"}
              >
                {SUPPLIER_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field label="Supplier Name" required>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder="e.g. Công Ty TNHH YBN Việt Nam"
              />
            </Field>
            <Field label="MST (Tax ID)">
              <input
                value={MST}
                onChange={(e) => setMST(e.target.value)}
                className={inputClass}
                placeholder="e.g. 3702367484"
              />
            </Field>
            <Field label="Address">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClass}
                placeholder="Full address"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="email@example.com"
              />
            </Field>
          </div>
        </div>

        {/* ── Contact Info ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-900 px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Contact Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <Field label="Contact Person">
              <input
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className={inputClass}
                placeholder="Contact name"
              />
            </Field>
            <Field label="Telephone" required>
              <input
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className={inputClass}
                placeholder="e.g. 0274-3860610"
              />
            </Field>
            <Field label="Fax">
              <input
                value={fax}
                onChange={(e) => setFax(e.target.value)}
                className={inputClass}
                placeholder="e.g. 0274-3790107"
              />
            </Field>
            <Field label="Mobile">
              <input
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className={inputClass}
                placeholder="e.g. 0989.480.168"
              />
            </Field>
          </div>
        </div>

        {/* ── Payment Info ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-900 px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Payment Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <Field label="Payment Terms">
              <input
                value={paymentTerm}
                onChange={(e) => setPaymentTerm(e.target.value)}
                className={inputClass}
                placeholder="e.g. 月底結帳次月30日轉帳"
              />
            </Field>
            <Field label="Tax Rate">
              <select
                value={tax}
                onChange={(e) => setTax(e.target.value)}
                className={inputClass + " bg-white"}
              >
                <option value="0">0%</option>
                <option value="0.05">5%</option>
                <option value="0.08">8%</option>
                <option value="0.1">10%</option>
              </select>
            </Field>
          </div>
        </div>
      </div>
    </div>
  );
}