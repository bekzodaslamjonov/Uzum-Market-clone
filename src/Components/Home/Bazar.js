import { Box, Typography } from "@mui/material";
import React  from "react";
import { Link } from "react-router-dom";


import Slides from "../Common/Slides/Slides";
import { useGetProductsQuery } from "../../Api/RTKApi/RTKApi";

export default function Bazar() {

  let product =[]

  const { data = [], isLoading } = useGetProductsQuery();
  

  if (isLoading) return <div>Loading...</div>;
  product = data.filter((item) => item.type === "bazar");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "#000",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
          Базар не выходя из дома
          </Typography>
          <i style={{ fontSize: "30px" }} className="bx bx-chevron-right"></i>
        </Link>
      </Box>
      <Slides product={product} />
    </>
  );
}
