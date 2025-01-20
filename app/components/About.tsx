
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='flex items-center justify-center flex-col gap-[4rem] section-padding py-20'>
            <h1 className='text-bold text-[3rem]'>About Us</h1>
            <div className='flex gap-8 items-center justify-center flex-col-reverse sm:flex-row'>
                <p className='text-base md:text-lg mb-8 leading-7 text-justify typing'>Tweakr is a cutting-edge  referencing team designed to simplify the academic referencing process. Our platform seamlessly integrates with documents to scan for key terms, match them against trusted academic journals and citation databases, and generate accurate in-text citations and comprehensive reference lists. With Tweakr, we aim to enhance the accuracy, efficiency, and credibility of scholarly and professional documents by relieving you the stress of citation processes.
                </p>
                <Image
                    src={'/assets/images/Rectangle 15 (1).svg'}
                    width={470}
                    height={311}
                    alt='about us'
                    className='w-full'
                />
            </div>
        </section>
    )
}

export default About
