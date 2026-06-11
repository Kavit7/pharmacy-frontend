import React, { useState } from "react";
import Sidebar from "../LayoutComponent/Sidebar";
import Header from "../LayoutComponent/Header";
import Footer from "../LayoutComponent/Footer";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* SIDEBAR */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* OVERLAY FOR MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/25 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
