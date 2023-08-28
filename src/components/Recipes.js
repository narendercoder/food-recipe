import React, { useEffect, useState } from "react";
import Card from "./Card";
import { styled } from "styled-components";
import CustomPagination from "./CustomPagination";
import { healthLabels } from "../config/categories";
import { useGlobalContext } from "../context/Context";
import Search from "./Search";

const Recipes = () => {
  const { isLoading, recipes} = useGlobalContext();
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [category, setCategory] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  const selectCategoryhandler = (e) => {
    setCategory(e.target.value);
     filteredCategoryData(e.target.value);
  };

  const filteredCategoryData = (category) =>{
    if(filteredData.length !== 0){
      if(category === "all"){
        return setFilteredData(recipes);
      }
      else if(category === "dairy free") {
        let filtered = recipes.recipes?.filter((item) => {
          return item.dairyFree === true
        });
       return setFilteredData(filtered);
      }
      else if(category === "vegetarian") {
        let filtered = recipes.recipes.filter((item) => {
          return item.vegetarian === true
        });
       return setFilteredData(filtered);
      }
      else if(category === "gluten free") {
        let filtered = recipes.recipes.filter((item) => {
          return item.glutenFree === true
        });
        
       return setFilteredData(filtered);
      }
      else if(category === "vegan") {
        let filtered = recipes.recipes.filter((item) => {
          return item.vegan === true
        })
        return setFilteredData(filtered);
      }
    }

  }

  console.log(filteredData)


 useEffect(()=>{
   setFilteredData(recipes);
 }, [recipes])


  useEffect(() => {
    if(filteredData.length !== 0)  {

      category === "all"   ? setNumOfPages(filteredData.recipes.length) : setNumOfPages(filteredData.length)

     }
  }, [page, category, filteredData]);

  return (
    <Wrapper className="relative recipes mt-5">
      <div className="custom-container w-full h-full flex justify-center items-center flex-col">
        <div className="cooked-recipe-search flex flex-wrap justify-between items-center w-full">
          <Search />
          <div className="category w-full md:w-1/6 mt-3 md:mt-0">
            <select
              className="options cursor-pointer"
              value={category}
              onChange={selectCategoryhandler}
            >
              {healthLabels.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={item.name}
                    className="cursor-pointer"
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="relative my-5 flex flex-wrap w-full h-full justify-between">
          {!isLoading ? (
            filteredData.length !== 0 ? (
             category != "all" ? (
              filteredData.slice(page * 9 - 9, page * 9).map((item) => {
                return <Card key={item.id} recipe={item} />;
              })
             ) : (
              filteredData.recipes.slice(page * 9 - 9, page * 9).map((item) => {
                return <Card key={item.id} recipe={item} />;
              })
             )
            ) : (
              <></>
            )
          ) : (
            <div className="w-full h-56 flex justify-center items-center text-center text-xl py-10">
              {" "}
              Loading Recipes...
            </div>
          )}
        </div>
        {numOfPages > 1 && numOfPages <= 100 && (
          <CustomPagination
            page={page}
            setPage={setPage}
            numOfPages={numOfPages}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Recipes;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 7em;
  .custom-container {
    width: 94%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    margin: auto;
    position: relative;
    align-items: center;

    .cooked-recipe-search {
      margin: 0 1.5%;
    }

    input {
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      margin: 0;
      height: 3rem;
      padding: 0 1rem;
      font-size: 1rem;
      box-shadow: none;
      display: inline-block;
      box-sizing: border-box;
      background: #fff;
      line-height: 1.6;
      color: #7d7f82;

      &:focus {
        border-color: #f89223;
        outline: none;
      }
    }
    .search-btn {
      width: 3.5rem;
      text-align: center;
      color: #fff;
      line-height: 3rem;
      height: 3rem;
      background: #f89223;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .category {
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.075);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
      font-size: 1rem;
      line-height: 3rem;
      height: auto;
      padding: 0 1rem;
      .options {
        width: 100%;
        background-color: transparent;
        outline: none;
      }
    }
  }
`;
