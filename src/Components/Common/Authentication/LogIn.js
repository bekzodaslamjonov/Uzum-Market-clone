import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function LogIn({ closLog }) {
  return (
    <Box
      sx={{
        width: "420px",
        height: "480px",
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ width: "85%", height: "80%" }}>
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <button
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "#f1f1f2",
              borderRadius: "50%",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
            }}
            onClick={closLog}
          >
            <i class="bx bx-x"></i>
          </button>
        </Box>
        <Box
          component="form"
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Электронная почта"
            variant="outlined"
            type="email"
            sx={{ width: "100%" }}
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Введите номер телефона"
            variant="outlined"
            type="telephone "
            sx={{ width: "100%" }}
          ></TextField>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography>
            Авторизуясь, вы соглашаетесь c {""}
            <Link
              style={{ textDecoration: "none", color: "blue" }}
              to={"https://legal.uzum.uz/privacy-policy.html"}
            >
              политикой обработки персональных данных
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
