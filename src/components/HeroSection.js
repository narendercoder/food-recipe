import React from 'react'
import { Button } from '../styles/Button'
import { FiArrowUpRight } from 'react-icons/fi'
import { styled } from 'styled-components'

const HeroSection = () => {
  return (
    <Wrapper className="relative w-screen flex justify-center items-center overflow-hidden">
    <div className=' absolute top-0 left-0 hero-bg w-full h-full'></div>
    <div class="background-overlay"></div>
    <div className='custom-container flex justify-center items-center z-10'>
        <div className='p-8 flex flex-col justify-center items-center'>
         <div className='my-5'>
            <h2 className='text-5xl capitalize font-bold text-center text-red-600'>Boiled</h2>
         </div>
         <div className='my-5 heading'>
            <h2 className='text-5xl capitalize font-semibold text-center'>no matter how you cook, Yumma has many the recipes</h2>
         </div>
         <div className='my-5 mb-10'> 
            <p className='text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
         </div>
         <Button className="button-link">
                <a href="recipes" className="flex justify-center items-center text-xl">
                View More
                <FiArrowUpRight className="text-xl ml-2"/>
                </a>
              </Button>
        </div>
    </div>
    </Wrapper>
  )
}

export default HeroSection;

const Wrapper = styled.section`

height: calc(100vh - 100px);

.hero-bg{
    background: url("https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/concept-of-tasty-food-with-bell-pepper-on-white-background.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
    animation: zoom-in linear 12s;
}
.custom-container{
    max-width: 720px;

    .heading{
      h2{
        line-height: 3.5rem;
      }
    }

}
.background-overlay{
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: transparent;
    background-image: linear-gradient(180deg, #FFFFFF00 0%, #F8F6F2 100%);
    opacity: 1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

@keyframes zoom-in {
    0% {
      transform: translate3d(0, 0, 0) scale(1, 1);
    }
    100% {
      transform: translate3d(-42.7px, -32.1204px, 0px) scale(1.1, 1.1);
    }
  }

`