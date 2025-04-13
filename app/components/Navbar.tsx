"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons, optional
import { motion, AnimatePresence } from 'framer-motion';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('Benefits');

    const navLinks = ['Benefits', 'App', 'Pricing', 'About'];
    return (
        <nav className='border border-[#343F5D] rounded-full p-2 w-full sm:w-[720px] flex items-center justify-between relative'>
            <img src="/assets/Coloured.png" alt="logo" className='w-[129px] h-[40px]' />

            <div className="sm:hidden px-4">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <ul className="hidden sm:flex items-center justify-center gap-4 text-[#828282] font-semibold">
                {navLinks.map((link) => (
                    <li
                        key={link}
                        onClick={() => setActive(link)}
                        className={`cursor-pointer rounded-full transition-all  ${active === link ? ' px-[18px] py-[10px] bg-[#555E77] text-white' : ''
                            }`}>
                        {link}
                    </li>
                ))}
            </ul>


            <button className='hidden sm:block bg-[#31DAC0] rounded-full text-[#010F34] py-[14px] px-[20px] font-semibold'>
                Login
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-[#010F34] mt-2 rounded-xl p-4 flex flex-col gap-4 sm:hidden z-50">
                        <ul className="flex flex-col gap-2 text-[#828282] font-semibold">
                            {navLinks.map((link) => (
                                <li
                                    key={link}
                                    onClick={() => {
                                        setActive(link);
                                        setIsOpen(false);
                                    }}
                                    className={`cursor-pointer px-4 py-2 rounded-full transition-all ${active === link ? 'bg-[#555E77] text-white' : ''
                                        }`}
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-[#31DAC0] rounded-full text-[#010F34] py-3 px-6 font-semibold w-full">
                            Login
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
