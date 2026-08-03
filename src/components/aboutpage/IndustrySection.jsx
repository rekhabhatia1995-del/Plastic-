import {
  FiHome,
  FiTruck,
  FiShoppingCart,
  FiCoffee,
  FiLink,
} from "react-icons/fi";
import { FaIndustry, FaHardHat } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";

const industries = [
  {
    id: 1,
    icon: <FaIndustry size={34} />,
    title: "Industrial",
  },
  {
    id: 2,
    icon: <GiPlantSeed size={34} />,
    title: "Agriculture",
  },
  {
    id: 3,
    icon: <FiCoffee size={34} />,
    title: "Food & Beverage",
  },
  {
    id: 4,
    icon: <FiLink size={34} />,
    title: "Pharmaceutical",
  },
  {
    id: 5,
    icon: <FiHome size={34} />,
    title: "Household",
  },
  {
    id: 6,
    icon: <FiTruck size={34} />,
    title: "Logistics",
  },
  {
    id: 7,
    icon: <FiShoppingCart size={34} />,
    title: "Retail",
  },
  {
    id: 8,
    icon: <FaHardHat size={34} />,
    title: "Construction",
  },
];

function Industries() {
  return (
    <section className="py-4 bg-white">
      <div className="w-full mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[#86BC25] text-sm font-bold uppercase">
            OUR PRODUCTS
          </p>

          <h2 className="mt-1 text-4xl font-bold">
            <span className="text-[#173C7A]">Serving Multiple </span>
            <span className="text-[#86BC25]">Industries</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border border-gray-200 rounded-lg overflow-hidden mt-8">

          {industries.map((item) => (
            <div
              key={item.id}
              className="border-r border-b lg:border-b-0 border-gray-200 p-5 flex flex-col items-center text-center hover:bg-gray-50 transition"
            >
              <div className="text-[#173C7A] mb-3">
                {item.icon}
              </div>

              <h3 className="text-xs font-semibold text-[#173C7A] text-black">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-6">

          <p className="text-gray-600 text-sm">
            We provide plastic solutions for every need. From industrial
            containers to household products – we have it all!
          </p>

          <button className="bg-[#86BC25] hover:bg-[#73a61f] text-white px-6 py-3 rounded-md font-medium transition">
            View All Products →
          </button>

        </div>

      </div>
    </section>
  );
}

export default Industries;