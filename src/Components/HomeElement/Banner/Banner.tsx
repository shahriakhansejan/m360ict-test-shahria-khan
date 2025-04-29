import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import banner1 from "../../../assets/image/banner1.png";
import banner2 from "../../../assets/image/banner2.png";
import banner3 from "../../../assets/image/banner3.png";

import BannerText from "./BannerText";

const Banner: React.FC = () => {
  const banners: string[] = [banner1, banner2, banner3];

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        effect="flip"
        grabCursor
        centeredSlides
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="text-start"
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <BannerText />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
