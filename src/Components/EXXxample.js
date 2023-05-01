import React, { useEffect, useState } from "react";
import Slides from "./Common/Slide/Slides";
import axios from "axios";
import { Api } from "../Api/Api";

export default function EXXxample() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(Api + "hayitlik").then((res) => setProduct(res.data));
  }, []);
  return (
    <>
      <Slides product={product} />
    </>
  );
}
