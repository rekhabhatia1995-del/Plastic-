import React from "react";
import { FaShoppingCart, FaCheckCircle, FaTruck, FaRecycle } from "react-icons/fa";
import removebg from "../../assets/images/removebg.png";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-green-50">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
<div className=" px-6 py-8 grid lg:grid-cols-2 gap-10 items-stretch ">
        <div className="z-10 text-left ">
          <p className="text-lime-500 font-semibold  uppercase text-sm">PREMIUM QUALITY</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight mt-4 tracking-tight">
            Plastic Products for<br />
            <span className="text-lime-500">Every Need</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed tracking-wide">
            Wide range of durable, reliable & eco-friendly plastic products for home, industry & commercial use.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-[#0b1b4d] hover:bg-blue-800 text-white px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg transition tracking-wide font-semibold">
              <FaShoppingCart /> SHOP NOW
            </button>
            <button className="border-2 border-lime-500 text-lime-500 hover:bg-lime-600 hover:text-white px-8 py-3 rounded-lg transition tracking-wide font-semibold">
              EXPLORE CATEGORIES
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-lime-500 text-3xl" />
              <div>
                <h4 className="font-semibold text-sm">Premium Quality</h4>
                <p className="text-xs text-lime-500 ">100% Virgin Material</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaShoppingCart className="text-lime-500  text-3xl" />
              <div>
                <h4 className="font-semibold text-sm">Best Price</h4>
                <p className="text-xs text-lime-500 ">Factory Direct</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaTruck className="text-lime-500  text-3xl" />
              <div>
                <h4 className="font-semibold text-sm">Fast Delivery</h4>
                <p className="text-xs text-gray-500">Pan India</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaRecycle className="text-lime-500  text-3xl" />
              <div>
                <h4 className="font-semibold text-sm">Eco Friendly</h4>
                <p className="text-xs text-lime-500 ">Recyclable Products</p>
              </div>
            </div>
          </div>
        </div>
<div className="h-full flex items-center justify-center lg:justify-end">
          <img
            src={removebg}
            alt="Remove Background"
            className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 320" className="w-full h-44" preserveAspectRatio="none">
            <path fill="#dbeafe" d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,170.7C672,192,768,256,864,256C960,256,1056,192,1152,170.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z" />
            <path fill="#bbf7d0" fillOpacity="0.8" d="M0,288L60,272C120,256,240,224,360,192C480,160,600,128,720,138.7C840,149,960,203,1080,208C1200,213,1320,171,1380,149.3L1440,128L1440,320L0,320Z" />
            <path fill="#3b82f6" fillOpacity="0.12" d="M0,256L80,234.7C160,213,320,171,480,186.7C640,203,800,277,960,277.3C1120,277,1280,203,1360,165.3L1440,128L1440,320L0,320Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

