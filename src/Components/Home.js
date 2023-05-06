import React from "react";
import Slider from "./Slider/Slider";
import { Box, Button, Link, Typography } from "@mui/material";
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
          position: "relative",
        }}
      >
        <Slider />
        <Box
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <Hayitlik />
          <Rasrochka />
          <Bazar />
          <Novinki />
        </Box>
        <Box
          width={"100%"}
          display={{
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          }}
        >
          <BasicTabs />
        </Box>
      </Box>
      <Box sx={{ position: "sticky", top: "0" }}>
        <Link href="#">
        
        <Button
          sx={{
            width: "52px",
            height: "52px",
            borderRadius: "49% 49% 49% 49%/49% 49% 49% 49%",
            backgroundColor: "#7000ff",
            position: "fixed",
            bottom: "25px",
            right: "10px",
          }}
        >
          <Typography sx={{lineHeight:'20px', fontSize: "30px", color: "white" }}>
            <i class="bx bx-chevron-up"></i>
          </Typography>
        </Button>
        </Link>
      </Box>
    </>
  );
}
