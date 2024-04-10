import data from "../../data.json";
import Services from "../Services/Services";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesData } from "./CategoriesAction";
import { useEffect, useState } from "react";

import "./Categories.css";

const Categories = () => {
  const [catgId, setCatgId] = useState(null);
  const dispatch = useDispatch();

  const categoryData = useSelector((state) => state.categories.categoriesData);

  // const filterCatg =
  //   categoryData &&
  //   categoryData.categories &&
  //   categoryData.categories.find(({ id }) => +id === +catgId);
  const filterCatg = data.data.categories.find(({ id }) => id === catgId);

  console.log(
    "filterCatg",
    data.data.categories.find(({ id }) => id == catgId)
  );

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

  return (
    <>
      <div className="text-center">
        <h2>Our Services</h2>
      </div>
      <div className="d-flex justify-content-center align-items-start flex-column">
        {/* <div className="category-filter">
          {categoryData &&
        categoryData.categories && 
        categoryData.categories.map(({ id, category_name }) => {
              return (
                <>
                  <button
                    className="btn-catgn btn btn-light btn-sm border m-2"
                    key={id}
                    onClick={() => setCatgId(id)}
                  >
                    {category_name}
                  </button>
                </>
              );
            })}
        </div> */}
        <div className="category-filter">
          <button
            className="btn-catgn btn btn-light btn-sm border m-2"
            onClick={() => setCatgId(null)}
          >
            All
          </button>
          {data &&
            data.data.categories.map(({ id, category_name }) => {
              return (
                <>
                  <button
                    className="btn-catgn btn btn-light btn-sm border m-2"
                    key={id}
                    onClick={() => setCatgId(id)}
                  >
                    {category_name}
                  </button>
                </>
              );
            })}
        </div>
        <div className="category-wrapper">
          {/* {categoryData &&
        categoryData.categories && 
        categoryData.categories.map(({ id, category_name, services }) => {
          return (
            <div key={id} className="category-card">
            <h5 className="category-name">{category_name}</h5>
            <Services services={services} />
          </div>
          );
        })} */}

          <>
            {catgId ? (
              <div className="category-card">
                <h5 className="category-name">{filterCatg.category_name}</h5>
                <Services services={filterCatg.services} />
              </div>
            ) : (
              <>
                {data &&
                  data.data.categories.map(
                    ({ id, category_name, services }) => {
                      return (
                        <div key={id} className="category-card">
                          <h5 className="category-name">{category_name}</h5>
                          <Services services={services} />
                        </div>
                      );
                    }
                  )}
              </>
            )}
          </>

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
      </div>
    </>
  );
};

export default Categories;
