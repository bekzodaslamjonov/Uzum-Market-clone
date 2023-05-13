import { Box, List, ListItemButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import { Link } from "react-router-dom";

export default function Categories({ show }) {
  var [category, setCategory] = useState([]);
  var [filtered, setFiltered] = useState([]);
  var [theme, settheme] = useState([]);
  let [transform1] = useState("translateY(-150vh)");
  let [transform] = useState("translateY(0vh)");
  useEffect(() => {
    axios.get(Api + "category").then((res) => setCategory(res.data));
  }, []);
  useEffect(() => {
    axios.get(Api + "themes").then((res) => settheme(res.data));
  }, []);
  var mouseFunc = (index) => {
    filtered = category.filter((item) => item.id === category[index].compare);
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
        transform: `${!show ? transform1 : transform}`,
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
            {category.length !== 0
              ? category.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItemButton onMouseOver={() => mouseFunc(index)}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* <i
                          style={{ fontSize: "20px" }}
                          className={item.icons}
                        ></i> */}
                        <Typography>{item.name}</Typography>
                      </Box>
                    </ListItemButton>
                  </Link>
                ))
              : ""}
          </List>
        </Box>
        <Box
          sx={{
            width: "75vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {filtered.length !== 0
            ? filtered.map((item, index) => (
                <>
                <Box>
                <Typography key={index}>{item.name}</Typography>
                </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "stretch",
                      flexWrap: "wrap",
                    }}
                  >
                    {theme.filter((item)=>item.compare === filtered[0].compare)
                      .map((item, index) => (
                          <Box key={index}
                            sx={{
                              width: "30%",
                              height: "auto",
                            }}
                          >
                            <Typography sx={{fontSize:'15px'}}>{item.name}</Typography>
                            {/* {
                              ex.length !== 0
                             ? ex.map((item,index)=>(
                                  <Box key={item.id}>
                                    <Typography sx={{fontSize:'12px'}}>
                                      {item.name}
                                    </Typography>
                                  </Box>
                              )):""
                            } */}
                          </Box>
                        ))}
                    
                  </Box>
                </>
              ))
            : ""}
        </Box>
      </Box>
    </Box>
  );
}
