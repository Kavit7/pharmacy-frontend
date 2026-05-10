import React from "react";
import Image1 from "../assets/pharmacy.jpg";
const Hero = () => {
  return (
    <section className="p-20 bg-green-100/50">
      <div className="flex justify-center ">
        <div className="w-[600px] flex flex-col gap-8">
          <span
            className="bg-green-200 w-fit px-2 py-1 rounded-[20px]"
            style={{ fontSize: "0.75rem" }}
          >
            Trusted by 50,000+ patients
          </span>
          <h2 className="text-5xl font-bold" mb-5>
            {" "}
            Your Health, delivered with Care
          </h2>

          <small className="text-xl text-gray-500">
            Prescription medications, over-the-counter products, and expert
            guidance — all from licensed pharmacies.
          </small>

          <div className="flex gap-3">
            <button className=" p-2 bg-green-900 rounded text-white font-bold">
              Order Prescription
            </button>
            <button className="p-2 border rounded font-bold text-gray-400">
              Emergency Care
            </button>
          </div>
          {/* another container */}
          <div className=" flex gap-3 text-gray-500 border border-b-0 border-l-0 border-r-0 p-7 border-gray-300">
            <span>✓ HIPAA Compliant</span>
            <span>✓ FDA Approved</span>
            <span>✓ Free Shipping</span>
          </div>
        </div>

        {/* image container */}
        <div>
          <img
            src={Image1}
            height={610}
            width={610}
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
