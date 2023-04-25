import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
// import StarOutlineIcon from "@mui/icons-material/StarOutline";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export default function Card({
  img,
  kredit,
  skidka,
  price,
  star,
  ocenka,
  buyBtn,
  icon,
  descript,
}) {

  const [butt,setbutt]=useState(false)

  const  but = ()=>{
    setbutt(!butt)
  }
  return (
    <Box
      sx={{
        width: {
          xs:'180px',
          sm:'250px',
          md:"279.68px",
          lg:"273px",
          xl:"232px"
        },
        height: {
          xs:'450.66px',
          sm:'480.61px',
          md:'508.9px',
          lg:'511px',
          xl:"456px"
        },
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        ":hover": {
          transform: "Scale(1.05)",
          transition: ".3s all linear",
          boxShadow: "2px 12px 20px 5px rgba(34, 60, 80, 0.2)",
        },
       
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: {
            xs:"249px",
            sm:"374px",
            md:"379px",
            lg:"364px",
            xl:'309px'
          },
          bgcolor: "#efefef",
          position: "relative",
        }}
      >
        <Typography
          onClick={but}
          sx={{
            fontSize: "25px",
            color: butt,
            position: "absolute",
            right: "6px",
            top:"10px",
            cursor:"pointer"
            
          }}
        >
          {
            !butt ? 
            <i class="bx bx-heart"></i>
            :
            <i class="bx bxs-heart"></i>

          }
        </Typography>

        <Box
          sx={{
            width: "70px",
            height: "20px",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            bgcolor: "#5000aa",
            display: "flex",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ fontSize: "13px", color: "white" }}>
            Акция
          </Typography>
        </Box>
        <img style={{width:'100%',height:'100%'}} src={img} alt="#" />
      </Box>
      <Box sx={{ width: "90%", height: "147px", marginLeft: "5%" }}>
        <Box
          sx={{
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "11px" }}>{descript}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "22px",
            display: "flex",
            alignItems: "center",
            fontSize: "11px",
          }}
        >
          <i class="bx bx-star"></i>
          <Typography sx={{ fontSize: "11px", color: "#000" }}>
            {star}({ocenka} оценок)
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "20px",
            borderRadius: "10px",
            bgcolor: "#FFFF00",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "11px" }}>{kredit}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "43px",
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box sx={{ width: "77px", height: "20px" }}>
            <Typography
              sx={{ fontSize: "11px", textDecoration: "line-through" }}
            >
              {skidka}
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>{price}</Typography>
          </Box>
          <Button
            onClick={buyBtn}
            sx={{ position: "absolute", bottom: "-15px", right: "0" }}
          >
            <Typography sx={{ fontSize: "28px" }}>
              {icon ? (
                <i class="bx bx-shopping-bag"></i>
              ) : (
                <i class="bx bx-cart-add"></i>
              )}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
