import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import "./Slides.css";
import Card from "../Card/SmallCard";
export default function Slides({ product1, product2 }) {
  var slide1 = product1[0];
  var slide2 = product1[1];
  var slide3 = product1[2];
  var slide4 = product1[3];
  var slide5 = product1[4];
  var slide6 = product2[0];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: {
            lg: "100vh",
            xl: "70vh",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Swiper
          style={{
            width: "100vw",
            height: "100%",
          }}
          navigation={true}
          slidesPerView={5}
          spaceBetween={10}
          pagination={false}
          modules={[Pagination, Navigation]}
          // breakpoints={{
          //   // when window width is >= 640px
          //   640: {
          //     width: 640,
          //     slidesPerView: 1,
          //   },
          //   // when window width is >= 768px
          //   1200: {
          //     width: 1200,
          //     slidesPerView: 4,
          //   },
          // }}
        >
          <SwiperSlide>
            <Card
              img={slide1.img}
              kredit={slide1.kredit}
              skidka={slide1.skidka}
              price={slide1.price}
              ocenka={slide1.ocenka}
              star={slide1.star}
              icon={slide1.activeIcon}
              descript={slide1.descript}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={slide2.img}
              kredit={slide2.kredit}
              skidka={slide2.skidka}
              price={slide2.price}
              ocenka={slide2.ocenka}
              star={slide2.star}
              icon={slide2.activeIcon}
              descript={slide2.descript}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={slide3.img}
              kredit={slide3.kredit}
              skidka={slide3.skidka}
              price={slide3.price}
              ocenka={slide3.ocenka}
              star={slide3.star}
              icon={slide3.activeIcon}
              descript={slide3.descript}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={slide4.img}
              kredit={slide4.kredit}
              skidka={slide4.skidka}
              price={slide4.price}
              ocenka={slide4.ocenka}
              star={slide4.star}
              icon={slide4.activeIcon}
              descript={slide4.descript}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={slide5.img}
              kredit={slide5.kredit}
              skidka={slide5.skidka}
              price={slide5.price}
              ocenka={slide5.ocenka}
              star={slide5.star}
              icon={slide5.activeIcon}
              descript={slide5.descript}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={slide6.img}
              kredit={slide6.kredit}
              skidka={slide6.skidka}
              price={slide6.price}
              ocenka={slide6.ocenka}
              star={slide6.star}
              icon={slide6.activeIcon}
              descript={slide6.descript}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
