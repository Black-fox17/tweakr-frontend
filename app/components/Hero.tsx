"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="bg-[#E8F4FA] flex items-center justify-center min-h-screen px-4 sm:px-8">
            <div className="max-w-[90rem] flex flex-col-reverse md:flex-row items-center w-full gap-8">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                    className="flex sm:items-start items-center justtify-center flex-col flex-1 bg-white bg-opacity-10 py-6 sm:p-10 md:p-14 sm:rounded-3xl text-center md:text-left"
                >
                    <h1 className="text-[2rem] sm:text-[2.7rem] font-semibold leading-tight">
                        You Write, <br className="hidden sm:block" />We Help You Reference!
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base mb-8 leading-7">
                        For writers, students, and researchers
                    </p>
                    <Button variant="outlined" overrideStyle="py-2 px-6 w-full">
                        <Link href="/sign-up">Get Started</Link>
                    </Button>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    className="flex-1 flex justify-center"
                >
                    <Image
                        src="/assets/images/Bill Sitting using laptop 1.svg"
                        width={500}
                        height={400}
                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
                        alt="Hero Illustration"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
