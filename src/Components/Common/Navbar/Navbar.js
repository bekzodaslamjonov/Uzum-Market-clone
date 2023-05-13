import { Box, Button, List, ListItem, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../../../Images/image.svg";
import { Link } from "react-router-dom";
import logo2 from "../../../Images/logo2.svg";
import LogIn from "../Authentication/LogIn";
import LeftDrawer from "./LeftDrawer";
import Categories from "./Categories";
import './Nav.css' 
export default function Navbar() {
  let [collect, setCollect] = useState(false);
  let [clearB, setClearB] = useState("none");
  let [openL, setOpenL] = useState(false);
  let [show,setShow]=useState(false)
  let [lDrawer,setLdrawer]=useState(false)
  let collectBtn = () => {
    setCollect(!collect);
    setShow(!show)
  };
  let inputChang = () => {
    setClearB("block");
  };
  let logIn = () => {
    setOpenL(!openL);
  };
  const closLog = () => {
    setOpenL(!openL);
  };
  const leftDrawer = ()=>{
    setLdrawer(!lDrawer)
  }
  return (
    <>
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
                  onClick={leftDrawer}
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
                    <i className="bx bx-menu"></i>
                  </Typography>
                </Button>
                {
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={window.innerWidth <= 600 ? logo2 : logo}
                    alt=""
                  />
                }
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
                <i className="bx bx-collection"></i>
              ) : (
                <i className="bx bx-x"></i>
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
                <i className="bx bx-x"></i>
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
                <i className="bx bx-search"></i>
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
                onClick={logIn}
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
                <i className="bx bx-user"></i>
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
                <i className="bx bx-heart"></i>
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
                <i className="bx bx-shopping-bag"></i>
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
              }}
            > 
            <Link style={{textDecoration:"none"}}>
              <li className="hover">Электроника</li>
            </Link>
            <Link style={{textDecoration:"none"}}>
              <li className="hover">Бытовая техника</li>
            </Link>
            <Link style={{textDecoration:"none"}}>
              <li className="hover">Одежда</li>
            </Link>
            <Link style={{textDecoration:"none"}}>
              <li className="hover">Обувь</li>
            </Link>
            <Link style={{textDecoration:"none"}}>
              <li className="hover">Аксессуары</li>
            </Link>
            <Link style={{textDecoration:"none"}}>
              <li className="hover">Красота</li>
            </Link>
            <Link style={{textDecoration:"none"}}>
              <li className="hover">Товары для дома</li>
            </Link>
            <Link style={{textDecoration:"none"}}>
              <li className="hover">Строительство и ремонт</li>
            </Link>
              <Link style={{textDecoration:"none"}}>
              <li className="hover">Автотовары</li>
              </Link >
              <Link style={{textDecoration:"none"}}>
              <li className="hover">Детские товары</li>
              </Link>
            </ul>
            {/* <List sx={{ width: "100%",
                listStyle: "none",
                display: "flex",
                // justifyContent: "space-around",
                fontSize: "14px",}}>
              <ListItem sx={{width:'auto'}}>Электроника</ListItem>
              <ListItem sx={{width:'auto'}}>Бытовая техника</ListItem>
              <ListItem sx={{width:'auto'}}>Одежда</ListItem>
              <ListItem sx={{width:'auto'}}>Обувь</ListItem>
              <ListItem sx={{width:'auto'}}>Аксессуары</ListItem>
              <ListItem sx={{width:'auto'}}>Товары для дома</ListItem>
              <ListItem sx={{width:'auto'}}>Строительство и ремонт</ListItem>
              <ListItem sx={{width:'auto'}}>Автотовары</ListItem>
              <ListItem sx={{width:'auto'}}>Детские товары</ListItem>
            </List> */}
            <Button
              onClick={collectBtn}
              sx={{ width: "auto", fontSize: "14px" }}
            >
              <Typography sx={{ fontSize: "14px", textTransform: "none" }}>
                Ещё
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
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
              <i className="bx bx-search"></i>
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
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={openL}
      >
        <LogIn closLog={closLog} />
      </Modal>
      <LeftDrawer lDrawer={lDrawer} />   
      <Categories show={show}/>

    </>
  );
}
