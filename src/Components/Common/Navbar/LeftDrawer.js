import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import axios from "axios";

export default function LeftDrawer() {
  var [catalogy, setCatalogy] = useState([]);
  useEffect(() => {
    axios.get(Api + "category").then((res) => setCatalogy(res.data));
  }, []);
  // console.log(catalogy);

  return (
    <Box sx={{ width: "100%", height: "90%" }}>
      <Accordion>
        <AccordionSummary
          id={"panel-header"}
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "blue",
            }}
          >
            <i className="bx bx-collection"></i>
            <Typography>Каталог</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {catalogy.length !== 0
            ? catalogy.map((item, index) => (
                <Accordion >
                  <AccordionSummary
                    id={"panel-header"}
                    aria-controls="panel1-content"
                    expandIcon={<ExpandMore />}
                    
                  > 
                    <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
                      <i className={item.icons}></i>
                    <Typography>{item.name}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
              ))
            : ""}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
