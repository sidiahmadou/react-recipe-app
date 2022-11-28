import React from 'react'
import image from '../../Assets/cake.png'

function CategoryItem({props}) {
  return (
        <div className='flex flex-col items-center'>
            <div className='w-20 h-20 bg-red-300 rounded-full'>
                <img src={image}/>
            </div>
            <span className='font-bold'>{props}</span>
        </div>
  )
}

export default CategoryItem