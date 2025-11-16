import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../assets/brands/amazon.png";
import casio from "../../assets/brands/casio.png";
import monstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import star_people from "../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brands = [amazon, casio, monstar, randstad, star,star_people];
const Brands = () => {
  return (
    <div className="my-10">
        <h2 className="font-semibold text-center text-2xl mb-4 text-secondary">We've helped thousands of sales teams</h2>
        <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
       modules={[Autoplay]}
    >
        
      {brands.map((logo, i) => (
        <SwiperSlide key={i}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Brands;
