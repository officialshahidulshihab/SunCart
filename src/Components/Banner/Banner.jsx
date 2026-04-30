import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import bannerImg from "../../asset/young-people-hugging-walking-street-together-removebg-preview.png";
import Link from "next/link";



const Banner = () => {
  
  return (
    <div className="bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)] p-5 flex  flex-col lg:flex-row lg:justify-between lg:items-center">
      <div>
        <div className="space-y-3">
          <div className="space-y-3">
            <h2 className=" text-2xl lg:text-5xl font-bold animate__animated animate__backInDown">Make This</h2>
            <h2 className="inline-block text-2xl lg:text-5xl bg-linear-to-r from-orange-500 to-pink-500 font-bold text-transparent bg-clip-text animate__animated animate__backInLeft animate__delay-1s">
              Summer Special
            </h2>
          </div>
          <p className="text-gray-600 w-70 lg:w-120 ">
            Discover the hottest collection of summer essentials. From beach
            accessories to stylish outfits, we have got everything for your
            perfect summer
          </p>
          <div className="flex gap-5 items-center mt-6 mb-6">
            <Link href={"/products"}>
            <button className=" px-2 py-1  lg:px-5 lg:py-2.5 cursor-pointer rounded-lg bg-linear-to-r from-orange-500 to-pink-500 font-bold flex items-center gap-2 text-white text-[16px] lg:text-xl animate__animated animate__bounceIn">
              <span>Shop Now</span>
              <FaArrowRightLong />
            </button></Link>
            <button className="btn px-2 lg:px-5  btn-outline btn-warning text-b animate__animated animate__bounceIn">
              View Collection
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="border-r-2 border-r-orange-300 ">
              <p className=" text-xl lg:text-2xl font-bold">50%</p>
              <p className="text-gray-600">off sale</p>
            </div>

            <div className="border-r-2 border-r-orange-300 text-center">
              <p className="text-xl lg:text-2xl font-bold">100+</p>
              <p className="text-gray-600">Products</p>
            </div>

            <div className="text-center">
              <p className="text-xl lg:text-2xl font-bold">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={bannerImg}
          alt="Banner Image"
          width={600}
          height={300}
          className="animate__animated animate__backInRight"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
