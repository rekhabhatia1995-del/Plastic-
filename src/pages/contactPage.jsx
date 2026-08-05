import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-8">
          <div className="w-full mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-4 text-gray-200 text-lg">
              We'd love to hear from you. Feel free to contact us anytime.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#0A2D62] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-lime-100 p-3 rounded-full">
                    <FiPhone className="text-2xl text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-lime-100 p-3 rounded-full">
                    <FiMail className="text-2xl text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@oceanplastic.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-lime-100 p-3 rounded-full">
                    <FiMapPin className="text-2xl text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      Indore, Madhya Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-lime-100 p-3 rounded-full">
                    <FiClock className="text-2xl text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday
                      <br />
                      10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#0A2D62] mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A2D62]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A2D62]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A2D62]"
                />

                <textarea
                  rows="5"
                  placeholder="Write Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A2D62]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#0A2D62] hover:bg-[#133b73] text-white py-3 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Indore&output=embed"
              className="w-full h-[350px]"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;