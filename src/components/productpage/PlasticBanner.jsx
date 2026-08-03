import React from "react";
import removebg from "../../assets/images/removebg.png";

function PlasticBanner() {
  return (
    <section className="mx-auto px-4 py-8">
      <div className="w-full rounded-xl bg-[#0b1b4d]">
        <div className="grid lg:grid-cols-2 items-center gap-6 md:gap-10 px-4 sm:px-8 md:px-12 py-6 sm:py-8">

          {/* Left Content */}
          <div className="text-white text-left">
            <p className="text-blue-100 text-base sm:text-lg mb-3">
              Looking for custmer plastic product
            </p>

            <p className="text-blue-100 text-sm sm:text-base leading-7 sm:leading-8 mb-6 sm:mb-8 max-w-xl">
              Explore our premium range of high-quality plastic products
              designed for industrial and domestic applications. Durable,
              reliable and eco-friendly solutions at competitive prices.
            </p>

            <button className="bg-white text-blue-900 font-semibold px-6 sm:px-7 py-2 sm:py-3 rounded-xl mt-4 hover:bg-blue-100 duration-300">
              contact us
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={removebg}
              alt="Remove Background"
              className="w-full max-w-[200px] sm:max-w-[272px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlasticBanner;
