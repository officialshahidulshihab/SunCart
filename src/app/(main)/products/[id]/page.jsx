import ProductCard from '@/Components/ProductCard/ProductCard';
import ProductsDetailes from '@/Components/ProductsDetailes/ProductsDetailes';
import { getAllProducts } from '@/lib/AllFetch/allFetch';
import React from 'react';
import { notFound } from "next/navigation"

const ProductsDetails =async ({params}) => {
    const allProducts=await getAllProducts();
    const {id}=await params;
    

    const product=allProducts.find((p)=>Number(p.id)===Number(id))
    if (!product) {
        notFound()
    }
    
    
    return (
        <div>
            <div className="space-y-2.5 text-center p-3 mt-6 mb-6">
        <h1 className="text-4xl  font-bold">
          Product{" "}
          <span className=" bg-linear-to-r from-orange-500 to-pink-500  text-transparent bg-clip-text font-bold">
            Details
          </span>
        </h1>
        <ProductsDetailes product={product}></ProductsDetailes>
        
      </div>
        </div>
    );
};

export default ProductsDetails;