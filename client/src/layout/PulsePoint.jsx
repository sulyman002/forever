import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import NavPage from '../components/NavPage'


const PulsePoint = () => {
  return (
    <>
        <div>
            {/* nav component up here */}
            <NavPage />

            {/* main components here */}
            <Outlet />
            
            {/* footer component here */}
            <Footer />

        </div>
    </>
  )
}

export default PulsePoint;