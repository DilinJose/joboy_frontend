import { getData } from "../../api/service";
import { setCategories } from "./CategoriesSlice";

export const getCategoriesData = () => async (dispatch) => {
  try {
    const response = await getData("service/list");
    dispatch(setCategories(response.data.data))
  } catch (error) {
    console.error("Error fetching categories", error);
  }
};
