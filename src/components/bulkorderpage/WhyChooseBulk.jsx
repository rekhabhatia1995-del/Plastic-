import {
  FiDollarSign,
  FiSettings,
  FiPackage,
  FiTruck,
  FiTag,
  FiHeadphones,
} from "react-icons/fi";

const features = [
  {
    icon: <FiDollarSign />,
    title: "Cost Savings",
    description: "Lower price per unit with higher order quantity.",
  },
  {
    icon: <FiSettings />,
    title: "Quality Assured",
    description: "Premium quality products for all your business needs.",
  },
  {
    icon: <FiPackage />,
    title: "Reliable Supply",
    description: "Consistent stock availability and timely delivery.",
  },
  {
    icon: <FiTruck />,
    title: "Pan India Delivery",
    description: "We deliver bulk orders across India at your doorstep.",
  },
  {
    icon: <FiTag />,
    title: "Custom Branding",
    description: "Logo printing and labeling available on request.",
  },
  {
    icon: <FiHeadphones />,
    title: "Dedicated Support",
    description: "Personalized support from our bulk order experts.",
  },
];

const WhyChooseBulk = () => {
  return (
    <section className="bg-white py-4">
      <div className="w-full mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-3xl font-bold uppercase text-blue-900">
            1. WHY CHOOSE BULK ORDER?
          </h2>

          <div className="w-16 h-1 bg-green-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-center mb-5 text-green-600 text-5xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#0A2D62] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-6">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseBulk;