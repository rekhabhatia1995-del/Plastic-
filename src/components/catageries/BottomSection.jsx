import React from "react";
import {
  FaFilePdf,
  FaFileExcel,
  FaWhatsapp,
  FaPhoneAlt,
  FaHeadset,
} from "react-icons/fa";

const BottomSection = () => {
 const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
];

  const downloads = [
    {
      title: "Product Catalogue",
      icon: <FaFilePdf className="text-red-500 text-3xl" />,
    },
    {
      title: "Price List",
      icon: <FaFileExcel className="text-green-600 text-3xl" />,
    },
    {
      title: "Technical Datasheet",
      icon: <FaFilePdf className="text-red-500 text-3xl" />,
    },
    {
      title: "Company Brochure",
      icon: <FaFilePdf className="text-red-500 text-3xl" />,
    },
  ];

  return (
    <>
      <section className="bg-white ">
        <div className="max-w-[1440px] mx-auto px-4 py-8">

<div className="grid lg:grid-cols-3 gap-6">

            {/* Brands */}
           <div>
  <h2 className="font-bold text-blue-950 text-base sm:text-lg mb-5 uppercase">
    Brands We Work With
  </h2>

  <div className="grid grid-cols-3 gap-3">
    {brands.map((brand, index) => (
      <div
        key={index}
        className="border rounded-lg p-3 sm:p-4 flex items-center justify-center bg-white hover:shadow-md transition"
      >
        <img
          src={brand}
          alt={`Brand ${index + 1}`}
          className="h-8 sm:h-10 object-contain"
        />
      </div>
    ))}
  </div>
</div>

            {/* Download */}
            <div>
              <h2 className="font-bold text-blue-950 text-base sm:text-lg mb-5 uppercase">
                Download Catalogue
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {downloads.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 hover:shadow-md"
                  >
                    {item.icon}
                    <span className="text-xs sm:text-sm font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-lime-500 rounded-lg text-white p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold mb-2">
                  STILL CAN'T FIND YOUR PRODUCT?
                </h2>

                <p className="text-xs sm:text-sm opacity-90 mb-6">
                  Our experts will help you choose the right plastic product
                  for your needs.
                </p>

                <FaHeadset className="text-4xl sm:text-6xl opacity-30 absolute right-10 top-8 hidden lg:block" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button className="border border-white rounded py-2 text-xs sm:text-sm hover:bg-white hover:text-green-600 transition">
                  CONTACT US
                </button>

                <button className="border border-white rounded py-2 flex items-center justify-center gap-2 text-xs sm:text-sm hover:bg-white hover:text-green-600 transition">
                  <FaWhatsapp />
                  WhatsApp
                </button>

                <button className="border border-white rounded py-2 flex items-center justify-center gap-2 text-xs sm:text-sm hover:bg-white hover:text-green-600 transition">
                  <FaPhoneAlt />
                  Callback
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-lime-500 p-4 w-full mt-4 mb-0">
          <div className="max-w-[1440px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">

            <div className="text-white">
              <span className="font-bold uppercase">
                Newsletter
              </span>{" "}
              <span className="text-sm">
                Subscribe to get updates on new products & offers
              </span>
            </div>

            <div className="flex w-full lg:w-[600px]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-blue-900 outline-none bg-white rounded-l-md shadow"
              />

              <button className="bg-blue-950 text-white px-6 rounded-r-md font-semibold hover:bg-black transition">
                SUBSCRIBE
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BottomSection;