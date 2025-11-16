import React from 'react';
import wave from '../../assets/be-a-merchant-bg.png'
import location from '../../assets/location-merchant.png'
const SatisfactionSection = () => {
  return (
    <section className="bg-secondary mb-10 text-white rounded-3xl py-12 px-8 md:px-14 mt-12 relative overflow-hidden">
     
      <img
        src={wave}  
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
            Merchant and Customer Satisfaction <br />
            is Our First Priority
          </h2>

          <p className="text-gray-200 mb-8">
            We offer the lowest delivery charge with the highest value along with 
            100% safety of your product. ZapShift courier delivers your parcels in 
            every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-black font-medium py-3 px-6 rounded-full hover:opacity-90">
              Become a Merchant
            </button>

            <button className="border border-primary text-primary py-3 px-6 rounded-full hover:bg-[#C6FF4D]/10">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        
        <div>
          <img
            src={location}  
            alt="parcel illustration"
            className="w-72 md:w-96"
          />
        </div>

      </div>
    </section>
  );
};

export default SatisfactionSection;
