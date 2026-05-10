import React from "react";
import { useState } from "react";

const Header = () => {
  const [NavLinks, setNavLinks] = useState([
    { href: "#", label: "Home" },
    { href: "#", label: "Medicines" },
    { href: "#", label: "Contact us" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Pharmacies" },
  ]);
  return (
    <>
      <header className="flex justify-center space-x-40 items-center p-5 border border-r-0 border-l-0 border-gray-200 ">
        {/* container1 */}
        <div className="flex gap-2">
          <span className="bg-green-900 text-white font-bold rounded py-1 px-3">
            K
          </span>
          <h2 className="text-xl font-bold text-green-800 ">Kavitacare </h2>
          <span className="text-gray-400 text-xl">Pharma</span>
        </div>

        {/* container2 */}
        <div className="flex">
          {NavLinks.map((links, index) => (
            <div>
              <li className="list-none">
                <ul key={index} className="ml-5 text-1xl text-gray-500">
                  <a href={links.href}>{links.label} </a>
                </ul>
              </li>
            </div>
          ))}
        </div>

        {/* container3 */}
        <div className="flex gap-3">
          <button className=" border border-green-900  rounded-[10px] hover:bg-green-900 hover:text-white px-3 py-1 cursor-pointer font-bold ">
            Sign In{" "}
          </button>
          <button className="hover:bg-green-900  bg-green-800 text-white px-3 rounded-[10px] cursor-pointer font-bold ">
            Get Started
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
