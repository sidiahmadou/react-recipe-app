import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import favoriteReducer from './FavoriteSlice/FavoriteSlice'
import { apiSlice } from "./Api/apiSlice";
export const store = configureStore({
    reducer:{
        favorite:favoriteReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
setupListeners(store.dispatch)
