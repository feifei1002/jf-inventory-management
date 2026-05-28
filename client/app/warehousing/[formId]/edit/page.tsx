"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { api } from "../../../lib/api";
import { PurchaseOrder, Supplier } from "../../../lib/types";

const DELIVERY_PLACES = ["J&F Factory", "J&F Office", "J&F Warehouse"];

export default function EditWarehousingFormPage() {
  const router = useRouter();
  const { formId } = useParams<{ formId: string }>();

  const [date, setDate] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [purchaseId, setPurchaseId] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [deliveryNote, setDeliveryNote] = useState("");
  const [items, setItems] = useState<any[]>([]);

  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [selectedPO, setSelectedPO] = useState<PurchaseOrder | null>(null);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      api.getWarehousingForm(formId),
      api.getSuppliers(),
      api.getPurchaseOrders(),
    ])
      .then(([form, supplierList, poList]) => {
        setDate(new Date(form.date).toISOString().split("T")[0]);
        setSupplierId(form.supplierId);
        setPurchaseId(form.purchaseId);
        setInvoiceNo(form.invoiceNo);
        setDeliveryNote(form.deliveryNote ?? "");
        setSuppliers(supplierList);
        setPurchaseOrders(poList);

        const supplier = supplierList.find((s: Supplier) => s.supplierId === form.supplierId) ?? null;
        setSelectedSupplier(supplier);

        const po = poList.find((p: PurchaseOrder) => p.purchaseId === form.purchaseId) ?? null;
        setSelectedPO(po);

        setItems(
          form.materialWarehousingItems?.map((item: any) => ({
            productId: item.productId,
            productName: item.productName,
            productSpecification: item.productSpecification,
            quantity: item.quantity,
            productUnit: item.productUnit,
            deliveryDate: new Date(item.deliveryDate).toISOString().split("T")[0],
            requisitionId: item.requisitionId,
            deliveryPlace: item.deliveryPlace,
          })) ?? []
        );
      })
      .catch(() => setError("Failed to load warehousing form"))
      .finally(() => setLoading(false));
  }, [formId]);

  const handlePOSelect = (poId: string) => {
    setPurchaseId(poId);
    const po = purchaseOrders.find((p) => p.purchaseId === poId) ?? null;
    setSelectedPO(po);
    if (po) {
      setSupplierId(po.supplierId);
      const supplier = suppliers.find((s) => s.supplierId === po.supplierId) ?? null;
      setSelectedSupplier(supplier);
      const newItems = po.purchaseOrderItems?.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        productSpecification: item.productSpecification,
        quantity: item.quantity,
        productUnit: item.productUnit,
        deliveryDate: new Date(item.deliveryDate).toISOString().split("T")[0],
        requisitionId: item.requisitionId,
        deliveryPlace: item.deliveryPlace,
      })) ?? [];
      setItems(newItems);
    }
  };

  const updateItem = (index: number, field: string, value: string | number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const addItem = () =>
    setItems((prev) => [
      ...prev,
      {
        productId: "",
        productName: "",
        productSpecification: "",
        quantity: 1,
        productUnit: "tấm",
        deliveryDate: new Date().toISOString().split("T")[0],
        requisitionId: "",
        deliveryPlace: "J&F Factory",
      },
    ]);

  const removeItem = (index: number) =>
    setItems((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async () => {
    setError("");
    if (!supplierId || !purchaseId || !invoiceNo) {
      setError("Supplier, PO number and invoice number are required");
      return;
    }
    if (items.length === 0) {
      setError("Please add at least one item");
      return;
    }
    if (items.some((i) => !i.productName || !i.deliveryDate)) {
      setError("Please fill in all product names and delivery dates");
      return;
    }

    setSubmitting(true);
    try {
      await api.updateWarehousingForm(formId, {
        date,
        supplierId,
        supplierName: selectedSupplier?.name ?? selectedPO?.supplierName ?? "",
        contactPerson: selectedSupplier?.contactPerson ?? "",
        supplierAddress: selectedSupplier?.address ?? selectedPO?.supplierAddress ?? "",
        supplierTelephone: selectedSupplier?.telephone ?? "",
        supplierFax: selectedSupplier?.fax ?? "",
        purchaseId,
        paymentTerm: selectedSupplier?.paymentTerm ?? selectedPO?.paymentTerm ?? "",
        invoiceNo,
        deliveryNote,
        items,
      });
      router.push(`/warehousing/${formId}`);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading warehousing form...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Edit Warehousing Form</h1>
          <p className="text-sm text-gray-500 font-mono">{formId}</p>
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
            className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-dark disabled:opacity-50 px-5 py-2 rounded-lg"
          >
            {submitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* ── Form Info ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Form Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Form ID</label>
              <input
                value={formId}
                readOnly
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-400 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Invoice No. <span className="text-red-500">*</span>
              </label>
              <input
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                placeholder="e.g. INV-2024-001"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Delivery Note</label>
              <input
                value={deliveryNote}
                onChange={(e) => setDeliveryNote(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                placeholder="Delivery note number"
              />
            </div>
          </div>
        </div>

        {/* ── Link to PO ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Link to Purchase Order
            </h2>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Select Purchase Order <span className="text-red-500">*</span>
              </label>
              <select
                value={purchaseId}
                onChange={(e) => handlePOSelect(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green bg-white"
              >
                <option value="">-- Select a PO --</option>
                {purchaseOrders.map((po) => (
                  <option key={po.purchaseId} value={po.purchaseId}>
                    {po.purchaseId} — {po.supplierName} (
                    {new Date(po.purchaseDate).toLocaleDateString("vi-VN")})
                  </option>
                ))}
              </select>
            </div>
            {selectedPO && (
              <div className="bg-brand-green-50 rounded-lg p-4 grid grid-cols-3 gap-3">
                <div>
                  <p className="text-xs text-gray-400">Supplier</p>
                  <p className="text-xs font-semibold text-gray-700">{selectedPO.supplierName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Contact</p>
                  <p className="text-xs font-semibold text-gray-700">{selectedPO.contactPerson}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Payment Term</p>
                  <p className="text-xs font-semibold text-gray-700">{selectedPO.paymentTerm}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Line Items ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-brand-green px-5 py-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Received Items / Hàng Nhập Kho
            </h2>
            <button
              onClick={addItem}
              className="text-xs font-semibold text-brand-green bg-white hover:bg-brand-green-50 px-3 py-1 rounded-full"
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
                    "Qty Received", "Unit", "Delivery Date", "PR No.",
                    "Delivery Place", "",
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
                    className={index % 2 === 0 ? "bg-white" : "bg-brand-green-50/20"}
                  >
                    <td className="px-3 py-2 text-gray-400 text-xs">{index + 1}</td>
                    <td className="px-2 py-1">
                      <input
                        value={item.productId}
                        onChange={(e) => updateItem(index, "productId", e.target.value)}
                        className="w-32 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-green"
                        placeholder="Product code"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        value={item.productName}
                        onChange={(e) => updateItem(index, "productName", e.target.value)}
                        className="w-36 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-green"
                        placeholder="Product name"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        value={item.productSpecification}
                        onChange={(e) => updateItem(index, "productSpecification", e.target.value)}
                        className="w-36 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-green"
                        placeholder="Specification"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="number"
                        min={0}
                        value={item.quantity}
                        onChange={(e) => updateItem(index, "quantity", Number(e.target.value))}
                        className="w-20 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-green text-right"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        value={item.productUnit}
                        onChange={(e) => updateItem(index, "productUnit", e.target.value)}
                        className="w-16 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="date"
                        value={item.deliveryDate}
                        onChange={(e) => updateItem(index, "deliveryDate", e.target.value)}
                        className="w-32 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        value={item.requisitionId}
                        onChange={(e) => updateItem(index, "requisitionId", e.target.value)}
                        className="w-24 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-green"
                        placeholder="PR-..."
                      />
                    </td>
                    <td className="px-2 py-1">
                      <select
                        value={item.deliveryPlace}
                        onChange={(e) => updateItem(index, "deliveryPlace", e.target.value)}
                        className="w-28 text-xs px-2 py-1.5 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-green bg-white"
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

          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-400">
              {items.length} item{items.length !== 1 ? "s" : ""} — inventory will be recalculated on save
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}