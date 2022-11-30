import React from 'react'
import SimilarRecipeItem from './SimilarRecipeItem'
import {useGetSimilarRecipeQuery} from '../../Features/Api/apiSlice'
import { nanoid } from '@reduxjs/toolkit'


function SimilarRecipes({recipeId}) {

    const {data:similarRecipes, isLoading, isSuccess} = useGetSimilarRecipeQuery(recipeId)
   
    let similarRecipesContent
    if(isLoading){
        similarRecipesContent = (
            <div>
                Loading....
            </div>
        )
    }
    if(isSuccess){
        similarRecipesContent = (
        <div className='container mx-auto px-2 py-8 md:px-0'>
            <h2 className='font-bold text-xl text-red-400 mb-2'>Similar Recipes</h2>

            <div className='grid grid-rows-1 grid-flow-col gap-2 overflow-x-scroll lg:grid-rows-2'>
            {
                similarRecipes?.map(item=>{
                    return (
                        <SimilarRecipeItem key={nanoid()} props={item} />
                )})
                    }
            </div>
                
        </div>
        )
    }

    return (
        <div>
            {similarRecipesContent}
        </div>
)
}


export default SimilarRecipes

