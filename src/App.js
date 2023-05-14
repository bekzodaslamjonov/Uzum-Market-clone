import { Box } from "@mui/material";
import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import Top from "./Components/Common/Top/Top";
import NotFound from "./Components/Common/NotFound";
import Footer from "./Components/Common/Footer/Footer";
import FooterSmall from "./Components/Common/Footer/FooterSmall";
import { Product } from "./Components/Product";

export default function App() {
  return (
    <Box
      sx={{
        width: "100%",
        Height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Top />
      <Box
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: "100%",
            lg: "95%",
            xl: "80%",
          },
          minHeight: "150vh",
        }}
      >
        <Navbar />
        <>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"category/:product"} element={<Product />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </>
        <FooterSmall />
        <Footer />
      </Box>
    </Box>
  );
}
