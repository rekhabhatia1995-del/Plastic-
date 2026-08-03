import React from "react";
import product from "../../assets/images/product.png";

function BulkOrderSection() {
  return (
    <section className="w-full p-2">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
        <div className="flex-1">
          <h2 className="text-blue-950 text-left font-bold text-lg mb-4">
            Bulk Order
          </h2>
          <p className="text-gray-600 text-sm text-left mb-2">
          Get a custom quote for bulk orders with special pricing.
          </p>
           <div className="rounded-lg overflow-hidden">
          <img
            src={product}
            alt="Bulk Order"
            className="w-full h-40 object-cover mt-4 rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm mt-4 p-2 rounded-lg font-semibold transition duration-300">
            Request Quote
          </button>
        </div>
       
      </div>
    </section>
  );
}

export default BulkOrderSection;

