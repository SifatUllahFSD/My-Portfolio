import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default layout
