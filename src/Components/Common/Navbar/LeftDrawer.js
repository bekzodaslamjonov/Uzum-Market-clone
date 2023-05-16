import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import rus from "../../../Images/russ'.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LeftDrawer() {
  var buttons = [
    {
      id: 1,
      name: "Мои заказы",
      icons: "fa-solid fa-bag-shopping",
    },
    {
      id: 2,
      name: "Избранное",
      icons: "fa-solid fa-heart",
    },
    {
      id: 3,
      name: "Город:Ташкент",
      icons: "fa-solid fa-location-dot",
    },
    {
      id: 4,
      name: "Пункты выдачи",
      icons: "fa-solid fa-map",
    },
  ];
  var sButtons = [
    {
      id: 1,
      name: "Мои заказы",
      icons: "fa-solid fa-bag-shopping",
    },
    {
      id: 2,
      name: "Избранное",
      icons: "fa-solid fa-heart",
    },
    {
      id: 3,
      name: "Город:Ташкент",
      icons: "fa-solid fa-location-dot",
    },
  ];
  var accord = [
    {
      id: 1,
      name: "О нас",
      small: [
        {
          id: 1,
          name: "Пункты выдачи",
          link: "/ru/about/delivery-points",
        },
        {
          id: 2,
          name: "Вакансии",
          link: "/ru/about/careers",
        },
      ],
    },
    {
      id: 2,
      name: "Партнёрам",
      small: [
        {
          id: 1,
          name: "Продавайте на Uzum",
          link: "https://seller.uzum.uz/",
        },
        {
          id: 2,
          name: "Вход для продавцов",
          link: "https://seller.uzum.uz/seller/signin",
        },
      ],
    },
  ];
  var [catalogy, setCatalogy] = useState([]);
  useEffect(() => {
    axios.get(Api + "category").then((res) => setCatalogy(res.data));
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", height: "auto", backgroundColor: "#f4f5f5" }}>
        <Accordion>
          <AccordionSummary
            id={"panel-header"}
            aria-controls="panel1-content"
            expandIcon={<ExpandMore />}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "blue",
              }}
            >
              <i className="bx bx-collection"></i>
              <Typography>Каталог</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {catalogy.length !== 0
              ? catalogy.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      id={"panel-header"}
                      aria-controls="panel1-content"
                      expandIcon={<ExpandMore />}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <i className={item.icons}></i>
                        <Typography>{item.name}</Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails></AccordionDetails>
                  </Accordion>
                ))
              : ""}
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "98%",
            height: "450px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "45%",
              borderBottom: "1px solid",
              display: "flex",
              alignItems: "start",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            {buttons.length !== 0
              ? buttons.map((item, index) => (
                  <Button key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "#000",
                      }}
                    >
                      <i className={item.icons}></i>
                      <Typography sx={{ textTransform: "none" }}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Button>
                ))
              : ""}
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "45%",
              borderBottom: "1px solid",
              display: "flex",
              alignItems: "start",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            {sButtons.length !== 0
              ? sButtons.map((item, index) => (
                  <Button key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "#000",
                      }}
                    >
                      <i className={item.icons}></i>
                      <Typography sx={{ textTransform: "none" }}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Button>
                ))
              : ""}
            <Button>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#000",
                }}
              >
                <img
                  style={{ width: "24px", height: "24px" }}
                  src={rus}
                  alt="#"
                />
                <Typography sx={{ textTransform: "none" }}>
                  Пункты выдачи
                </Typography>
              </Box>
            </Button>
          </Box>
          <Box sx={{ width: "100%", height: "auto" }}>
            {accord.length !== 0
              ? accord.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      id={"panel-header"}
                      aria-controls="panel1-content"
                      expandIcon={<ExpandMore />}
                    >
                      <Typography>{item.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{display:'flex',flexDirection:"column"}}>

                      {accord[index].small.length !== 0
                        ? accord[index].small.map((item, index) => (
                            <Link key={index} to={item.link}>
                              <Button>
                                <Typography>{item.name}</Typography>
                              </Button>
                            </Link>
                          ))
                        : ""}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))
              : ""}
          </Box>
        </Box>
      </Box>
    </>
  );
}
