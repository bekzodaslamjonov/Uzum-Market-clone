import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
          height: {
            xs:'40vh',
            sm:'40vh',
            md:'50vh',
            lg:'50vh',
            xl:'50vh'
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Swiper
          spaceBetween={0}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          hashNavigation={{
            watchState: true,
          }}
          breakpoints={{
            900: {
              width: 900,
              slidesPerView: 1,
            },
            1200: {
              width: 1200,
              slidesPerView: 1,
            },
            1536: {
              width: 1536,
              slidesPerView:1
            }}}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Keyboard, HashNavigation]}
          className="mySwiper"
          style={{
            width: "100%",
            height: {
              sm:'40vh',
              md:'40vh',
              lg:'40vh',
              xl:"50vh"
            },
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          <SwiperSlide  data-hash="slide1">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.uzum.uz/cgqmsq7g49devoadh810/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide2">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.uzum.uz/cghdvrjfkbipbv1u94ig/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide3">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.uzum.uz/cgqfulb57mg9720egung/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide4">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.uzum.uz/cgqg0d357mg9720egv60/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide5">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.uzum.uz/cgqfv57g49devoadeung/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide6">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.uzum.uz/cgqfvnvg49devoadeuu0/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide7">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.uzum.uz/cg7hqbfhj8j9g699qoa0/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
