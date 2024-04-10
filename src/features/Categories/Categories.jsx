import data from "../../data.json";
import Services from "../Services/Services";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesData } from "./CategoriesAction";
import { useEffect } from "react";

import "./Categories.css";

const Categories = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.categories.categoriesData);

  useEffect(() => {
    try {
      dispatch(getCategoriesData());
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  }, [dispatch]);

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  console.log("data", data);

  return (
    <div className="category-wrapper">

      {categoryData &&
        categoryData.categories && 
        categoryData.categories.map(({ id, category_name, services }) => {
          return (
            <div key={id} className="category-card">
            <h5 className="category-name">{category_name}</h5>
            <Services services={services} />
          </div>
          );
        })}
      {/* {data &&
        data.data.categories.map(({ id, category_name, services }) => {
          return (
            <div key={id} className="category-card">
              <h5 className="category-name">{category_name}</h5>
              <Services services={services} />
            </div>
          );
        })} */}
    </div>
  );
};

export default Categories;
