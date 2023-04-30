import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import Card from "../Card/Card";

export default function Slides({product}) {
  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   axios.get(Api + "rasrochka").then((res) => setProduct(res.data));
  // }, []);
  return (
    <>
      <Box sx={{ width: "100%", height: "70vh",display:"flex",alignItems:"center" }}>
        <Swiper
          style={{
            width: "auto",
            height: "70vh",
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
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
