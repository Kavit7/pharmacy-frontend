import React, { useState } from "react";

const Links = () => {
  const [portions] = useState([
    {
      label: "Quick Links",
      links: [
        { href: "#", label: "Home" },
        { href: "#", label: "About Us" },
        { href: "#", label: "Services" },
        { href: "#", label: "Contact Us" },
      ],
    },
    {
      label: "Services",
      links: [
        { href: "#", label: "Free Consultations" },
        { href: "#", label: "Medicine Delivery" },
        { href: "#", label: "Online Prescription" },
        { href: "#", label: "24/7 Support" },
      ],
    },
    {
      label: "Support",
      links: [
        { href: "#", label: "Help Center" },
        { href: "#", label: "FAQs" },
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms & Conditions" },
      ],
    },
    {
      label: "Contact",
      links: [
        { href: "#", label: "Email Us" },
        { href: "#", label: "WhatsApp" },
        { href: "#", label: "Call Support" },
        { href: "#", label: "Location" },
      ],
    },
  ]);

  return (
    <section className="p-10 bg-green-900 text-white">
      <div className="flex justify-between flex-wrap gap-10">
        {portions.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-3">{section.label}</h3>

            <ul className="space-y-2">
              {section.links.map((nav, i) => (
                <li key={i}>
                  <a href={nav.href} className="hover:underline">
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Links;
