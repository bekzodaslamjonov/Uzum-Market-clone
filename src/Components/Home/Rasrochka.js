import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slides from "../Common/Slides/Slides";
import axios from "axios";
import { Api } from "../../Api/Api";

export default function Rasrochka() {
  // let [product, setProduct] = useState([]);
  let product =[]
  let [data, setdata] = useState([]);
  useEffect(() => {
    axios.get(Api + "product").then((res) => setdata(res.data));
  }, []);
  product = data.filter((item) => item.type === "rasrochka");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "30vh",
            sm: "35vh",
            md: "50vh",
            lg: "50vh",
            xl: "50vh",
          },
          borderRadius: "10px",
          overflow: "hidden",
          ":hover img": {
            transform: "scale(1.05)",
            transition: "all .25s linear",
          },
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://images.uzum.uz/cfublbnhgiov1qid61c0/main_page_banner.jpg"
          alt="#"
        />
      </Box>
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
            Рассрочка без переплат
          </Typography>
          <i style={{ fontSize: "30px" }} className="bx bx-chevron-right"></i>
        </Link>
      </Box>
      <Slides product={product} />
    </>
  );
}
