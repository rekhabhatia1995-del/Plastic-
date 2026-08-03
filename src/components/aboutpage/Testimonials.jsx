import { FiUser, FiMessageSquare } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    review:
      "Ocean Plastic Industries has been our trusted supplier for over 3 years. Their product quality and timely delivery are exceptional.",
    name: "Rajesh Patel",
    role: "Warehouse Manager",
  },
  {
    id: 2,
    review:
      "Excellent quality products and great customer support. Highly recommended for all your plastic product needs.",
    name: "Anita Sharma",
    role: "Procurement Head",
  },
  {
    id: 3,
    review:
      "Wide range of products with competitive prices. Ocean Plastic is our go-to partner for plastic solutions.",
    name: "Vikram Singh",
    role: "Operations Manager",
  },
];

function Testimonials() {
  return (
    <section className="py-4 bg-white">
      <div className="w-full mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">

          <p className="text-[#86BC25] text-sm font-bold uppercase">
            WHAT OUR CLIENTS SAY
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            <span className="text-[#173C7A]">
              Trusted by Businesses
            </span>{" "}
            <span className="text-[#86BC25]">
              Worldwide
            </span>
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300"
            >

              {/* Top */}
              <div className="flex justify-between items-center">

                <div className="flex gap-1 text-[#86BC25]">
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                </div>

                <FiMessageSquare
                  size={18}
                  className="text-gray-300"
                />

              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-7 mt-5">
                {item.review}
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-6">

                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <FiUser className="text-gray-500" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#173C7A]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;