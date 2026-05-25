"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { Supplier, POItem } from "../../lib/types";

const UNITS = ["tấm", "cái", "kg", "m", "m2", "cuộn", "bộ", "hộp", "thùng"];
const DELIVERY_PLACES = ["J&F Factory", "J&F Office", "J&F Warehouse"];

const emptyItem = (): Omit<POItem, "totalPrice"> => ({
  productId: "",
  productName: "",
  productSpecification: "",
  quantity: 1,
  productUnit: "tấm",
  productPrice: 0,
  VAT: 10,
  deliveryDate: "",
  requisitionId: "",
  deliveryPlace: "J&F Factory",
});

const generatePOId = () => {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const seq = String(Math.floor(Math.random() * 999) + 1).padStart(3, "0");
  return `PO-${yy}${mm}${seq}`;
};

export default function CreatePurchaseOrderPage() {
  const router = useRouter();

  // ── Header state ──
  const [purchaseId] = useState(generatePOId());
  const [purchaseDate, setPurchaseDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [supplierId, setSupplierId] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("月底結帳次月30日轉帳");
  const [supplierAddress, setSupplierAddress] = useState("");

  // ── Line items state ──
  const [items, setItems] = useState([emptyItem()]);

  // ── UI state ──
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // ── Load suppliers ──
  useEffect(() => {
    api.getSuppliers().then(setSuppliers).catch(console.error);
  }, []);

  // ── Auto-fill supplier fields when supplier is selected ──
  const handleSupplierChange = (id: string) => {
    setSupplierId(id);
    const supplier = suppliers.find((s) => s.supplierId === id) ?? null;
    setSelectedSupplier(supplier);
    if (supplier) {
      setContactPerson(supplier.contactPerson ?? "");
      setPaymentTerm(supplier.paymentTerm ?? "月底結帳次月30日轉帳");
      setSupplierAddress(supplier.address ?? "");
    }
  };

  // ── Item helpers ──
  const updateItem = (index: number, field: string, value: string | number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const addItem = () => setItems((prev) => [...prev, emptyItem()]);

  const removeItem = (index: number) =>
    setItems((prev) => prev.filter((_, i) => i !== index));

  // ── Calculated totals ──
  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.productPrice,
    0
  );
  const vat = subtotal * 0.1;
  const finalTotal = subtotal + vat;

  const fmt = (n: number) =>
    n.toLocaleString("vi-VN", { minimumFractionDigits: 0 });

  // ── Submit ──
  const handleSubmit = async () => {
    setError("");

    if (!supplierId) { setError("Please select a supplier"); return; }
    if (items.some((i) => !i.productName || !i.deliveryDate)) {
      setError("Please fill in all product names and delivery dates");
      return;
    }

    setSubmitting(true);
    try {
      const po = await api.createPurchaseOrder({
        purchaseId,
        purchaseDate,
        supplierId,
        supplierName: selectedSupplier?.name ?? "",
        contactPerson,
        paymentTerm,
        supplierAddress,
        items,
      });
      router.push(`/purchase-orders/${po.purchaseId}`);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-800">New Purchase Order</h1>
          <p className="text-sm text-gray-500">ĐƠN ĐẶT HÀNG / 採購單</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
            {purchaseId}
          </span>
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
            {submitting ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* ── Section 1: Order Info ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-900 px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Order Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                PO Number
              </label>
              <input
                value={purchaseId}
                readOnly
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                PO Date
              </label>
              <input
                type="date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* ── Section 2: Supplier Info ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-900 px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Supplier / Nhà Cung Cấp
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Select Supplier <span className="text-red-500">*</span>
              </label>
              <select
                value={supplierId}
                onChange={(e) => handleSupplierChange(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">-- Select a supplier --</option>
                {suppliers.map((s) => (
                  <option key={s.supplierId} value={s.supplierId}>
                    {s.supplierId} — {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Contact Person / 聯絡人
              </label>
              <input
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contact name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Payment Terms / 付款條件
              </label>
              <input
                value={paymentTerm}
                onChange={(e) => setPaymentTerm(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 月底結帳次月30日轉帳"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Supplier Address / 廠商地址
              </label>
              <input
                value={supplierAddress}
                onChange={(e) => setSupplierAddress(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full address"
              />
            </div>
          </div>
        </div>

        {/* ── Section 3: Line Items ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-900 px-5 py-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Line Items / Mặt Hàng
            </h2>
            <button
              onClick={addItem}
              className="text-xs font-semibold text-blue-900 bg-white hover:bg-blue-50 px-3 py-1 rounded-full"
            >
              + Add Item
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  {[
                    "#", "Product Code", "Product Name", "Specification",
                    "Qty", "Unit", "Unit Price", "Total", "VAT %",
                    "Delivery Date", "PR No.", "Delivery Place", "",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-left text-xs font-semibold text-gray-500 whitespace-nowrap"
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
                    className={index % 2 === 0 ? "bg-white" : "bg-blue-50/30"}
                  >
                    <td className="px-3 py-2 text-gray-400 text-xs">{index + 1}</td>

                    <td className="px-2 py-1">
                      <input
                        value={item.productId}
                        onChange={(e) => updateItem(index, "productId", e.target.value)}
                        className="w-28 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="e.g. 211112-..."
                      />
                    </td>

                    <td className="px-2 py-1">
                      <input
                        value={item.productName}
                        onChange={(e) => updateItem(index, "productName", e.target.value)}
                        className="w-36 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Product name"
                      />
                    </td>

                    <td className="px-2 py-1">
                      <input
                        value={item.productSpecification}
                        onChange={(e) => updateItem(index, "productSpecification", e.target.value)}
                        className="w-36 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="e.g. 1.0t*1220W*1695L"
                      />
                    </td>

                    <td className="px-2 py-1">
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) => updateItem(index, "quantity", Number(e.target.value))}
                        className="w-16 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-right"
                      />
                    </td>

                    <td className="px-2 py-1">
                      <select
                        value={item.productUnit}
                        onChange={(e) => updateItem(index, "productUnit", e.target.value)}
                        className="w-20 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                      >
                        {UNITS.map((u) => <option key={u}>{u}</option>)}
                      </select>
                    </td>

                    <td className="px-2 py-1">
                      <input
                        type="number"
                        min={0}
                        value={item.productPrice}
                        onChange={(e) => updateItem(index, "productPrice", Number(e.target.value))}
                        className="w-24 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-right"
                      />
                    </td>

                    <td className="px-3 py-2 text-xs font-semibold text-gray-700 whitespace-nowrap">
                      {fmt(item.quantity * item.productPrice)}
                    </td>

                    <td className="px-2 py-1">
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={item.VAT}
                        onChange={(e) => updateItem(index, "VAT", Number(e.target.value))}
                        className="w-14 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-right"
                      />
                    </td>

                    <td className="px-2 py-1">
                      <input
                        type="date"
                        value={item.deliveryDate}
                        onChange={(e) => updateItem(index, "deliveryDate", e.target.value)}
                        className="w-32 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>

                    <td className="px-2 py-1">
                      <input
                        value={item.requisitionId}
                        onChange={(e) => updateItem(index, "requisitionId", e.target.value)}
                        className="w-24 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="PR-..."
                      />
                    </td>

                    <td className="px-2 py-1">
                      <select
                        value={item.deliveryPlace}
                        onChange={(e) => updateItem(index, "deliveryPlace", e.target.value)}
                        className="w-28 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                      >
                        {DELIVERY_PLACES.map((p) => <option key={p}>{p}</option>)}
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

          {/* ── Totals ── */}
          <div className="border-t border-gray-200 p-5 flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span className="font-mono">{fmt(subtotal)} ₫</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>VAT (10%)</span>
                <span className="font-mono">{fmt(vat)} ₫</span>
              </div>
              <div className="flex justify-between text-base font-bold text-blue-900 border-t border-gray-200 pt-2">
                <span>Total</span>
                <span className="font-mono">{fmt(finalTotal)} ₫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}