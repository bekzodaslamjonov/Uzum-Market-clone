import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import { Box, Typography } from "@mui/material";
import Card from "./Common/Card/Card";

import { Api } from "../Api/Api";
import axios from "axios";

export default function Home() {
  const buyBtn = (index) => {
    // let obj = data[index];
    // newData.push(obj);
    // localStorage.setItem("karzina", JSON.stringify(newData));
    // setBadgeval(JSON.parse(localStorage.getItem("karzina")).length);
    // data[index].activeIcon = !data[index].activeIcon;
  };

  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get(Api + "Products").then(res=>setProduct(res.data))
  }, []);


  return (
    <Box sx={{ width: "100%",
    height: "1500px", display: "flex", flexDirection: "column" }}>
      <Slider />

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            gap:'10px'
          }}
        >
          <Typography sx={{ fontSize: "28px" }}>Хаитлик</Typography>
          <i style={{fontSize: "30px"}} class="bx bx-chevron-right"></i>
        </Box>
        {product.length !== 0
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
                buyBtn={() => buyBtn(index)}
              />
            ))
          : ""}
      </Box>
      {/* <Box sx={{ width: "100%", height: "1000px" }}></Box> */}
    </Box>
  );
}
