import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import  { Toaster } from 'react-hot-toast';

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main style={{ minHeight: "70vh" }}>
      <Toaster/>
      {children}
      </main>
    <Footer/>
    </>
  )
}

export default Layout