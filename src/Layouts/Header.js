import React, { useRef, useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BiFoodMenu} from 'react-icons/bi'
function Header() {
    const [menuClicked, setMenuClicked] = useState(false)
    const navbar = useRef()
    const handleClick = ()=>{
        navbar.current.classList.toggle('hidden')
        setMenuClicked(prevState=>!prevState)
    }

  return (
    <nav className='py-4 relative'>
        <div className='container px-2 mx-auto flex justify-between items-center'>
            <a href='/'><BiFoodMenu className='hover:text-red-400' size={40}/></a>

            <div ref={navbar} className='hidden md:block'>
                <ul className='absolute z-10 top-0 right-0 w-2/3 py-12 items-center bg-red-200 flex flex-col space-y-8 md:static md:flex-row md:py-0 md:w-auto md:bg-transparent md:space-y-0 md:space-x-4'>
                    <li className='hover:border-b-8 hover:border-red-300'>
                        <a className='font-bold' href='/#' >Home</a>
                    </li>
                    <li className='hover:border-b-8 hover:border-red-300'>
                        <a className='font-bold' href='/recipes' >Recipes</a>
                    </li>
                    <li className='hover:border-b-8 hover:border-red-300'>
                        <a className='font-bold' href='/favorite' >Favorite</a>
                    </li>
                </ul>
            </div>
            {/* menu icon */}
            <div className='z-20'>
                {menuClicked? 
                <AiOutlineClose size={30} onClick={()=>handleClick()} className='md:hidden'/>:
                <AiOutlineMenu size={30} onClick={()=>handleClick()} className='md:hidden'/>
                }
            </div>
        </div>
    </nav>
  )
}

export default Header