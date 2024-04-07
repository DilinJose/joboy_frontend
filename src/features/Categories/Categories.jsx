import data from "../../data.json";
import Services from "../Services/Services";
import { useSelector,useDispatch } from 'react-redux'

import "./Categories.css";
import { getCategoriesData } from "./CategoriesAction";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useDispatch()
  const categoryData = useSelector((state)=>state.categories.categoriesData)

  console.log('categoryData', categoryData)
  useEffect(() => {
   dispatch(getCategoriesData())
  }, [])
  
  return (
    <div className="dashboard-wrapper">
      {categoryData.categories.map(({ id, category_name, services }) => {
        return (
          <div key={id} className="dashboard-card-wrapper">
            <h5>{category_name}</h5>
            <Services services={services} />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
