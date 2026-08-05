import React, { useEffect, useState } from "react";
import fallbackImg from "../../assets/images/product.png";


function CardSection() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?sortBy=title&order=asc&limit=20")
      .then((res) => res.json())
      .then((data) => {
        const plasticCategories = (data?.products || []).slice(0, 16).map((item) => ({
          name: item?.title,
          image: item?.images?.[0],
        }));
        setCategories(plasticCategories);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="py-8 px-4 text-left">
      <h2 className="text-blue-950 text-lg md:text-xl lg:text-2xl italic text-center font-semibold">SHOP BY CATEGORIES</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-3 md:gap-4 mt-6">
        {categories.map((item, index) => (
          <div key={index} className="text-center  shadow rounded-xl hover:shadow-lg p-3 transition-shadow duration-300 bg-white">
            <div className="h-16 sm:h-20 w-full mx-auto flex items-center justify-center rounded-lg overflow-hidden bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-contain"
                onError={(e) => { e.target.src = fallbackImg; }}
              />
            </div>
           <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
              {item.name.length > 12 ? item.name.slice(0, 12) + "..." : item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-[#0b1b4d] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-xl font-semibold tracking-wider text-xs sm:text-sm hover:bg-blue-800 transition-colors duration-300">VIEW ALL CATEGORIES</button>
      </div>
    </section>
  );
}

export default CardSection;

