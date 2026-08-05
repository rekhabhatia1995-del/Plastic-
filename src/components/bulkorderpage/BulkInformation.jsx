const information = [
  {
    title: "Minimum Order Quantity (MOQ)",
    points: [
      "MOQ depends on product type.",
      "Contact our sales team for specific product MOQ.",
      "Flexible MOQ for long-term business partners.",
    ],
  },
  {
    title: "Bulk Discounts",
    points: [
      "More quantity, more discount.",
      "Special pricing for repeat customers.",
      "Best market prices guaranteed.",
    ],
  },
  {
    title: "Payment Options",
    points: [
      "Bank Transfer / NEFT",
      "UPI / IMPS",
      "Letter of Credit (for large orders)",
      "Other modes as per terms.",
    ],
  },
  {
    title: "Delivery Time",
    points: [
      "Standard 3–7 working days depending on order size.",
      "Urgent orders can be prioritized.",
    ],
  },
];

const BulkInformation = () => {
  return (
    <section className="py-4 bg-white">
      <div className="w-100% mx-6">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#0A2D62]">
            5. BULK ORDER INFORMATION
          </h2>

          <div className="w-16 h-1 bg-lime-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">

          {information.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white p-5 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-[#0A2D62] mb-4">
                {item.title}
              </h3>

              <ul className="space-y-4 list-disc text-gray-600 text-sm ml-5">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BulkInformation;