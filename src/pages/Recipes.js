import React, { useCallback, useEffect, useState } from "react";
import Card from "../components/Card";
import { styled } from "styled-components";
// import { data } from "../config/data";
import CustomPagination from "../components/CustomPagination";
import { BiSearch } from "react-icons/bi";
import { healthLabels } from "../config/categories";
import { useGlobalContext } from "../context/Context";

const Recipes = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("vegan");
  const [numOfPages, setNumOfPages] = useState();
  const [category, setCategory] = useState("alcohol-free");

  const { isLoading, recipes, fetchRecipe, fetchByCategory } = useGlobalContext();


  const selectCategoryhandler = (e) => {
    setCategory(e.target.value);
  };

  const searchhandler = useCallback((searchQuery) => {
    setQuery(searchQuery);
  }, []);


  useEffect(()=>{
    fetchRecipe(`search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=${0}&to=${100}`)
  }, [query])

  useEffect(()=>{
    fetchByCategory(`search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=${0}&to=${100}&health=${category}`)
  }, [category, query])

  useEffect(() => {
    setNumOfPages(recipes.to);
  }, [page, recipes]);

  return (
    <Wrapper className="relative recipes mt-5">
      <div className="custom-container w-full h-full flex justify-center items-center flex-col">
        <div className="cooked-recipe-search flex flex-wrap justify-between items-center w-full">
          <div className="flex justify-between md:justify-center items-center md:w-3/4 w-full">
            <input
              type="text"
              onChange={(e) => setSearchedTerm(e.target.value)}
              className=" border border-solid w-full"
              value={searchTerm}
            />
            <button
              className="search-btn flex justify-center items-center text-xl"
              onClick={() => searchhandler(searchTerm)}
            >
              <BiSearch />
            </button>
          </div>
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
          {
            !isLoading ? (
            Object.keys(recipes).length !== 0 ? (
              recipes.hits.slice(page * 9 - 9, page * 9).map((item) => {
                return <Card key={item.recipe.label} recipe={item.recipe} />;
              })
            ) : (
              <></>
            )
          ) : (
            <div className="w-full h-56 flex justify-center items-center text-center text-xl py-10"> Loading Recipes...</div>
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
