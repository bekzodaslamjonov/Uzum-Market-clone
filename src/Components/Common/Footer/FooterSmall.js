import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Bottom from "../Bottom/Bottom";

export default function FooterSmall() {
  // let [hidden, setHidden] = useState("hidden");
  let [show, setShow] = useState("none");

  let showBtn = () => {
    setShow("Flex");
  };
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "Flex",
          lg: "none",
          xl: "none",
        },
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "400px",
          display: {
            xs: "flex",
            sm: "flex",
            md: "flex",
            lg: "none",
            xl: "none",
          },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{ width: "100%", height: "auto", borderBottom: "1px solid " }}
          >
            <Button sx={{ width: "100%", height: "50px" }} onClick={showBtn}>
              <Typography>О нас</Typography>
            </Button>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: show,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography>Пункты выдачи</Typography>
              <Typography>Вакансии</Typography>
            </Box>
          </Box>
          <Box
            sx={{ width: "100%", height: "auto", borderBottom: "1px solid " }}
          >
            <Button sx={{ width: "100%", height: "50px" }} onClick={showBtn}>
              <Typography> Пользователям</Typography>
            </Button>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: show,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography>Пункты выдачи</Typography>
              <Typography>Вакансии</Typography>
            </Box>
          </Box>
          <Box
            sx={{ width: "100%", height: "auto", borderBottom: "1px solid " }}
          >
            <Button sx={{ width: "100%", height: "50px" }} onClick={showBtn}>
              <Typography>  Для предпринимателей</Typography>
            </Button>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: show,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography>Пункты выдачи</Typography>
              <Typography>Вакансии</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Bottom />
    </Box>
  );
}
