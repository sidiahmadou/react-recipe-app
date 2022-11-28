import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {addFavorite, deleteFavorite} from '../../Features/FavoriteSlice/FavoriteSlice'
import {MdFavorite} from 'react-icons/md'

function PopularRecipeItem({props}) {
  const [favBtnClicked, setFavBtnClicked] = useState(false)
  const fav = useSelector(state=>state.favorite)
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
    }
    else{
      dispatch(deleteFavorite(props.id))
    }
  },[favBtnClicked])

  const handleFavBtnClick = ()=>{
    setFavBtnClicked(prevState=>!prevState)
  }
  
  const title = props.title.length>50?`${props.title.slice(0,50)}...`:props.title
  return (
    <div className='w-64 md:w-auto md:h-auto bg-transparent border border-lightGray'>
      <Link to={`/recipes/${props.id}`}>
            <div className='w-full h-56'>
                <img className='w-full h-full object-cover' src={props.image}/>
            </div>
      </Link>
            <div className='p-2 flex justify-between items-center'>
              <div className='flex flex-col justify-between'>
                <Link to={`/recipes/${props.id}`}>
                <h3 className='font-bold text-sm'>{title}</h3>
                <h3 className='font-bold text-sm'><span className='text-red-300'>{props.aggregateLikes}</span> Likes </h3>
                </Link>
              </div>
              <button className='p-2 bg-veryLightGray rounded-full z-10 self-end'><MdFavorite color={favBtnClicked?'red':'black'} onClick={()=>handleFavBtnClick()} size={16} /></button>
            </div>
        </div>
  )
}

export default PopularRecipeItem