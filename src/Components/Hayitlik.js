import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Api } from "../Api/Api";
import axios from "axios";
import Card from "./Common/Card/Card";
import { Link } from "react-router-dom";

export default function Hayitlik() {
  const [product, setProduct] = useState([]);
  let [showBtn,setShowBtn]=useState(true)
  useEffect(() => {
    axios.get(Api + "Products/?_start=0&_limit=10").then((res) => setProduct(res.data));
  }, []);

  //   const buyBtn = (index) => {
  //     // let obj = data[index];
  //     // newData.push(obj);
  //     // localStorage.setItem("karzina", JSON.stringify(newData));
  //     // setBadgeval(JSON.parse(localStorage.getItem("karzina")).length);
  //     // data[index].activeIcon = !data[index].activeIcon;
  //   };
  const showAll = ()=>{
    axios.get(Api + "Products/?_start=0&_limit=20").then((res) => setProduct(res.data))

  }
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
            Хаитлик
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
            bgcolor:'rgba(118, 121, 127, 0.1)',
            ":hover":{bgcolor:'rgba(118, 121, 127, 0.20)',}
          }}
        >
            
          <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#000" }}>
            показать еще 20
          </Typography>
        </Button>
      </Box>
    </>
  );
}
