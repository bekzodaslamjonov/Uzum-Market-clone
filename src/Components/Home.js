import React from "react";
import Slider from "./Slider/Slider";
import { Box, } from "@mui/material";
import Hayitlik from "./SkidkiM";
import Rasrochka from "./Rasrochka";
import Bazar from "./Bazar";
import Novinki from "./Novinki";
import BasicTabs from "./Tabs/BasicTabs";


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
        <Box display={{
          xs:'none',
          sm:'none',
          md:'none',
          lg:'block',
          xl:'block'
        }}>
        <Hayitlik />
        <Rasrochka />
        <Bazar/>
        <Novinki/>
        </Box>
        <Box width={'100%'} display={{ xs:'block',
          sm:'block',
          md:'block',
          lg:'none',
          xl:'none'}}>
          <BasicTabs/>
        </Box>
      </Box>
    </>
  );
}
