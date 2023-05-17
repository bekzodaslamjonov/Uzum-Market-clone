import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoriteReducer } from './Favorite/Favorite.slice';
import  productSlice  from './ApiSlice/productSlice';

const favorite = combineReducers({
    favorites: favoriteReducer,
});

export default configureStore({
    reducer: {
        favorite,
        product: productSlice.reducer,
    },
    devTools: true,
});
// import {combineReducers, configureStore} from'@reduxjs/toolkit'
// import { reducer as favoriteReduser } from './Favorite/Favorite.slice'
// import { apiSlice } from './ApiSlice/ApiSlice'

// const favorite = combineReducers({favorites :favoriteReduser})

// export default configureStore({
//     reducer:{
//         favorite,
//         product:apiSlice
//     },
//     devTools:true
// })