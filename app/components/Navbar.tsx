"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import MobileNavigation from './MobileNavigation'

export const navElements = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/#about' },
    { name: 'Service', link: '/#service' },
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

    const handleSmoothScroll = (event: React.MouseEvent, id: string) => {
        event.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <nav className={`text-4 fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm ${scrolled ? 'shadow-xl' : ''}`}>
            <div className='flex justify-between items-center w-full'>
                <div className='flex flex-1 items-center justify-between gap-20'>
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
                <div className="flex  flex-1 lg:items-center justify-evenly  lg:border-none gap-4 lg:flex-row whitespace-nowrap ">
                    <ul className='hidden md:flex items-center capitalize justify-evenly w-full  text-base'>
                        {navElements.map((element, index) => {
                            const isActive = pathname === element.link;
                            return (
                                <li key={index} className={`${isActive ? "text-brand" : ""
                                    } hover:text-brand `}>
                                    {element.link.startsWith("/#") ? (
                                        <a href={element.link} onClick={(e) => handleSmoothScroll(e, element.link.substring(2))}>
                                            {element.name}
                                        </a>
                                    ) : (
                                        <Link href={element.link}>{element.name}</Link>
                                    )}
                                </li>
                            )
                        })}
                        <Button variant='outlined' overrideStyle='py-1 px-4'>
                            <Link href="/sign-up">Sign Up</Link>
                        </Button>
                        <Button variant='transparent' overrideStyle='py-1 px-4'>
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                    </ul>
                </div>
                <div className="bg-white bg-opacity-10 rounded-[0.35rem] px-3 pt-2 md:hidden cursor-pointer">
                    <MobileNavigation />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
