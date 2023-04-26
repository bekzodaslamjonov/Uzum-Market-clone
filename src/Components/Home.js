import React from "react";
import Slider from "./Slider/Slider";
import { Box } from "@mui/material";

import Hayitlik from "./Hayitlik";

export default function Home() {
  return (
    <>
    <Box
    sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
    >

    <Slider />
    <Hayitlik />
      {/* <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
        >
        
      </Box> */}
      {/* <Box sx={{ width: "100%", height: "1000px" }}></Box> */}
    </Box>
      </>
  );
}
