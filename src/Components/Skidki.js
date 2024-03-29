import { Box, Button, Typography } from "@mui/material";
import React, {  useEffect, useState } from "react";

import Card from "./Common/Card/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { Api } from "../Api/Api";

export default function Skidki() {
  // let [product,setProduct]= useState([]);
  let product =[]
  let [data,setData]=useState([])
  let [showBtn, setShowBtn] = useState("flex");
  let [hiddenBtn, setHiddenBtn] = useState("none");
  let [toggle, setToggle] = useState(true);
  
  useEffect(() => {
    axios
      .get(Api + "product")
      .then((res) => setData(res.data));
  }, []);
    product=data.filter((item) => item.type === "skidki")

  const showAll = () => {
    setShowBtn("none");
    setHiddenBtn("flex");
    setToggle(!toggle);
  };
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
            Cкидки
          </Typography>
          <i style={{ fontSize: "30px" }} className="bx bx-chevron-right"></i>
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
        {!toggle
          ? product.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                credit={item.credit}
                skidka={item.skidka}
                price={item.price}
                ocenka={item.ocenka}
                star={item.star}
                icon={item.activeIcon}
                descript={item.descript}
              />
            ))
          : product
              .splice(0, 20)
              .map((item, index) => (
                <Card
                  key={index}
                  img={item.img}
                  credit={item.credit}
                  skidka={item.skidka}
                  price={item.price}
                  ocenka={item.ocenka}
                  star={item.star}
                  icon={item.activeIcon}
                  descript={item.descript}
                />
              ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={showAll}
          sx={{
            width: "740px",
            height: "54px",
            display: showBtn,
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgba(118, 121, 127, 0.1)",
            ":hover": { bgcolor: "rgba(118, 121, 127, 0.20)" },
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#000" }}>
            показать еще 20
          </Typography>
        </Button>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "740px",
              height: "54px",
              display: hiddenBtn,
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgba(118, 121, 127, 0.1)",
              ":hover": { bgcolor: "rgba(118, 121, 127, 0.20)" },
            }}
          >
            <Typography 
              sx={{ fontSize: "16px", fontWeight: 600, color: "#000" }}
            >
              Посмотреть всю подборку
            </Typography>
          </Button>
        </Link>
      </Box>
    </>
  );
}
