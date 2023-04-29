import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Common/Card/Card";
import axios from "axios";
import { Api } from "../Api/Api";

export default function Rasrochka() {
  const [newpro, setNewPro] = useState([]);
  useEffect(() => {
  axios
    .get(Api + "rasrochka")
    .then((res) =>setNewPro(res.data));
  }, []);
  return (
    <>
     <Box
          sx={{
            width: "100%",
            height: "50vh",
            borderRadius: "10px",
            overflow: "hidden",
            ":hover img":{
              transform:'scale(1.05)',
              transition:'all .25s linear'

            }
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
          <i style={{ fontSize: "30px" }} class="bx bx-chevron-right"></i>
        </Link>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {newpro.length !== 0
          ? newpro.map((item, index) => (
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
    </>
  );
}
