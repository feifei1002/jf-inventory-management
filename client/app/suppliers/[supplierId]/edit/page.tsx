"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { api } from "../../../lib/api";

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


export default function EditSupplierPage() {
  const router = useRouter();
  const { supplierId } = useParams<{ supplierId: string }>();

  const [name, setName] = useState("");
  const [type, setType] = useState("General");
  const [contactPerson, setContactPerson] = useState("");
  const [telephone, setTelephone] = useState("");
  const [fax, setFax] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [tax, setTax] = useState("0.1");
  const [MST, setMST] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getSupplier(supplierId)
      .then((supplier) => {
        setName(supplier.name ?? "");
        setType(supplier.type ?? "General");
        setContactPerson(supplier.contactPerson ?? "");
        setTelephone(supplier.telephone ?? "");
        setFax(supplier.fax ?? "");
        setMobileNo(supplier.mobileNo ?? "");
        setAddress(supplier.address ?? "");
        setEmail(supplier.email ?? "");
        setPaymentTerm(supplier.paymentTerm ?? "");
        setTax(supplier.tax ?? "0.1");
        setMST(supplier.MST ?? "");
      })
      .catch(() => setError("Failed to load supplier"))
      .finally(() => setLoading(false));
  }, [supplierId]);

  const handleSubmit = async () => {
    setError("");
    if (!name || !telephone) {
      setError("Name and telephone are required");
      return;
    }
    setSubmitting(true);
    try {
      await api.updateSupplier(supplierId, {
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
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <p className="text-gray-400  text-sm">Loading supplier...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  pb-20 ">
      {/* ── Top bar ── */}
      <div className="border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm bg-white">
        <div>
          <h1 className="text-xl font-bold text-gray-800  ">Edit Supplier</h1>
          <p className="text-sm text-gray-500 ">{supplierId}</p>
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

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* ── Basic Info ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Basic Information 基本資料
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500  mb-1">
                Supplier ID 廠商編號
              </label>
              <input
                value={supplierId}
                readOnly
                className="w-full text-sm px-3 py-2 border border-gray-200  rounded-lg bg-gray-50 text-gray-400 font-mono"
              />
            </div>
            <Field label="Type 供應產品">
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
            <Field label="Supplier Name 廠商名稱" required>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="MST (Tax ID)">
              <input
                value={MST}
                onChange={(e) => setMST(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Address 地址">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Email 電子郵件">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>
        </div>

        {/* ── Contact Info ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Contact Information 聯絡資訊
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <Field label="Contact Person 聯絡人">
              <input
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Telephone 電話" required>
              <input
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Fax 傳真">
              <input
                value={fax}
                onChange={(e) => setFax(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Mobile 手機">
              <input
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>
        </div>

        {/* ── Payment Info ── */}
        <div className="bg-white rounded-xl border border-gray-200  shadow-sm overflow-hidden ">
          <div className="bg-brand-green px-5 py-3">
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Payment Information 付款資訊
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <Field label="Payment Terms 付款條件">
              <input
                value={paymentTerm}
                onChange={(e) => setPaymentTerm(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Tax Rate 稅別">
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