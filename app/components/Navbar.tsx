"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import MobileNavigation from './MobileNavigation'

export const navElements = [
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/service' },
    { name: 'Portfolio', link: '/service#portfolio' },
    { name: 'career', link: '/career' },
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
        <nav className={`section-padding text-4 fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm py-[0.5rem] ${scrolled ? 'border-b-[2px] border-darkgray' : ''}`}>
            <div className='mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between gap-20'>
                        <Link href='/'>
                            <Image
                                src="/assets/images/forcythe logo.svg"
                                alt='tweakR logo'
                                width={150}
                                height={10}
                                className='w-28 sm:w-32 md:auto'
                            />
                        </Link>
                        <div>
                            <ul className='hidden md:flex items-center capitalize gap-4 text-base'>
                                {navElements.slice(0, 5).map((element, index) => {
                                    const isActive = pathname === element.link;
                                    return (
                                        <li key={index} className={`${isActive ? "text-accent" : ""
                                            } hover:text-accent `}>
                                            <Link href={element.link}>
                                                {element.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col lg:items-center justify-center lg:w-auto border-t border-gray-200 lg:border-none w-screen gap-4 mt-auto mb-8 px-4 lg:flex-row lg:mt-0 lg:mb-0 lg:px-0 whitespace-nowrap lg:p-0 p-4">
                        <Link href="/plans" className='hidden md:block'>
                            Plan
                        </Link>
                        <div
                            className='w-[1px] h-[25px] bg-gray-300 hidden lg:block'
                        ></div>
                        <Button variant='outlined' overrideStyle='py-1 px-4'>
                            <Link href="/sign-up">Get Started</Link>
                        </Button>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-[0.35rem] px-3 pt-3 pb-[0.4rem] md:hidden cursor-pointer">
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
