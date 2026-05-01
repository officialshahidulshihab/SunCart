"use client"

import React, { useState } from "react";


import { useForm, SubmitHandler } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Image from "next/image";
import { FaPenToSquare } from "react-icons/fa6";
const UpdatePage = () => {
  //
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //
  const [modalError, setModalError] = useState("");
  //
  const handleUpdateClient = async (data) => {
    const { image, name } = data;
    setModalError("");

    const { data: res, error } = await authClient.updateUser({
      image: image,
      name: name,
    });

    if (error) {
      setModalError(error.message || "Something went wrong.");
      return;
    }

    toast.success("Profile updated successfully!");
    document.getElementById("my_modal_3").close();
  };
  //
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  return (
   <div className="flex justify-center items-center mt-6 mb-6 ">
     <div className="bg-base-100 shadow-sm rounded-xl   p-0 overflow-y-auto max-h-screen">
      <div className="bg-linear-to-r from-orange-500 to-pink-500 rounded-t-xl p-15 text-white text-center">
        <p className="font-bold text-2xl">Update Profile</p>
        <p>Modify your account information</p>
      </div>
      <div className="flex justify-center mt-2">
        {user?.image ? (
          <Image
            src={user?.image}
            alt={user?.name}
            width={100}
            height={70}
            className="rounded-full w-37.5 h-37.5 mx-auto"
          ></Image>
        ) : (
          <div className="w-37.5 h-37.5 rounded-full bg-linear-to-br from-orange-500 via-pink-500 to-rose-500 text-white flex items-center justify-center text-5xl font-bold border-4 border-white shadow-xl">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
        )}
      </div>
      <form className="p-5" onSubmit={handleSubmit(handleUpdateClient)}>
        {modalError && (
          <div className="mt-4 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm font-medium">
            {modalError}
          </div>
        )}
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-gray-600">
            Profile Photo URL
          </legend>
          <input
            type="text"
            className="input w-full rounded-xl"
            placeholder="Type here"
            {...register("image")}
          />
          <p className="label">
            Enter a valid image URL for your profile photo (optional)
          </p>
        </fieldset>
        <fieldset>
          <label className="fieldset-legend text-gray-600">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="input rounded-xl w-full"
            placeholder="Name"
          />
        </fieldset>

       
          
          <div className="mt-3">
            <button
              type="submit"
              className="bg-linear-to-r from-orange-500 to-pink-500  text-white font-semibold flex items-center gap-2 w-full   btn"
            >
              <FaPenToSquare />
              <span>Update Information</span>
            </button>
          </div>
       
      </form>
    </div>
   </div>
  );
};

export default UpdatePage;
