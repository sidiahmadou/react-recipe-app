import React from 'react'
import Footer from '../Layouts/Footer'
import Navigation from '../Layouts/Navigation'

function Layout({children}) {
  return (
    <div className='w-screen min-h-screen flex flex-col justify-between'>
      <Navigation />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout