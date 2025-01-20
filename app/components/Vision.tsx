import React from 'react'
import Image from 'next/image'

const Vision = () => {
    return (
        <section className='flex items-center justify-center flex-col gap-[4rem] section-padding py-20'>
            <h1 className='text-bold text-[3rem]'>Our Vision</h1>
            <div className='flex gap-8 items-center justify-center flex-col-reverse sm:flex-row'>
                <Image
                    src={'/assets/images/Rectangle 15 (1).svg'}
                    width={470}
                    height={311}
                    alt='about us'
                    className='w-full'
                />
                <p className='text-base md:text-lg mb-8 leading-7 text-justify typing'>Our vision is to revolutionize the way academic referencing is done by providing a smart, reliable, and user-friendly platform. We strive to become the global standard for citation tools, empowering students, lecturers, and professionals to focus on content creation while ensuring their work adheres to the highest referencing standards.
                </p>
            </div>
        </section>
    )
}

export default Vision
