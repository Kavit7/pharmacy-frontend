import {
  ArrowBigRightIcon,
  KeyRound,
  MailIcon,
  PhoneCall,
  User,
  Verified,
} from "lucide-react";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import FloatingInput from "../FloatingInput/FloatingInput";


const RegForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    phone: "",
    email: "",
    password_hash: "",
    confirm: "",
    status_id: 1,
  });

  
  

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (formData.password_hash !== formData.confirm) {
        Swal.fire("Error", "Passwords do not match", "error");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:8080/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          Swal.fire("Success", data.message, "success");
  
          setFormData({
            fname: "",
            mname: "",
            lname: "",
            phone: "",
            email: "",
            password_hash: "",
            confirm: "",
            status_id: 1,
          });
        } else {
          Swal.fire("Error", JSON.stringify(data.errors || data), "error");
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong", "error");
      }
    };
  return (
    <div className="flex justify-center items-center md:p-7">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full md:w-fit shadow-lg p-7"
      >
        <h2 className="text-center font-bold md:text-4xl text-2xl">
          Get started today
        </h2>

        <small className="text-center text-gray-500">
          Join thousands of patients who trust Kavitacare
        </small>

        {/* Names */}
        <div className="flex gap-3 md:flex-row flex-col">
          <FloatingInput
            icon={User}
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            label="First Name"
          />

          <FloatingInput
            icon={User}
            name="mname"
            value={formData.mname}
            onChange={handleChange}
            label="Middle Name"
          />

          <FloatingInput
            icon={User}
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            label="Last Name"
          />
        </div>

        <FloatingInput
          icon={PhoneCall}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          label="Phone Number"
        />

        <FloatingInput
          icon={MailIcon}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          label="Email Address"
        />

        <FloatingInput
          icon={KeyRound}
          name="password_hash"
          type="password"
          value={formData.password_hash}
          onChange={handleChange}
          label="Password"
        />

        <FloatingInput
          icon={Verified}
          name="confirm"
          type="password"
          value={formData.confirm}
          onChange={handleChange}
          label="Confirm Password"
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-green-900 text-white font-bold p-3 rounded-xl"
        >
          Create free account
          <ArrowBigRightIcon />
        </button>
      </form>
    </div>
  );
};

export default RegForm;
