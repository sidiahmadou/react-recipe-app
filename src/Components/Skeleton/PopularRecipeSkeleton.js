import React from 'react'

function PopularRecipeSkeleton() {
  return (
    <div className='w-64 md:w-auto md:h-auto bg-transparent border border-lightGray'>
        <div className='w-full h-auto'>
          <div className='w-full h-56 bg-lightGray'></div>
      </div>

      <div className='w-full h-auto p-2 flex justify-between items-center'>
        <div className='w-full flex flex-col space-y-2'>
          <h3 className='w-full h-4 bg-lightGray font-bold text-sm'></h3>
          <h3 className='w-8 h-4 bg-lightGray font-bold text-sm'> </h3>
        </div>
        <button className='p-2 bg-lightGray rounded-full self-end'> </button>
      </div>
        </div>
  )
}

export default PopularRecipeSkeleton