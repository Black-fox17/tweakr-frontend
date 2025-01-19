import Image from 'next/image'
import React from 'react'

const steps = [
    {
        id: 1,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it work",
        stepNumber: 1,
        title: "Enter your copywrite project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est purus eu tempor tincidunt commodo.",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
    {
        id: 2,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it work",
        stepNumber: 2,
        title: "Enter your copywrite project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est purus eu tempor tincidunt commodo.",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
    {
        id: 3,
        imageSrc: "/assets/images/Rectangle 15 (1).svg",
        imageAlt: "how it work",
        stepNumber: 2,
        title: "Enter your copywrite project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est purus eu tempor tincidunt commodo.",
        listItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
];

function HowItWorks() {
    return (
        <section className='flex items-center justify-center flex-col gap-[4rem] section-padding py-20'>
            <h1 className='text-bold text-[3rem]'>How it works</h1>
            <div className='flex items-center flex-col gap-8 justify-center'>
                {steps.map((step, id) => {
                    return (
                        <article
                            key={id}
                            className='flex md:flex-row flex-col items-start justify-center gap-8 h-auto md:h-[311px] fade-in'>
                            <Image
                                src={step.imageSrc}
                                width={470}
                                height={311}
                                className='w-full sm:w-auto'
                                alt={"how it work"}
                            />
                            <div className='md:flex  hidden items-center justify-center gap-4 flex-col'>
                                <div className='border border-darkgray px-2 py-1 text-[14px]'>{step.stepNumber}</div>
                                <div className='h-[15rem] w-[1px] text-darkgray bg-darkgray'></div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h3 className='font-bold text-[20px]'>{step.title}</h3>
                                <p className='text-4'>{step.description}</p>
                                <ul className='space-y-2 py-4'>
                                    {step.listItems.map((item, index) => (
                                        <li key={index}>
                                            {item}
                                        </li>)
                                    )}
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default HowItWorks
