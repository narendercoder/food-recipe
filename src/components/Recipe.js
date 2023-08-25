import React from 'react'
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
// import { useParams } from 'react-router-dom'

const Recipe = () => {
  const searchParams = useLocation();

  if (
    (!searchParams.state && Object.entries(searchParams.state).length === 0) ||
    !searchParams.state
  ) {
    return(
      <div className='w-screen h-screen'>
      Not Found
    </div>
    )
  }
  const article = searchParams.state.id;
  console.log(article)

  return (
    <Wrapper className="relative pb-10 flex justify-center items-center">
     <div className='custom-container flex justify-between flex-wrap'>
      <div className='main-container h-full'>
      <div className="title py-5">
        <h1 className='text-3xl font-bold'>{article.label}</h1>
      </div>
      <div className='featured-image w-full h-full rounded-md overflow-hidden'><img src={article.image} alt="" /></div>
      <div className='pt-5'>
        <div>
          <h2 className='text-2xl font-bold'>Main Ingredients</h2>
        </div>
        <div>
        <ul className='text-lg'>
        {
          article.ingredients.map((item)=>{
            return (
              <li className='pt-5'>{item.text}</li>
              )
            
          })
        }
        </ul>
        </div>
      </div>
      </div>
      <div className='sidebar pt-5'>
        <div className="nutrition-label">
          <div className="title text-2xl font-bold">Nutrition Facts</div>
          <p>Serving Size {article.yield}</p>
          <hr className='cooked-nut-hr' />
          <div className='relative'>
            <div className='py-2 font-semibold border-b border-solid border-black'>Amount Per Serving</div>
            <div className='flex py-1 justify-between items-center text-lg font-semibold'>
              <span>Calories</span>
              <span>{Math.round(article.calories / article.yield)} kcal</span>
            </div>
            <div class="cooked-nut-spacer"></div>
            <div>
              <div className='flex justify-between items-center py-2 border-b border-solid border-black'>
                  <span className='font-bold'>Total {article.totalNutrients.FAT.label}</span>
                  <span className='ml-2'>{Math.round(article.totalNutrients.FAT.quantity)}{article.totalNutrients.CHOLE.unit}</span>
              </div>
              <div className='ml-5 flex justify-between items-center py-2 border-b border-solid border-black'>
                  <span >Total {article.totalNutrients.FASAT.label}</span>
                  <span className='ml-2'>{Math.round(article.totalNutrients.FASAT.quantity)}{article.totalNutrients.CHOLE.unit}</span>
              </div>
              <div className='ml-5 flex justify-between items-center py-2 border-b border-solid border-black'>
                  <span >{article.totalNutrients.FATRN.label}</span>
                  <span className='ml-2'>{Math.round(article.totalNutrients.FATRN.quantity)}{article.totalNutrients.CHOLE.unit}</span>
              </div>
              <div className='flex justify-between items-center py-2 border-b border-solid border-black'>
                  <span className='font-bold' >{article.totalNutrients.CHOLE.label}</span>
                  <span className='ml-2'>{Math.round(article.totalNutrients.CHOLE.quantity)}{article.totalNutrients.CHOLE.unit}</span>
              </div>
              <div className='flex justify-between items-center py-2 border-b border-solid border-black'>
                  <span className='font-bold' >{article.totalNutrients.NA.label}</span>
                  <span className='ml-2'>{Math.round(article.totalNutrients.NA.quantity)}{article.totalNutrients.NA.unit}</span>
              </div>
              <div className='flex justify-between items-center py-2 border-b border-solid border-black'>
                  <span className='font-bold' >{article.totalNutrients.CHOCDF.label}</span>
                  <span className='ml-2'>{Math.round(article.totalNutrients.CHOCDF.quantity)}{article.totalNutrients.CHOCDF.unit}</span>
              </div>
              <div className='ml-5 flex justify-between items-center py-2 border-b border-solid border-black'>
                  <span  >{article.totalNutrients.SUGAR.label}</span>
                  <span className='ml-2'>{Math.round(article.totalNutrients.SUGAR.quantity)}{article.totalNutrients.SUGAR.unit}</span>
              </div>
              <div className='ml-5  flex justify-between items-center py-2 '>
                  <span >{article.totalNutrients.FIBTG.label}</span>
                  <span className='ml-2'>{Math.round(article.totalNutrients.FIBTG.quantity)}{article.totalNutrients.FIBTG.unit}</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
     </div>
    </Wrapper>
  )
}

export default Recipe;

const Wrapper = styled.section`
width: 100vw;
height: 100%;
padding-bottom: 7rem;
.custom-container{
  width: 1200px;

  .main-container{
    width: 69%;
    .featured-image{
    img{
      width: 100%;
      height: auto;
    }
  }
  }

  .sidebar{
    width: 28%;

    .nutrition-label {
    background: #fff;
    font-size: .9rem;
    border: 1px solid #aaa;
    border-radius: 3px;
    padding: 15px;

    .cooked-nut-hr{
      border: none;
    border-top: 1rem solid #333;
    margin: 1rem 0 0;
    padding: 0;
    background: #e7e8eb;
    height: 2px;
    width: 100%;
    overflow: hidden;
    }

    .cooked-nut-spacer{
      border: none;
    border-top: 0.5rem solid #333;
    padding: 0;
    background: #e7e8eb;
    height: 1px;
    width: 100%;
    overflow: hidden;
    }

  }
  
  

}
}

`