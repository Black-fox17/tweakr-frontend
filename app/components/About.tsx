"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const About = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-12 py-16 px-4 sm:px-8">
            <motion.div
                className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Left Content (Text) */}
                <motion.div
                    className="flex flex-col sm:items-start items-center gap-5 text-center md:text-left flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-[1.5rem] sm:text-[1.75rem] font-semibold leading-tight">
                        Know More About Tweakr
                    </h1>
                    <div>
                        <p className="text-[14px] sm:text-[15px] leading-[1.6]">
                            Tweakr is a cutting-edge referencing team designed to simplify the
                            academic referencing process. Our platform seamlessly integrates
                            with documents to scan for key terms, match them against trusted
                            academic journals and citation databases, and generate accurate
                            in-text citations and comprehensive reference lists.
                        </p>
                        <p className="text-[14px] sm:text-[15px] leading-[1.6]">
                            With Tweakr, we aim to enhance the accuracy, efficiency, and
                            credibility of scholarly and professional documents by relieving you
                            of the stress of citation processes.
                        </p>
                    </div>
                    <div>
                        <Button variant="transparent" overrideStyle="px-6 py-2">
                            Contact Us
                        </Button>
                    </div>
                </motion.div>

                {/* Right Content (Image) */}
                <motion.div
                    className="flex-1 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/assets/images/3D Illustration-Product Development-Skin-01 1.png"
                        width={1000}
                        height={1000}
                        className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
                        alt="Illustration"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
