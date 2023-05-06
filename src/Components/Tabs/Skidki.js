import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bazar from "../Bazar";
import axios from "axios";
import { Api } from "../../Api/Api";
import Card from "../Common/Card/Card";
import Rasrochka from "../Rasrochka";

export default function Skidki() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(Api + "Skidki/?_start=0&_limit=6")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap:'5px'
        }}
      >
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
                // buyBtn={() => buyBtn(index)}
              />
            ))
          : ""}
      </Box>
      <Rasrochka/>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap:'5px'
        }}
      >
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
                // buyBtn={() => buyBtn(index)}
              />
            ))
          : ""}
      </Box> 
      <Bazar />
    </Box>
  );
}
