import Image from 'next/image'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen w-full'>
            <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center  lg:p-4 '>
                <Image src="/assets/images/Tweakr.png" alt='logo' width={224} height={82} className='h-auto w-[100px] lg:w-[150px]' />
                {children}
            </section>
        </div>
    )
}

export default layout
