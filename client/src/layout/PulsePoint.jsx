import React from 'react'
import Nav from '../components/nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


const PulsePoint = () => {
  return (
    <>
        <div>
            {/* nav component up here */}
            <Nav />

            {/* main components here */}
            <Outlet />
            
            {/* footer component here */}
            <Footer />

        </div>
    </>
  )
}

export default PulsePoint;