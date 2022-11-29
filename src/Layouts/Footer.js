import React, { useRef } from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube} from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'

function Footer() {
    const foot1 = useRef()
    const foot2 = useRef()
  return (
    <div className='bg-lightGray'>
    <div className='container mx-auto'>
    {/* top content */}
    <div className='py-8 px-2 flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
        <h1 className='text-2xl font-bold'><span className='text-red-400'>Munch</span>Cakes</h1>
            <p>See the best cake recipes. Trusted recipes for chocolate cake, white cake, banana cakes, and carrot cakes with photos and tips from home cooks.</p>
        </div>
        {/* wrapper */}
        <div className='flex flex-col md:flex-row md:w-1/2 md:justify-around'>
            {/*foot1*/}
            <div >
                <div onClick={()=>{foot1.current.classList.toggle('hidden')}} className='py-2 flex justify-between border-b border-black md:border-none'>
                    <h3 className='font-bold'>MunchCakes</h3>
                    <BiChevronDown className='md:hidden'/>
                </div>
                <div ref={foot1} className='hidden md:block'>
                    <div className='flex flex-col space-y-2'>
                        <a href='#'>About Us</a>
                        <a href='#'>Carrers</a>
                        <a href='#'>Contact Us</a>
                        <a href='#'>Feedback</a>
                    </div>
                </div>
            </div>
            {/*foot2*/}
            <div >
                <div onClick={()=>{foot2.current.classList.toggle('hidden')}} className='py-2 flex justify-between border-b border-black md:border-none'>
                    <h3 className='font-bold'>Legal</h3>
                    <BiChevronDown className='md:hidden'/>
                </div>
                <div ref={foot2} className='hidden md:block'>
                    <div className='flex flex-col space-y-2'>
                        <a href='#'>Terms</a>
                        <a href='#'>Conditions</a>
                        <a href='#'>Cookies</a>
                        <a href='#'>Copyright</a>
                    </div>
                </div>
            </div>
        </div>
            
    </div>

    {/* bottom content */}
    <div className='flex flex-col-reverse items-center py-4 md:border-t md:border-black md:flex-row md:justify-between'>
        <h4>2022 MunchCakes all right reserved</h4>
        <div className='flex space-x-4'>
            <AiFillFacebook width={40} color='blue'/>
            <AiFillInstagram width={40} color='red'/>
            <AiFillTwitterSquare  width={40} color='blue'/>
            <AiFillYoutube  width={40} color='red'/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer