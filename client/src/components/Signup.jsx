import React from "react";
import {Link} from 'react-router-dom'
import Login from "./Login";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate,useLocation} from 'react-router-dom'

function  Signup() {

   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || '/'
   

   const {register,handleSubmit,formState : {errors}}=useForm();
   
   const onSubmit = async (data) =>{
     const userInfo = {
      fullName : data.fullName,
      email : data.email,
      password : data.password

     }
     
    //  console.log(userInfo);

     await axios.post('http://localhost:4080/user/signup', userInfo)
     .then((res)=>{
      //  console.log(res.data);
       if(res.data){
          toast.success('Signup Successfully');
          navigate(from,{replace:true})
       }
       
       localStorage.setItem("User",JSON.stringify(res.data.user));

     })
     .catch((error)=>{
        if(error.response){
          console.log(error);
          // alert(error.response.data.msg);
          toast.error(error.response.data.msg)
        }
     })

     
   };

  return (
    <>
      <div className="flex h-screen items-center  jsutify-center">
       <div className="w-[600px] dark:text-slate-800 m-auto">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>
            {/* Email */}
             <div className="mt-4 space-y-2" >
                <span>Name</span> <br />
                <input type="text"  {...register("fullName",{required: true})} placeholder="Enter your name" className="w-80 px-3 border border-slate-300 py-1 rounded-md outline-none"  required/>
                <br />
                {errors.fullName && <span  className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2" >
                <span>Email</span> <br />
                <input type="email"  {...register("email",{required: true})} placeholder="Enter your email" className="w-80 px-3 border border-slate-300 py-1 rounded-md outline-none"  required/>
                <br />
                {errors.email && <span  className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2" >
                <span>Password</span> <br />
                <input type="password"  {...register("password",{required: true})} placeholder="Enter your password" className="w-80 px-3 border border-slate-300 py-1 rounded-md outline-none"  required/>
                <br />
                {errors.password && <span  className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-around mt-5">
                <button  className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-300">Signup</button>
                <p className="text-xl">Have an account? <button onClick={()=>{document.getElementById("my_modal_3").showModal()}} className="text-blue-500 underline cursor-pointer">Login</button>{" "}
                 <Login></Login>
                </p>
            </div>
          </form>
          </div>
        </div>
       </div>
      
    </>
  );
}

export default Signup;
