"use client";

import React, { useEffect } from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
    useEffect(() => {
        const textElements = document.querySelectorAll(".typing");
        textElements.forEach((element) => {
            const text = element.innerHTML;
            element.innerHTML = "";
            const lines = text.split("<br>");
            lines.forEach((line, lineIndex) => {
                line.split("").forEach((char, charIndex) => {
                    const span = document.createElement("span");
                    span.innerHTML = char === " " ? "&nbsp;" : char;
                    span.style.opacity = "0";
                    span.style.display = "inline-block";
                    span.style.animation = `fadeIn 0.5s ease forwards ${(lineIndex * line.length + charIndex) * 0.05}s`;
                    element.appendChild(span);
                });
                if (lineIndex < lines.length - 1) {
                    element.appendChild(document.createElement("br"));
                }
            });
        });
    }, []);

    return (
        <section className="bg-[#E8F4FA] flex items-center justify-center min-h-screen px-4 sm:px-8">
            <div className="max-w-[90rem] flex flex-col-reverse md:flex-row items-center justify-between w-full gap-4">
                {/* Text Content */}
                <div className="flex-1 bg-white bg-opacity-10 py-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl text-center md:text-justify">
                    <h1 className="text-[2rem] sm:text-[2.7rem]  font-semibold leading-tight mb-6">
                        You Write, <br className="hidden sm:block" />We Help You Reference!
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base mb-8 leading-7">
                        We know citation and referencing is boring and too stressful. We exist to save you all that, so you can focus on what matters most.
                        <br />
                        Made for students, researchers, and professionals! Tweakr ensures your work meets the highest academic standards. Powered by professionals and trusted citation databases, we simplify the referencing process saving you time and effort.
                    </p>
                    <Button variant="outlined" overrideStyle="py-2 px-6">
                        Get Started
                    </Button>
                </div>

                {/* Hero Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/assets/images/Bill Sitting using laptop 1.svg"
                        width={500}
                        height={400}
                        className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
                        alt="Hero Illustration"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
