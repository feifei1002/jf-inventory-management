"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/app/state';
import { Archive, Building2, CircleDollarSign, ClipboardList, Layout, LucideIcon, Menu, Package, ShoppingCart, SlidersHorizontal, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
}: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href}>
            <div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "text-white bg-blue-200" : ""}`}>
                <Icon className="w-6 h-6 text-gray-700!" />
                <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>
                    {label}
                </span>
            </div>
        </Link>
    )
}

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col ${
        isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  return (
    <div className={sidebarClassNames}>
        { /* TOP LOGO */ }
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
            <div>Logo</div>
            <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>J&F</h1>
            <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleSidebar}>
                <Menu className="w-4 h-4" />
            </button>
        </div>

        {/* LINKS */}
        <div className="grow mt-8">
            <SidebarLink
              href="/dashboard" 
              icon={Layout} 
              label="Dashboard" 
              isCollapsed={isSidebarCollapsed} 
            />
             <SidebarLink
              href="/suppliers" 
              icon={Building2} 
              label="Suppliers" 
              isCollapsed={isSidebarCollapsed} 
            />
            <SidebarLink
              href="/products" 
              icon={Package} 
              label="Products" 
              isCollapsed={isSidebarCollapsed} 
            />
            <SidebarLink
              href="/inventory" 
              icon={Archive} 
              label="Inventory" 
              isCollapsed={isSidebarCollapsed} 
            />
            <SidebarLink
            href="/purchase-requisitions"
            icon={ClipboardList}
            label="Requisitions"
            isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
            href="/purchase-orders" 
            icon={ShoppingCart} 
            label="Purchase Orders" 
            isCollapsed={isSidebarCollapsed} 
            />
            <SidebarLink
              href="/users" 
              icon={User} 
              label="Users" 
              isCollapsed={isSidebarCollapsed} 
            />
            <SidebarLink
              href="/settings" 
              icon={SlidersHorizontal} 
              label="Settings" 
              isCollapsed={isSidebarCollapsed} 
            />
            <SidebarLink
              href="/expenses" 
              icon={CircleDollarSign} 
              label="Expenses" 
              isCollapsed={isSidebarCollapsed} 
            />
        </div>

        {/* FOOTER */}
        <div className={`py-4 ${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
            <p className="text-center text-xs text-gray-500">&copy; 2026 J&F</p>
        </div>
    </div>
  )
}
export default Sidebar;