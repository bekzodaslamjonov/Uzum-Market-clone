import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../../../Images/image.svg";
import { Link } from "react-router-dom";
import logo2 from "../../../Images/logo2.svg";
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
          lg: "130px",
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
          justifyContent: {
            lg: "space-between",
            xl: "unset",
          },
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
            justifyContent: {
              xs: "space-between",
              sm: "space-between",
              md: "space-between",
              lg: "space-evenly",
              xl: "space-evenly",
            },
          }}
        >
          {/* logo */}
          <Link to={"/"}>
            <Box
              sx={{
                width: {
                  xs: "150px",
                  sm: "180px",
                  md: "215px",
                  lg: "215px",
                  xl: "215px",
                },
                height: "32px",
                display: "flex",
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "unset",
                  xl: "unset",
                },
              }}
            >
              <Button
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                <Typography sx={{ fontSize: "30px" }}>
                  <i class="bx bx-menu"></i>
                </Typography>
              </Button>
              {
                <img
                  width={"100%"}
                  height={"100%"}
                  src={window.innerWidth <= 600 ? logo2 : logo}
                  alt=""
                />
              }``
            </Box>
          </Link>
          {/* Каталог btn */}
          <Button
            onClick={collectBtn}
            sx={{
              width: "120px",
              height: "40px",
              bgcolor: "#eaeaf9",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
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
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
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

          <Box
            sx={{
              width: {
                md: "230px",
                lg: "345.43px",
                xl: "345.43px",
              },
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              sx={{
                width: "auto",
                height: "38px",
                bgcolor: "transparent",
                ":hover": { bgcolor: "#fafafa" },
                gap: "10px",
                fontSize: "20px",
                color: "#000",
              }}
            >
              <i class="bx bx-user"></i>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "unset",
                  },
                }}
              >
                Войти
              </Typography>
            </Button>
            <Button
              sx={{
                width: "auto",
                height: "38px",
                bgcolor: "transparent",
                ":hover": { bgcolor: "#fafafa" },
                gap: "10px",
                fontSize: "20px",
                color: "#000",
              }}
            >
              <i class="bx bx-heart"></i>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "unset",
                  },
                }}
              >
                Избранное
              </Typography>
            </Button>
            <Button
              sx={{
                width: "auto",
                height: "38px",
                bgcolor: "transparent",
                ":hover": { bgcolor: "#fafafa" },
                gap: "10px",
                fontSize: "20px",
                color: "#000",
              }}
            >
              <i class="bx bx-shopping-bag"></i>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "unset",
                  },
                }}
              >
                Корзина
              </Typography>
            </Button>
          </Box>
        </Box>
        {/* navigation links */}
        <Box
          sx={{
            width: "100%",
            height: {
              xl: "38px",
            },
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <ul
            style={{
              width: "100%",
              listStyle: "none",
              display: "flex",
              justifyContent: "space-around",
              fontSize: "14px",
            }}
          >
            <li>Электроника</li>
            <li>Бытовая техника</li>
            <li>Одежда</li>
            <li>Обувь</li>
            <li>Аксессуары</li>
            <li>Красота</li>
            <li>Товары для дома</li>
            <li>Строительство и ремонт</li>
            <li>Автотовары</li>
            <li>Детские товары</li>
          </ul>
          <Button sx={{ width: "auto", fontSize: "14px" }}>
            <Typography sx={{ fontSize: "14px", textTransform: "none" }}>
              Ещё
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            // bgcolor: "#f1f1f2",
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            },
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: {
                xs: "10px",
                sm: "40px",
                md: "60px",
              },
            }}
          >
            <i class="bx bx-search"></i>
          </Box>

          <input
            type="text"
            placeholder="Искать товары и категории"
            style={{
              width: "80%",
              height: "34px",
              outline: "none",
              border: "none",
              backgroundColor: "#f1f1f2",
              padding: "0 41px 0 40px",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
