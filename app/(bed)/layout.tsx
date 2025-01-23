import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className="w-full mt-16">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout
