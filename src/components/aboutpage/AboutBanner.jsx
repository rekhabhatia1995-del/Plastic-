// AboutBanner.jsx
import { FiShield } from "react-icons/fi";
import { BsRecycle } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import bannerImg from "../../assets/images/plastic-products.jpg";

const features = [
  { id: 1, icon: <FiShield />, title: "Premium Quality", desc: "100% Virgin Material" },
  { id: 2, icon: <BsRecycle />, title: "Eco Friendly", desc: "Recyclable Products" },
  { id: 3, icon: <HiOutlineUserGroup />, title: "Customer Satisfaction", desc: "Our Top Priority" },
];

function AboutBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-0">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-cyan-50 to-sky-100"></div>
      <div className="w-full mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="text-left">
            <p className="text-lime-500 uppercase tracking-[4px] font-bold text-sm mb-4">About Us</p>

            <h1 className="font-extrabold leading-tight">
              <span className="block text-[#14356C] text-4xl md:text-5xl lg:text-6xl">Delivering Quality</span>
              <span className="block text-lime-500 text-4xl md:text-5xl lg:text-6xl">Plastic Solutions</span>
              <span className="block text-[#14356C] text-4xl md:text-5xl lg:text-6xl">Since 2015</span>
            </h1>

            <p className="mt-8 max-w-xl text-gray-600 leading-8">
              Ocean Plastic Industries is a leading manufacturer, supplier and exporter
              of high-quality plastic products for diverse industries and everyday use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {features.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div className="text-lime-500 text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="text-[#14356C] font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img src={bannerImg} alt="Plastic Products" className="w-full max-w-xl object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
