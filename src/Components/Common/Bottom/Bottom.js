import { Box, Typography } from "@mui/material";
import React from "react";

export default function Bottom() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "6vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80vw",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop:'1px solid grey'
        }}
      >
        <Box sx={{display:'flex',gap:'10px'}}>
          <Typography sx={{fontSize:{
            xl:'14px'
          },fontWeight:'600'}}>Соглашение о конфиденциальности</Typography>
          <Typography sx={{fontSize:'14px',fontWeight:'600'}}>Пользовательское соглашение</Typography>
        </Box>
        <Typography sx={{fontSize:'11px'}}>
          «2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»
        </Typography>
      </Box>
    </Box>
  );
}
