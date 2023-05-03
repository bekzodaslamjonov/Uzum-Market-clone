import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import "./Slides.css";
import Card from "../Card/SmallCard";
export default function Slides({ product}) {
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
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            1200: {
              width: 1200,
              slidesPerView: 4,
            },
          }}
        >
          {product.length !== 0
            ? product.map((item, index) => (
                <SwiperSlide>
                  <Card
                    key={index}
                    img={item.img}
                    kredit={item.kredit}
                    skidka={item.skidka}
                    price={item.price}
                    ocenka={item.ocenka}
                    star={item.star}
                    icon={item.activeIcon}
                    descript={item.descript}
                  />
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </Box>
    </>
  );
}
