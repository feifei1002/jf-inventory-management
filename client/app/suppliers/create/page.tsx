"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";

const SUPPLIER_TYPES = [
  "電器用品",
  "搬運設備",
  "焊接設備",
  "OA辦公家具",
  "辦公家具",
  "電腦",
  "綜合機械",
  "模具",
  "Máy phụ tùng",
  "Máy khoan",
  "機器設備",
  "塗裝設備",
  "電鑽(特殊)",
  "秤",
  "鑽頭研磨機",
  "動力設備",
  "動力設備(齒輪減速機)",
  "動力設備(空壓機)",
  "動力設備(汙水藥劑馬達)",
  "電器設備",
  "電燈",
  "消防設備",
  "鋼捲",
  "鐵管",
  "鐵板",
  "Gia công sắt I",
  "花紋板",
  "型鋼",
  "加工裁剪",
  "不鏽鋼",
  "浪板",
  "厚鐵",
  "鋼筋",
  "鐵管/鐵板",
  "鐵板加工",
  "INOX/不鏽鋼",
  "鐵網",
  "圓棒",
  "鋼卷",
  "型鋼/厚板",
  "矽鋼板",
  "木料",
  "木板",
  "PVC板",
  "鐵材/木板",
  "螺絲",
  "套管螺絲",
  "圓套管",
  "PVC",
  "鐵管/Sắt Vuông",
  "EPE Foam",
  "雜貨",
  "員工衣服",
  "水平移器",
  "文具",
  "種草",
  "礦泉水",
  "五金",
  "齒輪",
  "培林",
  "Tay xoay",
  "VPP",
  "Điện máy",
  "印刷",
  "鏈條",
  "轉盤",
  "施工用架子",
  "PE膜",
  "手套",
  "攪拌水泥",
  "圓套筒",
  "工業風扇",
  "馬達",
  "電器",
  "電器/五金",
  "平華司",
  "輪子",
  "圓球把手",
  "塑膠打包帶",
  "砂輪片",
  "出貨單/發票",
  "五金螺絲",
  "V 腳座護墊",
  "PVC 廣告看板",
  "培林/密封圈",
  "廣告看板",
  "五金耗材",
  "焊接耗材",
  "處理油劑",
  "氣體",
  "油脂",
  "吊牌",
  "鋸片",
  "CO2",
  "Dầu 油",
  "油漆",
  "Toluene 甲苯",
  "牛油",
  "樹脂",
  "粉末",
  "化工藥劑",
  "止滑貼條",
  "紙箱",
  "PE膜/膠帶",
  "砂紙",
  "名片/看板…",
  "安全網",
  "砂布輪/砂布",
  "鍍鈦鉅片",
  "鋸帶",
  "建築用品",
  "倉庫籠",
  "衛浴用品",
  "五金加工",
  "點焊網",
  "CNC 切割",
  "塗裝",
  "板金",
  "Gia công sắt",
  "點悍網",
  "電鍍鋅",
  "滾輪",
  "編碼器",
  "軸承"
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

type FormData = {
  supplierId: string;
  name: string;
  type: string;
  contactPerson: string;
  telephone: string;
  fax: string;
  mobileNo: string;
  address: string;
  email: string;
  paymentTerm: string;
  tax: string;
  MST: string;
};

export default function CreateSupplierPage() {
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    supplierId: "",
    name: "",
    type: "General",
    contactPerson: "",
    telephone: "",
    fax: "",
    mobileNo: "",
    address: "",
    email: "",
    paymentTerm: "月底結帳次月30日轉帳",
    tax: "0.1",
    MST: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setError("");
    if (!form.supplierId || !form.name || !form.telephone) {
      setError("Supplier ID, name and telephone are required");
      return;
    }
    setSubmitting(true);
    try {
      await api.createSupplier(form);
      router.push("/suppliers");
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
          <h1 className="text-xl font-bold text-gray-800  ">New Supplier</h1>
          <p className="text-sm text-gray-500 ">Nhà Cung Cấp / 供應商</p>
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
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Basic Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <Field label="Supplier ID" required>
              <input
                value={form.supplierId}
                onChange={(e) => update("supplierId", e.target.value)}
                className={inputClass}
                placeholder="e.g. VC01021-1"
              />
            </Field>
            <Field label="Type">
              <select
                value={form.type}
                onChange={(e) => update("type", e.target.value)}
                className={inputClass + " bg-white"}
              >
                {SUPPLIER_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field label="Supplier Name" required>
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputClass}
                placeholder="e.g. Công Ty TNHH YBN Việt Nam"
              />
            </Field>
            <Field label="MST (Tax ID)">
              <input
                value={form.MST}
                onChange={(e) => update("MST", e.target.value)}
                className={inputClass}
                placeholder="e.g. 3702367484"
              />
            </Field>
            <Field label="Address">
              <input
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                className={inputClass}
                placeholder="Full address"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
                placeholder="email@example.com"
              />
            </Field>
          </div>
        </div>

        {/* ── Contact Info ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Contact Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <Field label="Contact Person">
              <input
                value={form.contactPerson}
                onChange={(e) => update("contactPerson", e.target.value)}
                className={inputClass}
                placeholder="Contact name"
              />
            </Field>
            <Field label="Telephone" required>
              <input
                value={form.telephone}
                onChange={(e) => update("telephone", e.target.value)}
                className={inputClass}
                placeholder="e.g. 0274-3860610"
              />
            </Field>
            <Field label="Fax">
              <input
                value={form.fax}
                onChange={(e) => update("fax", e.target.value)}
                className={inputClass}
                placeholder="e.g. 0274-3790107"
              />
            </Field>
            <Field label="Mobile">
              <input
                value={form.mobileNo}
                onChange={(e) => update("mobileNo", e.target.value)}
                className={inputClass}
                placeholder="e.g. 0989.480.168"
              />
            </Field>
          </div>
        </div>

        {/* ── Payment Info ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Payment Information
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <Field label="Payment Terms">
              <input
                value={form.paymentTerm}
                onChange={(e) => update("paymentTerm", e.target.value)}
                className={inputClass}
                placeholder="e.g. 月底結帳次月30日轉帳"
              />
            </Field>
            <Field label="Tax Rate">
              <select
                value={form.tax}
                onChange={(e) => update("tax", e.target.value)}
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