import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import { styled } from "styled-components";
import CustomPagination from "./CustomPagination";
import Card from "./Card";

const Searched = () => {
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const query = useParams();

  const { getSearched, searchedRecipe, isSearchLoading } = useGlobalContext();


  useEffect(() => {
    getSearched(`${query.id}`);
  }, [query]);

  useEffect(() => {
    setNumOfPages(50);
  }, [page]);

  return (
    <Wrapper className="relative recipes mt-5">
    <div className="custom-container w-full h-full flex justify-center items-center flex-col">
    <div className="py-5 w-full">
        <h1 className="text-left font-bold text-xl">Searched Result</h1>
    </div>
      <div className="relative my-5 flex flex-wrap w-full h-full justify-between">
        {
          !isSearchLoading ? (
          Object.keys(searchedRecipe).length !== 0 ? (
            searchedRecipe.slice(page * 9 - 9, page * 9).map((item) => {
              return <Card key={item.id} recipe={item} />;
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

export default Searched;

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
