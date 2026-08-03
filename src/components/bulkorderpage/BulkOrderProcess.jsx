import {
  FiFileText,
  FiMessageCircle,
  FiClipboard,
  FiPackage,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiFileText />,
    step: "Step 1",
    title: "Send Inquiry",
    description: "Share your requirement and product details.",
  },
  {
    icon: <FiMessageCircle />,
    step: "Step 2",
    title: "Get Quotation",
    description: "We will send the best quotation for you.",
  },
  {
    icon: <FiClipboard />,
    step: "Step 3",
    title: "Confirm Order",
    description: "Confirm the order and make payment.",
  },
  {
    icon: <FiPackage />,
    step: "Step 4",
    title: "Production & Packing",
    description: "We prepare your order with quality packaging.",
  },
  {
    icon: <FiUsers />,
    step: "Step 5",
    title: "Timely Delivery",
    description: "Safe and on-time delivery at your location.",
  },
];

const BulkOrderProcess = () => {
  return (
    <section className="bg-white py-4">
      <div className="w-100% px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#0A2D62]">
            4. HOW BULK ORDER WORKS?
          </h2>

          <div className="w-16 h-1 bg-green-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {steps.map((item, index) => (
            <div key={index} className="relative text-center">

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute top-10 -right-8 text-3xl text-gray-400">
                  <FiArrowRight />
                </div>
              )}

              {/* Icon Circle */}
              <div className="w-24 h-24 mx-auto rounded-full border border-gray-200 flex items-center justify-center shadow-sm bg-white">
                <div className="text-5xl text-[#0A2D62]">
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <p className="mt-2 text-sm font-semibold text-[#0A2D62]">
                {item.step}
              </p>

              <h3 className="mt-0 text-lg font-bold text-[#0A2D62]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-6 px-3">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BulkOrderProcess;