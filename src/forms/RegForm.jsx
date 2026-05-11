import { ArrowBigRight, ArrowBigRightIcon, KeyRound, MailIcon, PhoneCall, User, Verified } from 'lucide-react'
import {React,useState} from 'react'
import Swal from "sweetalert2";
const RegForm = () => {
    const [formData,setFormData]= useState({
        fname:"",
        mname:"",
        lname:"",
        password:"",
        confirm:""
})
  const handleChange= (e)=>{
    const {name,value}= e.target;
   setFormData({
    ...formData,[name]:value
  })
  }
  const handleSubmit =async (e)=>{
  e.preventDefault();

  if (formData.password !== formData.confirm){
    Swal.fire({
      title: "Failed!",
      text: "Password do not Match",
      icon: "error",
    });
    return;
  }
   console.log(formData);
   Swal.fire({
     title: "Success!",
     text: "Account created successfully",
     icon: "success",
   });
    setFormData({
      fname: "",
      mname: "",
      lname: "",
      password: "",
      confirm: "",

    });
    window.location.href="/";

  }

  return (
    <>
      <div className="flex justify-center flex-col items-center md:p-7 ">
        <form
          action=""
          className="flex flex-col gap-3 w-full md:w-fit p-4 shadow-lg p-7"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center w-full p-4 font-bold  md:text-4xl text-2xl rounded">
            Get started today
          </h2>
          <small className="text-center md:text-2xl text-gray-500 p-4">
            Join thousands of patients who trust Kavitacare
          </small>
          <div className="flex gap-3 md:flex-row flex-col">
            <div className="flex border md:w-fit p-3 gap-3 rounded border-gray-300 focus-within:ring-1 ring-green-700">
              <User className="text-green-800" />
              <input
                type="text"
                placeholder="Enter First Name"
                className="outline-none w-full"
                onChange={handleChange}
                value={formData.fname}
                name="fname"
              />
            </div>

            <div className="flex border md:w-fit p-3 gap-3 rounded border-gray-300 focus-within:ring-1 ring-green-700">
              <User className="text-green-800" />
              <input
                type="text"
                placeholder="Enter Middle Name"
                className="outline-none w-full"
                onChange={handleChange}
                value={formData.mname}
                name="mname"
              />
            </div>

            <div className="flex border md:w-fit p-3 gap-3 rounded border-gray-300 focus-within:ring-1 ring-green-700">
              <User className="text-green-800" />
              <input
                type="text"
                placeholder="Enter Last Name"
                className="outline-none w-full"
                onChange={handleChange}
                value={formData.lname}
                name="lname"
              />
            </div>
          </div>
          <div className="flex border w-full p-3 gap-3 rounded border-gray-300 focus-within:ring-1 ring-green-700">
            <PhoneCall className="text-green-800" />
            <input
              type="text"
              placeholder="Enter Phone"
              className="outline-none w-full"
              onChange={handleChange}
              value={formData.phone}
              name="phone"
            />
          </div>
          <div className="flex border w-full p-3 gap-3 rounded border-gray-300 focus-within:ring-1 ring-green-700">
            <MailIcon className="text-green-800" />
            <input
              type="email"
              placeholder="Enter Email"
              className="outline-none w-full"
              onChange={handleChange}
              value={formData.email}
              name="email"
            />
          </div>
          <div className="flex border w-full p-3 gap-3 rounded border-gray-300 focus-within:ring-1 ring-green-700">
            <KeyRound className="text-green-800" />
            <input
              type="password"
              placeholder="Enter Password"
              className="outline-none w-full"
              onChange={handleChange}
              value={formData.password}
              name="password"
            />
          </div>
          <div className="flex border w-full p-3 gap-3 rounded border-gray-300 focus-within:ring-1 ring-green-700">
            <Verified className="text-green-800" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="outline-none w-full"
              onChange={handleChange}
              value={formData.confirm}
              name="confirm"
            />
          </div>
          <div className="flex bg-green-900 items-center justify-center rounded-[20px]">
            <button className=" p-3 text-white font-bold" type="submit">
              Create free account
            </button>
            <ArrowBigRightIcon className="text-white" />
          </div>
        </form>
      </div>
    </>
  );
}

export default RegForm