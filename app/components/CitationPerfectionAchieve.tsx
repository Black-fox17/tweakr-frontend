import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2Icon, ChevronDown } from 'lucide-react'


const pricingPlans = [
    {
        type: "Monthly Plan",
        price: "₦15,000 / $15",
        subtitle: "(Nigerians) / (Non-Nigerians)",
        buttonText: "Subscribe Now",
        features: [
            "Unlimited document uploads",
            "AI-powered citations",
            "Multiple citation styles (APA, MLA, Chicago, etc.)",
            "Priority processing",
        ],
        isPopular: true,
    },
    {
        type: "Enterprise",
        price: "₦70,000 / $70",
        subtitle: "(Nigerians) / (Non-Nigerians)",
        buttonText: "Upgrade Now",
        features: [
            "Everything in the Monthly Plan",
            "Dedicated support",
            "Team collaboration features",
            "Custom integrations",
        ],
        isPopular: false,
    },
];
const CitationPerfectionAchieve = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-[#545454] overflow-y-scroll">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[95%] mt-[90rem] sm:mt-[70rem] lg:mt-[30rem] max-w-[811px] flex items-center justify-center flex-col ">
                <div className='w-full h-[87px]'>
                    <img src="/gif/Animation - success.gif" alt="gif" className='w-full h-full object-fill' />
                </div>
                <div className='flex flex-col gap-4  w-full'>
                    <p className='text-[#333333] text-[24px] font-semibold text-center '>Citation Perfection Achieved!</p>
                    <ul className='text-[#9E9E9E] flex flex-col gap-1'>
                        <li className='flex gap-3 items-start w-full'>
                            <img src="/assets/tick-circle.svg" alt="tick" className='w-[20px] h-[20px]' />
                            <p>We've added [Number] in-text citations</p>
                        </li>
                        <li className='flex gap-3 items-start w-full'>
                            <img src="/assets/tick-circle.svg" alt="tick" className='w-[20px] h-[20px]' />
                            <p>Created [Number] reference entries</p>
                        </li>
                        <li className='flex gap-3 items-start w-full'>
                            <img src="/assets/tick-circle.svg" alt="tick" className='w-[20px] h-[20px]' />
                            <p>And saved you approximately [Hours] hours of formatting</p>
                        </li>
                    </ul>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[18px] font-semibold'>File type</label>
                        <div className='bg-[#FAFAFA] border border-[#FAFAFA] p-4 outline-none w-full rounded-[10px] flex items-center justify-between '>
                            <div className='flex gap-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="lucide lucide-square-equal-icon lucide-square-equal"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 10h10" /><path d="M7 14h10" /></svg>
                                <p className='text-[#9E9E9E] text-[18px]'>Word Document</p>
                            </div>
                            <ChevronDown />
                        </div>
                        <button className=' bg-[#31DAC0] rounded-full text-[#010F34] py-[14px] px-[20px] font-semibold'>
                            Download Your Citation Masterpiece
                        </button>
                        <p className='text-[#9E9E9E] text-[14px] text-center'>Available as: Word Document, PDF, Google Docs</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-6 items-center'>
                    <div className='bg-[#F7F7F7] rounded-[10px] w-full  p-4 flex flex-col gap-4'>
                        <p className='text-[18px] font-semibold'>Know another writer drowning in citations?</p>
                        <p className='text-[#9E9E9E] text-[18px]'>shdhjdjjdjsladjjdsjkksjjhdahjs;fc fiqerfgy qeruiqwiegb ueuio i eidq elqk;db qeui uuieioq</p>
                        <div className='flex gap-4 items-center'>
                            <div className='bg-white p-4 flex items-center justify-center rounded-full'>
                                <img src="/assets/facebook.svg" alt="" />
                            </div>
                            <div className='bg-white p-4 flex items-center justify-center rounded-full'>
                                <img src="/assets/twitch.svg" alt="" />
                            </div>
                            <div className='bg-white p-4 flex items-center justify-center rounded-full'>
                                <img src="/assets/instagram.svg" alt="" />
                            </div>
                            <div className='bg-white p-4 flex items-center justify-center rounded-full'>
                                <img src="/assets/twitter.svg" alt="" />
                            </div>
                            <div className='bg-white p-4 flex items-center justify-center rounded-full'>
                                <img src="/assets/circum_linkedin.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <p className='text-[#545454] text-[18px] font-medium'>More papers in your future?</p>
                    <motion.section
                        className="flex flex-col items-center justify-center gap-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >

                        {/* Pricing Cards */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2  gap-8 w-full max-w-7xl"
                        >
                            {pricingPlans.map((plan, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.3, duration: 0.6, ease: "easeOut" }}
                                    className={`rounded-3xl overflow-hidden shadow-lg border ${plan.isPopular ? "bg-[#155C51] text-white" : "bg-white text-gray-900 border-gray-200"
                                        } flex flex-col justify-between`}
                                >
                                    <div className="p-8 flex flex-col gap-6 flex-grow">
                                        <div>
                                            <h3 className="text-2xl font-semibold">{plan.type}</h3>
                                            <p className="text-3xl font-bold mt-2">{plan.price}</p>
                                            <p className="text-sm mt-1">{plan.subtitle}</p>
                                        </div>

                                        <button
                                            className={`w-full py-3 rounded-full font-semibold mt-4 ${plan.isPopular
                                                ? "bg-white text-[#010F34] hover:bg-gray-100"
                                                : "bg-[#31DAC0] text-[#010F34] hover:bg-[#155C51]"
                                                } transition-all`}
                                        >
                                            {plan.buttonText}
                                        </button>

                                        <div className="flex flex-col gap-4 mt-6">
                                            {plan.features.map((feature, i) => (
                                                <div className="flex gap-3 items-start" key={i}>
                                                    <CheckCircle2Icon
                                                        className={`w-6 h-6 flex-shrink-0 text-[#31DAC0] }`}
                                                    />
                                                    <p className="text-base">{feature}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>
                </div>
            </div>
        </div>
    )
}

export default CitationPerfectionAchieve
