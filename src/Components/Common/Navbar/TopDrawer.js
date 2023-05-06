import { Box, Drawer, Typography } from "@mui/material";
import React from "react";

export default function TopDrawer({ collect, setCollect }) {
  return (
    <>
      <Drawer anchor="top" open={collect} onClose={() => setCollect(false)}>
        <Box
          sx={{
            width: "100%",
            height: "95vh",
            backgroundColor: "aqua",
          }}
        ></Box>
      </Drawer>
    </>
  );
}
