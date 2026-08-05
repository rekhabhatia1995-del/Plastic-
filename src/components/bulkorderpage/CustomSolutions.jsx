import { FiCheck } from "react-icons/fi";
import customImg from "../../assets/images/custom.jpg"; 
const CustomSolutions = () => {
  return (
    <section className="py-4 bg-white">
      <div className="w-full mx-auto px-4 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2D62] uppercase">
            6. Custom Solutions
          </h2>

          <div className="w-16 h-1 bg-lime-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Card */}
          <div className="bg-[#F7FAFF] p-8 rounded-lg shadow-sm text-start pl-18">

            <h3 className="text-xl font-bold text-[#0A2D62] leading-8 mb-6">
              We offer tailor-made solutions
              <br />
              as per your business needs.
            </h3>

            <ul className="space-y-4">

              <li className="flex items-center gap-3">
                <FiCheck className="text-green-500 text-xl" />
                <span className="text-gray-700">
                  Custom Size & Design
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiCheck className="text-green-500 text-xl" />
                <span className="text-gray-700">
                  Custom Color
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiCheck className="text-green-500 text-xl" />
                <span className="text-gray-700">
                  Logo Printing
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiCheck className="text-green-500 text-xl" />
                <span className="text-gray-700">
                  Private Labeling
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiCheck className="text-green-500 text-xl" />
                <span className="text-gray-700">
                  Special Packaging
                </span>
              </li>

            </ul>

            <button className="mt-8 bg-[#0A2D62] hover:bg-[#123d82] text-white px-8 py-3 rounded-md font-semibold transition">
              TALK TO OUR EXPERT
            </button>

          </div>

          {/* Right Image */}

          <div className="flex justify-center">
            <img
              src={customImg}
              alt="Custom Solutions"
              className="w-full max-w-xl object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomSolutions;