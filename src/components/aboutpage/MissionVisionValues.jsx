import { FiTarget, FiEye } from "react-icons/fi";
import { BsGem } from "react-icons/bs";

function MissionVisionValues() {
  return (
    <section className="py-8 bg-white">
      <div className="w-full mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Mission */}
          <div className="border border-gray-200 rounded-lg p-5 flex items-start gap-4 hover:shadow-md transition duration-300">

            <div className="text-[#173C7A] flex-shrink-0 mt-1 self-center">
              <FiTarget size={52} />
            </div>

            <div className="mb-1">
              <h4 className="text-lime-500 text-sm font-bold uppercase mb-3">
                Our Mission
              </h4>

              <p className="text-gray-600 text-sm leading-7 text-left">
                To deliver top-quality plastic products that provide practical
                solutions to our customers while promoting sustainability and
                environmental responsibility.
              </p>
            </div>

          </div>

          {/* Vision */}
          <div className="border border-gray-200 rounded-lg p-5 flex items-start gap-4 hover:shadow-md transition duration-300">

            <div className="text-[#173C7A] flex-shrink-0 mt-1 self-center">
              <FiEye size={52} />
            </div>

            <div>
              <h4 className="text-lime-500 text-sm font-bold uppercase mb-3">
                Our Vision
              </h4>

              <p className="text-gray-600 text-sm leading-7 text-left">
                To become a globally recognized brand in the plastic industry by
                delivering innovative, sustainable and high-quality plastic
                solutions.
              </p>
            </div>

          </div>

          {/* Values */}
          <div className="border border-gray-200 rounded-lg p-5 flex items-start gap-4 hover:shadow-md transition duration-300">

            <div className="text-[#173C7A] flex-shrink-0 mt-1 self-center">
              <BsGem size={52} />
            </div>

            <div>
              <h4 className="text-lime-500 text-sm font-bold uppercase mb-3">
                Our Values
              </h4>

              <ul className="text-gray-600 text-sm leading-6 list-disc pl-5 text-start">
                <li>Integrity</li>
                <li>Quality</li>
                <li>Innovation</li>
                <li>Customer Focus</li>
                <li>Sustainability</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MissionVisionValues;