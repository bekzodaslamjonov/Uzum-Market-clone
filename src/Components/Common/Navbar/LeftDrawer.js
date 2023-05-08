import { Box, Drawer } from "@mui/material";
import React from "react";

export default function LeftDrawer({ lDrawer }) {
  return (
    <>
      <Drawer anchor="left" open={lDrawer}>
        <Box>
            hello
        </Box>
      </Drawer>
    </>
  );
}
