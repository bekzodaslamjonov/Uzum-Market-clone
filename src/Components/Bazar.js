import { Box, Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Common/Card/Card";
import { Api } from "../Api/Api";
import axios from "axios";
import Slides from "./Common/Slide/Slides";

export default function Bazar() {
  const [product1, setProduc1] = useState([]);
  useEffect(() => {
    axios.get(Api + "bazar/?_start=0&_limit=5").then((res) => setProduc1(res.data));
  }, []);
  const [product2, setProduct2] = useState([]);
  useEffect(() => {
    axios.get(Api + "bazar/?_start=5&_limit=10").then((res) => setProduct2(res.data));
  }, []);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "#000",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
          Базар не выходя из дома
          </Typography>
          <i style={{ fontSize: "30px" }} class="bx bx-chevron-right"></i>
        </Link>
      </Box>
      {/* <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "10px",
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
      </Box> */}
      <Slides product1={product1} product2={product2} />
    </>
  );
}
