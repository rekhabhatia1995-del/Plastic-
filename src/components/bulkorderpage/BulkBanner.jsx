import { FiDollarSign, FiTruck, FiSettings } from "react-icons/fi";
import bannerImg from "../../assets/images/plastic-products.jpg";

const BulkBanner = () => {
  return (
    <section className="bg-blue-50 overflow-hidden">
      <div className="w-100% mx-auto px-4 lg:px-8 py-6">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-0 text-start">
          Home <span className="mx-2">&gt;</span> Bulk Order
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Left Content */}
          <div className="w-full lg:w-[45%] text-left">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A2D62]">
              Bulk Order
            </h1>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 mt-2">
              Solutions
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-8 mt-6 max-w-md">
              High-quality plastic containers and products in bulk,
              delivered on time, every time.
            </p>

            {/* Features */}

          <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-10 w-full">

  <div className="flex items-start gap-4 flex-1 min-w-[220px]">
    <FiDollarSign className="text-4xl text-[#0A2D62] flex-shrink-0" />
    <div>
      <h4 className="font-bold text-[#0A2D62] text-lg">
        Best Bulk Pricing
      </h4>
      <p className="text-gray-500 text-sm">Guaranteed</p>
    </div>
  </div>

  <div className="flex items-start gap-4 flex-1 min-w-[220px]">
    <FiTruck className="text-4xl text-[#0A2D62] flex-shrink-0" />
    <div>
      <h4 className="font-bold text-[#0A2D62] text-lg">
        On-Time Delivery
      </h4>
      <p className="text-gray-500 text-sm">Pan India</p>
    </div>
  </div>

  <div className="flex items-start gap-4 flex-1 min-w-[220px]">
    <FiSettings className="text-4xl text-[#0A2D62] flex-shrink-0" />
    <div>
      <h4 className="font-bold text-[#0A2D62] text-lg">
        Custom Solutions
      </h4>
      <p className="text-gray-500 text-sm">Available</p>
    </div>
  </div>

</div>

          </div>

          {/* Right Image */}

          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">

            <img
              src={bannerImg}
              alt="Bulk Order"
              className="w-full max-w-[650px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] object-contain"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default BulkBanner;