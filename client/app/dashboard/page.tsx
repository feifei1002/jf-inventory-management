"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";
import {
  LucideIcon,
  ShoppingCart,
  ClipboardList,
  FileText,
  Package,
  AlertTriangle,
  AlertCircle,
  Tag,
  Building2,
  Archive,
  RefreshCcw,
} from "lucide-react";
type DashboardMetrics = {
  totalPOsThisMonth: number;
  pendingPRs: number;
  itemsReceivedThisMonth: number;
  lowStockItems: number;
  outOfStockItems: number;
  totalSuppliers: number;
  totalProducts: number;
  totalPRs: number;
};

const StatCard = ({
  title,
  subtitle,
  value,
  icon: Icon,
  color,
  onClick,
}: {
  title: string;
  subtitle: string;
  value: number | string;
  icon: LucideIcon;
  color: "green" | "blue" | "amber" | "red" | "gray";
  onClick?: () => void;
}) => {
  const colorMap = {
    green: {
      bg: "bg-brand-green-50",
      icon: "bg-brand-green text-white",
      value: "text-brand-green-dark",
      border: "border-brand-green-100",
    },
    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-600 text-white",
      value: "text-blue-700",
      border: "border-blue-100",
    },
    amber: {
      bg: "bg-amber-50",
      icon: "bg-amber-500 text-white",
      value: "text-amber-700",
      border: "border-amber-100",
    },
    red: {
      bg: "bg-red-50",
      icon: "bg-red-500 text-white",
      value: "text-red-700",
      border: "border-red-100",
    },
    gray: {
      bg: "bg-gray-50",
      icon: "bg-gray-500 text-white",
      value: "text-gray-700",
      border: "border-gray-200",
    },
  };

  const c = colorMap[color];

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl border ${c.border} shadow-sm p-5
        ${onClick ? "cursor-pointer hover:shadow-md transition-shadow" : ""}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500 mb-1">{title}</p>
          <p className={`text-3xl font-black ${c.value} mb-1`}>{value}</p>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
        <div className={`w-10 h-10 rounded-lg ${c.icon} flex items-center justify-center text-lg flex-shrink-0 ml-4`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const router = useRouter();
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const now = new Date();
  const monthName = now.toLocaleString("en-US", { month: "long", year: "numeric" });

  useEffect(() => {
    api
      .getDashboardMetrics()
      .then(setMetrics)
      .catch(() => setError("Failed to load dashboard metrics"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading dashboard...</p>
      </div>
    );
  }

  if (error || !metrics) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500 text-sm">{error || "Failed to load metrics"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">
              Welcome back — here's what's happening in {monthName}
            </p>
          </div>
          <button
            onClick={() => {
              setLoading(true);
              api.getDashboardMetrics()
                .then(setMetrics)
                .catch(() => setError("Failed to refresh"))
                .finally(() => setLoading(false));
            }}
            className="text-sm text-gray-500 hover:text-brand-green px-4 py-2 border border-gray-200 rounded-lg hover:border-brand-green transition-colors flex items-center gap-2"
          >
            <RefreshCcw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">

        {/* ── Section 1: Purchasing ── */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Purchasing — {monthName}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              title="Purchase Orders"
              subtitle={`Created in ${monthName}`}
              value={metrics.totalPOsThisMonth}
              icon={ShoppingCart}
              color="green"
              onClick={() => router.push("/purchase-orders")}
            />
            <StatCard
              title="Pending Requisitions"
              subtitle="PRs not yet converted to PO"
              value={metrics.pendingPRs}
              icon={ClipboardList}
              color="amber"
              onClick={() => router.push("/purchase-requisitions")}
            />
            <StatCard
              title="Total PRs"
              subtitle="All time"
              value={metrics.totalPRs}
              icon={FileText}
              color="blue"
              onClick={() => router.push("/purchase-requisitions")}
            />
            <StatCard
              title="Items Received"
              subtitle={`Units received in ${monthName}`}
              value={metrics.itemsReceivedThisMonth.toLocaleString()}
              icon={Package}
              color="green"
              onClick={() => router.push("/warehousing")}
            />
          </div>
        </div>

        {/* ── Section 2: Inventory ── */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Inventory Status
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              title="Low Stock Items"
              subtitle="10 units or fewer remaining"
              value={metrics.lowStockItems}
              icon={AlertTriangle}
              color="amber"
              onClick={() => router.push("/inventory")}
            />
            <StatCard
              title="Out of Stock"
              subtitle="Needs restocking"
              value={metrics.outOfStockItems}
              icon={AlertCircle}
              color="red"
              onClick={() => router.push("/inventory")}
            />
            <StatCard
              title="Total Products"
              subtitle="In product catalog"
              value={metrics.totalProducts}
              icon={Tag}
              color="gray"
              onClick={() => router.push("/products")}
            />
            <StatCard
              title="Active Suppliers"
              subtitle="In supplier directory"
              value={metrics.totalSuppliers}
              icon={Building2}
              color="blue"
              onClick={() => router.push("/suppliers")}
            />
          </div>
        </div>

        {/* ── Quick actions ── */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "New Requisition", icon: ClipboardList, href: "/purchase-requisitions/create", color: "bg-blue-600" },
              { label: "New Purchase Order", icon: ShoppingCart, href: "/purchase-orders/create", color: "bg-brand-green" },
              { label: "Receive Stock", icon: Package, href: "/warehousing/create", color: "bg-amber-500" },
              { label: "View Inventory", icon: Archive, href: "/inventory", color: "bg-gray-600" },
            ].map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.href}
                  onClick={() => router.push(action.href)}
                  className={`${action.color} text-white rounded-xl p-4 text-left hover:opacity-90 transition-opacity shadow-sm`}
                >
                  <Icon className="w-6 h-6 mb-2" />
                  <span className="text-sm font-semibold">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}