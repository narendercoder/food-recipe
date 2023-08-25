import React from 'react'
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <Wrapper className='relative footer w-full text-white py-8 px-5'>
    <div className=' flex justify-center items-center'>
      <p className='text-lg'>@ 2023 All rights reserved | Designed With 💙 By <a href="https://www.linkedin.com/in/narender-singh-bisht-4529051b7/" className=" hover:underline font-bold ">
              Narender Singh Bisht
            </a></p>
    </div>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.section`
background-color: #28292B;
`