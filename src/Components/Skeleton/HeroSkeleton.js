import React from 'react'

function HeroSkeleton() {
  return (
    <div className='border border-lightGray container mx-auto max-w-[1085px] max-h-[500px] flex flex-col md:px-0 md:flex-row'>
      
        <div className='bg-lightGray w-full md:w-2/3 md:h-[500px]'></div>
        <div className='w-full rounded-r-lg flex flex-col space-y-4 items-center justify-center px-8 md:w-1/3'>
            <span className='bg-lightGray w-3/4 h-4 '></span>
            <h1 className='bg-lightGray w-3/4 h-16'></h1>
            <p className=''></p>
        </div>
      </div>
  )
}

export default HeroSkeleton