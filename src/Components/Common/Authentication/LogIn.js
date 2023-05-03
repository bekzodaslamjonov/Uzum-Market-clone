import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

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
          <Typography sx={{ fontSize: "20px" }}>Регистрация</Typography>
          <TextField
            id="outlined-basic"
            label="Электронная почта"
            variant="outlined"
            type="email"
            sx={{ width: "100%" }}
          ></TextField>
          <InputMask
            mask="+999 (99) 999-99-99"
            maskChar=" "
            // value={props.value}
            // onChange={props.onChange}
          >
            {() => (
              <TextField
                label="Введите номер телефона"
                variant="outlined"
                fullWidth
              />
            )}
          </InputMask>
          <Button
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "#7000ff",
              ":hover": { backgroundColor: "#7000ff" },
            }}
          >
            <Typography sx={{ color: "white" }}>Зарегистрироваться</Typography>
          </Button>
          <Typography sx={{ fontSize: "14px" }}>
            Eсть аккаунт ?{" "}
            <Link style={{ textDecoration: "none", color: "blue" }}>
              Подключится
            </Link>
          </Typography>
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
