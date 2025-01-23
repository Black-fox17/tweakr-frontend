import Button from '@/app/components/Button'
import React from 'react'

const page = () => {
    return (
        <div className='mt-8 flex flex-col gap-8'>
            <div className="bg-[#f7f9fa] flex text-left w-full">
                <div className="px-[1rem] sm:px-[50px] py-[65px]">
                    <h1 className="text-[36px] mb-[8px] text-[#0e2332] font-semibold leading-10">
                        Join Pro
                        <br />Get Full Access to <span className='text-brand'>tweakR</span>
                    </h1>
                    <span className="text-[18px] text-[#6e7b84]">
                        Cancel anytime.
                    </span>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-8 px-[1rem] sm:px-[50px] py-[65px]'>
                <div className='border flex-1 border-light-300 shadow-xl  px-[0.5rem] py-[3rem]'>
                    <table className="w-full text-[14px] leading-6 border-collapse">
                        <thead>
                            <tr className="border-b border-gray-300 py-8">
                                <th></th>
                                <th>Free</th>
                                <th>Pro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                "Thousands of free resources",
                                "Over 50 million Pro Resources",
                                "Unlimited Downloads",
                                "Full Commercial Rights",
                                "No Attribution Required",
                                "Legal Indemnification",
                                "Bundle & Collection Downloads",
                                "Background Removal Tool",
                                "Faster Downloads & No Ads",
                            ].map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="text-left py-3 px-2">{item}</td>
                                    <td className="text-center py-3 px-2">

                                    </td>
                                    <td className="text-center py-3 px-2">✔</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col gap-8 flex-1'>
                    <article className='border border-light-300 shadow-xl flex-wrap rounded-[8px]  w-full md:h-auto'>
                        <div className='h-3 w-full rounded-[8px]'
                            style={{ backgroundImage: "linear-gradient(to right, #f2ca1c, #ff9f39, #ff775d, #f25c7e, #c75397, #b5509a, #a34e9b, #8f4c9b, #a04593, #b03e89, #bd377c, #c7316e" }}
                        ></div>
                        <div className='flex flex-wrap gap-16 items-center justify-center md:justify-between w-full p-[40px]'>
                            <div className='flex flex-col gap-4'>
                                <h3 className='mb-[1rem] text-[16px] text-left'>Yearly Unlimited Subscription</h3>
                                <div className='flex gap-2 items-start justify-start'>
                                    <p > <sup className='text-[20px]'>$</sup><span className='text-[40px]'>4.50</span></p>
                                    <div className='bg-[#75d16d] px-2 text-white text-[10px] rounded-full relative top-[-5]'>Save 36%</div>
                                </div>
                                <i>Per month, billed each year ($54)</i>
                            </div>
                            <Button
                                overrideStyle="text-white text-[1.3rem] py-[1rem] px-[1.3rem] w-full"
                                variant='outlined'
                            >
                                Subscribe Now
                            </Button>
                        </div>
                    </article>
                    <article className='border border-light-300 shadow-xl flex-wrap rounded-[8px]  w-full md:h-auto'>
                        <div className='flex flex-wrap gap-16 items-center justify-center md:justify-between w-full p-[40px]'>
                            <div className='flex flex-col gap-4'>
                                <h3 className='mb-[1rem] text-[16px] text-left'>Monthly Unlimited Subscription</h3>
                                <div className='flex gap-2 items-start justify-start'>
                                    <p > <sup className='text-[20px]'>$</sup><span className='text-[40px]'>7.00</span></p>
                                </div>
                                <i>Per month, billed each month ($7)</i>
                            </div>
                            <Button
                                overrideStyle="text-white text-[1.3rem] py-[1rem] px-[1.3rem]"
                                variant='outlined'
                            >
                                Subscribe Now
                            </Button>
                        </div>
                    </article>
                </div>
            </div>
            <div className=' mb-8'>
                <p className='text-center'>Don't want to subscribe?<span className='text-brand'> See more purchasing options.</span>
                </p>
            </div>
        </div>
    )
}

export default page
