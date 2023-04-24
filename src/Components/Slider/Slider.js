import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../Images/SwiperImaage1.jpg";
import slide2 from "../../Images/SwiperImage2.jpg";
import slide3 from "../../Images/SwiperImage3.jpg";
import slide4 from "../../Images/SwipewerImage4.jpg";
import slide5 from "../../Images/SwipewerImage5.jpg";
import slide6 from "../../Images/SwipewerImage6.jpg";
import slide7 from "../../Images/SwipewerImage7.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
  HashNavigation,
} from "swiper";

import "./Slider.css";
import { Box } from "@mui/material";

export default function Slider() {


  
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: '460px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Swiper
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          hashNavigation={{
            watchState: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Keyboard, HashNavigation]}
          className="mySwiper"
          style={{ width: "100%", height: "413px", borderRadius: "20px" }}
        >
          <SwiperSlide data-hash="slide1">
            <img
              style={{ width: "100%", height: "100%" }}
              src={slide1}
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide2">
            <img
              style={{ width: "100%", height: "100%" }}
              src={slide2}
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide3">
            <img
              style={{ width: "100%", height: "100%" }}
              src={slide3}
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide4">
            <img
              style={{ width: "100%", height: "100%" }}
              src={slide4}
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide5">
            <img
              style={{ width: "100%", height: "100%" }}
              src={slide5}
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide6">
            <img
              style={{ width: "100%", height: "100%" }}
              src={slide6}
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide7">
            <img
              style={{ width: "100%", height: "100%" }}
              src={slide7}
              alt="#"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
