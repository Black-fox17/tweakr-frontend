import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className='bg-[#010F34] p-4 sm:p-8 text-white flex flex-col items-center justify-center relative'>
            <img src="/assets/Lights.png" alt="light" className='absolute top-0 left-0' />
            <img src="/assets/Lights (2).png" alt="light" className='absolute top-0 right-0' />
            <div className='flex flex-col items-center justify-center gap-12'>
                <Navbar />
                <div className='relative flex flex-col items-center justify-center gap-8 pb-10'>
                    <div className='flex flex-col items-center justify-center max-w-[901px] text-center'>
                        <div className='text-[#646464] flex items-center gap-2 bg-white rounded-full p-2 self-center'>
                            <img src="/assets/Images Container.png" alt="img" className='w-[56px] h-[26px]' />
                            <p>3,500+ Pro Users</p>
                        </div>
                        <div>
                            <h1 className='text-[64px] font-semibold text-center'>One Upload. One Click. <br /> <span className='text-[#31DAC0]'>Perfect Citations.</span></h1>
                        </div>
                        <p className='text-[18px]'>Effortlessly generate accurate in-text citations and reference lists with powered precision. No more manual searching, no more formatting errors just seamless academic writing.</p>
                    </div>
                    <img src="/assets/Vector.svg" alt="bg" className='absolute bottom-0' />
                    <button className=' bg-[#31DAC0] rounded-full text-[#010F34] py-[14px] px-[20px] font-semibold'>
                        Cite It Right
                    </button>
                </div>
            </div>
            <div className='flex'>
                <img src="/assets/a frazzled student surrounded by citation style guides.png" alt="" />
                <img src="/assets/a relaxed student whose document magically gains perfect citations..png" alt="" />
            </div>
        </div>
    )
}

export default Hero
