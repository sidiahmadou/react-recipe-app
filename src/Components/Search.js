import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../Assets/cake.png'
import {AiOutlineSearch, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

import {useAutoCompleteRecipeSearchQuery} from '../Features/Api/apiSlice'

function Search() {
    //const [searchResult, setSearchResult] = useState(resultData)
    const [searchText, setSearchText] = useState([])
    const handleChange = (event) =>{
        setSearchText(event.target.value)
    }
    const {data:searchResult, isLoading, isSuccess, isError} = useAutoCompleteRecipeSearchQuery(searchText)    
    console.log(searchText)
    let searchContent
    if (isLoading){
        searchContent = (
            <div className='text-center'>
                Loading...
            </div>
        )
    }
    if (isSuccess ){
       // console.log(searchResult.results)
        //select 4 items from result and map over to display
        searchContent = (
            !!searchResult?.results?.length && 
                <div>
                { searchResult?.results?.slice(0,4).map(item=>{
                        return (
                            <Link onClick={()=>setSearchText([])} to={`/recipes/${item.id}`}>
                            <div className='p-2 border-b border-lightGray flex flx-col space-x-2 hover:bg-lightGray'>
                                <img className='w-8 rounded-full' src={image}/>
                                <div>
                                    <h3 className='text-sm'>{item.title}</h3>
                                    <p className='text-sm'>{item.category}</p>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                    }
                </div>
            
        )
    }
    if (isError){
        searchContent=(
            <div className='text-center'>
                error fetching data
            </div>
        )
    }
    return (
    <div className='py-4 container mx-auto'>
        <div className='px-4 flex justify-center w-full md:px-0'>
            <input onChange={handleChange} className='w-full border border-lightGray rounded-xl py-2 px-4 outline-none bg-transparent md:w-1/2' type='text' placeholder='search...'/>
        </div>        
        {searchText.length!==0 && 
            <div>   
                {searchContent}
                {/* see all result */}
                {searchText.length!==0 && !!searchResult?.results?.length &&  
                (<Link onClick={()=>setSearchText([])} to='/search' state={searchResult} >
                    <div className='flex justify-center py-4'><button className='px-4 border border-lightGray hover:bg-lightGray'>see all {searchResult?.results?.length} results</button>
                    </div>
                </Link>)}
            </div>
        }
    </div>
  )
}

export default Search