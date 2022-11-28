import React, {useState} from 'react'
import RecipeItem from '../Components/RecipeItem'
import { useGetRecipesQuery } from '../Features/Api/apiSlice'
import { nanoid } from '@reduxjs/toolkit'
import Header from '../Layouts/Header'
import RecipeSkeleton from '../Components/Skeleton/RecipeSkeleton'

function RecipePage() {
  const numberOfRecipe = 100
    const itemToDisplay = 16
    const [visibleRecipe, setVisibleRecipe] = useState(itemToDisplay)

    const handleClick = ()=>{
      setVisibleRecipe(prevState=>prevState+itemToDisplay)
  }
        const {data:recipes, isSuccess, isLoading, isError} = useGetRecipesQuery(numberOfRecipe)
        let recipesContent

        const array = new Array(visibleRecipe).fill(1)
        if (isLoading) {
          recipesContent = (
            array.map(item=><RecipeSkeleton />))
          }

        if (isSuccess){
          recipesContent = recipes?.recipes?.slice(0,visibleRecipe).map(item=>{
            return <RecipeItem key={nanoid()} props={item} />
          })}

        if (isError){
            recipesContent=(
            <div>
                <h1>Error while fetching recipes </h1>
            </div>
            )
        }
      
        return (
          <div>
            <div className='container mx-auto px-2 py-8 md:px-0'>
                <div className='grid grid-cols-2 grid-flow-row gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8'>
                {recipesContent}
                </div>
            </div>
            {
                (recipes?.recipes?.length-visibleRecipe>=0) &&  
                <div className='flex justify-center py-4'><button onClick={()=>handleClick()} className='py-2 px-6 border border-lightGray hover:bg-lightGray'>Load more</button></div>
            }
      
          </div>
      
        )
}

export default RecipePage