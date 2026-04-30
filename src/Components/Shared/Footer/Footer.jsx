import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
    return (

        <div className='bg-linear-to-br from-orange-50 via-pink-50 to-orange-50 border-t border-orange-100 p-10'>

        <div className='grid   grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 container mx-auto'>
            <div className='space-y-2'>
                <h2 className="inline-block bg-linear-to-r from-orange-500 to-pink-500 text-2xl text-transparent bg-clip-text font-bold">SunCart</h2>
                <p className='text-gray-600'>Your one-stop shop for all summer essentials. Quality products for unforgettable summer moments.</p>
            </div>
            <div className='space-y-2'>
                <h2 className='text-xl font-bold'>Quick Links</h2>
                <ul>
                    <li><Link href={"/"} className='cursor-pointer text-gray-600 hover:text-orange-600'>Home</Link></li>
                    <li><Link href={"/products"} className='cursor-pointer text-gray-600 hover:text-orange-600'>Products</Link></li>
                    <li><Link href={"/profile"} className='cursor-pointer text-gray-600 hover:text-orange-600'>My Profile</Link></li>
                    
                </ul>
            </div>
            <div className='space-y-2'>
                 <h2 className='text-xl font-bold'>Contact Info</h2>
                 <ul>
                    <li className='text-gray-600 flex items-center gap-2'><IoIosMail className='text-orange-600' /><span>support@suncart.com</span></li>
                    <li className='text-gray-600 flex items-center gap-2'><FaPhoneAlt  className='text-orange-600' /><span>+1 (555) 123-4567</span></li>
                    <li className='text-gray-600 flex items-center gap-2'><FaLocationDot className='text-orange-600' /><span>Miami Beach, FL</span></li>
                 </ul>
            </div>
            <div className='space-y-3'>
                <h2 className='text-xl font-bold'>Follow Us</h2>
                <div className='flex items-center gap-3'>
                    <FaFacebookSquare />
                    <FaInstagramSquare />
                    <FaXTwitter />
                </div>
                <p className='text-gray-600'>Privacy Policy</p>
            </div>
        </div>
        <div className='divider divider-warning'></div>
        <p className='text-gray-600 text-center'>© 2026 SunCart. All rights reserved. Made with ❤️ for summer lovers.</p>
        </div>
    );
};

export default Footer;