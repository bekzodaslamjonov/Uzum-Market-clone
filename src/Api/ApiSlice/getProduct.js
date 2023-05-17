import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../Api";

export const getProduct = createAsyncThunk('product/getProduct', async () => {
    const response = await axios.get(Api + 'product');
    return response.data;
  });
