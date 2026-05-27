"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { Supplier, POItem, PurchaseRequisition } from "../../lib/types";

const UNITS = ["tấm", "cái", "kg", "m", "m2", "cuộn", "bộ", "hộp", "thùng"];
const DELIVERY_PLACES = ["J&F Factory", "J&F Office", "J&F Warehouse"];

const emptyItem = (): Omit<POItem, "totalPrice"> & { selectedPRId: string } => ({
  productId: "",
  productName: "",
  productSpecification: "",
  quantity: 1,
  productUnit: "tấm",
  productPrice: 0,
  VAT: 0,
  currency: "VND",
  deliveryDate: "",
  requisitionId: "",
  deliveryPlace: "J&F Factory",
  selectedPRId: "",
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
  const [products, setProducts] = useState<any[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [supplierId, setSupplierId] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("月底結帳次月30日轉帳");
  const [supplierAddress, setSupplierAddress] = useState("");
  const [currency, setCurrency] = useState<"VND" | "TWD" | "USD">("VND");

  // ── Requisition state ──
  const [requisitions, setRequisitions] = useState<PurchaseRequisition[]>([]);

  // ── Line items state ──
  const [items, setItems] = useState([emptyItem()]);

  // ── UI state ──
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // ── Load suppliers and requisitions ──
  useEffect(() => {
    api.getSuppliers().then(setSuppliers).catch(console.error);
    api.getProducts().then(setProducts).catch(console.error);
    api.getPurchaseRequisitions().then(setRequisitions).catch(console.error);
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
  const handleItemPRSelect = (index: number, reqId: string) => {
  const requisition = requisitions.find((r) => r.requisitionId === reqId);
  if (!requisition || !requisition.purchaseRequisitionItems) {
    updateItem(index, "selectedPRId", reqId);
    updateItem(index, "requisitionId", reqId);
    return;
  }

  // If requisition has items, show them as options
  // For now just set the requisitionId and let user pick product manually
  updateItem(index, "selectedPRId", reqId);
  updateItem(index, "requisitionId", reqId);
};

  const handleItemProductSelect = (index: number, reqId: string, productId: string) => {
    const requisition = requisitions.find((r) => r.requisitionId === reqId);
    if (!requisition || !requisition.purchaseRequisitionItems) return;

    const prItem = requisition.purchaseRequisitionItems.find(
      (i) => i.productId === productId
    );
    if (!prItem) return;

    const product = products.find((p) => p.productId === productId);

    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              productId: prItem.productId,
              productName: prItem.productName,
              productSpecification: prItem.productSpecification,
              quantity: prItem.quantity,
              productUnit: product?.unit ?? "tấm",
              productPrice: product?.price ? Number(product.price) : 0,
              currency: product?.currency ?? currency,
              deliveryDate: prItem.requiredDate
                ? new Date(prItem.requiredDate).toISOString().split("T")[0]
                : "",
              requisitionId: reqId,
              deliveryPlace: prItem.deliveryPlace,
            }
          : item
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
  const vatAmount = items.reduce(
    (sum, item: any) =>
      sum + item.quantity * item.productPrice * (item.VAT / 100),
    0
  );
  const finalTotal = subtotal + vatAmount;

  const fmt = (n: number) =>
    n.toLocaleString("vi-VN", { minimumFractionDigits: 0 });

  // ── Submit ──
  const handleSubmit = async () => {
    setError("");

    if (!supplierId) {
      setError("Please select a supplier");
      return;
    }
    if (items.some((i) => !i.productName || !i.deliveryDate)) {
      setError("Please fill in all product names and delivery dates");
      return;
    }
    if (items.some((i) => !i.requisitionId)) {
      setError("Please fill in the PR number for all items");
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
        currency,
        subtotal,
        vatAmount,
        finalTotal,
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
    <div className="min-h-screen bg-gray-50 `` pb-20 ``">
      {/* ── Top bar ── */}
      <div className="bg-white`` border-b border-gray-200 `` px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white``">
        <div>
          <h1 className="text-xl font-bold text-gray-800 `` ``">New Purchase Order</h1>
          <p className="text-sm text-gray-500 ``">ĐƠN ĐẶT HÀNG / 採購單</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono bg-brand-green-50 text-brand-green-dark px-3 py-1 rounded-full border border-blue-200">
            {purchaseId}
          </span>
          <button
            onClick={() => router.back()}
            className="text-sm text-gray-500 `` hover:text-gray-700 px-4 py-2 border border-gray-200 `` rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark disabled:opacity-50 px-5 py-2 rounded-lg"
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
        <div className="bg-white`` rounded-xl border border-gray-200 `` shadow-sm overflow-hidden`` ``">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Order Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 `` mb-1">
                PO Number
              </label>
              <input
                value={purchaseId}
                readOnly
                className="w-full text-sm px-3 py-2 border border-gray-200 `` rounded-lg bg-gray-50 text-gray-500 `` font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 `` mb-1">
                PO Date
              </label>
              <input
                type="date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 `` rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green `` `` `` `` `` ``"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 `` mb-1">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as "VND" | "TWD" | "USD")}
                className="w-full text-sm px-3 py-2 border border-gray-200 `` rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green `` `` `` `` `` `` bg-white"
              >
                <option value="VND">VND — Vietnamese Dong</option>
                <option value="TWD">TWD — Taiwan Dollar</option>
                <option value="USD">USD — US Dollar</option>
              </select>
            </div>
          </div>
        </div>

        {/* ── Section 2: Supplier Info ── */}
        <div className="bg-white`` rounded-xl border border-gray-200 `` shadow-sm overflow-hidden`` ``">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Supplier / Nhà Cung Cấp
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-500 `` mb-1">
                Select Supplier <span className="text-red-500">*</span>
              </label>
              <select
                value={supplierId}
                onChange={(e) => handleSupplierChange(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 `` rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green `` `` `` `` `` `` bg-white"
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
              <label className="block text-xs font-medium text-gray-500 `` mb-1">
                Contact Person / 聯絡人
              </label>
              <input
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 `` rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green `` `` `` `` `` ``"
                placeholder="Contact name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 `` mb-1">
                Payment Terms / 付款條件
              </label>
              <input
                value={paymentTerm}
                onChange={(e) => setPaymentTerm(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 `` rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green `` `` `` `` `` ``"
                placeholder="e.g. 月底結帳次月30日轉帳"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-500 `` mb-1">
                Supplier Address / 廠商地址
              </label>
              <input
                value={supplierAddress}
                onChange={(e) => setSupplierAddress(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 `` rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green `` `` `` `` `` ``"
                placeholder="Full address"
              />
            </div>
          </div>
        </div>

        {/* ── Section 3: Line Items ── */}
        <div className="bg-white`` rounded-xl border border-gray-200 `` shadow-sm overflow-hidden`` ``">
          <div className="bg-brand-green px-5 py-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Line Items / Mặt Hàng
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
                <tr className="bg-gray-50 `` border-b border-gray-200 `` ``">
                  {[
                    "#",
                    "PR No.",
                    "Product",
                    "Product Name",
                    "Specification",
                    "Qty",
                    "Unit",
                    "Unit Price",
                    "Total",
                    "VAT %",
                    "Delivery Date",
                    "Delivery Place",
                    "",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-left text-xs font-semibold text-gray-500 `` whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item: any, index: number) => {
                  // Get products available in the selected PR for this row
                  const selectedReq = requisitions.find(
                    (r) => r.requisitionId === item.selectedPRId
                  );
                  const prProducts = selectedReq?.purchaseRequisitionItems ?? [];

                  return (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-brand-green-50/30"}
                    >
                      <td className="px-3 py-2 text-gray-400 text-xs">{index + 1}</td>

                      {/* PR selector per row */}
                      <td className="px-2 py-1">
                        <select
                          value={item.selectedPRId}
                          onChange={(e) => handleItemPRSelect(index, e.target.value)}
                          className="w-32 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` `` bg-white"
                        >
                          <option value="">-- PR --</option>
                          {requisitions.map((r) => (
                            <option key={r.requisitionId} value={r.requisitionId}>
                              {r.requisitionId}
                            </option>
                          ))}
                        </select>
                      </td>

                      {/* Product selector — shows products from selected PR */}
                      <td className="px-2 py-1">
                        {item.selectedPRId && prProducts.length > 0 ? (
                          <select
                            value={item.productId}
                            onChange={(e) =>
                              handleItemProductSelect(
                                index,
                                item.selectedPRId,
                                e.target.value
                              )
                            }
                            className="w-40 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` `` bg-white"
                          >
                            <option value="">-- Product --</option>
                            {prProducts.map((p) => (
                              <option key={p.productId} value={p.productId}>
                                {p.productId}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            value={item.productId}
                            onChange={(e) =>
                              updateItem(index, "productId", e.target.value)
                            }
                            className="w-36 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` ``"
                            placeholder="Product code"
                          />
                        )}
                      </td>

                      <td className="px-2 py-1">
                        <input
                          value={item.productName}
                          onChange={(e) =>
                            updateItem(index, "productName", e.target.value)
                          }
                          className="w-36 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` ``"
                          placeholder="Product name"
                        />
                      </td>

                      <td className="px-2 py-1">
                        <input
                          value={item.productSpecification}
                          onChange={(e) =>
                            updateItem(index, "productSpecification", e.target.value)
                          }
                          className="w-36 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` ``"
                          placeholder="e.g. 1.0t*1220W*1695L"
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
                          className="w-16 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` `` text-right"
                        />
                      </td>

                      <td className="px-2 py-1">
                        <select
                          value={item.productUnit}
                          onChange={(e) =>
                            updateItem(index, "productUnit", e.target.value)
                          }
                          className="w-20 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` `` bg-white"
                        >
                          {UNITS.map((u) => (
                            <option key={u}>{u}</option>
                          ))}
                        </select>
                      </td>

                      <td className="px-2 py-1">
                        <input
                          type="number"
                          min={0}
                          value={item.productPrice}
                          onChange={(e) =>
                            updateItem(index, "productPrice", Number(e.target.value))
                          }
                          className="w-24 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` `` text-right"
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
                          onChange={(e) =>
                            updateItem(index, "VAT", Number(e.target.value))
                          }
                          className="w-16 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` `` text-right"
                          placeholder="0"
                        />
                      </td>

                      <td className="px-2 py-1">
                        <input
                          type="date"
                          value={item.deliveryDate}
                          onChange={(e) =>
                            updateItem(index, "deliveryDate", e.target.value)
                          }
                          className="w-32 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` ``"
                        />
                      </td>

                      <td className="px-2 py-1">
                        <select
                          value={item.deliveryPlace}
                          onChange={(e) =>
                            updateItem(index, "deliveryPlace", e.target.value)
                          }
                          className="w-28 text-xs px-2 py-1.5 border border-gray-200 `` rounded focus:outline-none focus:ring-1 focus:ring-brand-green `` `` `` `` `` `` bg-white"
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
                  );
                })}
              </tbody>
            </table>
          </div>

  {/* ── Totals ── */}
  <div className="border-t border-gray-200 `` p-5 flex justify-end">
    <div className="w-64 space-y-2">
      <div className="flex justify-between text-sm text-gray-600````">
        <span>Subtotal</span>
        <span className="font-mono">{fmt(subtotal)} {currency}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600````">
        <span>VAT</span>
        <span className="font-mono">{fmt(vatAmount)} {currency}</span>
      </div>
      <div className="flex justify-between text-base font-bold text-blue-900 border-t border-gray-200 `` pt-2">
        <span>Total</span>
        <span className="font-mono">{fmt(finalTotal)} {currency}</span>
      </div>
    </div>
  </div>
</div>

          {/* ── Totals ── */}
          <div className="border-t border-gray-200 `` p-5 flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-sm text-gray-600````">
                <span>Subtotal</span>
                <span className="font-mono">{fmt(subtotal)} {currency}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600````">
                <span>VAT</span>
                <span className="font-mono">{fmt(vatAmount)} {currency}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-blue-900 border-t border-gray-200 `` pt-2">
                <span>Total</span>
                <span className="font-mono">{fmt(finalTotal)} {currency}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}