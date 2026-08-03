import React from "react";
import fallbackImg from "../../assets/images/product.png";

function NewArrival() {
  const products = [
    { id: 1, name: "Plastic Bucket", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmXHvNCviZP_Hmjg41g12PNDfwfA6otmz1J2c-JtMdXK0kDlmwwONey1VUqIUT4Nx1y15ubv3vNTnvSoLHmbOmu0qZne9I", price: 299 },
    { id: 2, name: "Plastic Mug", image: "https://5.imimg.com/data5/XO/GW/EG/SELLER-76565402/plastic-mug.jpg", price: 99 },
    { id: 3, name: "Plastic Tub", image: "https://i5.walmartimages.com/seo/Little-Giant-6-5-Gallon-Plastic-All-Purpose-Farm-and-Ranch-Utility-Tub-Red_54d3ae3d-dc75-4a55-9237-d0c692a29136.445eb9073c15d8419b149943cfd7c60d.jpeg", price: 499 },
    { id: 4, name: "Tooth Brush Box", image: "https://images-cdn.ubuy.co.in/685bc8d4179dca914d0f4289-toothbrush-holders-for-bathrooms.jpg", price: 199 },
    { id: 5, name: "Plastic Container", image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/container/e/s/k/6-6-pcs-plastic-container-set-avocet-original-imahy8eqhvhmsdxb.jpeg?q=70", price: 249 },
    { id: 6, name: "Plastic Basket", image: "https://m.media-amazon.com/images/I/812NfwQgbgL.jpg", price: 199 },
  ];
  return (
    <section className="py-2 px-5 max-w-[1510px] mx-auto">
      <div className="flex justify-between items-center ml-2 mr-2 sm:ml-4 sm:mr-4">
        <h1 className="text-base sm:text-lg font-bold">NEW ARRIVAL</h1>
        <button className="text-xs sm:text-sm font-semibold bg-[#0b1b4d] rounded-xl text-white p-2 w-20 sm:w-26 h-9 sm:h-10 hover:text-lime-500 transition duration-300">View All →</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        {products.map((item) => (
          <div key={item.id} className="shadow-lg  rounded-lg shadow-md bg-white p-3 hover:shadow-lg transition duration-300 w-full max-w-[200px] mx-auto">
            <img src={item.image} alt={item.name} className="w-full h-28 object-contain rounded" onError={(e) => { e.target.src = fallbackImg; }} />
            <h2 className="text-sm font-semibold text-center mt-2 ">{item.name}</h2>
            <p className="text-lime-500  font-bold text-center text-sm mt-1">₹ {item.price}</p>
            <div className="flex items-center gap-2 w-full mt-3">
              <button className="flex-1 bg-[#0b1b4d] text-white text-sm py-2 rounded-md hover:bg-blue-700 font-medium tracking-wide">Add to Cart</button>
              <i className="fa-regular fa-heart text-xl text-[#0b1b4d]"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrival;

