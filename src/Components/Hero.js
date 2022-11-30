import React from 'react'
import heroImage from '../Assets/heroImage.jpg'

function Hero() {
  
  {/*const {data:heroRecipe, isLoading, isSuccess, isError} = useGetHeroRecipeQuery()
  let heroContent
  if (isError){
    heroContent=(
      <div className='text-center'>{heroContent}  
          error fetching data
      </div>
    )
  }
  if (isLoading){
    heroContent = (
      <HeroSkeleton />
    )
  }
  if (isSuccess){
    heroContent = (
      <div className='container mx-auto max-w-[1085px] max-h-[500px] flex flex-col md:px-0 md:flex-row'>
      
        <div className='overflow-hidden w-full md:max-w-2/3'>
            <img className='w-full object-contain rounded-l-lg' src={heroRecipe?.recipes[0]?.image} />
        </div>
        <div className='w-full bg-lightBlue rounded-r-lg flex flex-col space-y-4 items-center justify-center px-8 md:w-1/3'>
            <span className='text-sm md:text-case'>85% would make this again</span>
            <h1 className='font-bold text-3xl lg:text-5xl'>{heroRecipe?.recipes[0]?.title}</h1>
            <p className='text-base md:text-xl' ></p>
        </div>
      </div>
    )
  }*/}
  
  return (
    <div className='relative container max-h-[500px] mx-auto overflow-hidden'>
        <img className='w-full' src={heroImage}/>
        <div className=' absolute top-1/2 -translate-y-1/2 left-10 flex flex-col space-y-4 md:space-y-8'>
          <h1 className='shadow-2xl font-bold text-white text-5xl md:text-6xl lg:text-7xl'>The best 
            <span className='block text-red-400'>cake</span>
            <span className='block '>recipes</span>
          </h1>
          <h1 className='shadow-2xl text-red-400 font-bold text-5xl md:text-6xl lg:text-7xl'>Fast - Easy</h1> 
        </div>
    </div>
  )
}

export default Hero