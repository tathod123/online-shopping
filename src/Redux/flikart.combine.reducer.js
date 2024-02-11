import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./flipkart.slice";

const reducer = combineReducers({ product: productSlice });

export default reducer;
