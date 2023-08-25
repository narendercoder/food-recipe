import React from "react";
import { styled } from "styled-components";
import {BiTimeFive} from "react-icons/bi"
import {AiOutlineFolderOpen} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const Card = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () =>{
    const obj = recipe;
    const queryString = Object.entries(recipe).map(([key, value])=> `${key}=${value}`).join("&");
    const url = `/recipe?${queryString}`;
    navigate(`${url}`, {state: {id: obj}})
  }

  return (
    <Wrapper className="relative recipe-card h-full" onClick={handleClick}>
      <div className="relative cooked-recipe bg-white cursor-pointer overflow-clip h-full">
        <div className="relative recipe-card-img ">
            <img
              src={recipe.image}
              alt="img"
            />
        </div>
        <div className="relative flex flex-col justify-between recipe-card-content h-full">
          <div className="relative title my-1 px-6 py-4 w-full h-20 max-h-20">
          <h1 className="text-left font-semibold text-xl">
            <span>{recipe.label}</span>
          </h1>
          </div>
          <div className="recipe-base relative w-full flex justify-between mt-5">
          <div className="recipe-category p-4 w-full flex justify-center items-center text-sm capitalize ">
            <span className=" text-green-400 mr-2 text-base">
              <AiOutlineFolderOpen/>
            </span>
            <span className=" text-gray-500 line-clamp-1 w-24">{recipe.dishType}</span>
          </div>
          <div className="recipe-duration p-4 w-full flex justify-center items-center text-sm">
          <span className=" text-green-400 mr-2 text-base">
            <BiTimeFive/>
          </span>
          <span className=" text-gray-500">{recipe.totalTime} min</span>
          </div>
        </div>
        </div>
        
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 30.333%;
  min-width: 30.333%;
  margin: 0 1.5% 3%;
  border: 1px solid #ebebeb !important;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(41,48,55,.03);
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.42, 0, 0.15, 1);
  overflow: hidden;
  &:hover{
    box-shadow: 0 0 25px rgba(41,48,55,.1);
  }

  .cooked-recipe {
    
    .recipe-card-img {
      display: block;
      position: relative;
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        max-width: 100%;
        height: auto;
        transition: all 0.5s linear;
      }
    }

    &:hover{
      .recipe-card-img{
        img{
          transform: scale(1.1)
        }
      }
    }

    .recipe-card-content {
      .title {
        color: #2e2f31;
        margin-bottom: 12px;
      }

      .recipe-base{
        border-top: 1px solid #e5e5e5;
        margin-top: 1rem;
        .recipe-category{
          border-right: 1px solid #e5e5e5;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    width: 47%;
    margin: 0 1.5% 3%;
    padding: 0;
}

  @media only screen and (max-width: 750px) {
      width: 95%;
      position: relative;
      padding: 0;
    
  }

`;
