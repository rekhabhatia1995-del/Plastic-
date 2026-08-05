import React, { useEffect, useState } from "react";
import fallbackImg from "../../assets/images/product.png";

function FeatureProduct() {
  const products = [
    {
      id: 1,
      name: "Plastic Bucket",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmXHvNCviZP_Hmjg41g12PNDfwfA6otmz1J2c-JtMdXK0kDlmwwONey1VUqIUT4Nx1y15ubv3vNTnvSoLHmbOmu0qZne9I",
      price: 299,
    },
    {
      id: 2,
      name: "Plastic Mug",
      image: "https://5.imimg.com/data5/XO/GW/EG/SELLER-76565402/plastic-mug.jpg",
      price: 99,
    },
    {
      id: 3,
      name: "Plastic Tub",
      image:
        "https://i5.walmartimages.com/seo/Little-Giant-6-5-Gallon-Plastic-All-Purpose-Farm-and-Ranch-Utility-Tub-Red_54d3ae3d-dc75-4a55-9237-d0c692a29136.445eb9073c15d8419b149943cfd7c60d.jpeg",
      price: 499,
    },
    {
      id: 4,
      name: "Tooth Brush Box",
      image:
        "https://images-cdn.ubuy.co.in/685bc8d4179dca914d0f4289-toothbrush-holders-for-bathrooms.jpg",
      price: 199,
    },
    {
      id: 5,
      name: "Plastic Container",
      image:
        "https://rukmini1.flixcart.com/image/1500/1500/xif0q/container/e/s/k/6-6-pcs-plastic-container-set-avocet-original-imahy8eqhvhmsdxb.jpeg?q=70",
      price: 249,
    },
    {
      id: 6,
      name: "Plastic Basket",
      image: "https://m.media-amazon.com/images/I/812NfwQgbgL.jpg",
      price: 199,
    },
    {
      id: 7,
      name: "Plastic Dustbin",
      image:
        "https://www.shaktiplasticinds.com/wp-content/uploads/2020/09/Dustbin-50-Liter-revised.jpg",
      price: 399,
    },
    {
      id: 8,
      name: "Water Bottle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mTMNf00S73cynEMJzrzNkDzkMzVyvJpch74CdQXp6HPt3O1kgZyGvJc&s=10",
      price: 149,
    },
    {
      id: 9,
      name: "Plastic Box",
      image:
        "https://kefamart.in/wp-content/uploads/2021/06/51M8vGwX5YL._SL1100_.jpg",
      price: 599,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [products.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section className="mt-5 px-5">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-blue-950 text-base sm:text-lg md:text-xl font-semibold">
          FEATURE PRODUCT
        </h2>

        <button className="text-xs sm:text-sm font-semibold bg-[#0b1b4d] text-white rounded-xl w-24 sm:w-26 p-2 h-9 sm:h-10 hover:text-green-600">
          View All →
        </button>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden flex h-[400px] items-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-blue-900 text-white w-10 h-10 rounded-full"
        >
          ❮
        </button>

        {/* Cards */}
        <div
          className="flex gap-5 transition-transform duration-700"
          style={{
            transform: `translateX(-${index * 240}px)`,
          }}
        >
          {[...products, ...products].map((item, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-white  rounded-xl  shadow p-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover rounded-lg"
                onError={(e) => { e.target.src = fallbackImg; }}
              />

              <h2 className=" text-left font-semibold mt-3">{item.name}</h2>

              <div className="flex gap-1 text-lime-500  mt-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <p className="text-lime-600 text-left font-bold mt-2">
                ₹ {item.price}
              </p>

              <div className="flex items-center gap-2 mt-4">
                <button className="flex-1 bg-[#0b1b4d]  text-white py-2 rounded-lg hover:bg-blue-800">
                  Add to Cart
                </button>

                <button>
                  <i className="fa-regular fa-heart text-xl text-blue-900"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-blue-900 text-white w-10 h-10 rounded-full"
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default FeatureProduct;