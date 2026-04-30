import Image from "next/image";
import React from "react";
import { BsTruck } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaBoxOpen, FaRegStar, FaStar } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { notFound } from "next/navigation"
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rating))
          return <FaStar key={star} className="text-orange-400" />;
        if (star === Math.ceil(rating) && rating % 1 >= 0.5)
          return <FaStarHalfAlt key={star} className="text-orange-400" />;
        return <FaRegStar key={star} className="text-gray-300" />;
      })}
      <span className="text-sm text-gray-600 font-bold ml-1">{rating}</span>

    </div>
  );
};


const ProductsDetailes = ({ product }) => {
    const allTag=product.tags;
    const tag=allTag.map((p,ind)=><span className=" px-2 py-1  lg:px-5 lg:py-2.5 rounded-lg bg-linear-to-r from-orange-500 to-pink-500 text-white" key={ind}>{p}</span>)
    
  return (
    <div className="  lg:grid   lg:grid-cols-5 gap-10 mt-6">
      <div className="bg-base-100 shadow-sm p-5 rounded-2xl animate__animated animate__zoomIn  col-span-2">
        <div className="relative ">
          <Image
            src={product.image}
            alt={product.name}
            className="w-200 h-100 rounded-lg"
            width={300}
            height={150}
          ></Image>
          <div className="badge absolute bg-linear-to-r from-orange-500 to-pink-500 text-md text-white font-semibold top-2 left-3">
            {product.category}
          </div>
          <p className='text-orange-500 text-left mt-2 font-bold'>By {product.brand}</p>
        </div>
      </div>
      <div className="col-span-3">
        <div className='flex justify-between items-center text-[12px] font-bold mt-3'>
            
            
           </div>
           <h1 className='text-3xl font-bold mt-3 text-left'>{product.name}</h1>
          
           <p className="space-x-0.5 lg:space-x-2 mt-6 lg:text-left"><span className="text-xl font-bold">Features - </span>{tag}</p>
            <div className='mt-4 flex items-center  gap-15'>
                <div >
                    <StarRating rating={product.rating}></StarRating>
                   
                    
                 
                </div>
                <div className='text-gray-600'>
                     {product.stock} in Stock
                </div>


            </div>
            <div className=" flex mt-4">
                <p className='text-3xl font-bold text-left mt-2'>${product.price}</p>
                <p className="animate__animated animate__bounceInRight animate__delay-2s">{product.discount===0 ? "" : <span>{product.discount} % discount</span>}</p>
            </div>
             <p className="text-left text-gray-600 mt-3">{product.description}</p>
           
           <div className="grid grid-cols-3 gap-6  mt-6">
            <div className="bg-orange-50 py-5 space-y-2 rounded-xl flex flex-col justify-center items-center">
                <BsTruck className="text-xl font-bold text-orange-600" />
                <h2 className="text-gray-600 font-semibold">Free Shipping</h2>
            </div>
            <div className="bg-blue-50 py-5 space-y-2 rounded-xl flex flex-col justify-center items-center">
                <MdOutlinePayment className="text-xl font-bold text-blue-600" />
                <h2 className="text-gray-600 font-semibold">Secure Payment</h2>
            </div>
            <div className="bg-green-50 py-5 space-y-2 rounded-xl flex flex-col justify-center items-center">
                <FaBoxOpen  className="text-xl font-bold text-green-600" />
                <h2 className="text-gray-600 font-semibold">Easy Returns</h2>
            </div>
           
           </div>
           
           
           
           
           <div className='flex justify-between items-center mt-6'>
         
            <p className='px-3 py-2 bg-linear-to-r btn w-full  from-orange-500 to-pink-500 inline-block rounded-lg cursor-pointer text-white'>Buy Now</p>
           </div>
      </div>
    </div>
  );
};

export default ProductsDetailes;
