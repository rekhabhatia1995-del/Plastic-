import React from "react";

import {
  FiAward,
  FiShield,
  FiPackage,
  FiTruck,
  FiDollarSign,
  FiHeadphones,
} from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: <FiAward size={42} />,
    title: "High Quality",
    desc: "We use 100% virgin material for superior quality products.",
  },
  {
    id: 2,
    icon: <FiShield size={42} />,
    title: "Durability",
    desc: "Our products are designed for long-lasting performance.",
  },
  {
    id: 3,
    icon: <FiPackage size={42} />,
    title: "Wide Range",
    desc: "Huge variety of products to meet all your requirements.",
  },
  {
    id: 4,
    icon: <FiTruck size={42} />,
    title: "Timely Delivery",
    desc: "We ensure on-time delivery across India and worldwide.",
  },
  {
    id: 5,
    icon: <FiDollarSign size={42} />,
    title: "Competitive Price",
    desc: "Best quality products at industry-leading prices.",
  },
  {
    id: 6,
    icon: <FiHeadphones size={42} />,
    title: "Customer Support",
    desc: "Dedicated support team to assist you 24/7.",
  },
];

function AboutWhyChooseUs() {
  return (
    <section className="bg-white py-4">
      <div className="w-full mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-[#86BC25] font-bold uppercase tracking-wider text-sm font-weigth-">
            WHY CHOOSE US
          </p>

          <h2 className="mt-2 text-2xl md:text-4xl font-bold">
            <span className="text-[#173C7A]">
              Quality Products,
            </span>{" "}
            <span className="text-[#86BC25]">
              Trusted Service
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {features.map((item) => (
            <div
              key={item.id}
              className="h-[230px] border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300 px-5 py-7 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-[#86BC25] mb-5 text-blue-800">
                {React.cloneElement(item.icon, {
                  size: 42,
                  strokeWidth: 1.8,
                })}
              </div>

              {/* Title */}
          <h3 className="text-[#173C7A] text-sm font-bold mb-3 font-weight-800">
  {item.title}
</h3>

              {/* Description */}
              <p className="text-gray-500 text-[14px] leading-6">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default AboutWhyChooseUs;