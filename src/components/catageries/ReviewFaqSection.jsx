import React, { useState } from "react";
import {
  FaStar,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const reviews = [
  {
    text: "Excellent product quality and timely delivery. Highly recommended!",
    name: "Rajesh Patil",
    company: "Shree Industries",
  },
  {
    text: "Very durable products and good customer support.",
    name: "Meera Sharma",
    company: "Sharma Enterprises",
  },
  {
    text: "Best plastic products we've sourced so far.",
    name: "Ankit Verma",
    company: "Verma Traders",
  },
];

const faqs = [
  {
    question: "What type of plastic materials do you use?",
    answer:
      "We use premium quality HDPE, PVC, Polymer and Plastic materials for manufacturing.",
  },
  {
    question: "Do you provide custom branding?",
    answer:
      "Yes, we provide custom branding and logo printing for bulk orders.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum order quantity depends on the product. Please contact us for details.",
  },
  {
    question: "Do you provide GST invoice?",
    answer:
      "Yes, GST invoice is provided with every order.",
  },
  {
    question: "How much time does delivery take?",
    answer:
      "Delivery generally takes 3-7 business days across India.",
  },
  {
    question: "Do you offer bulk pricing?",
    answer:
      "Yes, we provide attractive discounts on bulk purchases.",
  },
];

const ReviewFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ================= CUSTOMER REVIEWS ================= */}

          <div>
            <h2 className="text-xl font-bold text-blue-950  uppercase p-2">
              Customer Reviews
            </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="border border-gray-200 text-left rounded-lg shadow p-4 sm:p-5 min-h-[200px] sm:min-h-[220px] flex flex-col justify-between hover:border-lime-500 transition duration-300"
                >
                  <div>

                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-sm" />
                      ))}
                    </div>

                    <p className="text-sm text-gray-600 italic ">
                      "{review.text}"
                    </p>

                  </div>

                  <div className="mt-6">

                    <h4 className="font-semibold text-gray-800">
                      - {review.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {review.company}
                    </p>

                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* ================= FAQ ================= */}

          <div>

           <h2 className="text-xl font-bold text-blue-950 p-2  uppercase">
            frequently asked question 
          </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {faqs.map((faq, index) => (

                <div
                  key={index}
                  className="shadow "
                >

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-50"
                  >

                    <span className="text-sm font-medium text-gray-800 pr-3">
                      {faq.question}
                    </span>

                    {openIndex === index ? (
                      <FaChevronUp className="text-gray-600 text-sm flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-600 text-sm flex-shrink-0" />
                    )}

                  </button>

                  {openIndex === index && (

                    <div className="px-5 pb-4 text-sm text-gray-600 leading-6 border-t">
                      {faq.answer}
                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ReviewFaqSection;