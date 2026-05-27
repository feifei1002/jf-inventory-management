"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../lib/api";
import { Supplier } from "../../lib/types";

export default function SupplierDetailPage() {
  const { supplierId } = useParams<{ supplierId: string }>();
  const router = useRouter();
  const [supplier, setSupplier] = useState<Supplier | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getSupplier(supplierId)
      .then(setSupplier)
      .catch(() => setError("Failed to load supplier"))
      .finally(() => setLoading(false));
  }, [supplierId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <p className="text-gray-400  text-sm">Loading supplier...</p>
      </div>
    );
  }

  if (error || !supplier) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <p className="text-red-500 text-sm">{error || "Supplier not found"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">Supplier Detail</h1>
          <p className="text-sm text-gray-500 ">{supplier.supplierId}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/suppliers")}
            className="text-sm text-gray-500  hover:text-gray-700 px-4 py-2 border border-gray-200  rounded-lg"
          >
            ← Back
          </button>
          <button
            onClick={() =>
              router.push(`/suppliers/${supplierId}/edit`)
            }
            className="text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 px-5 py-2 rounded-lg"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Basic Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Supplier ID</p>
              <p className="text-sm font-mono font-semibold text-brand-green-dark">
                {supplier.supplierId}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Type</p>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {supplier.type}
              </span>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Name</p>
              <p className="text-sm font-semibold text-gray-800  ">
                {supplier.name}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">MST</p>
              <p className="text-sm font-mono text-gray-800  ">
                {supplier.MST ?? "—"}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-gray-400  mb-0.5">Address</p>
              <p className="text-sm text-gray-800  ">{supplier.address ?? "—"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Email</p>
              <p className="text-sm text-gray-800  ">{supplier.email ?? "—"}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Contact Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Contact Person</p>
              <p className="text-sm text-gray-800  ">
                {supplier.contactPerson ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Telephone</p>
              <p className="text-sm text-gray-800  ">{supplier.telephone}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Fax</p>
              <p className="text-sm text-gray-800  ">{supplier.fax ?? "—"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Mobile</p>
              <p className="text-sm text-gray-800  ">{supplier.mobileNo ?? "—"}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Payment Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Payment Terms</p>
              <p className="text-sm text-gray-800  ">
                {supplier.paymentTerm ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mb-0.5">Tax Rate</p>
              <p className="text-sm text-gray-800  ">{supplier.tax ?? "—"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}