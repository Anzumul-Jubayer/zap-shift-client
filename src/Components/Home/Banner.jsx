import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full  mb-6 rounded-2xl overflow-hidden ">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              className="absolute top-1/2 left-4 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
              onClick={onClickHandler}
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              className="absolute top-1/2 right-4 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
              onClick={onClickHandler}
            >
              ❯
            </button>
          )
        }
      >
        {[banner1, banner2, banner3].map((img, i) => (
          <div key={i} className="relative">
            <img src={img} className="object-cover h-[450px] w-full" />

           

          
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
