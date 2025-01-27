// import React from 'react'
// import Image from 'next/image'
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { navElements } from './Navbar'
// import Link from 'next/link'


// const MobileNavigation = () => {
//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger
//                 aria-label="Open mobile navigation menu"
//             >
//                 <Image
//                     src="/assets/icons/harmburger.svg"
//                     alt='forcythe logo'
//                     width={18}
//                     height={18}
//                 />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent
//                 className=' w-60 font-semibold rounded-[2rem] fixed md:hidden right-0 top-20 border-0 bg-primarybg'
//                 aria-label="Mobile navigation menu"
//             >
//                 <div
//                     className='py-8 px-[1.25rem]'
//                     style={{
//                         background: "linear-gradient(0deg, rgba(7, 22, 38, 0)32%, rgb(7, 22, 38)85%)"
//                     }}>
//                     {navElements.map((element, index) => {
//                         return (
//                             <DropdownMenuItem
//                                 key={index}
//                                 className='w-full py-2.5'
//                             >
//                                 <Link href={element.link} className='focus:outline-none focus:ring-2 focus:ring-accent text-base capitalize text-white '
//                                     aria-label={`Navigate to ${element.name}`}
//                                 >
//                                     {element.name}
//                                 </Link>
//                             </DropdownMenuItem>
//                         )
//                     })}
//                 </div>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     )
// }

// export default MobileNavigation
