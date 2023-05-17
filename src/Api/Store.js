import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from './Favorite/Favorite.slice';
import productSlice from "./ApiSlice/productSlice";
// import favReducer from "./Favorite/Favorite.slice";
const rootReducers = combineReducers({
    product:productSlice.reducer,
    favoriteReducer:favoriteReducer
  });
export default configureStore({
  reducer:  rootReducers ,
  devTools: true,
});
