
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='flex items-center justify-center flex-col gap-[4rem] section-padding py-20'>
            <div className='flex gap-8 items-center justify-center flex-col-reverse md:flex-row'>
                <div className='flex flex-col gap-8 flex-start justify-center '>
                    <h1 className='text-bold text-[3rem] animate-fadeInFromTop'>About Us</h1>
                    <p className='text-base md:text-lg mb-8 leading-7 justify-text typing'>
                        Tweakr is a cutting-edge  referencing team designed to simplify the academic referencing process. Our platform seamlessly integrates with documents to scan for key terms, match them against trusted academic journals and citation databases, and generate accurate in-text citations and comprehensive reference lists. With Tweakr, we aim to enhance the accuracy, efficiency, and credibility of scholarly and professional documents by relieving you the stress of citation processes.
                    </p>
                </div>
                <Image
                    src={'/assets/images/about image.png'}
                    width={800}
                    height={300}
                    alt="about us"
                    className="w-full h-full object-cover rounded-full animate-slideIn"
                />
            </div>
        </section>
    )
}

export default About
