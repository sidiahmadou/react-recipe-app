import React from 'react'
import { useParams } from 'react-router-dom'
import SimilarRecipe from '../Components/SimilarRecipes/SimilarRecipes'
import {useGetSingleRecipeQuery} from '../Features/Api/apiSlice'
import Header from '../Layouts/Header'
import SingleRecipeSkeleton from '../Components/Skeleton/SingleRecipeSkeleton'

function SingleRecipePage() {
    
    const {recipeId} = useParams()
    console.log(recipeId)
    const {data:singleRecipe, isLoading, isSuccess, isError, error} = useGetSingleRecipeQuery(recipeId)
    let singleRecipeContent
    if (isError){
        <div>
            <h1>Error while fetching data. Details: {error}</h1>
        </div>
    }
    if (isLoading){
        singleRecipeContent = (
            <SingleRecipeSkeleton />
        )
    }
    if (isSuccess){
        console.log(singleRecipe)
        singleRecipeContent = (
            <div>
                <div className='py-4 border-b border-lightGray'>
                <h1 className='text-center font-bold text-3xl md:text-5xl lg:text-6xl'>{singleRecipe?.title}</h1>
                </div>
            <div className='mx-auto max-w-[1085px] max-h-[500px] flex justify-center'>
                <img className='w-full object-contain rounded-lg' src={singleRecipe?.image} />
            </div>
            {/* prep & serving */}
            <div className='flex space-x-4'>
                <div className='px-4 border-r border-lightGray'>
                    <h3 className='text-darkGray'>prep</h3>
                    <p>{singleRecipe?.readyInMinutes} min</p>
                </div>
                <div className='px-4 border-r border-lightGray'>
                    <h3 className='text-darkGray'>Servicing</h3>
                    <p>{singleRecipe?.servings} people</p>
                </div>
            </div>
            {/* instructions & ingredients */}
            <div className='py-4 flex flex-col justify-around space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
                <div className='md:w-1/3'>
                    <h3 className='text-xl font-bold'>Ingredients</h3>
                    <ul className='text-darkGray'>
                        {singleRecipe?.extendedIngredients.map(item=>{
                            return(
                                <li>{item.original}</li>
                                )
                        })}
                    </ul>
                </div>
                <div className='md:w-2/3'>
                    <h3 className='text-xl font-bold'>Instructions</h3>
                    <p className='text-darkGray'>
                        {singleRecipe?.instructions}
                    </p>
                </div>
            </div>
            {/* similar recipes */}
            <SimilarRecipe recipeId={recipeId}/>
        </div>
        )
    }
  return (
    <div>
        <div className='px-2 container mx-auto'>
            {singleRecipeContent}
        </div>
    </div>

  )
}

export default SingleRecipePage