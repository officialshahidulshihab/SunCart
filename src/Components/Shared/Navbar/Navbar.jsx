"use client";
import NavLink from "@/Components/NavLink/NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const sessionData = session?.user;
  console.log(sessionData);

  return (
    <div className="  bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  href={"/"}
                  className="hover:bg-orange-500 hover:text-white font-medium"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  href={"/products"}
                  className="hover:bg-orange-500 hover:text-white font-medium"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  href={"/"}
                  className="hover:bg-orange-500 hover:text-white font-medium"
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className=" bg-linear-to-r from-orange-500 to-pink-500 text-2xl text-transparent bg-clip-text font-bold"
          >
            SunCart
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                href={"/"}
                className="hover:bg-orange-500 hover:text-white font-medium"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/products"}
                className="hover:bg-orange-500 hover:text-white font-medium"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/profile"}
                className="hover:bg-orange-500 hover:text-white font-medium"
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" md:navbar-end space-x-2.5">
          {isPending ? (
            <span className="loading loading-spinner text-warning"></span>
          ) : sessionData ? (
            <div className="flex gap-4 items-center">
              <h1>{sessionData?.name}</h1>

              {sessionData?.image ? (
                <Image
                  src={sessionData.image}
                  alt="user avatar"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  {sessionData?.name?.charAt(0).toUpperCase()}
                </div>
              )}

              <button
                onClick={async () => {
                  await authClient.signOut();
                  router.push("/login");
                }}
                className=" px-2 py-1  lg:px-5 lg:py-2.5 rounded-lg text-orange-600 font-medium hover:bg-orange-50 cursor-pointer transition-colors"
              >
                LogOut
              </button>
            </div>
          ) : (
            <>
              <Link href={"/login"}>
                <button className=" px-2 py-1  lg:px-5 lg:py-2.5 rounded-lg text-orange-600 font-medium hover:bg-orange-50 cursor-pointer transition-colors">
                  Login
                </button>
              </Link>
              <Link href={"/signup"}>
                <button className=" px-2 py-1  lg:px-5 lg:py-2.5 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:shadow-lg cursor-pointer font-medium  transition-all">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
