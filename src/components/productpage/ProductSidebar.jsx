import React from "react";

function ProductSidebar() {
  const categories = [
    "All Products",
    "Plastic Containers",
    "Plastic Drums & Barrels",
    "Plastic Buckets & Tubs",
    "Plastic Crates & Bins",
    "Dustbins",
    "Water Tanks",
    "Chairs & Tables",
    "Household Products",
    "Agriculture Products",
    "Industrial Products",
    "Pipes & Fittings",
    "Plastic Sheets",
    "Custom Products",
  ];

  const materials = [
    "HDPE",
    "PP (Polypropylene)",
    "PVC",
    "LDPE",
  ];

  return (
    <div className="w-full lg:w-60 bg-white rounded-xl text-left text-sm shadow-md border border-gray-200">

      {/* Categories */}
      <div className="p-2 border-b">
        <h2 className="text-blue-950 font-bold text-sm uppercase mb-5 p-2">
          Categories
        </h2>

        <ul className="">
          {categories.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer rounded-lg px-3 py-3 transition duration-300 ${
                index === 0
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {index === 0 && <span className="mr-2">➤</span>}
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Filter */}
      <div className="p-2 border-b">
        <h2 className="text-blue-950 font-bold text-lg uppercase mb-2">
          Filter By
        </h2>

        <h3 className="font-semibold text-gray-700 mb-2">
          Price Range
        </h3>

        <input
          type="range"
          min="0"
          max="5000"
          className="w-full accent-lime-500"
        />

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>₹0</span>
          <span>₹5,000+</span>
        </div>

        <button className="w-full mt-5 bg-lime-500 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
          APPLY
        </button>
      </div>

      {/* Product Colors */}
      <div className="p-2 border-b">
        <h2 className="text-blue-900 font-bold text-lg mb-5">
          Product Colors
        </h2>

        <div className="grid grid-cols-5 gap-3">
          <button className="w-8 h-8 rounded-full bg-blue-600 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-green-600 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-300"></button>

          <button className="w-8 h-8 rounded-full bg-purple-600 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-pink-500 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-400"></button>
        </div>
      </div>

      {/* Material Type */}
      <div className="p-2">
        <h2 className="text-blue-950 font-bold text-lg mb-5">
          Material Type
        </h2>

        <div className="space-y-3">
          {materials.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                className="accent-green-600"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProductSidebar;

