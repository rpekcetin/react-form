import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { Suspense } from 'react'

const Layout = () => {
    return (
        <div>
            <Suspense fallback={<div >...</div>}>
                <Navbar />
                <Outlet />
                <Footer />
            </Suspense>
        </div>
    )
}

export default Layout