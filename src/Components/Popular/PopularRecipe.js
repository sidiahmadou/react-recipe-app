import React from 'react'
import PopularRecipeItem from './PopularRecipeItem'
import {useGetRecipesQuery} from '../../Features/Api/apiSlice'
import { nanoid } from '@reduxjs/toolkit'
import PopularRecipeSkeleton from '../Skeleton/PopularRecipeSkeleton'

function PopularRecipe() {
  const numberOfRecipe = 10
  const {
    data:popularRecipes,
    isSuccess,
    isLoading,
    isError, 
    error
  } = useGetRecipesQuery(numberOfRecipe)

  let popularContent
  const array = new Array(numberOfRecipe).fill(1)
  if (isError){
    popularContent=(
        <div className='text-center'>
            error fetching data
        </div>
    )
}
  if (isLoading) {
    popularContent = (
        <div className='grid grid-rows-1 grid-flow-col gap-2 overflow-x-scroll md:grid-flow-row md:grid-cols-3 lg:grid-cols-5'>
          {array.map(item=><PopularRecipeSkeleton />)}
        </div>
      )}

  if (isSuccess){
    popularContent = (
      <div>
        <h2 className='font-bold text-xl mb-2 md:text-3xl text-center'>Popular Recipes</h2>
        <div className='grid grid-rows-1 grid-flow-col gap-4 overflow-x-scroll md:grid-flow-row md:grid-cols-3 lg:grid-cols-5 lg:gap-8'>
          {popularRecipes.recipes.map(item=>{
            return <PopularRecipeItem key={nanoid()} props={item} />})
          }
        </div>
      </div>
      )}

  return (
    <div className='container mx-auto px-2 py-8 md:px-0'>
        {popularContent}
      </div>
  )
}

export default PopularRecipe