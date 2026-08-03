import {
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Plastic Buckets",
    image: "https://picsum.photos/seed/plastic-bucket/500/500",
    products: 32,
  },
  {
    id: 2,
    name: "Plastic Mugs",
    image: "https://picsum.photos/seed/plastic-mug/500/500",
    products: 18,
  },
  {
    id: 3,
    name: "Storage Containers",
    image: "https://picsum.photos/seed/storage-container/500/500",
    products: 45,
  },
  {
    id: 4,
    name: "Kitchen Items",
    image: "https://picsum.photos/seed/plastic-kitchen/500/500",
    products: 26,
  },
  {
    id: 5,
    name: "Dustbins",
    image: "https://picsum.photos/seed/plastic-dustbin/500/500",
    products: 15,
  },
  {
    id: 6,
    name: "Plastic Chairs",
    image: "https://picsum.photos/seed/plastic-chair/500/500",
    products: 20,
  },
  {
    id: 7,
    name: "Water Bottles",
    image: "https://picsum.photos/seed/water-bottle/500/500",
    products: 34,
  },
  {
    id: 8,
    name: "Plastic Trays",
    image: "https://picsum.photos/seed/plastic-tray/500/500",
    products: 17,
  },
  {
    id: 9,
    name: "Laundry Baskets",
    image: "https://picsum.photos/seed/laundry-basket/500/500",
    products: 13,
  },
  {
    id: 10,
    name: "Plastic Stools",
    image: "https://picsum.photos/seed/plastic-stool/500/500",
    products: 11,
  },
  {
    id: 11,
    name: "Food Containers",
    image: "https://picsum.photos/seed/food-container/500/500",
    products: 29,
  },
  {
    id: 12,
    name: "Cleaning Items",
    image: "https://picsum.photos/seed/cleaning-items/500/500",
    products: 21,
  },
];

function ShopCategories() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="px-4 lg:px-8 max-w-[1440px] mx-auto">

        {/* Heading */}

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-slate-900 mt-2 uppercase">
            Shop By Categories
          </h2>

          <div className="w-20 h-1 bg-lime-500 mx-auto mt-3 rounded-full"></div>
        </div>

{/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

          {categories.map((item) => (

            <div
              key={item.id}
              className="bg-white w-full rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 p-2 flex items-center  "
            >

              {/* Left */}

              <div className="flex items-center justify-between gap-4 sm:gap-6 w-full">

                {/* Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 ml-1 sm:ml-2">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 text-xs mt-1">
                    {item.products} Products
                  </p>

                  <button className="mt-3 flex items-center gap-2 text-lime-600 text-sm font-semibold hover:gap-3 transition-all">
                    Explore
                    <FaArrowRight />
                  </button>
                </div>

              </div>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ShopCategories;