import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../Api/Api";

const Product = () => {
  let { category } = useParams();
  var [categorys, setCategorys] = useState([]);
  let [some,setsome]=useState([])
  useEffect(() => {
    axios.get(Api + "navbar").then((res) => setCategorys(res.data));
  }, []);

  return (
    <>  
      < Box sx={{width:'100%',height:"100vh"}}>
          {
            some.map((item,index)=>(
              <Typography>
               {item.name}
              </Typography>
              
              ))
            }
      </Box>
    </>
  );
};
export { Product };
 