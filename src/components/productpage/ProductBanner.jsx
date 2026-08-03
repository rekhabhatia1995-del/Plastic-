import React from "react";
import {FaAward,FaTags,FaTruck,  FaLeaf,} from "react-icons/fa";
import removebg from "../../assets/images/removebg.png";

function ProductBanner() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-50 to-white text-left rouned-xl">
        <div className="p-4 max-w-[1440px] mx-auto">

          {/* Top Banner */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">

            {/* Left */}
            <div className="mb-0 md:mb-14 ml-0 sm:ml-4">
              <p className="text-gray-500 text-sm ">
                Home &nbsp; {">"} &nbsp; Products
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B8C] mb-5">
                Our Products
              </h1>

              <p className="text-gray-600 leading-8 text-base md:text-lg max-w-xl">
                Wide range of high-quality plastic products for every need.
                Durable, reliable and eco-friendly solutions for industrial
                and domestic use.
              </p>
            </div>

          
            <div className="flex justify-center lg:justify-end">
             <img
               src={removebg}
               alt="Remove Background"
               className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[600px] mt-4 h-auto object-contain"
             />
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4">

          <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 lg:p-6 border-r border-gray-100">
            <FaAward className="text-2xl sm:text-3xl lg:text-4xl text-lime-500 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-blue-950 text-xs sm:text-sm lg:text-base">
                Premium Quality
              </h2>
              <p className="text-blue-950 text-[10px] sm:text-xs lg:text-sm">
                100% Virgin Material
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 lg:p-6 border-r border-gray-100">
            <FaTags className="text-2xl sm:text-3xl lg:text-4xl text-lime-500 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-blue-900 text-xs sm:text-sm lg:text-base">
                Best Prices
              </h2>
              <p className="text-blue-950 text-[10px] sm:text-xs lg:text-sm">
                Factory Direct
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 lg:p-6 border-r border-gray-100">
            <FaTruck className="text-2xl sm:text-3xl lg:text-4xl text-lime-500 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-blue-900 text-xs sm:text-sm lg:text-base">
                Fast Delivery
              </h2>
              <p className="text-blue-950 text-[10px] sm:text-xs lg:text-sm">
                Pan India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 lg:p-6">
            <FaLeaf className="text-2xl sm:text-3xl lg:text-4xl text-lime-500 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-blue-950 text-xs sm:text-sm lg:text-base">
                Eco Friendly
              </h2>
              <p className="text-blue-950 text-[10px] sm:text-xs lg:text-sm">
                Recyclable Products
              </p>
            </div>
          </div>

        </div>
        </div>
      </section>
    </>
  );
}

export default ProductBanner;
