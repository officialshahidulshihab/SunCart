import React from "react";
import { GiGuards } from "react-icons/gi";
import { LuRollerCoaster } from "react-icons/lu";
import { PiAngularLogoLight } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";

const TopBrands = () => {
  return (
    <div>
      <div className="space-y-2 text-center mb-6 mt-6">
        <div className=" flex items-center gap-2 text-4xl font-bold justify-center ">
          <h1 className="text-center">Top</h1>
          <span className="bg-linear-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text ">
            Brands
          </span>
        </div>
        <p className="text-gray-600">
          Partnering with the best summer brands worldwide
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-6 mb-6">
        <div className="space-y-2 bg-base-100 shadow-sm p-4 rounded-xl text-center">
          <div className="px-4 py-2 inline-block bg-orange-500 rounded-lg ">
            <PiAngularLogoLight className="text-4xl text-white" />
          </div>
          <p className="text-xl font-bold">SunShade</p>
          <p className="text-orange-500 font-bold">Premium Eyewear</p>
          <p className="text-gray-600">
           UV400 Protection Specialists
          </p>
        </div>
        <div className="space-y-2 bg-base-100 shadow-sm p-4 rounded-xl text-center">
          <div className="px-4 py-2 inline-block bg-pink-800 rounded-lg ">
            <TbBeach className="text-4xl text-white" />
          </div>
          <p className="text-xl font-bold">BeachVibes</p>
          <p className="text-orange-500 font-bold">Summer Fashion</p>
          <p className="text-gray-600">
           Trendsetting Collections
          </p>
        </div>
        <div className="space-y-2 bg-base-100 shadow-sm p-4 rounded-xl text-center">
          <div className="px-4 py-2 inline-block bg-blue-500 rounded-lg ">
            <GiGuards className="text-4xl text-white" />
          </div>
          <p className="text-xl font-bold">SkinGuard</p>
          <p className="text-orange-500 font-bold">Skincare Experts</p>
          <p className="text-gray-600">
           Trusted by Millions
          </p>
        </div>
        <div className="space-y-2 bg-base-100 shadow-sm p-4 rounded-xl text-center">
          <div className="px-4 py-2 inline-block bg-purple-500 rounded-lg ">
            <LuRollerCoaster className="text-4xl text-white" />
          </div>
          <p className="text-xl font-bold">CoastalChic</p>
          <p className="text-orange-500 font-bold">Beach Lifestyle</p>
          <p className="text-gray-600">
           Fast Shipping Guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
