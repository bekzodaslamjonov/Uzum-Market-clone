import {  configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./RTKApi/RTKApi";

export default configureStore({
  reducer:  {
    [productsApi.reducerPath]:productsApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productsApi.middleware),
  devTools: true,
});
