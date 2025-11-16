import { useState } from "react";

const AboutUs = () => {
  const [active, setActive] = useState("Story");

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  const paragraph = `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. 
Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.`;

  return (
    <div className="w-full bg-[#f5f6f8] py-16 px-6 flex justify-center">
      <div className="bg-white w-full max-w-5xl rounded-2xl p-10 shadow-sm">

       
        <h2 className="text-3xl font-bold text-[#033b37]">About Us</h2>

       
        <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>

       
        <hr className="my-6 border-gray-200" />

        
        <div className="flex space-x-8 text-lg mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-1 transition ${
                active === tab
                  ? "text-[#7bd389] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-gray-600 leading-relaxed space-y-6">
          <p>{paragraph}</p>
          <p>{paragraph}</p>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
