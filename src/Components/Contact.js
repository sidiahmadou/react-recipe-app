import React from 'react'

function Contact() {
  return (
    <div className='px-8 py-12 bg-lightOrange flex flex-col space-y-4 md:px-0 md:items-center'>
        <h1 className='text-center text-4xl md:text-4xl font-bold'>Deliciousness to your inbox</h1>
        <p className='text-center'>Enjoy weekly hand picked recipes and recommandations</p>
        <div className='flex flex-col md:flex-row'>
            <input className='text-black p-2' type='text' placeholder='Email Address' />
            <input className='text-white py-2 px-4 bg-orange' type='button' value='JOIN' />
        </div>
    </div>
  )
}

export default Contact