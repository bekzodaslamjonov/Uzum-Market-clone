import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import { Product } from "../Components/Product";
import NotFound from "../Components/Common/NotFound";
import Favorites from "../Components/Favorites/Favorites";

export default function router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"favorite"} element={<Favorites />} />
      <Route path={"/:category"} element={<Product />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
