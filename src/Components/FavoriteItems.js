import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteFavorite } from '../Features/FavoriteSlice/FavoriteSlice'
import {FaTrashAlt} from 'react-icons/fa'


function FavoriteItem({props}) {

  const dispatch = useDispatch()

  const handleDeleteIconClick = ()=>{
    dispatch(deleteFavorite(props.id))
  }

  return (
    <div className='bg-transparent'>
      <div className='group relative w-full h-56 rounded-2xl overflow-hidden'>
        <Link to={`/recipes/${props.id}`}>
          <img className='w-full h-full object-cover group-hover:scale-105' src={props.image}/>
        </Link>
            <div className='absolute bottom-0 w-full bg-black bg-opacity-30 p-2 flex justify-between items-center'>
              <div className='w-[80%] flex flex-col justify-between'>
                <Link to={`/recipes/${props.id}`}>
                <h3 className='truncate font-bold text-sm text-white'>{props.title}</h3>
                <h3 className='font-bold text-sm'><span className='text-red-300'>{props.likes}</span> Likes </h3>
                </Link>
              </div>
              <button className='p-2 bg-veryLightGray rounded-full z-10 self-end'><FaTrashAlt onClick={()=>handleDeleteIconClick()} size={16} /></button>
            </div>
      </div>
    </div>
  )
}

export default FavoriteItem