import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = [
    { href: "/", label: "Home" },
    { href: "#", label: "Medicines" },
    { href: "#", label: "Contact us" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Pharmacies" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border border-x-0 border-gray-200">
      <div className="flex justify-between items-center px-4 py-3 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="bg-green-900 text-white font-bold rounded px-3 py-1">
            K
          </span>
          <h2 className="text-lg md:text-xl font-bold text-green-800">
            Kavitacare
          </h2>
          <span className="text-gray-400 text-sm md:text-lg">Pharma</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          {NavLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="hover:text-green-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="border border-green-900 rounded-lg px-3 py-1 font-bold hover:bg-green-900 hover:text-white">
            Sign In
          </button>
          <a
            href="/registration"
            className="bg-green-800 text-white px-3 py-1 rounded-lg font-bold hover:bg-green-900"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col px-4 pb-4 gap-3 bg-white border-t">
          {NavLinks.map((link, i) => (
            <a key={i} href={link.href} className="py-2 border-b text-gray-600">
              {link.label}
            </a>
          ))}

          <button className="border border-green-900 rounded-lg px-3 py-2 font-bold">
            Sign In
          </button>

          <a
            href="/registration"
            className="bg-green-800 text-white px-3 py-2 rounded-lg font-bold text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
