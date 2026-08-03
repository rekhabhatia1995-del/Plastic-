import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import logo from "../assets/images/logo.png";

function Footer() {
    return (
        <footer className="bg-[#0b1b4d] text-white">
            <div className="px-4 sm:px-6 py-6 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
                <div className="text-left text-white col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
                    <div><img src={logo} alt="Plastic Product" className="w-36 sm:w-48 h-auto rounded-xl" /></div>
                    <h3 className="text-lg sm:text-xl font-semibold">INDUSTRIES</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-4">
                        Ocean Plastic Industries is a leading manufacturer & supplier of wide range of plastic products for home, industry & commercial use.
                    </p>
                    <div className="flex gap-2 sm:gap-3 mt-5 flex-wrap">
                        <div className="bg-blue-500 p-1.5 sm:p-2 rounded text-xs sm:text-sm"><FaFacebookF /></div>
                        <div className="bg-pink-500 p-1.5 sm:p-2 rounded text-xs sm:text-sm"><FaInstagram /></div>
                        <div className="bg-blue-600 p-1.5 sm:p-2 rounded text-xs sm:text-sm"><FaLinkedinIn /></div>
                        <div className="bg-red-500 p-1.5 sm:p-2 rounded text-xs sm:text-sm"><FaYoutube /></div>
                        <div className="bg-green-500 p-1.5 sm:p-2 rounded text-xs sm:text-sm"><FaWhatsapp /></div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-left text-white text-lg mb-4">QUICK LINKS</h3>
                    <ul className="mb-2 text-left text-gray-300">
                        <li>Home</li><li>About Us</li><li>Products</li><li>Bulk Order</li><li>Blog</li><li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-left text-lg mb-4">CATEGORIES</h3>
                    <ul className="mb-2 text-left text-gray-300">
                        <li>Bottles</li><li>Bucket</li><li>Containers</li><li>Drums</li><li>Cans</li><li>Clothes</li><li>Water Tanks</li><li>PVC Pipes</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-left text-lg mb-4 text-white">CUSTOMER SUPPORT</h3>
                    <ul className="space-y-2 text-left text-gray-300 leading-relaxed">
                        <li>Help Center</li><li>Track Order</li><li>Returns & Refunds</li><li>Shipping Policy</li><li>Terms & Conditions</li><li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-left text-lg mb-4 text-white">CONTACT US</h3>
                    <div className="space-y-2 text-gray-300 text-sm">
                        <p className="flex items-start gap-3"><span className="min-w-[1.25rem] mt-2"><FaLocationDot /></span> 123 Industrial Area, Punjab City, India</p>
                        <p className="flex items-start gap-3"><span className="min-w-[1.25rem] mt-2"><FaPhone /></span> +91 98765 43210</p>
                        <p className="flex items-start gap-3"><span className="min-w-[1.25rem] mt-2"><FaEnvelope /></span> contact@oceanplastic.com</p>
                        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500 py-4 text-center text-gray-300 text-xs sm:text-sm px-4">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
                    <span>© 2024 Ocean Plastic Industries. All Rights Reserved.</span>
                    <span className="hidden sm:inline">|</span>
                    <span>Sitemap | Privacy Policy | Terms & Conditions</span>
                </div>
            </div>
        </footer>
    );
}
// this is for testing
export default Footer;

