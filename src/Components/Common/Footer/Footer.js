import { Box, Typography } from "@mui/material";
import React from "react";
import Bottom from "../Bottom/Bottom";
import appstore from "../../../Images/apple-black-logo-svgrepo-com.svg";
import googlePlay from "../../../Images/Google_Play-Logo.wine.svg";
import inst from "../../../Images/Instagram-Logo.wine.svg";
import tg from "../../../Images/telegram-logo-svgrepo-com.svg";
import you from "../../../Images/youtube-icon-logo-svgrepo-com.svg";
import face from "../../../Images/facebook-icon-logo-svgrepo-com.svg";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "350px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ width: "20%", height: "100%",display:"flex" }}>
          <Typography>О нас</Typography>
          <Typography>Пункты выдачи</Typography>
          <Typography>Вакансии</Typography>
        </Box>
        <Box sx={{ width: "20%", height: "100%" }}>
          <Typography>Пользователям</Typography>
          <Typography>Связаться с нами</Typography>
          <Typography>Вопрос - Ответ</Typography>
        </Box>
        <Box sx={{ width: "20%", height: "100%" }}>
          <Typography>Для предпринимателей</Typography>
          <Typography>Продавайте на Uzum</Typography>
          <Typography>Вход для продавцов</Typography>
        </Box>
        <Box sx={{ width: "20%", height: "100%" }}>
          <Typography>Продавайте на Uzum</Typography>
          <Box sx={{ width: "100%", height: "50%", display: "flex" }}>
            <Box
              sx={{
                width: "50%",
                height: "30%",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img style={{ width: "20%" }} src={appstore} alt="" />
              <Typography>AppStore</Typography>
            </Box>
            <Box
              sx={{
                width: "50%",
                height: "30%",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img style={{ width: "100%" }} src={googlePlay} alt="" />
            </Box>
          </Box>
          <Typography>Uzum в соцсетях</Typography>
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img style={{ width: "20%", height: "30%" }} src={inst} alt="#" />
            <img style={{ width: "15%", height: "30%" }} src={tg} alt="#" />
            <img style={{ width: "20%", height: "30%" }} src={you} alt="#" />
            <img style={{ width: "15%", height: "30%" }} src={face} alt="#" />
          </Box>
        </Box>
      </Box>
      <Bottom />
    </>
  );
}
