import React from "react";
import Slider from "./Slider/Slider";
import { Box, } from "@mui/material";

import Hayitlik from "./Hayitlik";
import Rasrochka from "./Rasrochka";
import Bazar from "./Bazar";
import Slides from "./Common/Slide/Slides";

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
        <Rasrochka />
        <Bazar/>
        <Slides/>
      </Box>
    </>
  );
}
