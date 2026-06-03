import React, { useState } from 'react'
import Dashboard from '../Page/Dashboard';
import { AppWindow, BlocksIcon, CircleDivide, CircleParkingOff, Croissant, Cross, DeleteIcon, Hospital, ListCheck, NotebookPen, PilcrowIcon, Pill, Settings, Settings2, Store, UserCheck } from 'lucide-react';

const Sidebar = () => {
  const list = [
    {
      text: "Dashboard",
      link: "/dashboard",
      icon: AppWindow,
      color: "text-blue-600",
    },
    {
      text: "Pharmacy",
      link: "/dashboard",
      icon: Hospital,
      color: "text-blue-600",
    },
    {
      text: "Manage User",
      link: "/dashboard",
      icon: UserCheck,
      color: "text-blue-600",
    },
    {
      text: "Medicine",
      link: "/medicine",
      icon: Pill,
      color: "text-blue-600",
    },
    {
      text: "Order",
      link: "/dashboard",
      icon: ListCheck,
      color: "text-blue-600",
    },
    {
      text: "Report",
      link: "/dashboard",
      icon: NotebookPen,
      color: "text-blue-600",
    },
    {
      text: "Blocked Entity",
      link: "/dashboard",
      icon: CircleParkingOff,
      color: "text-blue-600",
    },
    {
      text: "Settings",
      link: "/dashboard",
      icon: Settings,
      color: "text-blue-600",
    },
    {
      text: "Configuration",
      link: "/dashboard",
      icon: Settings2,
      color: "text-blue-600",
    },
    {
      text: "Developer Settings",
      link: "/dashboard",
      icon: Store,
      color: "text-blue-600",
    },
  ];

  return (
    <aside className="w-[70px] md:w-[240px] overflow-visible h-screen sticky top-0 bg-white border-r flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 p-3">
        <span className="bg-green-900 text-xs text-white font-bold rounded px-3 py-1">
          K
        </span>
        <h2 className="text-lg font-bold text-green-800">Kavitacare</h2>
        <span className="text-gray-400">Pharma</span>
      </div>

      <hr />

      {/* Scrollable Menu */}
      <ul className="flex-1 overflow-hidden p-4 space-y-2">
        {list.map((value, index) => {
          const Icon = value.icon;

          return (
            <li
              key={index}
              className="relative rounded md:hover:bg-gray-400 group"
            >
              <a
                href={value.link}
                className="flex items-center justify-center md:justify-start gap-3 p-2"
              >
                {/* Icon */}
                <Icon className={`${value.color} group-hover:text-white`} />

                {/* Text */}
                <span className="hidden md:block text-black/60 group-hover:text-white">
                  {value.text}
                </span>
              </a>

              {/* Tooltip for small screen */}
              <span
                className="absolute left-0 mr-5 top-0 -translate-y-1/2 
bg-black text-white text-xs px-2 py-1 rounded 
opacity-0 group-hover:opacity-100 md:hidden whitespace-normal z-50"
              >
                {value.text}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar