import drum from "../../assets/images/plastic-drum.jpg";
import container from "../../assets/images/plastic-containers.jpg";
import ibcTank from "../../assets/images/ibc-tanks.jpg";
import jerryCan from "../../assets/images/jerry-tanks.jpg";
import crate from "../../assets/images/crates.jpg";
import dustbin from "../../assets/images/dustbin-buckets.jpg";

const products = [
  {
    image: drum,
    title: "Plastic Drums",
  },
  {
    image: container,
    title: "Plastic Containers",
  },
  {
    image: ibcTank,
    title: "IBC Tanks",
  },
  {
    image: jerryCan,
    title: "Jerry Cans",
  },
  {
    image: crate,
    title: "Crates & Bins",
  },
  {
    image: dustbin,
    title: "Dustbins & Buckets",
  },
];

const BulkProducts = () => {
  return (
    <section className="py-4 bg-white">
      <div className="w-full mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#0A2D62]">
            2. OUR PRODUCTS FOR BULK ORDER
          </h2>

          <div className="w-16 h-1 bg-green-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {products.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition duration-300"
            >
              <div className="h-36 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-32 object-contain"
                />
              </div>

              <h3 className="mt-4 text-base font-semibold text-[#0A2D62]">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#0A2D62] text-white font-semibold px-10 py-3 rounded-md hover:bg-[#123b7c] transition">
            VIEW ALL PRODUCTS
          </button>
        </div>

      </div>
    </section>
  );
};

export default BulkProducts;