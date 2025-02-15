"use client";

import React from "react";
import { motion } from "framer-motion";

const SubHeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 px-4 sm:px-8 md:px-16 py-16"
            id="about"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-center leading-tight mt-8 text-brand"
            >
                Tweakr: Effortless Citations, Seamless Research
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 text-center text-sm sm:text-base mb-8 leading-7"
            >
                We know citation and referencing is boring and too stressful. We exist to save you all that, so you can focus on what matters most.
                Made for students, researchers, and professionals! Tweakr ensures your work meets the highest academic standards. Powered by professionals and trusted citation databases, we simplify the referencing process saving you time and effort.
            </motion.p>
        </motion.div>
    );
};

export default SubHeroSection;
