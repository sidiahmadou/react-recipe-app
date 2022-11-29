import React from 'react'
import {Link} from 'react-router-dom'
import image from '../../Assets/cake.png'

function SimilarRecipeItem({props}) {
    console.log(props)
    return (
        <Link to={`/recipes/${props.id}`}>
          <div className='w-60 flex px-2 space-x-2 overflow-hidden items-center border border-lightGray'>
            <img className='w-12' src={image}/>
            <div className='w-full flex flex-col'>
              <h3 className='truncate font-bold text-sm'>{props.title}</h3>
              <h3>Serving: {props.servings}</h3>
              <h3>Prep: {props.readyInMinutes} min</h3>
            </div>
          </div>
        </Link>
    )
  }  

export default SimilarRecipeItem