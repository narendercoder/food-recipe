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
     <div className='custom-container flex justify-center flex-wrap'>
      <div className='main-container h-full w-10/12 lg:w-full'>
      <div className="title py-8">
        <h1 className='text-3xl font-bold'>{article.title}</h1>
      </div>
      {/* content */}
      <div className='flex justify-between flex-wrap'>
      {/* image */}
      <div className='featured-image w-full md:w-1/2 h-full rounded-md overflow-hidden'><img src={article.image} alt="" /></div>
      {/* ingredients */}
      <div className='md:px-10 w-full md:w-1/2 h-full'>
      <div>
          <h2 className='text-2xl font-bold'>Main Ingredients</h2>
        </div>
        <div className='pl-5'>
        <ul className='text-lg'>
        {
          article.extendedIngredients.map((item)=>{
            return (
              <li key={item.id} className='text-base capitalize'>
                <span className='mr-3'>{`${item.name}`}</span>
              </li>
              )
          })
        }
        </ul>
        </div>
      </div>
      </div>
      {/* Instructions */}
      <div className='pt-5'>
       <h1 className='py-2 text-2xl font-bold'>Instructions</h1>
       <p dangerouslySetInnerHTML={{__html: article.summary}}></p>
       <div className='pt-2'>
       <h1 className='font-bold text-base py-3'>Steps for Preparation</h1>
       <ul className='pl-5 text-base'>
        {
          article.analyzedInstructions[0].steps.map((item)=>{
            return (
              <li className='py-2'>
                <span>{item.step}</span>
              </li>
            )
          })

        }
       </ul>
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
    .featured-image{
    img{
      width: 100%;
      height: auto;
    }
  }
  ul{
    list-style: disc;
  }
  }

}

`