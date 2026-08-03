import React from "react";
import {
  FaHome,
  FaIndustry,
  FaLeaf,
  FaTint,
  FaWarehouse,
  FaBuilding,
  FaTractor,
  FaHospital,
  FaSchool,
  FaStore,
} from "react-icons/fa";

const materials = [
  "Plastic",
  "Steel",
  "Fiber",
  "PVC",
  "HDPE",
  "Polymer",
];

const applications = [
  { name: "Home", icon: <FaHome /> },
  { name: "Industrial", icon: <FaIndustry /> },
  { name: "Garden", icon: <FaLeaf /> },
  { name: "Water", icon: <FaTint /> },
  { name: "Warehouse", icon: <FaWarehouse /> },
  { name: "Commercial", icon: <FaBuilding /> },
  { name: "Agriculture", icon: <FaTractor /> },
  { name: "Hospital", icon: <FaHospital /> },
  { name: "School", icon: <FaSchool /> },
  { name: "Retail", icon: <FaStore /> },
];

const capacities = [
  "5 L",
  "10 L",
  "20 L",
  "30 L",
  "50 L",
  "75 L",
  "100 L",
  "200 L",
];

const ShopBySection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10">
          {/* Shop by Material */}
          <div>
            <h2 className="text-2xl font-bold text-blue-950 mb-2 uppercase">
              Shop by Material
            </h2>

            <div className="grid grid-cols-3 gap-3">
              {materials.map((item, index) => (
                <div
                  key={index}
                  className="h-20 shadow-sm  text-blue-950 rounded-lg flex items-center justify-center text-sm font-bold hover:bg-lime-50 hover:border-lime-500 transition cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Shop by Application */}
          <div>
            <h2 className="text-2xl font-bold text-blue-950 mb-2 uppercase">
              Shop by Application
            </h2>

<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 p-2">
              {applications.map((item, index) => (
                <div
                  key={index}
                  className="h-16 sm:h-20 p-1 sm:p-2 shadow-sm font-bold rounded-lg flex flex-col items-center justify-center hover:bg-lime-50 hover:border-lime-500 transition cursor-pointer"
                >
                  <div className="text-lg sm:text-2xl text-blue-950">{item.icon}</div>
                  <p className="text-[10px] sm:text-[11px] mt-1 text-center font-medium">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Shop by Capacity */}
          <div>
            <h2 className="text-2xl font-bold text-blue-950 mb-2 uppercase">
              Shop by Capacity
            </h2>

            <div className="grid grid-cols-4 gap-3">
              {capacities.map((item, index) => (
                <div
                  key={index}
                  className="h-20 shadow-sm rounded-lg flex items-center  text-blue-950 justify-center text-sm font-bold hover:bg-lime-50 hover:border-lime-500 transition cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBySection;