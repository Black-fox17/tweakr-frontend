import React from 'react'
import Image from 'next/image'

const Vision = () => {
    return (
        <section className='flex items-center justify-center flex-col gap-[4rem] section-padding py-20'>
            <div className='flex gap-8 items-center justify-center flex-col-reverse md:flex-row'>
                <Image
                    src={'/assets/images/vision.jpg'}
                    width={385}
                    height={180}
                    alt='about us'
                    className='rounded-[3rem] animate-slideIn'
                />
                <div className='flex flex-col gap-10 flex-start justify-center'>
                    <h1 className='text-bold text-[3rem] animate-fadeInFromTop'>Our Vision</h1>
                    <p className='text-base md:text-lg mb-8 leading-7 text-justify typing'>
                        Our vision is to revolutionize the way academic referencing is done by providing a smart, reliable, and user-friendly platform. We strive to become the global standard for citation tools, empowering students, lecturers, and professionals to focus on content creation while ensuring their work adheres to the highest referencing standards.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Vision
