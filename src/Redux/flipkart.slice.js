import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    allProduct: [],
  },
  reducers: {
    allProductSaga: (state, action) => {},
    allProductRedux: (state, action) => {
      state.allProduct = action.payload;
    },
  },
});

export const { allProductSaga, allProductRedux } = productSlice.actions;
export default productSlice.reducer;
