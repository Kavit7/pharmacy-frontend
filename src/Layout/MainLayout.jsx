import React from "react";
import Sidebar from "../LayoutComponent/Sidebar";
import Header from "../LayoutComponent/Header";
import Footer from "../LayoutComponent/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
    <Sidebar/>
      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header/>
        {/* Content */}
        <main className="flex-1 p-4 overflow-auto">
            {children}
            </main>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
