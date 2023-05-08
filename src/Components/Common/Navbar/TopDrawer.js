import { Box, List, ListItemButton, Typography } from "@mui/material";
import React, { useState } from "react";
import electro1 from "../../../Images/electro.svg";
import bitt1 from "../../../Images/bitt.svg";
import odejda1 from "../../../Images/odejda.svg";
import obuv1 from "../../../Images/obuv.svg";
import aksses1 from "../../../Images/aksses.svg";
import krasota1 from "../../../Images/krasota.svg";
import zdarovie1 from "../../../Images/zdarovie.svg";
import tovari1 from "../../../Images/tovari.svg";
import stroy1 from "../../../Images/stroy.svg";
import avto1 from "../../../Images/avto.svg";
import detskoe1 from "../../../Images/detskoe.svg";
import hobbi1 from "../../../Images/hobbi.svg";
import sport1 from "../../../Images/sport.svg";
import product1 from "../../../Images/product.svg";
import ximiya1 from "../../../Images/ximiya.svg";
import kanctovari1 from "../../../Images/kanctovari.svg";
import zoo1 from "../../../Images/zoo.svg";
import knigi1 from "../../../Images/knigi.svg";
import dacha1 from "../../../Images/dacha.svg";

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
          backgroundColor: "#fff",
          top: "100px",
          left: "0",
          transform: `${!show ? transform1 : transform}`,
          boxShadow: "1px 10px 17px -6px rgba(0,0,0,0.52)",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
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
          <Box sx={{ width: "270px", height: "100%" }}>
            <List>
              <ListItemButton onMouseOver={() => electroFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img
                    style={{ width: 24, height: 24 }}
                    src={electro1}
                    alt=""
                  />
                  <Typography>Электроника</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => TechnicFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={bitt1} alt="" />
                  <Typography>Бытовая техника</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => odejdaFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={odejda1} alt="" />
                  <Typography>Одежда</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => obuvFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={obuv1} alt="" />
                  <Typography>Обувь</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => aksesuariFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={aksses1} alt="" />
                  <Typography>Аксессуары</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => krasotaFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img
                    style={{ width: 24, height: 24 }}
                    src={krasota1}
                    alt=""
                  />
                  <Typography>Красота</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => zadarovieFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img
                    style={{ width: 24, height: 24 }}
                    src={zdarovie1}
                    alt=""
                  />
                  <Typography>Здоровье</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => tovarFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={tovari1} alt="" />
                  <Typography>Товары для дома</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => stroyFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={stroy1} alt="" />
                  <Typography>Строительство и ремонт</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => avtoFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={avto1} alt="" />
                  <Typography>Автотовары</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => detskiyFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img
                    style={{ width: 24, height: 24 }}
                    src={detskoe1}
                    alt=""
                  />
                  <Typography>Детские товары</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => hobbiFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={hobbi1} alt="" />
                  <Typography>Хобби и творчество</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => sportFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={sport1} alt="" />
                  <Typography>Спорт и отдых</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => productFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img
                    style={{ width: 24, height: 24 }}
                    src={product1}
                    alt=""
                  />
                  <Typography>Продукты питания</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => bittFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={ximiya1} alt="" />
                  <Typography>Бытовая химия и личная гигиена</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => kancFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img
                    style={{ width: 24, height: 24 }}
                    src={kanctovari1}
                    alt=""
                  />
                  <Typography>Канцтовары</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => zooFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={zoo1} alt="" />
                  <Typography>Зоотовары</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => knigiFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={knigi1} alt="" />
                  <Typography>Книги</Typography>
                </Box>
              </ListItemButton>
              <ListItemButton onMouseOver={() => dachaFunc()}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img style={{ width: 24, height: 24 }} src={dacha1} alt="" />
                  <Typography>Дача, сад и огород</Typography>
                </Box>
              </ListItemButton>
            </List>
          </Box>
          <Box sx={{ width: "950px", height: "100%" }}>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: electro,
              }}
            >
              Электроника
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: technic,
              }}
            >
              Бытовая техника
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: odejda,
              }}
            >
              Одежда
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: obuv,
              }}
            >
              Обувь
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: aksesuari,
              }}
            >
              Аксессуары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: krasota,
              }}
            >
              Красота
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: zadarovie,
              }}
            >
              Здоровье
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: tovar,
              }}
            >
              Товары для дома
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: stroy,
              }}
            >
              Строительство и ремонт
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: avto,
              }}
            >
              Автотовары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: detskiy,
              }}
            >
              Детские товары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: hobbi,
              }}
            >
              Хобби и творчество
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: sport,
              }}
            >
              Спорт и отдых
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: product,
              }}
            >
              Продукты питания
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: bitt,
              }}
            >
              Бытовая химия и личная гигиена
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: kanc,
              }}
            >
              Канцтовары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: zoo,
              }}
            >
              Зоотовары
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: knigi,
              }}
            >
              Книги
            </Box>
            <Box
              sx={{
                width: "950px",
                height: "100%",
                display: dacha,
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
