import { FiCheckCircle } from "react-icons/fi";

import factory1 from "../../assets/images/plastic-manufacturing-factory.jpg";
import factory2 from "../../assets/images/blue-plastic-drums.jpg";
import factory3 from "../../assets/images/industrial-warehouse-shelves.webp";
import factory4 from "../../assets/images/factory-worker-operating-machine.jpg";

const points = [
  "Advanced Manufacturing Machines",
  "Quality Testing Laboratory",
  "Large Production Capacity",
  "Skilled & Experienced Workforce",
  "Strict Quality Control Process",
];

function Infrastructure() {
  return (
    <section className="py-8 bg-white">
      <div className="w-full mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left Content */}
<div className="flex flex-col items-start">

  <p className="text-[#86BC25] text-sm font-bold uppercase mb-8">
    OUR INFRASTRUCTURE
  </p>

  <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight text-left">
    <span className="text-[#173C7A]">Built on Technology,</span>
    <br />
    <span className="text-[#86BC25]">Driven by Innovation</span>
  </h2>

  <p className="mt-5 text-gray-600 leading-7 text-left">
    Our advanced manufacturing unit is equipped with the latest machinery
    and technology to ensure precision manufacturing and high production
    capacity with consistent quality.
  </p>

  <div className="mt-6 space-y-4 w-full">
    {points.map((point, index) => (
      <div key={index} className="flex items-center gap-3">
        <FiCheckCircle className="text-gray-400" size={20} />
        <span className="text-gray-700">{point}</span>
      </div>
    ))}
  </div>

</div>

          {/* Right Images */}
         <div className="mt-6 lg:mt-10">

            <img
              src={factory1}
              alt="Factory"
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="grid grid-cols-3 gap-4 mt-4">

              <img
                src={factory2}
                alt="Factory"
                className="w-full h-40 object-cover rounded-lg"
              />

              <img
                src={factory3}
                alt="Warehouse"
                className="w-full h-40 object-cover rounded-lg"
              />

              <img
                src={factory4}
                alt="Worker"
                className="w-full h-40 object-cover rounded-lg"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Infrastructure;