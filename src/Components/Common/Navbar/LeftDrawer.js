import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import axios from "axios";

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
            height: "320",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "50%",
              borderBottom: "1px solid",
              display: "flex",
              alignItems: "start",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            {buttons.length !== 0
              ? buttons.map((item, index) => (
                  <Button>
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
        </Box>
      </Box>
    </>
  );
}
