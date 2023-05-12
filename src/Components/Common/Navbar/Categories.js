import { Box, List, ListItemButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import { Link } from "react-router-dom";

export default function Categories({ show }) {
  var [categori, setCategori] = useState([]);
  var [categoriS, setCategoriS] = useState([]);
  var [filtered, setFiltered] = useState([]);
  var [category, setCategory] = useState([]);
  let [transform1] = useState("translateY(-150vh)");
  let [transform] = useState("translateY(0vh)");
  // useEffect(() => {
  //   axios.get(Api + "category").then((res) => setCategori(res.data));
  // }, []);
  // useEffect(() => {
  //   axios.get(Api + "categoriesSmall").then((res) => setCategoriS(res.data));
  // }, []);
  var mouseFunc = (index) => {
    filtered = categoriS.filter(
      (item) => item.categoryId === categori[index].id
    );
    setFiltered(filtered);
    category = filtered[0].theme;
    setCategory(category);
  };
  //  console.log(filtered[0].theme);

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
            {categori.length !== 0
              ? categori.map((item, index) => (
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
                        <i
                          style={{ fontSize: "20px" }}
                          className={item.icons}
                        ></i>
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
            flexDirection:'column'
          }}
        >
          {filtered.length !== 0
            ? filtered
                .filter((item) => item.id === filtered[0].id)
                .map((item, index) => (
                  // <Box
                  //   key={index}
                  //   sx={{
                  //     width: "100%",
                  //     height: "100%",
                  //     display: "flex",
                  //     justifyContent: "center",
                  //     flexDirection: "column",
                  //     alignItems: "center",
                  //   }}
                  // >
                  //   <Box sx={{ width: "95%", height: "5%" }}>
                  //     <Typography sx={{ fontSize: "18px" }}>
                  //       {item.name}
                  //     </Typography>
                  //   </Box>
                  //   <Box
                  //     sx={{
                  //       width: "95%",
                  //       height: "90%",
                  //       display: "flex",
                  //       justifyContent: "space-between",
                  //     }}
                  //   >
                  //     <Box sx={{ width: "30%", height: "auto" }}>
                  //       <Box
                  //         sx={{
                  //           width: "100%",
                  //           height: "35%",
                  //           display: "flex",
                  //           flexDirection: "column",
                  //           gap: "8px",
                  //         }}
                  //       >
                  //         <Box>
                  //           <Typography sx={{ fontSize: "18px" }}>
                  //             {item.theme[0].name}
                  //           </Typography>
                  //         </Box>
                  //         <Box
                  //           sx={{
                  //             display: "flex",
                  //             flexDirection: "column",
                  //             gap: "3px",
                  //           }}
                  //         >
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[0].name}
                  //           </Typography>
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[1].name}
                  //           </Typography>
                  //         </Box>
                  //       </Box>
                  //       <Box
                  //         sx={{
                  //           width: "100%",
                  //           height: "35%",
                  //           display: "flex",
                  //           flexDirection: "column",
                  //           gap: "8px",
                  //         }}
                  //       >
                  //         <Box>
                  //           <Typography sx={{ fontSize: "18px" }}>
                  //             {item.theme[1].name}
                  //           </Typography>
                  //         </Box>
                  //         <Box
                  //           sx={{
                  //             display: "flex",
                  //             flexDirection: "column",
                  //             gap: "3px",
                  //           }}
                  //         >
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[2].name}
                  //           </Typography>
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[3].name}
                  //           </Typography>
                  //         </Box>
                  //       </Box>
                  //       <Box
                  //         sx={{
                  //           width: "100%",
                  //           height: "35%",
                  //           display: "flex",
                  //           flexDirection: "column",
                  //           gap: "8px",
                  //         }}
                  //       >
                  //         <Box>
                  //           <Typography sx={{ fontSize: "18px" }}>
                  //             {item.theme[2].name}
                  //           </Typography>
                  //         </Box>
                  //         <Box
                  //           sx={{
                  //             display: "flex",
                  //             flexDirection: "column",
                  //             gap: "3px",
                  //           }}
                  //         >
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[4].name}
                  //           </Typography>
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[5].name}
                  //           </Typography>
                  //         </Box>
                  //       </Box>
                  //     </Box>
                  //     <Box sx={{ width: "30%", height: "auto" }}>
                  //       <Box
                  //         sx={{
                  //           width: "100%",
                  //           height: "35%",
                  //           display: "flex",
                  //           flexDirection: "column",
                  //           gap: "8px",
                  //         }}
                  //       >
                  //         <Box>
                  //           <Typography sx={{ fontSize: "18px" }}>
                  //             {item.theme[3].name}
                  //           </Typography>
                  //         </Box>
                  //         <Box
                  //           sx={{
                  //             display: "flex",
                  //             flexDirection: "column",
                  //             gap: "3px",
                  //           }}
                  //         >
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[6].name}
                  //           </Typography>
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[7].name}
                  //           </Typography>
                  //         </Box>
                  //       </Box>
                  //       <Box
                  //         sx={{
                  //           width: "100%",
                  //           height: "35%",
                  //           display: "flex",
                  //           flexDirection: "column",
                  //           gap: "8px",
                  //         }}
                  //       >
                  //         <Box>
                  //           <Typography sx={{ fontSize: "18px" }}>
                  //             {item.theme[4].name}
                  //           </Typography>
                  //         </Box>
                  //         <Box
                  //           sx={{
                  //             display: "flex",
                  //             flexDirection: "column",
                  //             gap: "3px",
                  //           }}
                  //         >
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[8].name}
                  //           </Typography>
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[9].name}
                  //           </Typography>
                  //         </Box>
                  //       </Box>
                  //       <Box
                  //         sx={{
                  //           width: "100%",
                  //           height: "35%",
                  //           display: "flex",
                  //           flexDirection: "column",
                  //           gap: "8px",
                  //         }}
                  //       >
                  //         <Box>
                  //           <Typography sx={{ fontSize: "18px" }}>
                  //             {item.theme[5].name}
                  //           </Typography>
                  //         </Box>
                  //         <Box
                  //           sx={{
                  //             display: "flex",
                  //             flexDirection: "column",
                  //             gap: "3px",
                  //           }}
                  //         >
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[10].name}
                  //           </Typography>
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[11].name}
                  //           </Typography>
                  //         </Box>
                  //       </Box>
                  //     </Box>
                  //     <Box sx={{ width: "30%", height: "auto" }}>
                  //       <Box
                  //         sx={{
                  //           width: "100%",
                  //           height: "35%",
                  //           display: "flex",
                  //           flexDirection: "column",
                  //           gap: "8px",
                  //         }}
                  //       >
                  //         <Box>
                  //           <Typography sx={{ fontSize: "18px" }}>
                  //             {item.theme[6].name}
                  //           </Typography>
                  //         </Box>
                  //         <Box
                  //           sx={{
                  //             display: "flex",
                  //             flexDirection: "column",
                  //             gap: "3px",
                  //           }}
                  //         >
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[12].name}
                  //           </Typography>
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[13].name}
                  //           </Typography>
                  //         </Box>
                  //       </Box>
                  //       <Box
                  //         sx={{
                  //           width: "100%",
                  //           height: "35%",
                  //           display: "flex",
                  //           flexDirection: "column",
                  //           gap: "8px",
                  //         }}
                  //       >
                  //         <Box>
                  //           <Typography sx={{ fontSize: "18px" }}>
                  //             {item.theme[7].name}
                  //           </Typography>
                  //         </Box>
                  //         <Box
                  //           sx={{
                  //             display: "flex",
                  //             flexDirection: "column",
                  //             gap: "3px",
                  //           }}
                  //         >
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[14].name}
                  //           </Typography>
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[15].name}
                  //           </Typography>
                  //         </Box>
                  //       </Box>
                  //       <Box
                  //         sx={{
                  //           width: "100%",
                  //           height: "35%",
                  //           display: "flex",
                  //           flexDirection: "column",
                  //           gap: "8px",
                  //         }}
                  //       >
                  //         <Box>
                  //           <Typography sx={{ fontSize: "18px" }}>
                  //             {item.theme[8].name}
                  //           </Typography>
                  //         </Box>
                  //         <Box
                  //           sx={{
                  //             display: "flex",
                  //             flexDirection: "column",
                  //             gap: "3px",
                  //           }}
                  //         >
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[16].name}
                  //           </Typography>
                  //           <Typography variant="p" sx={{ fontSize: "14px" }}>
                  //             {item.small[1].name}
                  //           </Typography>
                  //         </Box>
                  //       </Box>
                  //     </Box>
                  //   </Box>
                  // </Box>
                  <>
                  <Typography>{item.name}</Typography>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    {category !== 0
                      ? category.map((item, index) => (
                        <Box sx={{width:'30%',height:'100px',backgroundColor:"aqua"}}>
                          <Typography>{item.name}</Typography>
                        </Box>
                        ))
                      : ""}
                  </Box>
                  </>
                ))
            : ""}
        </Box>
      </Box>
    </Box>
  );
}
