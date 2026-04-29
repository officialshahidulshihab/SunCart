import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Link from "next/link";
import { getAllProducts } from "@/lib/AllFetch/allFetch";


const PopularProducts = async () => {
  const data = await getAllProducts();

  const topProducts = data.slice(0, 3);


  return (
    <div>
      <div className="space-y-2.5 text-center p-3">
        <h1 className="text-4xl  font-bold">
          Popular{" "}
          <span className=" bg-linear-to-r from-orange-500 to-pink-500  text-transparent bg-clip-text font-bold">
            Products
          </span>
        </h1>
        <p className="text-gray-600">
          Discover our most-loved summer essentials, handpicked for you
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-6 mb-6">
        {topProducts.map((product, ind) => (
          <ProductCard key={ind} product={product}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10 mt-10">
        <Link href={"/products"}>
        <button className="px-5 py-2.5 rounded-lg bg-linear-to-r from-orange-500 to-pink-500 font-bold cursor-pointer    text-white text-xl">
        <span>View All Products</span>
      </button></Link>
      </div>
    </div>
  );
};

export default PopularProducts;
