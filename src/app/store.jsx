import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "../features/Categories/CategoriesSlice";
export const store = configureStore({
  reducer: { categories: CategoriesSlice },
});
