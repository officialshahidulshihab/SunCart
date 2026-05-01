"use client";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
   
    const{email, password, name, image}=data;
    const { data:res, error } = await authClient.signUp.email({
      name:name,
      email: email, 
      image:image,
    password: password,
    rememberMe: true,
    callbackURL: "/",
      
    });
    console.log(res,error);
     if(error){
      alert(error.message)
    }
    if(res){
      alert("Registration successful")
      router.push("/login")
    }
  };
  return (
    <div className=" bg-linear-to-br from-orange-50 via-pink-50 to-yellow-50 flex items-center justify-center ">
      <div className="bg-base-100 border-base-300 rounded-box  border">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <fieldset className=" mt-6 mb-6  ">
            <div className="bg-linear-to-br from-orange-500 to-pink-500 p-8 py-12 text-white text-center rounded-t-lg">
              <h1 className="text-3xl font-bold mb-2">Join SunCart</h1>
              <p className="font-semibold">
                Create your account and start shopping
              </p>
            </div>

            <div className="p-5 space-y-2">
              <div className="space-y-2">
                <label className="label font-bold">Full Name</label>
                <input
                  type="text"
                  className="input rounded-xl w-full"
                  placeholder="Your Name"
                   {...register("name", { required: true })}
                />
              </div>
              {errors.name && (
            <span className="text-red-600">Name field is required</span>
          )}
              <div className="space-y-2">
                <label className="label font-bold">Email</label>
                <input
                  type="email"
                  className="input rounded-xl w-full"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
               {errors.email && (
            <span className="text-red-600">Email field is required</span>
          )}
              <div className="space-y-2">
                <label className="label font-bold">Picture URL(Optional)</label>
                <input
                  type="text"
                  className="input rounded-xl w-full"
                  placeholder="URL"
                  {...register("image")}
                />
              </div>
              <div className="space-y-2">
                <label className="label font-bold ">Password</label>
                <input
                  type="password"
                  className="input rounded-xl w-full"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
              {errors.password && (
            <span className="text-red-600">Password field is required</span>
          )}
              <div className="">
                <button className="px-5 py-2.5 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:shadow-lg cursor-pointer font-medium  transition-all w-full mt-3 ">
                  Register
                </button>
              </div>
            </div>

          </fieldset>
        </form>
            <div className="divider p-5">Or continue with</div>
            <div>
              <div className="flex justify-center items-center  p-5">
                <button onClick={async()=>await authClient.signIn.social({
    provider: "google",
  })} className="btn  w-full bg-white flex items-center gap-2 text-black border-[#e5e5e5]">
                  <FcGoogle className="text-xl" />{" "}
                  <span className="text-xl">Google</span>
                </button>
              </div>
              <div className="text-center p-5">
                <h1 className="text-gray-700">
                  Already have an account?{" "}
                  <Link href={"/login"} className="text-orange-600 font-bold">
                    Login here
                  </Link>
                </h1>
              </div>
            </div>
      </div>
    </div>
  );
};

export default SignUpPage;
