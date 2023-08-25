import React from "react";
import Card from "./Card";
import { useGlobalContext } from "../context/Context";
import { styled } from "styled-components";
import {FiArrowUpRight} from "react-icons/fi"
import { Button } from "../styles/Button";


const RecipesList = () => {
  const { isLoading, recipes } = useGlobalContext();
  console.log(recipes);
  return (
    <Wrapper className="relative recipes mt-5">
      <div className="custom-container w-full h-full flex justify-center items-center flex-col">
        <div className="heading-section w-full">
          <div className="flex justify-between items-center">
            <div className="title">
              <h1 className="text-4xl font-semibold">Popular Recipes</h1>
            </div>
            <div>
              <Button className="button-link">
                <a href="recipes" className="flex justify-center items-center">
                View More
                <FiArrowUpRight className="text-xl ml-2"/>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative my-5 flex flex-wrap w-full h-full justify-between">
          {!isLoading ? (
            Object.keys(recipes).length !== 0 ? (
              recipes.hits.slice(0, 9).map((item) => {
                return <Card key={item.recipe.label} recipe={item.recipe} />;
              })
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
      </div>
    </Wrapper>
  );
};

export default RecipesList;

const Wrapper = styled.div`
padding-bottom: 7em;
  .custom-container {
    width: 94%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    margin: auto;
    position: relative;
    align-items: center;

    .heading-section {
      border-style: solid;
      border-width: 0px 0px 1px 0px;
      border-color: #d5d8da;
      transition: background 0.3s, border 0.3s, border-radius 0.3s,
        box-shadow 0.3s;
      padding: 0em 0em 1em 0em;

    }
  }
`;
