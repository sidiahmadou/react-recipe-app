import React from 'react'
import {Link} from 'react-router-dom'

function SimilarRecipeItem({props}) {
    const title = props.title.length>15?`${props.title.slice(0,15)}...`:props.title
    console.log(props)
    return (
        <Link to={`/recipes/${props.id}`}>
          <div className='flex flex-col space-y-2 bg-transparent border border-lightGray'>
              <div className='flex flex-col px-2'>
                <h3 className='font-bold text-sm'>{title}</h3>
                <h3>Serving: {props.servings}</h3>
                <h3>Prep: {props.readyInMinutes} min</h3>
              </div>
          </div>
        </Link>
    )
  }  

export default SimilarRecipeItem