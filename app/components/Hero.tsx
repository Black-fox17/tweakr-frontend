"use client"

import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='bg-[#010F34] border-b border-b-[#DEE5ED] rounded-b-[50px] p-4 sm:p-8 text-white flex flex-col items-center justify-center shadow-xl relative'>
            <img src="/assets/Lights.png" alt="light" className='absolute top-0 left-0' />
            <img src="/assets/Lights (2).png" alt="light" className='absolute top-0 right-0' />
            <div className='flex relative flex-col items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                // viewport={{ once: true, amount: 0.5 }}
                >
                    <Navbar />
                    <div
                        className='flex flex-col items-center gap-4 justify-center max-w-[901px] text-center pt-12'>
                        <div className='text-[#646464] flex items-center gap-2 bg-white rounded-full p-2 self-center'>
                            <img src="/assets/Images Container.png" alt="img" className='w-[56px] h-[26px]' />
                            <p>3,500+ Pro Users</p>
                        </div>
                        <div>
                            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[40px] md:text-[64px] text-center tracking-[0] leading-[1.2] ">One Upload. <br className='block sm:hidden' /> One Click. <br /> <span className='text-[#31DAC0]'>Perfect Citations.</span></h1>
                        </div>
                    </div>
                </motion.div>
                <img src="/assets/Vector.svg" alt="bg" className='absolute bottom-0' />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                // viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='flex flex-col items-center justify-center gap-8 pb-12'>
                        <p className="relative self-stretch font-body-xlarge-medium font-[number:var(--body-xlarge-medium-font-weight)] text-foundation-whitewhite-500 text-[length:var(--body-xlarge-medium-font-size)] text-center tracking-[var(--body-xlarge-medium-letter-spacing)] leading-[var(--body-xlarge-medium-line-height)]w-full sm:max-w-[901px]">Tweakrr automatically handles your in-text citations and reference lists. You write the brilliance, we'll handle the boring bits.</p>
                        <button className=' bg-[#31DAC0] rounded-full text-[#010F34] py-[14px] px-[20px] font-semibold'>
                            Cite It Right
                        </button>
                    </div>
                </motion.div>
            </div>
            <div className='flex flex-col sm:flex-row relative'>
                <motion.div
                    className="relative"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                // viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.img
                        initial={{ rotate: -10, opacity: 0, x: -50 }}
                        whileInView={{ rotate: 0, opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/assets/a frazzled student surrounded by citation style guides.png"
                        alt=""
                        className="max-w-full sm:max-w-[280px] md:max-w-[526px]"
                    />
                    <img src="/assets/left-stroke.svg" alt="stroke" className='absolute top-[-4.5rem] left-0' />
                </motion.div>
                <motion.div
                    className="relative mt-[3rem] sm:mt-0"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                // viewport={{ once: true, amount: 0.5 }}
                >
                    <img src="/assets/right stroke.svg" alt="stroke" className='absolute top-[-4.5rem] right-0' />
                    <motion.img
                        initial={{ rotate: 10, opacity: 0, x: 50 }}
                        whileInView={{ rotate: 0, opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        // viewport={{ once: true, amount: 0.5 }}
                        src="/assets/a relaxed student whose document magically gains perfect citations..png" alt=""
                        className="max-w-full sm:max-w-[280px] md:max-w-[526px]"
                    />
                    <img src="/assets/Frame 1707479763.png" alt="img"
                        className="hidden sm:block absolute bottom-0 -right-[6rem] max-w-[150px] md:max-w-[220px]"
                    />
                </motion.div>
            </div>
        </div >
    )
}

export default Hero
