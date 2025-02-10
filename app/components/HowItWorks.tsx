"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const steps = [
    {
        id: 1,
        imageSrc: "/assets/images/Rectangle 18.png",
        imageAlt: "how it works",
        stepNumber: 1,
        title: "Accessing the Application",
        description: "Log in or sign up via email, Google, or ORCID. Verify your email to activate your account",
    },
    {
        id: 2,
        imageSrc: "/assets/images/Rectangle 19.png",
        imageAlt: "Dashboard Overview",
        stepNumber: 2,
        title: "Dashboard Overview",
        description:
            "Manage documents, access saved citations, and adjust settings for citation styles and preferences.",
    },
    {
        id: 3,
        imageSrc: "/assets/images/rec1.jpg",
        imageAlt: "how it works",
        stepNumber: 3,
        title: "Uploading Documents",
        description:
            "Click Upload Document to add .docx, .txt, or PDF files.",
    },
    {
        id: 4,
        imageSrc: "/assets/images/rec2.jpg",
        imageAlt: "how it works",
        stepNumber: 4,
        title: "Processing & Downloading",
        description:
            "Make a payment, and Tweakr formats citations in 5-10 minutes. Download the finalized document via email.",
    },
];

function HowItWorks() {
    const [showAll, setShowAll] = useState(false);

    return (
        <section
            className="flex flex-col items-center justify-center gap-10 px-4 sm:px-8 md:px-16 py-16" id="service">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center max-w-[800px]"
            >
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight mt-8">
                    Tweakr Application – User Guide
                </h1>
                <p className="mt-4 text-sm sm:text-base">
                    This guide will help you navigate the Tweakr Application’s web interface and make the most of its features. Follow these steps to upload, edit, and finalize your documents with properly formatted citations.
                </p>
            </motion.div>

            <div className="relative w-full max-w-[800px]">
                {/* Content Wrapper with Fading Effect */}
                <div
                    className={`flex flex-col gap-8 transition-all duration-500 ${showAll ? "h-auto" : "max-h-[500px] sm:max-h-[550px]"
                        }`}
                    style={{
                        WebkitMaskImage: showAll
                            ? "none"
                            : "linear-gradient(to bottom, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 100%)",
                        maskImage: showAll
                            ? "none"
                            : "linear-gradient(to bottom, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 100%)",
                        transition: "mask-image 0.5s ease-in-out, -webkit-mask-image 0.5s ease-in-out",
                    }}
                >
                    {steps.map((step, id) => (
                        <motion.article
                            key={id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: id * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row items-start justify-center gap-6 sm:gap-8 w-full"
                        >
                            <Image
                                src={step.imageSrc}
                                width={350}
                                height={200}
                                className="w-full w-[450px] sm:h-[200px] rounded-[5px] object-cover"
                                alt={"how it works"}
                            />
                            <div className="hidden sm:flex flex-col items-center gap-2">
                                <div className="border border-gray-500 px-3 py-1 text-sm">{step.stepNumber}</div>
                                <div className="h-[10rem] w-[1px] bg-gray-500"></div>
                            </div>
                            <div className="flex flex-col w-full sm:w-[60%] gap-3 sm:gap-4">
                                <h3 className="font-bold text-lg sm:text-xl">{step.title}</h3>
                                <p className="text-[16px] text-justify">{step.description}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            {!showAll && (
                <Button
                    variant="outlined"
                    overrideStyle="py-2 px-4 sm:py-3 sm:px-5 text-xs sm:text-base"
                    onClick={() => setShowAll(true)}
                >
                    Continue With Guide
                </Button>
            )}
        </section>
    );
}

export default HowItWorks;
