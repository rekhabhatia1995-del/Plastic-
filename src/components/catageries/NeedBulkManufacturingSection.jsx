import React from "react";
import {
  FaIndustry,
  FaTruck,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";
import removebg from "../../assets/images/removebg.png";
import factoryImg from "../../assets/images/factory-worker-operating-machine.jpg";

const manufacturingFeatures = [
  { icon: <FaIndustry />, name: "In-House Manufacturing" },
  { icon: <FaShieldAlt />, name: "Quality Assurance" },
  { icon: <FaTruck />, name: "Pan India Delivery" },
  { icon: <FaLeaf />, name: "Eco-Friendly" },
];

function NeedBulkManufacturingSection() {
  return (
    <section className="py-4 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-5 items-stretch">

{/* ============ LEFT: NEED BULK QUANTITY (Blue) ============ */}
          <div className="bg-[#0b1b4d] rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center h-full">
              {/* Content */}
              <div className="p-4 sm:p-5 flex-1 text-left">
                <p className="text-lime-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wide">
                  Bulk Orders
                </p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1 uppercase">
                  Need Bulk Quantity?
                </h2>
                <p className="text-white/80 text-xs sm:text-sm leading-5 mt-2">
                  Factory-direct pricing on large orders of plastic
                  buckets, containers, drums & more.
                </p>
                <p className="text-white/80 text-xs sm:text-sm leading-5 mt-1">
                  On-time delivery & custom manufacturing solutions.
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <button className="bg-lime-500 text-white px-3 sm:px-4 py-2 rounded-lg text-[10px] sm:text-xs font-semibold hover:bg-lime-400 transition tracking-wide">
                    GET BULK QUOTE
                  </button>
                  <button className="border-2 border-lime-500 text-lime-400 px-3 sm:px-4 py-2 rounded-lg text-[10px] sm:text-xs font-semibold hover:bg-lime-500 hover:text-white transition tracking-wide">
                    CONTACT US
                  </button>
                </div>
              </div>

              {/* Image (removebg) */}
              <div className="flex items-center justify-center p-3 sm:w-44 flex-shrink-0 h-full">
                <img
                  src={removebg}
                  alt="Bulk Plastic Products"
                  className="w-full max-w-[120px] sm:max-w-[160px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* ============ RIGHT: CUSTOMER MANUFACTURING ============ */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center h-full">
              {/* Left: 4 Icons + Names (1 row) */}
              <div className="p-4 sm:p-5 flex-1">
                
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-left text-blue-950 mt-1 uppercase">
                  Customer Manufacturing
                </h2>

                <div className="grid grid-cols-4 gap-2 mt-3">
                  {manufacturingFeatures.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                        <span className="text-blue-950 text-lg sm:text-xl">
                          {item.icon}
                        </span>
                      </div>
                      <p className="text-gray-800 text-[8px] sm:text-[10px]">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex items-center justify-center p-3 sm:w-44 flex-shrink-0 h-full bg-gradient-to-br from-blue-50 to-white">
                <img
                  src={factoryImg}
                  alt="Customer Manufacturing"
                  className="w-full max-w-[120px] sm:max-w-[160px] h-24 sm:h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default NeedBulkManufacturingSection;

