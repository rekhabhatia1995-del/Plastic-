
import bannerImg from "../../assets/images/plastic-products.jpg";

function ContactCTA() {
  return (
    <section className="py-4 bg-white">
      <div className="w-full mx-auto px-6">

        <div className="bg-[#123B78] rounded-xl overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* Left Content */}
            <div className="px-8 py-10 lg:px-12">

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let's Work{" "}
                <span className="text-lime-500">Together</span>
              </h2>

              <p className="mt-4 text-gray-200 leading-7">
                Looking for high-quality plastic products for your business?
                <br />
                Get in touch with us today!
              </p>

              <button className="mt-6 bg-lime-500 hover:bg-[#75A91F] text-white px-6 py-3 rounded-md font-semibold transition">
                Contact Us →
              </button>

            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">

              <img
                src={bannerImg}
                alt="Plastic Products"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;