import React from "react";
import {
  FiTruck,
  FiDollarSign,
  FiPackage,
  FiBriefcase,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiTruck size={36} />,
    title: "Booking Pick & Drop",
    text: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FiDollarSign size={36} />,
    title: "Cash On Delivery",
    text: "Secure COD services ensuring trust and convenience for your customers.",
  },
  {
    icon: <FiPackage size={36} />,
    title: "Delivery Hub",
    text: "Fast & reliable delivery experience from our dedicated distribution hubs.",
  },
  {
    icon: <FiBriefcase size={36} />,
    title: "Booking SME & Corporate",
    text: "Special solutions for businesses and enterprises with smooth logistics management.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="hiw-card bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon wrapper */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-green-500 to-green-700 text-white rounded-xl flex items-center justify-center shadow-md">
                {step.icon}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {step.title}
            </h3>

            <p className="text-gray-600 text-center leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
