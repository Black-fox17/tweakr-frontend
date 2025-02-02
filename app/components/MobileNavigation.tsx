import React from 'react'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navElements } from './Navbar'
import Link from 'next/link'
import Button from './Button'


const MobileNavigation = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                aria-label="Open mobile navigation menu"
            >
                <Image
                    src="/assets/icons/harmburger.svg"
                    alt='forcythe logo'
                    width={18}
                    height={18}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className=' w-60 font-semibold rounded-[2rem] fixed md:hidden right-0 top-8 border-0 bg-primarybg'
                aria-label="Mobile navigation menu"
            >
                <div
                    className='py-8 px-[1.25rem] space-y-4'
                >
                    {navElements.map((element, index) => {
                        return (
                            <DropdownMenuItem
                                key={index}
                                className='w-full'
                            >
                                <Link href={element.link} className=' capitalize text-white text-4 hover:text-brand '
                                    aria-label={`Navigate to ${element.name}`}
                                >
                                    {element.name}
                                </Link>
                            </DropdownMenuItem>
                        )
                    })}
                    <Button variant='outlined' overrideStyle='py-1 px-4 w-full'>
                        <Link href="/sign-up">Sign Up</Link>
                    </Button>
                    <Button variant='transparent' overrideStyle='py-1 px-4 w-full'>
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MobileNavigation
