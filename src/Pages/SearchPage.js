import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Layout from '../Components/Layout';

function SearchPage() {
    const location = useLocation();
    const searchResult = location.state;
    const itemToDisplay = 16
    const [visibleResult, setVisibleResult] = useState(itemToDisplay)

    const handleClick = ()=>{
        setVisibleResult(prevState=>prevState+itemToDisplay)
    }
    
  return (
    <Layout>
        <div className='py-16 container mx-auto'>
            <div className='px-4 text-xl font-bold'>
                <span>Search Result : {searchResult.length} recipes</span>
            </div>
            
            {/* select 16 items from result and map over to display */}
            {!!searchResult?.results?.length && 
                <div className='p-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8'>
                { searchResult?.results?.slice(0,visibleResult).map(item=>{
                    return (
                        <Link to={`/recipes/${item?.id}`}>
                        <div className='rounded-2xl overflow-hidden flex flex-col border border-lightGray'>
                            <div className='w-full h-56 relative'>
                                <img className='w-full h-full object-cover' src={item.image}/>
                            <span className='truncate z-10 py-4 w-full text-center bg-white bg-opacity-30 absolute bottom-0 font-bold'>{item.title}</span>
                            </div>
                        </div>
                        </Link>
                        )
                    })
                }
                </div>
            }
            {/* display load more btn if remaining items to display is more than 0 */}
            {
                (searchResult?.results?.length-visibleResult>=0) &&  
                <div className='flex justify-center py-4'><button onClick={()=>handleClick()} className='py-2 px-6 border border-lightGray hover:bg-lightGray'>Load more</button></div>
            }
        </div>
    </Layout>
  )
}

export default SearchPage