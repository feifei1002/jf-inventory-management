"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import { Bell, Menu, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleSidebar = () => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* ── LEFT SIDE ── */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-lg bg-gray-100 hover:bg-brand-green-50 hover:text-brand-green transition-colors"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* <div className="relative">
          <input
            type="search"
            placeholder="Search materials & products..."
            className="pl-10 pr-4 py-2 w-56 md:w-72 border border-gray-200  bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-green       focus:border-transparent shadow-sm"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div> */}
      </div>

      {/* ── RIGHT SIDE ── */}
      <div className="flex items-center gap-3">

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="text-gray-500  w-5 h-5" />
          </button>
          <span className="absolute top-1 right-1 w-2 h-2 bg-brand-red rounded-full" />
        </div>

        <div className="w-px h-6 bg-gray-200 mx-1" />

        {/* User profile */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            FL
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-800   leading-tight">
              Fei Liu
            </p>
            <p className="text-xs text-gray-400 leading-tight">Admin</p>
          </div>
        </div>

        <div className="w-px h-6 bg-gray-200 mx-1" />

        {/* Settings */}
        <Link href="/settings">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Settings className="text-gray-500  w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;