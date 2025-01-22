import Image from 'next/image'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center  lg:py-0 lg:p-4 shadow-2xl'>
                <Image src="/assets/icons/logo-full-brand.svg" alt='logo' width={224} height={82} className='h-auto w-[200px] lg:w-[250px]' />
                {children}
            </section>
        </div>
    )
}

export default layout
