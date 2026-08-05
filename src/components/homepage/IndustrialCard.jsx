import React from "react";
import removebg from "../../assets/images/removebg.png";

const categories = [
  { title: "Food Industry", desc: "Food Grade Plastic Products", icon: "🍽️" },
  { title: "Chemical Industry", desc: "Chemical Resistant Plastic Products", icon: "⚗️" },
  { title: "Agriculture", desc: "Durable Plastic For Farming", icon: "🌱" },
  { title: "Healthcare", desc: "Hygienic Plastic Solutions", icon: "🏥" },
  { title: "Hotels & Restaurants", desc: "Quality Plastic For Hospitality", icon: "🏨" },
  { title: "Warehousing", desc: "Storage & Handling", icon: "🏭" },
  { title: "Automobile", desc: "Automotive Plastic Components", icon: "🚗" },
  { title: "Packaging", desc: "Safe & Secure Packaging", icon: "📦" },
];

function IndustrialCard() {
  return (
    <section className="py-8 px-5 max-w-[1440px] mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-6 text-left ">INDUSTRIAL SOLUTIONS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-2">
        {categories.map((item, index) => (
          <div key={index} className="text-center bg-white shadow-sm p-4 rounded">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h2 className="text-sm font-semibold text-gray-700 ">{item.title}</h2>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#0b1b4d] rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center m-4 justify-between text-left p-4 md:p-6">
          <div className="text-white w-full lg:w-1/2 z-10">
            <p className="uppercase text-lg md:text-xl font-semibold ">NEED BULK PLASTIC PRODUCTS?</p>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-white ">
              Get <span className="text-lime-500 ">Factory Price</span> Directly
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-4 gap-x-0 sm:gap-2 mt-4 sm:mt-6 text-xs sm:text-sm">
              <p>✔ Best quality products</p>
              <p>✔ Special discount for bulk orders</p>
              <p>✔ Timely delivery</p>
              <p>✔ GST Invoice & PAN India Delivery</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-6 sm:mt-8">
              <button className="bg-lime-500 w-auto text-sm hover:bg-green-600 px-4 py-2 rounded-lg font-semibold">REQUEST QUOTATION</button>
              <button className="border border-white rounded-lg hover:bg-white hover:text-blue-900 text-sm px-6 py-2">
                📞 CALL NOW<br /><span className="text-xs sm:text-sm">+91 98765 43210</span>
              </button>
            </div>
          </div>
          <div className="flex mt-4 lg:mt-0 z-10 w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] justify-center">
            <img
              src={removebg}
              alt="Remove Background"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrialCard;
