"use client";
import Image from "next/image";
import React, { useState } from "react";

import { FaCamera, FaPenToSquare, FaUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";

const ProfilePage = () => {
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
    <div className="bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)]">
      <div>
        <p className="font-bold text-2xl lg:text-4xl text-center pt-10">
          My{" "}
          <span className="bg-linear-to-r from-orange-500 to-pink-500  text-transparent bg-clip-text ">
            Profile
          </span>
        </p>
        <p className="text-gray-600 text-center mt-3">
          Manage your account and view your activity
        </p>
      </div>
      <div className="bg-base-100 shadow-sm rounded-xl mt-3 mb-6">
        <div className="bg-linear-to-r from-orange-500 to-pink-500 rounded-t-xl p-5">
          {user?.image ? (
            <Image
              src={user?.image}
              alt={user?.name}
              width={100}
              height={70}
              className="rounded-full w-37.5 h-37.5"
            ></Image>
          ) : (
            <div className="w-37.5 h-37.5 rounded-full bg-linear-to-br from-orange-500 via-pink-500 to-rose-500 text-white flex items-center justify-center text-5xl font-bold border-4 border-white shadow-xl">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="mt-3 space-y-2 flex flex-col lg:justify-between lg:flex-row p-6">
            <div>
              <h2 className="text-3xl font-bold">{user?.name}</h2>
              <p className="flex items-center gap-2 mt-2">
                <IoMail className="text-orange-400 " />
                <span>{user?.email}</span>
              </p>
            </div>
            <div>
              <Link href={"/update"}>
                <h2 className="bg-linear-to-r from-orange-500 to-pink-500  text-white font-semibold flex items-center gap-2 btn">
                  <FaPenToSquare />
                  <span>Update Information</span>
                </h2>
              </Link>
            </div>
          </div>

          <div className="mt-6 bg-linear-to-br from-gray-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-100 ">
            <h2 className="flex items-center text-xl font-bold gap-2">
              <FaUser className="text-orange-400" />
              <span>Profile Information</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4  gap-5">
              <div className="col-span-2 border border-orange-100 p-6 flex items-center gap-3 rounded-xl mt-3 bg-base-100 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center ">
                  <FaUser className="text-orange-400 text-xl" />
                </div>
                <div>
                  <h1 className="text-gray-600">Full Name</h1>
                  <p className="text-xl font-bold">{user?.name}</p>
                </div>
              </div>
              <div className="col-span-2 border bg-base-100 shadow-sm  border-orange-100 p-6 flex items-center gap-3 rounded-xl mt-3">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center ">
                  <IoMail className="text-pink-400 text-xl" />
                </div>
                <div>
                  <h1 className="text-gray-600">Email Address</h1>
                  <p className="text-xl font-bold">{user?.email}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 border bg-base-100 shadow-sm  border-orange-100 p-6 flex items-center gap-3 rounded-xl mt-3">
              <div className="w-12 h-12 shrink-0 bg-blue-100 rounded-xl flex items-center justify-center ">
                <FaCamera className="text-blue-400 text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-gray-600">Photo URL</h1>
                <p className="text-sm break-all">{user?.image}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
