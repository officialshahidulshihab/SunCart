 "use client" 
import NavLink from "@/Components/NavLink/NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const sessionData=session?.user
  
    
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
              <NavLink href={"/"} className="hover:bg-orange-500 hover:text-white font-medium">Home</NavLink>
            </li>
            <li>
              <NavLink href={"/products"} className="hover:bg-orange-500 hover:text-white font-medium">Products</NavLink>
              
            </li>
            <li>
              <NavLink href={"/"} className="hover:bg-orange-500 hover:text-white font-medium">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <Link href={"/"} className=" bg-linear-to-r from-orange-500 to-pink-500 text-2xl text-transparent bg-clip-text font-bold">SunCart</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           <li>
              <NavLink href={"/"} className="hover:bg-orange-500 hover:text-white font-medium">Home</NavLink>
            </li>
            <li>
              <NavLink href={"/products"} className="hover:bg-orange-500 hover:text-white font-medium">Products</NavLink>
              
            </li>
            <li>
              <NavLink href={"/profile"} className="hover:bg-orange-500 hover:text-white font-medium">My Profile</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2.5">
        {isPending? <span class="loading loading-spinner text-warning"></span>: sessionData? (<div className='flex gap-4 items-center'>
            <h1>{sessionData?.name}</h1>
            
            {/* <Image src={userImg} alt='user avatar' width={60} height={60}></Image> */}

            <button onClick={async()=>await authClient.signOut()}  className='btn text-white bg-[#403F3F]'>LogOut</button>

            


           </div>):(<>
           <Link href={"/login"}>
        <button className="px-5 py-2.5 rounded-lg text-orange-600 font-medium hover:bg-orange-50 cursor-pointer transition-colors">Login</button></Link>
        <Link href={"/signup"}>
        <button className="px-5 py-2.5 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:shadow-lg cursor-pointer font-medium  transition-all">Register</button></Link></>)}
       
       
      </div>
    </div>
    </div>
  );
};

export default Navbar;
