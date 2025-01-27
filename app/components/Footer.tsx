import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="max-w-screen bg-black text-white flex flex-col p-6 md:p-12 gap-6 items-center">
            {/* Logo/Image */}
            <div className="flex items-center justify-center">
                <Image
                    src={"/assets/images/Tweakr.png"}
                    alt="Flag Icon"
                    height={100}
                    width={100}
                    className="w-30 h-auto"
                />
            </div>

            {/* Title */}
            <h1 className="text-center text-[24px] md:text-[40.5px] font-bold leading-snug">
                You Write,<br />We Help You <br /> Reference
            </h1>

            {/* CTA Button */}
            <button className='flex items-center justify-center gap-2'>
                Try it now
                <Image
                    src={"/assets/images/arrowright.svg"}
                    alt="Twitter Icon"
                    height={12}
                    width={12}
                />
            </button>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-4">
                <Image
                    src={"/assets/images/twitter.svg"}
                    alt="Twitter Icon"
                    height={18}
                    width={18}
                    className='w-8'
                />
                <Image
                    src={"/assets/images/x.svg"}
                    alt="LinkedIn Icon"
                    height={18}
                    width={18}
                    className='bg-white rounded-full p-1 w-10'
                />
            </div>

            {/* Email and Copyright */}
            <p className="text-[14.1px] text-center">tweakr01@gmail.com</p>
            <p className="text-[14.1px] text-center">© 2024 Tweakr Limited</p>

            {/* Privacy Policy Link */}
            <Link href="/privatepolicy" className="text-[12px] underline">
                Privacy Policy
            </Link>
        </footer>
    );
};

export default Footer;
