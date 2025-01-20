"use client"

import React, { useEffect } from 'react';
import Button from './Button';

const Hero = () => {
    useEffect(() => {
        const textElements = document.querySelectorAll('.typing');
        textElements.forEach((element) => {
            const text = element.innerHTML;
            element.innerHTML = '';
            const lines = text.split('<br>');
            lines.forEach((line, lineIndex) => {
                line.split('').forEach((char, charIndex) => {
                    const span = document.createElement('span');
                    span.innerHTML = char === ' ' ? '&nbsp;' : char; // Use non-breaking space for spaces
                    span.style.opacity = '0';
                    span.style.display = 'inline-block';
                    span.style.animation = `fadeIn 0.5s ease forwards ${(lineIndex * line.length + charIndex) * 0.05}s`;
                    element.appendChild(span);
                });
                if (lineIndex < lines.length - 1) {
                    const br = document.createElement('br');
                    element.appendChild(br);
                }
            });
        });
    }, []);
    return (
        <section
            className='relative flex items-center justify-center md:min-h-screen bg-[url("/assets/images/earth.svg")] bg-no-repeat bg-left-bottom'
        >
            <div className='section-padding'>
                <div className='w-full bg-white bg-opacity-10 p-4 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]'>
                    <div className='max-w-[56rem] min-h-[180px] font-semibold '>
                        <h1 className="text-[3.5rem] sm:text-[4rem] text-justify lg:text-[4.5rem] font-normal leading-[1] mb-7 typing"
                            style={{ animationDelay: '8s' }}>
                            You Write, <br />We Help You Reference!
                        </h1>
                        <p className="text-darkgray text-base md:text-lg mb-8 leading-7 typing" style={{ animationDelay: '10s' }}>
                            We know citation and referencing is boring and too stressful. We exist to save you all that, so you can focus on what Matters most.
                            <br />
                            Made for students, researchers, and professionals! Tweakr ensures your work meets the highest academic standards. Powered by professionals and trusted citation databases, we simplify the referencing process—saving you time and effort.
                        </p>
                    </div>
                    <Button>
                        Get Started
                    </Button>
                    #eb8d29
                    #f2ca1c
                    #7654a1
                    #c7316e
                    #38b6ff
                </div>
            </div>
        </section>
    );
};

export default Hero;