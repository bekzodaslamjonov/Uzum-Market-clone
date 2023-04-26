import { Box } from "@mui/material";
import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import Top from "./Components/Common/Top/Top";

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
      <Box sx={{ width: {
        xs:'100%',
        sm:'100%',
        md:'100%',
        lg:'100%',
        xl:'80%'
      }, minHeight: "150vh" }}>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}
