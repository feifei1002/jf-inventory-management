"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/app/state';
import {
  Archive, Building2, ClipboardList, Layout, LucideIcon, Menu, Package,
  ShoppingCart, SlidersHorizontal, User,
  Warehouse
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div className={`
        cursor-pointer flex items-center gap-3 transition-colors
        ${isCollapsed ? "justify-center py-4 px-2" : "justify-start px-8 py-3"}
        ${isActive
          ? "bg-brand-green text-white border-r-4 border-brand-red"
          : "text-gray-600 hover:bg-brand-green-50 hover:text-brand-green"
        }
      `}>
        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-gray-500 "}`} />
        <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-sm`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-72"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40 border-r border-gray-100`;

  return (
    <div className={sidebarClassNames}>
      {/* ── TOP LOGO ── */}
      <div className={`flex items-center justify-between pt-6 pb-4 border-b border-gray-100
        ${isSidebarCollapsed ? "px-3 flex-col gap-3" : "px-5"}`}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/favicon.ico"
              alt="J&F Logo"
              fill
              className="object-contain"
            />
          </div>
          {!isSidebarCollapsed && (
            <div>
              <h1 className="font-black text-2xl text-brand-red leading-tight">J&F</h1>
            </div>
          )}
        </div>
        <button
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4 text-gray-500 " />
        </button>
      </div>

      {/* ── LINKS ── */}
      <div className="grow mt-2 overflow-y-auto">
        <SidebarLink href="/dashboard" icon={Layout} label="Dashboard 首頁" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/suppliers" icon={Building2} label="Suppliers 供應商" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/products" icon={Package} label="Materials 材料" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/purchase-requisitions" icon={ClipboardList} label="Purchase Requisitions 請購單" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/purchase-orders" icon={ShoppingCart} label="Purchase Orders 採購單" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/warehousing" icon={Warehouse} label="Warehousing 入庫單" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/inventory" icon={Archive} label="Inventory 庫存" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/users" icon={User} label="Users 用戶" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/settings" icon={SlidersHorizontal} label="Settings 設定" isCollapsed={isSidebarCollapsed} />
      </div>

      {/* ── FOOTER ── */}
      <div className={`py-4 border-t border-gray-100 ${isSidebarCollapsed ? "hidden" : "block"}`}>
        <p className="text-center text-xs text-gray-400">&copy; 2026 J&F Industries</p>
      </div>
    </div>
  );
};

export default Sidebar;