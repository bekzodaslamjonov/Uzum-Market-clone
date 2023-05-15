import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import { Product } from "../Components/Product";
import NotFound from "../Components/Common/NotFound";

export default function router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:category"} element={<Product />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
