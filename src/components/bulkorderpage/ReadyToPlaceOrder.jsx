import {
  FiPhoneCall,
  FiMessageCircle,
  FiMail,
  FiFileText,
  FiShield,
  FiDollarSign,
  FiTruck,
  FiPackage,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const contactData = [
  {
    icon: <FiPhoneCall />,
    title: "Call Us",
    text: "+91 98765 43210",
  },
  {
    icon: <FiMessageCircle />,
    title: "WhatsApp",
    text: "+91 98765 43210",
  },
  {
    icon: <FiMail />,
    title: "Email Us",
    text: "info@oceanplastic.com",
  },
  {
    icon: <FiFileText />,
    title: "Request a Quote",
    text: "Fill the form and we'll get back to you.",
  },
];

const features = [
  {
    icon: <FiShield />,
    title: "100% Quality",
    subTitle: "Assurance",
  },
  {
    icon: <FiDollarSign />,
    title: "Best Price",
    subTitle: "Guaranteed",
  },
  {
    icon: <FiTruck />,
    title: "On-Time",
    subTitle: "Delivery",
  },
  {
    icon: <FiPackage />,
    title: "Secure",
    subTitle: "Packaging",
  },
];

const ReadyToPlaceOrder = () => {
  return (
    <section className="py-4 bg-white">
      <div className="w-full mx-auto px-6">

        {/* Heading */}

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2D62] uppercase">
            7. Ready To Place A Bulk Order?
          </h2>

          <p className="text-gray-600 mt-3">
            Get the best quality plastic products in bulk at unbeatable prices.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

          {contactData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200  rounded-lg p-6 text-center hover:shadow-md"
            >
              <div className="text-5xl text-lime-500 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-[#0A2D62] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="flex justify-center mt-4">
          <Link to="/contact" className="bg-[#0A2D62] hover:bg-[#123b7a] text-white px-8 py-3 rounded-md font-semibold transition">
            REQUEST A QUOTE NOW
          </Link>
        </div>

        {/* Bottom Features */}

        <div className="border border-gray-200 rounded-lg mt-6 p-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3"
              >
                <div className="text-3xl text-lime-500">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-[#0A2D62]">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ReadyToPlaceOrder;