import React, { useState } from "react";
import fakeProducts from "../../data/fakeProducts";
import fallbackImg from "../../assets/images/product.png";

function ProductGrid({ pageSize = 16 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(fakeProducts.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const displayedProducts = fakeProducts.slice(startIndex, startIndex + pageSize);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex-1">
      {/* Header with count and sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <p className="text-gray-600 text-sm">
          Showing{" "}
          <span className="font-semibold text-gray-800">{startIndex + 1}</span>{" "}
          -{" "}
          <span className="font-semibold text-gray-800">
            {Math.min(startIndex + pageSize, fakeProducts.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-800">
            {fakeProducts.length}
          </span>{" "}
          results
        </p>
        <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>Default Sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A-Z</option>
          <option>Name: Z-A</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-xl p-3 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="h-44 w-full overflow-hidden rounded-lg bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.src = fallbackImg; }}
              />
            </div>

            {/* Product Name */}
            <h2 className="text-left font-semibold text-gray-800 mt-3 text-sm">
              {product.name}
            </h2>

            {/* Star Rating */}
            <div className="flex gap-1 text-lime-500 mt-2 text-xs">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <span className="text-gray-400 ml-1">(5.0)</span>
            </div>

            {/* Price */}
            <p className="text-lime-600 text-left font-bold mt-2 text-lg">
              ₹ {product.price}
            </p>

            {/* Add to Cart + Wishlist */}
            <div className="flex items-center gap-2 mt-4">
              <button className="flex-1 bg-[#0b1b4d] text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-sm font-medium">
                Add to Cart
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <i className="fa-regular fa-heart text-xl text-blue-900"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 sm:px-4 py-2 rounded-lg border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 text-sm font-medium"
          >
            ‹ Prev
          </button>

          {/* Page Numbers */}
          {pageNumbers[0] > 1 && (
            <>
              <button
                onClick={() => setCurrentPage(1)}
                className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  currentPage === 1
                    ? "bg-[#0b1b4d] text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                1
              </button>
              {pageNumbers[0] > 2 && (
                <span className="text-gray-400 px-1">...</span>
              )}
            </>
          )}

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                currentPage === page
                  ? "bg-[#0b1b4d] text-white"
                  : "border border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <span className="text-gray-400 px-1">...</span>
              )}
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  currentPage === totalPages
                    ? "bg-[#0b1b4d] text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {totalPages}
              </button>
            </>
          )}

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 text-sm font-medium"
          >
            Next ›
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;

