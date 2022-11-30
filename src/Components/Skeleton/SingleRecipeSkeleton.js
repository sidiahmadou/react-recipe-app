import React from 'react'
import SimilarRecipeSkeleton from './SimilarRecipeSkeleton'
import { nanoid } from '@reduxjs/toolkit'

function SingleRecipeSkeleton() {
    
    const array=new Array(10).fill(1)
    return (
        <div className='container mx-auto'>
            {/* title */}
            <div className='mb-2 w-full h-16 bg-lightGray'></div>
            {/* image */}
            <div className='mx-auto bg-lightGray min-w-[300px] min-h-[300px] max-w-[1085px] max-h-[500px]'> </div>
        {/* prep & serving */}
            <div className='mt-4 flex space-x-4'>
                <div className='w-16 h-8 bg-lightGray'></div>
                <div className='w-16 h-8 bg-lightGray'></div>
            </div>
        {/* instructions & ingredients */}
            <div className='w-full h-56 py-4 flex flex-col justify-around space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
                <div className='w-full h-full bg-lightGray md:w-1/3'></div>
                <div className='w-full h-full bg-lightGray md:w-2/3'></div>
            </div>
        {/* similar recipes */}
            <div className='my-4 grid grid-rows-1 grid-flow-col gap-8 overflow-x-scroll lg:grid-rows-2'>
                {
                    array.map(item=>(
                        <SimilarRecipeSkeleton key={nanoid()}/>
                    ))
                }
            </div>
        </div>
    )
    }

export default SingleRecipeSkeleton