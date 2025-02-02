"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import MobileNavigation from './MobileNavigation'

export const navElements = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/home#about' },
    { name: 'Service', link: '/home#service' },
]

const Navbar = () => {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`section-padding text-4 fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm ${scrolled ? 'shadow-xl' : ''}`}>
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-between gap-20'>
                    <Link href='/'>
                        <Image
                            src="/assets/images/Tweakr1.png"
                            alt='tweakR-logo'
                            width={150}
                            height={4}
                            className='w-14 sm:w-20'
                        />
                    </Link>
                </div>
                <div className="flex flex-row lg:items-center justify-center w-auto lg:border-none gap-4 lg:flex-row whitespace-nowrap ">
                    <ul className='hidden md:flex items-center capitalize justify-evenly w-full  text-base'>
                        {navElements.map((element, index) => {
                            const isActive = pathname === element.link;
                            return (
                                <li key={index} className={`${isActive ? "text-brand" : ""
                                    } hover:text-brand `}>
                                    <Link href={element.link}>
                                        {element.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <Link href="/plans" className=' hidden sm:block'>
                        Plan
                    </Link>
                    <Button variant='outlined' overrideStyle='py-1 px-4'>
                        <Link href="/sign-up">Get Started</Link>
                    </Button>
                    <div className="bg-white bg-opacity-10 rounded-[0.35rem] px-3 pt-2 md:hidden cursor-pointer">
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
