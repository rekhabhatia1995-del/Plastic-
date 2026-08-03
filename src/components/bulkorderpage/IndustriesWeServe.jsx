import {
  FiActivity,
  FiShield,
  FiCoffee,
  FiFeather,
  FiDroplet,
  FiCloudRain,
  FiTruck,
  FiHome,
} from "react-icons/fi";

const industries = [
  {
    icon: <FiActivity />,
    title: "Chemical Industry",
  },
  {
    icon: <FiShield />,
    title: "Pharmaceuticals",
  },
  {
    icon: <FiCoffee />,
    title: "Food & Beverages",
  },
  {
    icon: <FiFeather />,
    title: "Agriculture",
  },
  {
    icon: <FiDroplet />,
    title: "Paints & Coatings",
  },
  {
    icon: <FiCloudRain />,
    title: "Water Treatment",
  },
  {
    icon: <FiTruck />,
    title: "Automotive",
  },
  {
    icon: <FiHome />,
    title: "Construction",
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="py-4 bg-white">
      <div className="w-full mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#0A2D62]">
            3. INDUSTRIES WE SERVE
          </h2>

          <div className="w-16 h-1 bg-green-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">

          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition duration-300"
            >
              <div className="text-5xl text-[#0A2D62] mb-4">
                {item.icon}
              </div>

              <h3 className="text-sm font-semibold text-[#0A2D62] leading-5">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#0A2D62] hover:bg-[#143b72] text-white font-semibold px-8 py-3 rounded-md transition">
            EXPLORE ALL INDUSTRIES
          </button>
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;