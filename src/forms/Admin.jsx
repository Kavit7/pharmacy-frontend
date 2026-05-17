import {React,useState} from 'react'
import {
  ArrowBigRight,
  ArrowBigRightIcon,
  KeyRound,
  MailIcon,
  PhoneCall,
  User,
  Verified,
} from "lucide-react";
import Swal from "sweetalert2";
const Admin = () => {


     const [roles ,setRoles]= useState([
        {id:1,role:"Admin"}, {id:2 ,role:"Pharmacy"}
     ])
 const [formData, setFormData] = useState({
   uuid: " 123-4567",
   fname: "",
   mname: "",
   lname: "",
   phone: "",
   email: "",
   password_hash: "",
   confirm: "",
   role_id: "",
   status_id:1,
 });
      const handleChange= (e)=>{
        const {name,value}= e.target;
       setFormData({
        ...formData,[name]:value
      })
      }
      const handleSubmit =async (e)=>{
      e.preventDefault();
    
      if (formData.password_hash !== formData.confirm){
        Swal.fire({
          title: "Failed!",
          text: "Password do not Match",
          icon: "error",
        });
        return;
      }
          try{
        const response= await fetch('http://localhost:8080/users',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify( formData)

        })
            const data= await response.json();

           if (response.ok) {
             Swal.fire({
               title: "Success!",
               text: data.message || "Account created successfully",
               icon: "success",
             });
             setFormData({
               uuid: "",
               fname: "",
               mname: "",
               lname: "",
               phone: "",
               email: "",
               password_hash: "",
               confirm: "",
               role_id: "",
               status_id:""
             });
             window.location.href = "/";
           } else {
             Swal.fire({
               title: "Failed!",
               text: JSON.stringify(data.errors || data),
               icon: "error",
             });
           }
          } catch(error){

               Swal.fire({
                 title: "Failed!",
                 text: error,
                 icon: "error",
               });

          }
        
    
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
                    Get started with Default today
                  </h2>
                  <small className="text-center md:text-2xl text-gray-500 p-4">
                    Join  Kavitacare
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
                      value={formData.password_hash}
                      name="password_hash"
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

                  <div className='form-border'>
                     <select  onChange={handleChange} name="role_id" className='w-full outline-none px-2 py-1 rounded'>
                        <option value="">Select role</option>
                       {roles.map((role,i)=>(
                        <>

                        <option  key={i} value={role.id}>
                               {role.role}
                        </option>
                        </>
                       ))}
 

                     </select>
                  </div>
                  <div className="flex bg-green-900 items-center justify-center rounded-[20px]">
                    <button className=" p-3 text-white font-bold" type="submit">
                      Create Admin
                    </button>
                    <ArrowBigRightIcon className="text-white" />
                  </div>
                </form>
              </div>
    
    </>
  )
}

export default Admin