import React from "react";
import trackingImg from "../../assets/live-tracking.png";
import supportImg from "../../assets/customer.avif";
import safeDeliveryImg from "../../assets/safe-delivery.png";

const features = [
  {
    img: trackingImg,
    title: "Live Parcel Tracking",
    text: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
  },
  {
    img: safeDeliveryImg,
    title: "100% Safe Delivery",
    text: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    img: supportImg,
    title: "24/7 Call Center Support",
    text: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="px-6 py-12 space-y-8">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-[#f2f5f6] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          {/* Left Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-40 md:w-52 object-contain"
          />

          {/* Dotted Vertical Line */}
          <div className="hidden md:flex border-l-2 border-dotted border-gray-400 h-28"></div>

          {/* Content */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-[#002d39] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceFeatures;
