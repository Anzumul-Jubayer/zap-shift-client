import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import image from '../../../assets/customer-top.png'
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
   <div className="my-20">
    <div className="space-y-2 mb-10">
       <div className="flex justify-center">
        <img src={image} alt="" className="w-50" />
       </div>
       <h2 className="font-bold text-secondary text-3xl text-center">What our customers are sayings</h2>
       <p className="text-gray-500 text-center">Enhance posture, mobility, and well-being effortlessly with   Posture Pro.Achieve proper alignment,<br />  reduce pain, and strengthen your body with ease!</p>
    </div>
     <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      loop={true}
      coverflowEffect={{
        rotate: 30,
        stretch: '50%',
        depth: 200,
        modifier: 1,
        scale:0.75,
        slideShadows: true,
        
      }}
       autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
       
      pagination={true}
      modules={[EffectCoverflow, Pagination,Autoplay]}
      className="mySwiper"
    >
      {reviews.map((reviewData) => (
        <SwiperSlide>
          <ReviewCard key={reviewData.id} reviewData={reviewData}></ReviewCard>
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
};

export default Reviews;
