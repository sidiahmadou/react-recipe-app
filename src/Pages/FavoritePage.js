import React, { useState } from 'react'
import {MdOutlineFavorite} from 'react-icons/md'
import {FaTrashAlt} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {deleteAllFavorite} from '../Features/FavoriteSlice/FavoriteSlice'
import FavoriteItem from '../Components/FavoriteItems';
import { nanoid } from '@reduxjs/toolkit'
import Layout from '../Layouts/Layout';


function FavoritePage() {

    const {favorites} = useSelector(state=>state.favorite)

    console.log(favorites)
    
    const dispatch = useDispatch()

    const handleDeleteAllFav = ()=>{
        dispatch(deleteAllFavorite())
    }

    const itemToDisplay = 16
    const [visible, setVisible] = useState(itemToDisplay)
    const handleClick = ()=>{
        setVisible(prevState=>prevState+itemToDisplay)
    }

  return (
    <Layout>
        <div className='container mx-auto'>
            {/* favorite header*/}
            <div className='flex justify-between p-4 border-b border-lightGray'>
                <div className='flex space-x-4 items-center'>
                    <MdOutlineFavorite color='white' size={30} className='p-2 bg-orange rounded-full' />
                    <span className='text-xl font-bold'>Favorites</span>
                    <span className='text-sm'>{favorites.length} recipes </span>
                </div>
                <button onClick={()=>handleDeleteAllFav()} className='flex flex-col items-center'>
                    <FaTrashAlt size={20} color='orange'/>
                    <span>Delete all</span>
                </button>
            </div>
            
            {/* select 16 items from result and map over to display */}
            {!!favorites.length?
                (<div className='p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                { favorites.slice(0,visible).map(item=>{
                    return (
                        <FavoriteItem key={nanoid()} props={item} />
                        )
                    })
                }
                </div>):
                (<div className='flex justify-center items-center py-20'>
                    <h1>Your favorite list is empty</h1>
                </div>)
            }
            {/* display load more btn if remaining items to display is more than 0 */}
            {
                (favorites.length-visible>=0) &&  
                <div className='flex justify-center py-4'><button onClick={()=>handleClick()} className='py-2 px-6 border border-lightGray hover:bg-lightGray'>Load more</button></div>
            }
        </div>
    </Layout>
  )
}

export default FavoritePage