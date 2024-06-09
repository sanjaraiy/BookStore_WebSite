import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


function Login() {
  const {register, handleSubmit, formState: { errors }} = useForm();
  
  axios.defaults.withCredentials=true;
  const onSubmit = async (data) => {
    const userInfo = {
      email : data.email,
      password : data.password

     }
     
    //  console.log(userInfo);
    
     await axios.post('https://book-store-backend-ten.vercel.app/login', userInfo)
     .then((res)=>{
       console.log(res.data);
       if(res.data){
        toast.success('LoggedIn Successfully');
        document.getElementById('my_modal_3').close();
        setTimeout(()=>{
          window.location.reload();
          localStorage.setItem("User",JSON.stringify(res.data.user));
        },1000)
       }
       

     })
     .catch((error)=>{
        if(error.response){
          // console.log(error);
          // alert();
          toast.error(error.response.data.msg);
          setTimeout(()=>{},2000);
        }
     })
  };

 


  return (
    <>
      <div className="dark:text-black">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={()=>document.getElementById('my_modal_3').closeModal()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span> <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border border-slate-300 py-1 rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span> <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 border border-slate-300 py-1 rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-5">
                <button  className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-300">
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-500 underline cursor-pointer"
                    onClick={()=>document.getElementById('my_modal_3').closeModal()}
                  >
                    Signup
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
