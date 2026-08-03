import React from "react";
import fakeProducts, { categories } from "../../data/fakeProducts";

const categoryImages = {
  Buckets: "https://picsum.photos/seed/bucket-cat/500/500",
  Tubs: "https://picsum.photos/seed/tub-cat/500/500",
  Containers: "https://picsum.photos/seed/container-cat/500/500",
  Storage: "https://picsum.photos/seed/storage-cat/500/500",
  Bottles: "https://picsum.photos/seed/bottle-cat/500/500",
  Kitchen: "https://picsum.photos/seed/kitchen-cat/500/500",
  Bathroom: "https://picsum.photos/seed/bathroom-cat/500/500",
  Furniture: "https://picsum.photos/seed/furniture-cat/500/500",
  Household: "https://picsum.photos/seed/household-cat/500/500",
  Organizers: "https://picsum.photos/seed/organizer-cat/500/500",
  Dustbins: "https://picsum.photos/seed/dustbin-cat/500/500",
  "Water Tanks": "https://picsum.photos/seed/watertank-cat/500/500",
};

function CategoryCards() {
  const getProductCount = (categoryName) => {
    return fakeProducts.filter(
      (product) => product.category === categoryName
    ).length;
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3B8C]">
            Shop by Categories
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Explore our wide range of plastic products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const productCount = getProductCount(category);

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-row border border-gray-100 hover:border-lime-400"
              >
                {/* Left - Image */}
                <div className="w-2/5 min-h-[160px] bg-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    src={categoryImages[category] || "https://picsum.photos/seed/plastic/500/500"}
                    alt={category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Right - Content */}
                <div className="w-3/5 p-4 flex flex-col justify-center text-left">
                  <h3 className="text-lg font-bold text-[#0B3B8C] group-hover:text-lime-600 transition-colors duration-300">
                    {category}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    <span className="font-semibold text-gray-600 text-lg">{productCount}</span> Products
                  </p>
                  <button className="mt-3 self-start bg-[#0B3B8C] text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-lime-600 hover:text-white transition-all duration-300 tracking-wider">
                    EXPLORE &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategoryCards;

