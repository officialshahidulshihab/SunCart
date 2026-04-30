"use client"
import React, { useMemo, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { CiFilter } from "react-icons/ci";

const ProductPageWork = ({ allProducts }) => {
    const [search, setSearch]=useState("")
    const [category, setCategory] = useState("All")
    const filtered=useMemo(()=>{
        let result=[...allProducts];
        if(search.trim()){
            const q=search.toLowerCase();
            result=result.filter((p)=>p.name?.toLowerCase().includes(q)||
        p.description?.toLowerCase().includes(q));
        }
        if (category !== "All") {
        result = result.filter((p) => p.category === category)
    }
        return result;
    } ,[allProducts, search, category])
  return (
    <div>
      <div className="mt-6 mb-6">
        <label className="input w-full rounded-2xl ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className=""
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            required
            placeholder="Search Products"
          />
        </label>
      </div>
      <div className="flex gap-3 mt-6 mb-6 items-center">
        <div><h1 className="flex items-center gap-2 text-xl font-semibold"><CiFilter /> <span>Filters:</span></h1></div>
        <div className="space-x-2 space-y-2 lg:space-y-0">
            {["All", "Accessories", "Skincare", "Swimwear", "Footwear", "Summer Outfits", "Beach Accessories"].map((cat,ind)=>{
               return <button key={ind} onClick={()=>{setCategory(category===cat ? "All" : cat)}} className={category===cat ? "bg-linear-to-r from-orange-500 to-pink-500 text-xl text-white btn" : "btn btn-outline" }>{cat}</button>
            })}
        
                
            
            
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-6">
        {
            filtered.map((product,ind)=><ProductCard product={product} key={ind}></ProductCard>)
        }
      </div>
    </div>
  );
};

export default ProductPageWork;
