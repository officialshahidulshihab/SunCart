"use client";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const LogInPage = () => {
  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const handleLogin = async (data) => {
       
        const{email, password, name}=data;
        const { data:res, error } = await authClient.signIn.email({
          name:name,
          email: email, 
        password: password,
        rememberMe: true,
        callbackURL: "/",
          
        });
        console.log(res,error);
         if(error){
          alert(error.message)
        }
        if(res){
          alert("Login successful")
        }
      };
    return (
       <div className=" bg-linear-to-br from-orange-50 via-pink-50 to-yellow-50 flex items-center justify-center ">
      <div>
        <form onSubmit={handleSubmit(handleLogin)} >
          <fieldset className=" mt-6 mb-6 bg-base-100 border-base-300 rounded-box  border ">
        <div className="bg-linear-to-br from-orange-500 to-pink-500 p-8 py-12 text-white text-center rounded-t-lg">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="font-semibold">
            Login to continue your summer shopping
          </p>
        </div>

        <div className="p-5 space-y-2">
            
            <div className="space-y-2">
          <label className="label font-bold">Email</label>
          <input {...register("email", { required: true })} type="email" className="input rounded-xl w-full" placeholder="Email" />
        </div>
        {errors.email && (
            <span className="text-red-600">Email field is required</span>
          )}
            
        <div className="space-y-2">
          <label className="label font-bold ">Password</label>
          <input {...register("password", { required: true })} type="password" className="input rounded-xl w-full" placeholder="Password" />
        </div>
        {errors.password && (
            <span className="text-red-600">Password field is required</span>
          )}
        <div className="">
            <button className="px-5 py-2.5 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:shadow-lg cursor-pointer font-medium  transition-all w-full mt-3 ">LogIn</button>
        </div>
        </div>

         <div className="divider p-5">Or continue with</div>
         <div>
            <div className="flex justify-center items-center  p-5">
            <button className="btn  w-full bg-white flex items-center gap-2 text-black border-[#e5e5e5]">
                <FcGoogle className="text-xl" /> <span className="text-xl">Google</span>
            </button>
         </div>
         <div className="text-center p-5">
            <h1 className="text-gray-700">Don't have an account? <Link href={"/signup"} className="text-orange-600 font-bold">Resister here</Link></h1>
         </div>
         </div>

      </fieldset>
        </form>
      </div>
    </div>
    );
};

export default LogInPage;