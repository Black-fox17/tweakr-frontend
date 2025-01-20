import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="max-w-screen bg-black text-white flex flex-col p-6 md:p-12 gap-6 items-center">
            {/* Logo/Image */}
            <div className="flex items-center justify-center">
                <Image
                    src={"/Footerlogo"}
                    alt="Flag Icon"
                    height={50}
                    width={50}
                    className="rounded-full"
                />
            </div>

            {/* Title */}
            <h1 className="text-center text-[24px] md:text-[40.5px] font-bold leading-snug">
                Empowering <br className="hidden md:block" /> Companies to Craft <br className="hidden md:block" /> Helpful Guides
            </h1>

            {/* CTA Button */}
            <button className='flex items-center justify-center gap-2'>
                Try it for free
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
                    src={"/assets/images/linkedin.svg"}
                    alt="Twitter Icon"
                    height={18}
                    width={18}
                />
                <Image
                    src={"/assets/images/twitter.svg"}
                    alt="LinkedIn Icon"
                    height={18}
                    width={18}
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
