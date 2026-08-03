import React from "react";

const gallery = [
  {
    id: 1,
    title: "Manufacturing Unit",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600",
  },
  {
    id: 2,
    title: "Quality Check",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600",
  },
  {
    id: 3,
    title: "Packing & Dispatch",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
  },
  {
    id: 4,
    title: "Our Warehouse",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
  },
];

function OurGallery() {
  return (
    <section className="py-12 px-5 bg-gray-50 max-w-[1510px] mx-auto">
    
      <div className="flex justify-between items-center mb-4">
        <div className="text-left ">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 uppercase">
            Our Gallery
          </h2>
          <div className="w-30 h-1 bg-lime-500 mt-2 rounded-full"></div>
        </div>
        <button className="text-xs sm:text-sm font-semibold bg-[#0b1b4d] rounded-xl p-2 w-24 sm:w-26 h-10 text-white hover:text-lime-500 transition duration-300">
          View All →
        </button>
      </div>

  
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {gallery.map((item) => (
    <div
      key={item.id}
      className="bg-white h-60 sm:h-68 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 group">
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 sm:h-56 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="py-3 px-2 text-center">
        <h2 className="text-xs sm:text-sm font-semibold text-blue-950">
          {item.title}
        </h2>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}

export default OurGallery;