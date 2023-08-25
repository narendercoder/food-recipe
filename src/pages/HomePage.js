import React from 'react'
import About from './About'
import RecipesList from '../components/RecipesList'
import HeroSection from '../components/HeroSection'

const HomePage = () => {
  return (
    <>
        <HeroSection/>
        <About/>
        <RecipesList/>
    </>
  )
}

export default HomePage;