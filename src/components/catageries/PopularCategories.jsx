import React, { useState, useEffect, useRef } from "react";
import fakeProducts, { categories } from "../../data/fakeProducts";
import {
  FaArrowLeft,
  FaArrowRight,
  FaShoppingCart,
} from "react-icons/fa";

const categoryImages = {
  Buckets: "https://picsum.photos/seed/bucket-pop/300/300",
  Tubs: "https://picsum.photos/seed/tub-pop/300/300",
  Containers: "https://picsum.photos/seed/container-pop/300/300",
  Storage: "https://picsum.photos/seed/storage-pop/300/300",
  Bottles: "https://picsum.photos/seed/bottle-pop/300/300",
  Kitchen: "https://picsum.photos/seed/kitchen-pop/300/300",
  Bathroom: "https://picsum.photos/seed/bathroom-pop/300/300",
  Furniture: "https://picsum.photos/seed/furniture-pop/300/300",
  Household: "https://picsum.photos/seed/household-pop/300/300",
  Organizers: "https://picsum.photos/seed/organizer-pop/300/300",
};

function PopularCategories() {
  const getProductCount = (category) =>
    fakeProducts.filter((item) => item.category === category).length;

  const popularCategories = categories.slice(0, 10).map((cat) => ({
    name: cat,
    image:
      categoryImages[cat] || "https://picsum.photos/300/300?random=1",
    products: getProductCount(cat),
  }));

  const cardsToShow = 5;
  const maxIndex = Math.max(0, popularCategories.length - cardsToShow);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev >= maxIndex ? 0 : prev + 1
        );
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, maxIndex]);

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="px-4 max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-slate-900 uppercase">
            Popular Categories
          </h2>

          <div className="w-20 h-1 bg-lime-500 rounded-full mx-auto mt-2"></div>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-10 h-10 rounded-full bg-white shadow-lg border hover:bg-lime-500 hover:text-white"
          >
            <FaArrowLeft className="mx-auto" />
          </button>

{/* Slider */}
          <div
            className="overflow-hidden h-[180px] sm:h-[220px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-2 sm:gap-4 transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {popularCategories.map((item, index) => (
               <div
              key={item.id}
              className="bg-white flex-[0_0_20%] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-2 flex items-center  "
            >

              {/* Left */}

              <div className="flex items-center justify-between gap-1 sm:gap-2">

                {/* Image */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 ml-1 sm:ml-2">
                  <h2 className="text-xs sm:text-sm md:text-base font-bold text-slate-900">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 text-[10px] sm:text-xs mt-1">
                    {item.products} Products
                  </p>

                  <div className="flex items-center gap-2 w-full mt-2 sm:mt-3">
              <button className=" bg-[#0b1b4d] text-white text-[10px] sm:text-sm p-1 sm:p-2 rounded-md hover:bg-blue-700 font-medium w-20 sm:w-32 ">Shop Now</button>
              </div>
              
                </div>

              </div>
            </div>

              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-10 h-10 rounded-full bg-white shadow-lg border hover:bg-lime-500 hover:text-white"
          >
            <FaArrowRight className="mx-auto" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-2 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-6 h-2 bg-lime-500"
                    : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;