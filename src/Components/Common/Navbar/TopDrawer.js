import { Box, Divider, Drawer, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React, { useState } from "react";

export default function TopDrawer({ show }) {
  let [transform1] = useState("translateY(-120vh)");
  let [transform] = useState("translateY(0vh)");
  let [draw,setDraw]=useState(false)
  let [draw1,setDraw1]=useState(true)

  const open =()=>{
    setDraw(!draw)
  }
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "2",
          backgroundColor: "#fafafa",
          top: "100px",
          left: "0",
          transform: `${!show ? transform1 : transform}`,
          boxShadow: "1px 10px 17px -6px rgba(0,0,0,0.52)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "80%", height: "100%", display: "flex",justifyContent:'center' }}>
          <Box sx={{ width: "270px", height: "100%",backgroundColor:'aqua' }}>
            <List>
              <ListItem >
                <ListItemButton sx={{":hover":`${()=>open}`}}>

                <Typography>
                  hello
                </Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box sx={{width:'950px',height:'100%',backgroundColor:'red' }}>
            
      
          </Box>
        </Box>
   

      </Box>
    </>
  );
}
