import React from "react";

const categories = [
  {
    id: 1,
    name: "Plastic Bucket",
    image: "https://picsum.photos/300?random=1",
  },
  {
    id: 2,
    name: "Plastic Mug",
    image: "https://picsum.photos/300?random=2",
  },
  {
    id: 3,
    name: "Storage Container",
    image: "https://picsum.photos/300?random=3",
  },
  {
    id: 4,
    name: "Plastic Chair",
    image: "https://picsum.photos/300?random=4",
  },
  {
    id: 5,
    name: "Plastic Dustbin",
    image: "https://picsum.photos/300?random=5",
  },
  {
    id: 6,
    name: "Water Bottle",
    image: "https://picsum.photos/300?random=6",
  },
];

function FeaturedCategories() {
  return (
    <section className="py-8 bg-white">
      <div className="p-2 max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-6">

          <h2 className="text-3xl font-bold text-slate-900 uppercase mt-2">
            Featured Categories
          </h2>

          <div className="w-20 h-1 bg-lime-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">

          {categories.map((item) => (
            <div
              key={item.id}
              className="rounded-xl w-full shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-3 sm:p-4 text-center "
            >
              {/* Image */}
              <div className="w-full h-20 sm:h-28  flex items-center justify-center ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 rounded-full   transition duration-300"
                />
              </div>

              {/* Name */}
              <h4 className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-slate-900">
                {item.name}
              </h4>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedCategories;