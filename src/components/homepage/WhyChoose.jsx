import React from "react";
import { FaStar, FaShoppingCart, FaUsers, FaThLarge, FaCalendarAlt, FaUserTie, FaShieldAlt, FaGem, FaLeaf, FaMoneyBillWave, FaClock, FaHandshake } from "react-icons/fa";
 import logo from "../../assets/images/logo.png";
function WhyChoose() {
  const reviews = [
    { name: "Rajesh Kumar", review: "Ocean Plastic Industries provides excellent quality products. Their service is fast and reliable." },
    { name: "Amit Sharma", review: "Very satisfied with the product quality and reasonable prices. Highly recommended." },
    { name: "Neha Verma", review: "Professional team and great customer support. Best plastic manufacturer." },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50">
      <div className=" px-5">
        <h2 className="text-xl font-bold text-center mb-8 text-blue-950 tracking-tight">Why Choose Ocean Plastic Industries?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 tracking-tight text-left">Our Advantages</h2>
            <div className="flex flex-col md:flex-row gap-10  md:gap-2 items-center">
              <ul className="space-y-4">
                <li className="flex gap-3 items-center "><FaShieldAlt className="text-lime-500 text-lg" /> High Quality Plastic Products</li>
                <li className="flex gap-3 items-center "><FaGem className="text-lime-500 text-lg" /> Durable and Long Lasting Material</li>
                <li className="flex gap-3 items-center"><FaLeaf className="text-lime-500 text-lg" /> Eco-Friendly Manufacturing Process</li>
                <li className="flex gap-3 items-center"><FaMoneyBillWave className="text-lime-500 text-lg" /> Affordable Pricing for Customers</li>
                <li className="flex gap-3 items-center"><FaClock className="text-lime-500 text-lg" /> On-Time Delivery Service</li>
                <li className="flex gap-3 items-center"><FaHandshake className="text-lime-500 text-lg" /> Trusted by Thousands of Customers</li>
              </ul>
                <div>
             

<img
 src={logo}
 alt="Plastic Products"
 className="w-full max-w-[200px] h-40 mx-auto mb-4 rounded-xl"
/>
            </div>
            </div>
           
          </div>
          
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Customer Reviews
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
              {reviews.map((item, index) => (
                <div
                  key={index}
                  className="bg-white text-sm w-full rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-2 sm:p-4 text-center border border-gray-100"
                >
                  <div className="flex justify-center text-lime-500  text-xl mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-gray-600 text-base leading-7 italic mb-5">
                    "{item.review}"
                  </p>

                
                  <h4 className="text-lg font-semibold text-blue-900">
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-6 mt-10 items-center bg-blue-950 p-4 sm:p-2 m-2 sm:m-4 rounded-xl shadow-md">
        <div className="flex items-center gap-3 sm:gap-4 text-left">
          <FaShoppingCart className="text-white text-2xl sm:text-4xl" />
          <div><h3 className="text-lg sm:text-2xl text-white font-bold tracking-tight">500+</h3><p className="text-white font-medium tracking-wide text-xs sm:text-sm">Products</p></div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 text-left">
          <FaUsers className="text-white text-2xl sm:text-4xl" />
          <div><h3 className="text-lg sm:text-2xl text-white font-bold tracking-tight">1000+</h3><p className="text-white font-medium tracking-wide text-xs sm:text-sm">Happy Customers</p></div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 text-left">
          <FaThLarge className="text-white text-2xl sm:text-4xl" />
          <div><h3 className="text-lg sm:text-2xl text-white font-bold tracking-tight">50+</h3><p className="text-white font-medium tracking-wide text-xs sm:text-sm">Categories</p></div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 text-left">
          <FaCalendarAlt className="text-white text-2xl sm:text-4xl" />
          <div><h3 className="text-lg sm:text-2xl text-white font-bold tracking-tight">10+</h3><p className="text-white font-medium tracking-wide text-xs sm:text-sm">Years Experience</p></div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 text-left">
          <FaUserTie className="text-white text-2xl sm:text-4xl" />
          <div><h3 className="text-lg sm:text-2xl text-white font-bold tracking-tight">24/7</h3><p className="text-white font-medium tracking-wide text-xs sm:text-sm">Support</p></div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

