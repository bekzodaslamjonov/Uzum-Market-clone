import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React, { useState } from "react";

export default function TopDrawer({ show }) {
  let [transform1] = useState("translateY(-190vh)");
  let [transform] = useState("translateY(0vh)");
  let [electro, setElektro] = useState("none");
  let [technic, setTechnic] = useState("none");
  let [odejda, setodejda] = useState("none");
  let [obuv, setObuv] = useState("none");
  let [aksesuari, setaksesuari] = useState("none");
  let [krasota, setKrasota] = useState("none");
  let [zadarovie, setZadarovie] = useState("none");
  let [tovar, settovar] = useState("none");
  let [stroy, setstroy] = useState("none");
  let [avto, setavto] = useState("none");
  let [detskiy, setdetskiy] = useState("none");
  let [hobbi, sethobbi] = useState("none");
  let [sport, setsport] = useState("none");
  let [bitt, setbitt] = useState("none");
  let [product, setproduct] = useState("none");
  let [kanc, setKanc] = useState("none");
  let [zoo, setZoo] = useState("none");
  let [knigi, setKnigi] = useState("none");
  let [dacha, setDacha] = useState("none");
  const electroFunc = () => {
    setElektro("block");
    setTechnic("none");
    setodejda("none");
  };
  const TechnicFunc = () => {
    setodejda("none");
    setElektro("none");
    setTechnic("block");
  };
  const odejdaFunc = () => {
    setodejda("block");
    setElektro("none");
    setTechnic("none");
  };
  const obuvFunc = () => {
    setObuv("block");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const aksesuariFunc = () => {
    setaksesuari("block");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const krasotaFunc = () => {
    setKrasota("block");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const zadarovieFunc = () => {
    setZadarovie("block");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const tovarFunc = () => {
    settovar("block");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const stroyFunc = () => {
    setstroy("block");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const avtoFunc = () => {
    setavto("block");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const detskiyFunc = () => {
    setdetskiy("block");
    setavto("none");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const hobbiFunc = () => {
    sethobbi("block");
    setdetskiy("none");
    setavto("none");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const sportFunc = () => {
    setsport("block");
    sethobbi("none");
    setdetskiy("none");
    setavto("none");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const bittFunc = () => {
    setbitt("block");
    setsport("none");
    sethobbi("none");
    setdetskiy("none");
    setavto("none");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const productFunc = () => {
    setproduct("block");
    setbitt("none");
    setsport("none");
    sethobbi("none");
    setdetskiy("none");
    setavto("none");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const kancFunc = () => {
    setKanc("block");
    setproduct("none");
    setbitt("none");
    setsport("none");
    sethobbi("none");
    setdetskiy("none");
    setavto("none");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const zooFunc = () => {
    setZoo("block");
    setKanc("none");
    setproduct("none");
    setbitt("none");
    setsport("none");
    sethobbi("none");
    setdetskiy("none");
    setavto("none");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const knigiFunc = () => {
    setKnigi("block");
    setZoo("none");
    setKanc("none");
    setproduct("none");
    setbitt("none");
    setsport("none");
    sethobbi("none");
    setdetskiy("none");
    setavto("none");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  const dachaFunc = () => {
    setDacha("block");
    setKnigi("none");
    setZoo("none");
    setKanc("none");
    setproduct("none");
    setbitt("none");
    setsport("none");
    sethobbi("none");
    setdetskiy("none");
    setavto("none");
    setstroy("none");
    settovar("none");
    setZadarovie("none");
    setKrasota("none");
    setaksesuari("none");
    setObuv("none");
    setodejda("none");
    setElektro("none");
    setTechnic("none");
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "150vh",
          position: "absolute",
          zIndex: "2",
          backgroundColor: "#fafafa",
          top: "100px",
          left: "0",
          transform: `${!show ? transform1 : transform}`,
          boxShadow: "1px 10px 17px -6px rgba(0,0,0,0.52)",
          display: "flex",
          justifyContent: "center",
          overflow:'hidden'
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "270px", height: "100%", backgroundColor: "aqua" }}>
            <List>
              <ListItem>
                <ListItemButton onMouseOver={() => electroFunc()}>
                  <Typography>Электроника</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => TechnicFunc()}>
                  <Typography>Бытовая техника</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => odejdaFunc()}>
                  <Typography>Одежда</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => obuvFunc()}>
                  <Typography>Обувь</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => aksesuariFunc()}>
                  <Typography>Аксессуары</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => krasotaFunc()}>
                  <Typography>Красота</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => zadarovieFunc()}>
                  <Typography>Здоровье</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => tovarFunc()}>
                  <Typography>Товары для дома</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => stroyFunc()}>
                  <Typography>Строительство и ремонт</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => avtoFunc()}>
                  <Typography>Автотовары</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => detskiyFunc()}>
                  <Typography>Детские товары</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => hobbiFunc()}>
                  <Typography>Хобби и творчество</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => sportFunc()}>
                  <Typography>Спорт и отдых</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => productFunc()}>
                  <Typography>Продукты питания</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => bittFunc()}>
                  <Typography>Бытовая химия и личная гигиена</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => kancFunc()}>
                  <Typography>Канцтовары</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => zooFunc()}>
                  <Typography>Зоотовары</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => knigiFunc()}>
                  <Typography>Книги</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onMouseOver={() => dachaFunc()}>
                  <Typography>Дача, сад и огород</Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box sx={{ width: "950px", height: "100%" }}>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: electro,
                backgroundColor: "red",
              }}
            >
              Электроника
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: technic,
                backgroundColor: "green",
              }}
            >
              Бытовая техника
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: odejda,
                backgroundColor: "green",
              }}
            >
              Одежда
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: obuv,
                backgroundColor: "green",
              }}
            >
              Обувь
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: aksesuari,
                backgroundColor: "green",
              }}
            >
              Аксессуары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: krasota,
                backgroundColor: "green",
              }}
            >
              Красота
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: zadarovie,
                backgroundColor: "green",
              }}
            >
              Здоровье
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: tovar,
                backgroundColor: "green",
              }}
            >
              Товары для дома
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: stroy,
                backgroundColor: "green",
              }}
            >
              Строительство и ремонт
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: avto,
                backgroundColor: "green",
              }}
            >
              Автотовары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: detskiy,
                backgroundColor: "green",
              }}
            >
              Детские товары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: hobbi,
                backgroundColor: "green",
              }}
            >
              Хобби и творчество
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: sport,
                backgroundColor: "green",
              }}
            >
              Спорт и отдых
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: product,
                backgroundColor: "green",
              }}
            >
              Продукты питания
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: bitt,
                backgroundColor: "green",
              }}
            >
              Бытовая химия и личная гигиена
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: kanc,
                backgroundColor: "green",
              }}
            >
              Канцтовары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: zoo,
                backgroundColor: "green",
              }}
            >
              Зоотовары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: knigi,
                backgroundColor: "green",
              }}
            >
              Книги
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: dacha,
                backgroundColor: "green",
              }}
            >
              Дача, сад и огород
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
