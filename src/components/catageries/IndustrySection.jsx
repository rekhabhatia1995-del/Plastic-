import React from "react";
import {
  FaUtensils,
  FaFlask,
  FaCapsules,
  FaHardHat,
  FaCar,
  FaLeaf,
  FaBoxOpen,
  FaShieldAlt,
  FaSun,
  FaRecycle,
  FaTags,
} from "react-icons/fa";

function IndustrySection() {
  const industries = [
    {
      icon: <FaUtensils />,
      title: "Food Industry",
    },
    {
      icon: <FaFlask />,
      title: "Chemical Industry",
    },
    {
      icon: <FaCapsules />,
      title: "Pharma Industry",
    },
    {
      icon: <FaHardHat />,
      title: "Construction",
    },
    {
      icon: <FaCar />,
      title: "Automobile",
    },
  ];

  const features = [
    {
      icon: <FaLeaf />,
      title: "100% Virgin Material",
    },
    {
      icon: <FaBoxOpen />,
      title: "Food Grade Plastic",
    },
    {
      icon: <FaShieldAlt />,
      title: "Heavy Duty & Durable",
    },
    {
      icon: <FaSun />,
      title: "UV Resistant",
    },
    {
      icon: <FaRecycle />,
      title: "Recyclable Products",
    },
    {
      icon: <FaTags />,
      title: "Factory Direct Pricing",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="gap-4 px-4 max-w-[1440px] mx-auto">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Section */}
          <div>
            <h2 className="text-xl  text-center text-blue-950 uppercase mb-6">
              Industries We Serve
            </h2>

<div className="flex flex-wrap justify-center mt-4 gap-2">
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 shadow-sm rounded-xl bg-white  hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl sm:text-3xl text-blue-950 mb-2 sm:mb-3">
                    {item.icon}
                  </div>

                  <h4 className="text-[11px] sm:text-sm text-blue-950 text-center p-1 sm:p-2">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-lg sm:text-xl text-center text-blue-950 uppercase mb-6">
              Why Choose Ocean Plastic?
            </h2>

            <div className="flex flex-wrap justify-center mt-4 gap-2">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="w-24 sm:w-28 md:w-32 h-24 sm:h-28  rounded-xl  shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl sm:text-3xl text-blue-950 mb-2 sm:mb-3">
                    {item.icon}
                  </div>

                  <h4 className="text-[11px] sm:text-sm  text-blue-950 text-center px-1 sm:px-2 ">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default IndustrySection;