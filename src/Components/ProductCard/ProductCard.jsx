import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const ProductCard = ({product}) => {
    return (
        <div className='bg-base-100 shadow-sm p-5 rounded-2xl animate__animated animate__zoomIn '>
           <div className='relative '>
             <Image src={product.image} alt={product.name} className='w-200 h-100 rounded-lg' width={300} height={150}></Image>
             <div className='badge absolute bg-linear-to-r from-orange-500 to-pink-500 text-md text-white font-semibold top-2 left-3'>{product.category}</div>
           </div>
           <div className='flex justify-between items-center text-[12px] font-bold mt-3'>
            <p className='text-orange-500'>{product.brand}</p>
            <p className='flex items-center gap-2'><FaStar className='text-orange-400' />{product.rating}</p>
           </div>
           <h1 className='text-xl font-semibold mt-3'>{product.name}</h1>
           <div className='flex justify-between items-center mt-4'>
            <p className='text-xl font-bold'>${product.price}</p>
           <Link href={`/products/${product.id}`}>
            <p className='px-3 py-2 bg-linear-to-r btn  from-orange-500 to-pink-500 inline-block rounded-lg cursor-pointer text-white'>View Details</p></Link>
           </div>
        </div>
    );
};

export default ProductCard;