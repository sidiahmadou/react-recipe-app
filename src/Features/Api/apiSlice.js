import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const key = 'd28ced639b9848b486928bbe1d75c3c6'

export const apiSlice = createApi({
    reducerPath:'apiSlice',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.spoonacular.com/recipes'}),
    endpoints:(builder)=>({
        getRecipes:builder.query({
            query:(number)=> `/random?apiKey=${key}&number=${number}&tags=dessert`,
        }),
        getSingleRecipe:builder.query({
            query:(recipeId)=> `/${recipeId}/information?apiKey=${key}`
        }),
        getSimilarRecipe:builder.query({
            query:(recipeId)=> `/${recipeId}/similar?apiKey=${key}`
        }),
        getHeroRecipe:builder.query({
            query:()=>`/random?apiKey=${key}&number=1&tags=dessert`
        }),
        autoCompleteRecipeSearch:builder.query({
            query:(searchTerm)=>`/complexSearch?apiKey=${key}&query=${searchTerm}&maxFat=25&number=20`
        })
    })
})

export const {useGetRecipesQuery, useGetSingleRecipeQuery, useGetSimilarRecipeQuery, useGetHeroRecipeQuery, useAutoCompleteRecipeSearchQuery} = apiSlice
