import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {addFavorite, deleteFavorite} from '../Features/FavoriteSlice/FavoriteSlice'
import {MdFavorite} from 'react-icons/md'

function RecipeItem({props}) {
  const [favBtnClicked, setFavBtnClicked] = useState(false)
  const {favorites} = useSelector(state=>state.favorite)
  const dispatch = useDispatch()
  useEffect(()=>{
    if (favBtnClicked){
      const newFavItem = {
        id:props?.id,
        title:props?.title,
        image:props?.image,
        likes:props?.aggregateLikes
      }
      dispatch(addFavorite(newFavItem))
      console.log(favorites)
    }
    else{
      dispatch(deleteFavorite(props.id))
    }
  },[favBtnClicked])

  const handleFavBtnClick = ()=>{
    setFavBtnClicked(prevState=>!prevState)
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
                <h3 className='font-bold text-sm'><span className='text-red-300'>{props.aggregateLikes}</span> Likes </h3>
                </Link>
              </div>
              <button className='p-2 bg-veryLightGray rounded-full z-10 self-end'><MdFavorite color={favBtnClicked?'red':'black'} onClick={()=>handleFavBtnClick()} size={16} /></button>
            </div>
      </div>
    </div>
  )
}

export default RecipeItem