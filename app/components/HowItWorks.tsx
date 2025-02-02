"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

const steps = [
    {
        id: 1,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it works",
        stepNumber: 1,
        title: "Enter your copyright project",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est purus eu tempor tincidunt commodo.",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
    },
    {
        id: 2,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it works",
        stepNumber: 2,
        title: "Submit your draft for processing",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est purus eu tempor tincidunt commodo.",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
    },
    {
        id: 3,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it works",
        stepNumber: 3,
        title: "Receive and review your results",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est purus eu tempor tincidunt commodo.",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
    },
];

function HowItWorks() {
    const [showAll, setShowAll] = useState(false);

    return (
        <section className="flex flex-col items-center justify-center gap-10 px-4 sm:px-8 md:px-16 py-16">
            <div className="text-center max-w-[800px]">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                    Lorem Ipsum is simply dummy text of the printing.
                </h1>
                <p className="mt-4 text-sm sm:text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </p>
            </div>

            <div className="relative w-full max-w-[800px]">
                {/* Content Wrapper with Fading Effect */}
                <div
                    className={`flex flex-col gap-8 transition-all duration-500 ${showAll ? "max-h-[1000px]" : "max-h-[500px] sm:max-h-[550px]"
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
                        <article key={id} className="flex flex-col sm:flex-row items-start justify-center gap-6 sm:gap-8">
                            <Image
                                src={step.imageSrc}
                                width={350}
                                height={250}
                                className="w-full sm:w-[300px] md:w-[350px] h-auto"
                                alt={"how it works"}
                            />
                            <div className="hidden sm:flex flex-col items-center gap-2">
                                <div className="border border-gray-500 px-3 py-1 text-sm">{step.stepNumber}</div>
                                <div className="h-[12rem] w-[1px] bg-gray-500"></div>
                            </div>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <h3 className="font-bold text-lg sm:text-xl">{step.title}</h3>
                                <p className="text-sm sm:text-base">{step.description}</p>
                                <ul className="space-y-2">
                                    {step.listItems.map((item, index) => (
                                        <li key={index} className="text-sm sm:text-base">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
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
