import React from 'react'
import Hero from '../Components/Hero'
import Header from '../Layouts/Header'
import Contact from '../Components/Contact'
import Footer from '../Layouts/Footer'
import PopularRecipe from '../Components/Popular/PopularRecipe'
import Search from '../Components/Search'

function Home() {
  return (
    <div>
      <Search />
      <Hero />
      <PopularRecipe />
      <Contact />
    </div>
  )
}

export default Home