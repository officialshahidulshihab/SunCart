import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import bannerImg from "../../asset/young-people-hugging-walking-street-together-removebg-preview.png";

const Banner = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)] p-5 flex justify-between items-center">
      <div>
        <div className="space-y-3">
          <div className="space-y-3">
            <h2 className="text-5xl font-bold">Make This</h2>
            <h2 className="inline-block text-5xl bg-linear-to-r from-orange-500 to-pink-500 font-bold text-transparent bg-clip-text">
              Summer Special
            </h2>
          </div>
          <p className="text-gray-600 w-125">
            Discover the hottest collection of summer essentials. From beach
            accessories to stylish outfits, we have got everything for your
            perfect summer
          </p>
          <div className="flex gap-5 items-center mt-6 mb-6">
            <button className="px-5 py-2.5 rounded-lg bg-linear-to-r from-orange-500 to-pink-500 font-bold flex items-center gap-2 text-white text-xl">
              <span>Shop Now</span>
              <FaArrowRightLong />{" "}
            </button>
            <button className="btn px-5  btn-outline btn-warning text-b">
              View Collection
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="border-r-2 border-r-orange-300">
              <p className="text-2xl font-bold">50%</p>
              <p className="text-gray-600">off sale</p>
            </div>

            <div className="border-r-2 border-r-orange-300">
              <p className="text-2xl font-bold">100+</p>
              <p className="text-gray-600">Products</p>
            </div>

            <div>
              <p className="text-2xl font-bold">24/7</p>
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
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
