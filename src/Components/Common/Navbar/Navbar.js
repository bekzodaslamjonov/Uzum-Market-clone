import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../../../Images/image.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [collect, setCollect] = useState(true);
  let [clearB, setClearB] = useState("none");

  let collectBtn = () => {
    setCollect(!collect);
  };
  let inputChang = () => {
    setClearB("block");
  };
  return (
    <Box
      sx={{
        width: {
          xl: "100%",
        },
        height: {
          xl: "120px",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xl: "100%",
          },
          height: {
            xl: "90px",
          },
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* Logo bar */}
        <Box
          sx={{
            width: "100%",
            height: {
              xl: "42px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* logo */}
          <Link to={"/"}>
            <Box sx={{ width: "215px", height: "32px" }}>
              <img src={logo} alt="" />
            </Box>
          </Link>
          {/* Каталог btn */}
          <Button
            onClick={collectBtn}
            sx={{
              width: "120px",
              height: "40px",
              bgcolor: "#eaeaf9",
              ":hover": { bgcolor: "#eaeaf9" },
              gap: "10px",
              fontSize: "20px",
              color: "#33c",
            }}
          >
            {!collect ? (
              <i class="bx bx-x"></i>
            ) : (
              <i class="bx bx-collection"></i>
            )}
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
              Каталог
            </Typography>
          </Button>
          {/* input */}
          <Box
            sx={{
              width: "425px",
              height: "38px",
              border: "1px solid",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <input
              onChange={inputChang}
              placeholder={"Искать товары и категории"}
              style={{
                padding: "0 calc(15% + 58px) 0 16px ",
                border: "none",
                background: "transparent",
                outline: "none",
              }}
              type="text"
            />
            <Button
              sx={{
                width: "39px",
                height: "100%",
                fontSize: "18px",
                color: "#000",
                display: clearB,
              }}
            >
              <i class="bx bx-x"></i>
            </Button>
            <Button
              sx={{
                width: "63px",
                height: "100%",
                fontSize: "18px",
                color: "#000",
                bgcolor: "#f8f8f8",
                ":hover": {
                  bgcolor: "#f8f8f8",
                },
              }}
            >
              <i class="bx bx-search"></i>
            </Button>
          </Box>

          <Box sx={{ width: "345.43px", height: "42px" }}>

          </Box>
        </Box>
        {/* navigation links */}
        <Box
          sx={{
            width: "100%",
            height: {
              xl: "38px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            bgcolor: "red",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
