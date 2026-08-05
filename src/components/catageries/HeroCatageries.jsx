import React from "react";
import {FaTags,FaTruck,FaLeaf,} from "react-icons/fa";
import removebg from "../../assets/images/removebg.png";
import { FaBoxOpen } from "react-icons/fa";

function HeroCatageries() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-50 to-white text-left rouned-xl">
        <div className="p-2 max-w-[1440px] mx-auto">

{/* Top Banner */}
          <div className="grid lg:grid-cols-2 gap-6 items-start">

{/* Left */}
            <div className="mb-0 ml-0 sm:ml-4 mt-6">
              <p className="text-gray-500 text-sm mt-2">
                Home &nbsp;{">"}&nbsp; Products&nbsp;{">"}&nbsp;Plastic Container
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-2xl font-bold text-[#0B3B8C] mb-5">
                Plastic Container
              </h1>

              <p className="text-gray-600 leading-8 text-base md:text-lg max-w-xl">
                Premium quality HDPE & PP plastric cointainer available in various sizes for industerial ,
                 commerical and household applications
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="border-2 border-lime-500 text-white text-sm bg-blue-950 hover:text-white w-44 sm:w-48 p-2 rounded-lg transition ">
              VIEW PRODUCT
            </button>
             <button className="border-2 border-blue-950 text-blue-950 text-sm bg-white w-44 sm:w-48 p-2 rounded-lg transition ">
              REQUEST QUOITE
            </button>
            </div>
            </div>

            <div className="flex justify-center lg:justify-end">
             <img
               src={removebg}
               alt="Remove Background"
               className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[600px] mt-4 h-68 object-contain mb-4"
             />
            </div>
          </div>
        </div>
      </section>


     <section className="  relative z-10">
  <div className="">
    <div className="bg-white   overflow-hidden shadow ">
      <div className="grid grid-cols-2 lg:grid-cols-4">

        {/* Products */}
        <div className="flex items-center  justify-center gap-4 p-2 border-b lg:border-b-0 lg:border-r border-gray-200 hover:bg-gray-50 transition-all duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-lime-100 flex items-center justify-center">
            <FaBoxOpen className="text-lime-600 text-xl sm:text-3xl" />
          </div>

          <div>
            <h2 className="text-xl sm:text-3xl font-bold text-blue-950">120+</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Products</p>
          </div>
        </div>

        {/* Sub Categories */}
        <div className="flex items-center gap-4 p-2 border-b lg:border-b-0 lg:border-r border-gray-200 hover:bg-gray-50 transition-all duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-lime-100 flex items-center justify-center">
            <FaTags className="text-lime-600 text-xl sm:text-3xl" />
          </div>

          <div>
            <h2 className="text-xl sm:text-3xl font-bold text-blue-950">15+</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Sub Categories</p>
          </div>
        </div>

        {/* Fast Delivery */}
        <div className="flex items-center gap-4 p-2 border-b lg:border-b-0 lg:border-r border-gray-200 hover:bg-gray-50 transition-all duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-lime-100 flex items-center justify-center">
            <FaTruck className="text-lime-600 text-xl sm:text-3xl" />
          </div>

          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-blue-950">Fast Delivery</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Pan India</p>
          </div>
        </div>

        {/* Customer Rating */}
        <div className="flex items-center gap-4 p-2 hover:bg-gray-50 transition-all duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-lime-100 flex items-center justify-center">
            <FaLeaf className="text-lime-600 text-xl sm:text-3xl" />
          </div>

          <div>
            <h2 className="text-xl sm:text-3xl font-bold text-blue-950">4.3★</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Customer Rating</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default HeroCatageries;

