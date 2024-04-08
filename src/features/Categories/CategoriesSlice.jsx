import { createSlice } from "@reduxjs/toolkit";

const CategoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesData: [],
  },
  reducers: {
    setCategories: (state, action) => {
      console.log('action.payload', action.payload)
      state.categoriesData = action.payload;
    },
  },
});

export const { setCategories } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
