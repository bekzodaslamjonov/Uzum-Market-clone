import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Api } from "../Api/Api";

const Product = () => {
  let { product } = useParams();
  var [categorys, setCategorys] = useState([]);

  // useEffect(() => {
  //   axios.get(Api + "navbar").then((res) => setCategorys(res.data));
  // }, [product]);
  return (
    <>
    
    </>
  );
};
export { Product };
