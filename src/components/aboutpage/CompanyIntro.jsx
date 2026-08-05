import { FiClock, FiHeart, FiGrid, FiUsers } from "react-icons/fi";
import companyImg from "../../assets/images/ocean-plastic.jpg";

const stats = [
  { icon: <FiClock size={24} />, number: "10+", line1: "Years of", line2: "Experience" },
  { icon: <FiHeart size={24} />, number: "500+", line1: "Happy", line2: "Customers" },
  { icon: <FiGrid size={24} />, number: "100+", line1: "Products", line2: "Range" },
  { icon: <FiUsers size={24} />, number: "50+", line1: "Team", line2: "Members" },
];

export default function CompanyIntro() {
  return (
    <section className="py-8 bg-white">
      <div className="w-full mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[48%_52%] gap-4 items-start">

             {/* Left Image */}
<div className="flex justify-center items-center my-auto">
  <img
    src={companyImg}
    alt="Company"
    className="w-full h-[260px] sm:h-[340px] lg:h-[380px] object-cover rounded-lg"
  />
</div>

          {/* Right Content */}
          <div className="text-left">
            <p className="text-lime-500 text-sm font-bold uppercase tracking-wider">
              WHO WE ARE
            </p>

            <h2 className="mt-2 text-6xl lg:text-[48px] font-bold leading-tight">
              <span className="block text-[#173C7A]">
                Your Trusted Partner in
              </span>
              <span className="block text-lime-500">
                Plastic Products
              </span>
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-gray-600">
              Established in 2015, Ocean Plastic Industries has grown to become
              a trusted name in the plastic manufacturing industry. We specialize
              in producing a wide range of durable, reliable and cost-effective
              plastic products.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-gray-600">
              With state-of-the-art infrastructure, skilled professionals and a
              customer-centric approach, we are committed to delivering products
              that exceed expectations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 bg-white h-[170px] flex flex-col"
                >
                 <div className="flex justify-center text-lime-500">
                {item.icon}
                </div>

                  <div className="mt-4 text-[34px] font-extrabold text-[#173C7A] leading-none">
                    {item.number}
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    {item.line1}
                  </p>

                  <p className="text-sm font-semibold text-[#173C7A]">
                    {item.line2}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}