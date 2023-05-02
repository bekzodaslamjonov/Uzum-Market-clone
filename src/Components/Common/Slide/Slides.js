import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import SmallCard from "../Card/SmallCard";
import "./Slides.css";
export default function Slides({ product1, product2 }) {
  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   axios.get(Api + "rasrochka").then((res) => setProduct(res.data));
  // }, []);
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
          slidesPerView={1}
          spaceBetween={10}
          pagination={false}
          modules={[Pagination, Navigation]}
          // className="mySwiper"
        >
          <SwiperSlide
            style={{
              width: "100vw",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {product1.splice(5, 10)
                ? product1.map((item, index) => (
                    <SmallCard
                      key={index}
                      img={item.img}
                      kredit={item.kredit}
                      skidka={item.skidka}
                      price={item.price}
                      ocenka={item.ocenka}
                      star={item.star}
                      icon={item.activeIcon}
                      descript={item.descript}
                      // buyBtn={() => buyBtn(index)}
                    />
                  ))
                : ""}
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "100vw",
              height: "auto",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {product2.lenght !== 0
              ? product2.map((item, index) => (
                  <SmallCard
                    key={index}
                    img={item.img}
                    kredit={item.kredit}
                    skidka={item.skidka}
                    price={item.price}
                    ocenka={item.ocenka}
                    star={item.star}
                    icon={item.activeIcon}
                    descript={item.descript}
                    // buyBtn={() => buyBtn(index)}
                  />
                ))
              : ""}
          </SwiperSlide>
          {/* <SwiperSlide
            style={{
              width: "100vw",
              height: "auto",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {product.splice(1, 5)
              ? product.map((item, index) => (
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
                    // buyBtn={() => buyBtn(index)}
                  />
                ))
              : ""}
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "100vw",
              height: "auto",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {product.splice(5, 10)
              ? product.map((item, index) => (
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
                    // buyBtn={() => buyBtn(index)}
                  />
                ))
              : ""}
          </SwiperSlide> */}
        </Swiper>
      </Box>
    </>
  );
}
