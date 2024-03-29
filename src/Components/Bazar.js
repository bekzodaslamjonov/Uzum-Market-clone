import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Api } from "../Api/Api";
import axios from "axios";
import Slides from "./Common/Slides/Slides";

export default function Bazar() {
  // let [product, setProduct] = useState([]);
  let product =[]
  let [data, setdata] = useState([]);
  useEffect(() => {
    axios.get(Api + "product").then((res) => setdata(res.data));
  }, []);
  product = data.filter((item) => item.type === "bazar");
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
          <i style={{ fontSize: "30px" }} className="bx bx-chevron-right"></i>
        </Link>
      </Box>
      <Slides product={product} />
    </>
  );
}
