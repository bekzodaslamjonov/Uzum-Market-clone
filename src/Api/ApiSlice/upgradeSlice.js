import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../Api";

const productService = {
  // ...

  updateProduct: async (productId, newData) => {
    return axios.put(Api +  `/products/${productId}`, newData);
  },
};

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ productId, newData }) => {
    const response = await productService.updateProduct(productId, newData);
    return response.data;
  }
);

 const productSlice = createSlice({
    name: 'product',
    initialState: {
      // ...
    },
    reducers: {
      // ...
    },
    extraReducers: (builder) => {
      // ...
  
    
    },
  });

