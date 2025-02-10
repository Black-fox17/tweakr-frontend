"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Vision = () => {
    return (
        <section
            id="about"
            className="flex items-center justify-center flex-col gap-12 py-16 px-4 sm:px-8"
        >
            <motion.div
                className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Left: Image */}
                <motion.div
                    className="flex-1 flex justify-center w-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/assets/images/Rectangle 16.png"
                        width={385}
                        height={180}
                        alt="about us"
                        className="w-full  md:max-w-[400px] max-h-[270px] rounded-2xl"
                    />
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                    className="flex flex-col gap-6 flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-[1.75rem] sm:text-[2rem] font-bold leading-tight">
                        Our Vision
                    </h1>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-justify">
                        Our vision is to revolutionize the way academic referencing is done
                        by providing a smart, reliable, and user-friendly platform. We
                        strive to become the global standard for citation tools, empowering
                        students, lecturers, and professionals to focus on content creation
                        while ensuring their work adheres to the highest referencing
                        standards.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Vision;
