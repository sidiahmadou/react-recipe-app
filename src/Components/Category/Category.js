import React from 'react'
import CategoryItem from './CategoryItem'

function Category() {
    const category = ['pasta','pasta','pasta','pasta','pasta','pasta']
  return (
    <div className='container mx-auto px-2 py-8 md:px-0'>
        <h2 className='font-bold text-xl mb-2'>Categories</h2>
        <div className='flex space-x-6 overflow-x-scroll md:justify-between md:space-x-0'>
        {
            category.map(item=>{
                return (
                    <CategoryItem key={item} props={item} />
            )})
        }
        </div>
            
    </div>
  )
}

export default Category