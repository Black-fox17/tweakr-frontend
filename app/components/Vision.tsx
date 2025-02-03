import React from "react";
import Image from "next/image";

const Vision = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-12 section-padding py-16" id="about">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10 px-4 sm:px-8 mt-8">

                {/* Left: Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/assets/images/3d.webp"
                        width={385}
                        height={180}
                        alt="about us"
                        className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] max-h-[350px] rounded-2xl animate-slideIn"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
                    <h1 className="text-[1.75rem] sm:text-[2rem] font-bold animate-fadeInFromTop leading-tight">
                        Our Vision
                    </h1>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-justify typing break-words whitespace-normal">
                        Our vision is to revolutionize the way academic referencing is done by providing a smart, reliable, and user-friendly platform. We strive to become the global standard for citation tools, empowering students, lecturers, and professionals to focus on content creation while ensuring their work adheres to the highest referencing standards.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Vision;
