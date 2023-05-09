import { Box, List, ListItemButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import { Link } from "react-router-dom";

export default function Categories({show}) {
  var [categori, setCategori] = useState([]);
  var [categoriS, setCategoriS] = useState([]);
  var [filtered, setFiltered] = useState([]);
  let [transform1] = useState("translateY(-140vh)");
  let [transform] = useState("translateY(0vh)");
  useEffect(() => {
    axios.get(Api + "category").then((res) => setCategori(res.data));
  }, []);
  useEffect(() => {
    axios.get(Api + "categoriesSmall").then((res) => setCategoriS(res.data));
  }, []);
  var mouseFunc = (index) => {
    filtered = categoriS.filter(
      (item) => item.categoryId === categori[index].id
    );
    setFiltered(filtered);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        zIndex: "10",
        left: "0",
        top: "100px",
        transform:`${!show ? transform1 : transform}`,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "100%",
          display: "flex",
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ width: "25%", height: "100%" }}>
          <List>
            {categori.length !== 0
              ? categori.map((item, index) => (
                  <Link
                    to={item.link}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItemButton onMouseOver={() => mouseFunc(index)}>
                      <Box sx={{display:'flex', alignItems:'center',gap:'10px'}}>
                         <i style={{fontSize:'20px'}} className={item.icons}></i>
                        <Typography>{item.name}</Typography>
                      </Box>
                    </ListItemButton>
                  </Link>
                ))
              : ""}
          </List>
        </Box>
        <Box sx={{ width: "75%", height: "100%", }}>
          {filtered.length !== 0
            ? filtered
                .filter((item) => item.id === filtered[0].id)
                .map((item, index) => (
                  <Box>
                    <Typography>{item.name}</Typography>
                  </Box>
                ))
            : ""}
        </Box>
      </Box>
    </Box>
  );
}
