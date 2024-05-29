import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie/filmeSlice"
const store = configureStore({
    reducer :{
       movies : movieReducer
    }
})

export default store


