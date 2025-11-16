import React from "react";
import {
  FiTruck,
  FiGlobe,
  FiBox,
  FiDollarSign,
  FiBriefcase,
  FiRotateCw,
} from "react-icons/fi";

const services = [
  {
    icon: <FiTruck size={36} />,
    title: "Express & Standard Delivery",
    text: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    icon: <FiGlobe size={36} />,
    title: "Nationwide Delivery",
    text: "We deliver parcels nationwide with home delivery in every district; ensuring your products reach customers within 48–72 hours.",
   
  },
  {
    icon: <FiBox size={36} />,
    title: "Fulfillment Solution",
    text: "We also offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
  },
  {
    icon: <FiDollarSign size={36} />,
    title: "Cash on Home Delivery",
    text: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    icon: <FiBriefcase size={36} />,
    title: "Corporate Service / Contract In Logistics",
    text: "Customized corporate services which include warehouse and inventory management support.",
  },
  {
    icon: <FiRotateCw size={36} />,
    title: "Parcel Return",
    text: "Through our reverse logistic facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurServices = () => {
  return (
    <section className="mb-10 bg-secondary text-white text-center px-6 py-14 rounded-[30px]">
      <h2 className="text-3xl font-bold mb-3">Our Services</h2>
      <p className="text-sm max-w-2xl mx-auto opacity-90 mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        From personal packages to business shipments — we deliver on time, every time.
      </p>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-7 text-left shadow-md transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-primary
              ${
                srv.highlight
                  ? "bg-[#c8f05c]"
                  : "bg-white"
              }`}
          >
            <div className="mb-3 text-[#0b3c35]">{srv.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-black">{srv.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{srv.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
