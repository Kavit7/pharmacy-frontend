import React, { useState } from "react";
import FloatingInput from "../FloatingInput/FloatingInput";
import { Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const LoginForm = () => {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.token) {
          localStorage.setItem("token", data.token);

          Swal.fire("Success", data.message || "Login successful", "success");

          // 🔥 REDIRECT PROPERLY
          navigate("/dashboard");
        } else {
          Swal.fire("Error", data.message || "Login failed", "error");
        }
      }).catch((error)=>{
        Swal.fire("Error", error || "Login failed", "error");
      });
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <form className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-lg flex flex-col gap-6" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Sign in to your account
      </h1>

      <p className="text-center text-gray-500 text-sm">
        Welcome back 👋 Please enter your details to continue
      </p>

      <FloatingInput
        icon={User}
        name="email"
        type="email"
        label="Email"
        onChange={handleChange}
        value={form.email}
      />

      <FloatingInput
        icon={Lock}
        name="password"
        type="password"
        label="Password"
        onChange={handleChange}
        value={form.password}
      />

      <button className="bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
        Sign In
      </button>

      <p className="text-center text-sm text-gray-500">
        Don’t have an account?{" "}
        <a href="/registration">
          <span className="text-green-600 font-medium cursor-pointer">
            Sign up
          </span>
        </a>
      </p>
    </form>
  </div>
);
};

export default LoginForm;
