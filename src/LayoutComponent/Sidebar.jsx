import React from "react";
import {
  AppWindow,
  CircleParkingOff,
  Hospital,
  ListCheck,
  NotebookPen,
  Pill,
  Settings,
  Settings2,
  Store,
  UserCheck,
  X,
} from "lucide-react";

const Sidebar = ({ open = false, onClose }) => {
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
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-white border-r shadow-xl transition-transform duration-300 md:static md:translate-x-0 md:shadow-none ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between gap-2 p-3 border-b md:border-b-0">
        <div className="flex items-center gap-2">
          <span className="bg-green-900 text-xs text-white font-bold rounded px-3 py-1">
            K
          </span>
          <div>
            <h2 className="text-lg font-bold text-green-800">Kavitacare</h2>
            <span className="text-gray-400 text-sm">Pharma</span>
          </div>
        </div>
        <button
          className="md:hidden p-2 rounded bg-slate-100 hover:bg-slate-200"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X size={18} />
        </button>
      </div>

      <hr />

      {/* Scrollable Menu */}
      <ul className="flex-1 overflow-y-auto p-4 space-y-2">
        {list.map((value, index) => {
          const Icon = value.icon;

          return (
            <li
              key={index}
              className="relative rounded hover:bg-slate-100 md:hover:bg-gray-100 group"
            >
              <a
                href={value.link}
                className="flex items-center justify-start gap-3 p-3"
              >
                <Icon className={`${value.color}`} />
                <span className="text-black/80">{value.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
