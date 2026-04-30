import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { GiDroplets } from 'react-icons/gi';
import { ImShield } from 'react-icons/im';
import { MdSunny } from 'react-icons/md';

const SummerTips = () => {
    return (
        <div>
            <div className='space-y-2 text-center mb-4'>
                <h1 className='text-2xl md:text-4xl font-bold'>Summer Care <span className='bg-linear-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text '>Tips</span></h1>
            <p className='text-gray-600 text-center w-70 lg:w-120'>Essential tips to keep you safe and glowing all summer long</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 mt-6 mb-6'>
                <div className='space-y-2 w-90 lg:w-96 bg-orange-50 shadow-sm p-4 rounded-xl' >
                    <div className='px-4 py-2 inline-block bg-orange-500 rounded-lg '><ImShield className='text-xl text-white' /></div>
                    <p className='text-xl font-bold'>UV Protection</p>
                    <p className='text-gray-600 w-70 lg:w-120'>Always wear SPF 50+ sunscreen. Reapply every 2 hours for maximum protection.</p>
                </div>
                <div className='space-y-2 w-90 lg:w-96 bg-orange-50  shadow-sm p-4 rounded-xl' >
                    <div className='px-4 py-2 inline-block bg-[#40A3E5] rounded-lg '><GiDroplets className='text-xl text-amber-50' /></div>
                    <p className='text-xl font-bold'>Stay Hydrated</p>
                    <p className='text-gray-600 w-70 lg:w-120'>Drink at least 8 glasses of water daily. Add electrolytes for outdoor activities.</p>
                </div>
                <div className='space-y-2 w-90 lg:w-96 bg-orange-50  shadow-sm p-4 rounded-xl' >
                    <div className='px-4 py-2 inline-block bg-orange-300 rounded-lg '><MdSunny className='text-xl text-orange-600' /></div>
                    <p className='text-xl font-bold'>Avoid Peak Sun</p>
                    <p className='text-gray-600 w-70 lg:w-120'>Stay in shade between 10 AM - 4 PM when UV rays are strongest.</p>
                </div>
                <div className='space-y-2  w-90 lg:w-96 bg-orange-50  shadow-sm p-4 rounded-xl' >
                    <div className='px-4 py-2 inline-block bg-orange-500 rounded-lg '><FaHeart className='text-xl text-red-600' /></div>
                    <p className='text-xl font-bold'>Skin Care Routine</p>
                    <p className='text-gray-600 w-70 lg:w-120'>Use after-sun lotion to soothe and moisturize your skin daily.</p>
                </div>
                

            </div>
        </div>
    );
};

export default SummerTips;