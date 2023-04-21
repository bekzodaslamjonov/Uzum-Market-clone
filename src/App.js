import { Box } from "@mui/material";
import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";

export default function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%", height: "auto" , }}>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}
