import React from 'react'
import Hero from '../Components/Hero'
import Header from '../Layouts/Navigation'
import Contact from '../Components/Contact'
import Footer from '../Layouts/Footer'
import PopularRecipe from '../Components/Popular/PopularRecipe'
import Search from '../Components/Search'
import Layout from '../Components/Layout'

function Home() {
  return (
    <Layout>
      <Search />
      <Hero />
      <PopularRecipe />
      <Contact />
    </Layout>
  )
}

export default Home