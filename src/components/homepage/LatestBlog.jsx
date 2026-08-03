import React from "react";

const blogs = [
  { id: 1, image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=500", date: "18 May 2024", title: "How to Choose Right Plastic Containers" },
  { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnC6E-vzGog4Ehv5UzoYlWBp9Ud5GTnc-ZMKSJtuVG1-BHFVUBOnI2L1w&s=10", date: "24 Apr 2024", title: "Benefits of Using Food Grade Plastic" },
  { id: 3, image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500", date: "15 Apr 2024", title: "Plastic Recycling and Its Importance" },
];

function LatestBlog() {
  return (
    <section className="px-5 sm:px-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 sm:gap-2">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase">Latest From Blog</h2>
            
            <button className="text-xs sm:text-sm font-semibold bg-[#0b1b4d]   rounded-xl p-2 w-48 h-10  text-white hover:text-green-600">View All Blogs →</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  h-60 sm:gap-6">
            {blogs.map((blog) => (
              <div key={blog.id}  className="bg-white text-left rounded-lg  shadow hover:shadow-lg transition duration-300 overflow-hidden mx-auto">
                <img src={blog.image} alt={blog.title} className="w-full  sm:h-36 object-cover" />
                <div className="p-2 sm:p-2">
                  <p className="text-[10px] sm:text-xs text-gray-500 ">{blog.date}</p>
                  <h2 className="font-semibold text-[10px] sm:text-xs text-gray-800 hover:text-blue-900 cursor-pointer line-clamp-2 leading-tight">{blog.title}</h2>
                  <button className="mt-1 text-lime-500  font-semibold text-[9px] sm:text-[11px] hover:underline">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 bg-[#0b1b4d] rounded-xl p-2 sm:p-6 text-white flex flex-col items-center justify-center">
         
          <h3 className="text-lg text-white sm:text-xl font-bold mt-6 sm:mt-10 text-center">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="text-xs sm:text-sm text-gray-200 sm:mb-6 text-center">Get latest updates on new products & exclusive offers.</p>
          <div className="flex flex-col sm:flex-row rounded-md bg-white mt-4 sm:mt-8 w-full sm:w-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 w-full sm:w-48 px-3 sm:px-4 py-2.5 sm:py-3 text-black text-sm outline-none" />
            <button className="bg-lime-500 hover:bg-green-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-sm whitespace-nowrap">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestBlog;

