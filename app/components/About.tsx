import Image from "next/image";
import React from "react";
import Button from "./Button";

const About = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-12 section-padding py-16">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10 px-4 sm:px-8">

                {/* Left Content (Text) */}
                <div className="flex flex-col gap-5 text-center md:text-left flex-1">
                    <h1 className="text-[1.5rem] sm:text-[1.75rem] font-semibold animate-fadeInFromTop leading-tight break-words whitespace-normal">
                        Know More About Tweakr
                    </h1>
                    <p className="text-[14px] sm:text-[15px] leading-[1.6]  break-words whitespace-normal">
                        Tweakr is a cutting-edge referencing team designed to simplify the academic referencing process. Our platform seamlessly integrates with documents to scan for key terms, match them against trusted academic journals and citation databases, and generate accurate in-text citations and comprehensive reference lists.
                    </p>
                    <p className="text-[14px] sm:text-[15px] leading-[1.6] break-words whitespace-normal">
                        With Tweakr, we aim to enhance the accuracy, efficiency, and credibility of scholarly and professional documents by relieving you of the stress of citation processes.
                    </p>
                    <div>
                        <Button variant="transparent" overrideStyle="px-6 py-2">
                            Contact Us
                        </Button>
                    </div>
                </div>
                {/* Right Content (Image) */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/assets/images/3D Illustration-Product Development-Skin-01 1.png"
                        width={1000}
                        height={1000}
                        className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
                        alt="Illustration"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;
