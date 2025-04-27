import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="px-4 py-10 flex items-center justify-center bg-white">
            <div className="flex flex-col gap-8 items-center sm:items-start w-full max-w-[1200px]">
                {/* Top Header Section */}
                <div className="flex flex-col md:flex-row w-full gap-6">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        // viewport={{ once: true, amount: 0.3 }}
                        className="text-[32px] sm:text-[40px] md:text-[60px] font-semibold md:w-[55%] text-center md:text-left"
                    >
                        Start Your Hassle-Free Referencing Now!
                    </motion.h1>

                    <div className="flex flex-col items-center md:items-end justify-between gap-4 md:gap-8 w-full md:w-[45%]">
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            // viewport={{ once: true, amount: 0.3 }}
                            className="text-[16px] sm:text-[18px] text-center px-4 md:px-0"
                        >
                            Avoid citation errors and formatting struggles—let Tweakrr handle your references in one click.
                        </motion.p>
                        <motion.button
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        // viewport={{ once: true, amount: 0.3 }}
                        >
                            <Link href="/dashboard" className="bg-[#31DAC0] text-center flex gap-2 rounded-full py-3 px-5 text-[16px] sm:text-[17px] font-semibold text-white w-fit"
                            >
                                Reference Your Document Today
                                <ArrowRight />
                            </Link>
                        </motion.button>
                    </div>
                </div>

                {/* Bottom Info Section */}
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    {/* Image */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        // viewport={{ once: true, amount: 0.3 }}
                        className="w-full lg:w-[40%] h-auto sm:h-[265px]"
                    >
                        <img
                            src="/assets/Frame 1707479715.png"
                            alt="tweakrr"
                            className="w-full h-full rounded-xl object-fit"
                        />
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        // viewport={{ once: true, amount: 0.3 }}
                        className="w-full lg:w-[60%] bg-[#EDEDED] p-6 sm:p-10 rounded-[24px] flex items-center flex-row flex-wrap justify-between gap-6 whitespace-nowrap"
                    >
                        <div className="flex flex-col gap-4">
                            <p className="font-bold">Legal</p>
                            <ul className="font-medium flex flex-col gap-3">
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>License</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-bold">Company</p>
                            <ul className="font-medium flex flex-col gap-3">
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-bold">Social</p>
                            <ul className="font-medium flex flex-col gap-3">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default Footer;
