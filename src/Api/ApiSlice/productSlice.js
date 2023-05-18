import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../Api";


export const getProduct = createAsyncThunk("product/getProduct", async () => {
  let response = await axios.get(Api + "product");
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    updateLikedStatus: (state, action) => {
      const { id, liked } = action.payload;
      const product = state.data.find((item) => item.id === id);
      if (product) {
        product.liked = liked;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});
export default productSlice;
export const { updateLikedStatus } = productSlice.actions;
