import React, { useState } from 'react'
import {MdOutlineFavorite} from 'react-icons/md'
import {FaTrashAlt} from 'react-icons/fa'
import Header from '../Layouts/Header';
import { useDispatch, useSelector } from 'react-redux';
import {deleteFavorite, deleteAllFavorite} from '../Features/FavoriteSlice/FavoriteSlice'

function FavoritePage() {
    const favorite = useSelector(state=>state.favorite)
    const {favorites} = useSelector(state=>state.favorite)
    console.log(favorites)
    
    const dispatch = useDispatch()

    const handleDeleteFav = (id)=>{
        dispatch(deleteFavorite(id))
    }
    const handleDeleteAllFav = ()=>{
        dispatch(deleteAllFavorite())
    }

    const itemToDisplay = 16
    const [visible, setVisible] = useState(itemToDisplay)
    const handleClick = ()=>{
        setVisible(prevState=>prevState+itemToDisplay)
    }

  return (
    <div >
        <Header />
        <div className='py-16 container mx-auto'>
            {/* favorite header*/}
            <div className='flex justify-between p-4 border-b border-lightGray'>
                <div className='flex space-x-4 items-center'>
                    <MdOutlineFavorite color='white' size={30} className='p-2 bg-orange rounded-full' />
                    <span className='text-xl font-bold'>Favorites</span>
                    <span className='text-sm'>{favorite.length} recipes </span>
                </div>
                <button onClick={()=>handleDeleteAllFav()} className='inline-block'>
                    <FaTrashAlt size={20} color='orange'/> Delete all
                </button>
            </div>
            
            {/* select 16 items from result and map over to display */}
            {!!favorite.length?
                (<div className='p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                { favorite.slice(0,visible).map(item=>{
                    return (
                        <div className='flex p-4 flex-col bg-red-300'>
                                <div className='w-36 h-36'>
                                    <img src={item.image}/>
                                </div>
                                <span>*****</span>
                                <span className='font-bold'>{item.title}</span>
                                
                                <button className='p-2 bg-veryLightGray rounded-full z-10 self-end'><FaTrashAlt onClick={()=>handleDeleteFav(item.id)} size={16} /></button>
                            </div>
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
                (favorite.length-visible>=0) &&  
                <div className='flex justify-center py-4'><button onClick={()=>handleClick()} className='py-2 px-6 border border-lightGray hover:bg-lightGray'>Load more</button></div>
            }
        </div>
    </div>
  )
}

export default FavoritePage