import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2Icon, ChevronDown, DownloadCloudIcon } from 'lucide-react'


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

type CitationPerfectionAchieveProps = {
    documentUrl: string | null;       // Still useful for a direct link if needed, or as a fallback
    onDownloadClick: () => void;   // Function to trigger download from processor
    citationCount: number;
    referenceCount: number;
    // hoursSaved?: number; // Optional
};

const CitationPerfectionAchieve: React.FC<CitationPerfectionAchieveProps> = ({ 
    documentUrl, 
    onDownloadClick,
    citationCount,
    referenceCount 
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 text-[#545454] overflow-y-scroll p-4"> {/* Added padding for scroll safety */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-[95%] sm:max-w-[811px] my-auto flex flex-col items-center"> {/* Centering and max-width */}
                <div className='w-full h-[87px] mb-4'>
                    <img src="/gif/Animation - success.gif" alt="gif" className='w-full h-full object-contain' /> {/* object-contain */}
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <p className='text-[#333333] text-2xl font-semibold text-center'>Citation Perfection Achieved!</p>
                    <ul className='text-[#9E9E9E] flex flex-col gap-2 text-sm sm:text-base'>
                        <li className='flex gap-3 items-start w-full' key="in-text-citations">
                            <img src="/assets/tick-circle.svg" alt="tick" className='w-5 h-5 flex-shrink-0 mt-1' />
                            <p>We've added <strong>{citationCount}</strong> in-text citations.</p>
                        </li>
                        <li className='flex gap-3 items-start w-full' key="reference-entries">
                            <img src="/assets/tick-circle.svg" alt="tick" className='w-5 h-5 flex-shrink-0 mt-1' />
                            <p>Created <strong>{referenceCount}</strong> reference entries.</p>
                        </li>
                        {/* <li className='flex gap-3 items-start w-full' key="hours-saved">
                            <img src="/assets/tick-circle.svg" alt="tick" className='w-5 h-5 flex-shrink-0 mt-1' />
                            <p>And saved you approximately [Hours] hours of formatting!</p>
                        </li> */}
                    </ul>
                    <div className='flex flex-col gap-3 mt-4'>
                        <label className='text-lg font-semibold text-[#333333]'>File type</label>
                        <div className='bg-[#FAFAFA] border border-[#E0E0E0] p-4 outline-none w-full rounded-lg flex items-center justify-between text-base'>
                            <div className='flex gap-3 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-file-text text-[#31DAC0]"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
                                <p className='text-[#545454]'>Word Document (.docx)</p>
                            </div>
                            {/* <ChevronDown className="text-gray-500" /> File type selection can be a future feature */}
                        </div>
                        
                        <button
                            onClick={onDownloadClick} // Use the passed download handler
                            className='bg-[#31DAC0] hover:bg-[#28bfa8] transition-colors rounded-full text-[#010F34] py-3.5 px-6 font-semibold text-base flex items-center justify-center gap-2 w-full'
                        >
                            <DownloadCloudIcon size={20} />
                            Download Your Citation Masterpiece
                        </button>
                        
                        {/* Fallback link using documentUrl if onDownloadClick is not provided (though it should be) */}
                        {/* {!onDownloadClick && documentUrl && (
                             <a
                                 href={documentUrl}
                                 download="document_with_citations.docx"
                                 className='bg-[#31DAC0] hover:bg-[#28bfa8] transition-colors rounded-full text-[#010F34] py-3.5 px-6 font-semibold text-base flex items-center justify-center gap-2 w-full'
                             >
                                <DownloadCloudIcon size={20} />
                                Download Your Citation Masterpiece (Fallback)
                             </a>
                        )} */}
                        <p className='text-[#9E9E9E] text-xs text-center mt-1'>Available as: .docx (Word Document)</p>
                    </div>
                </div>
                {/* Pricing/Share section - ensure keys are correct for mapped elements */}
                <div className='flex flex-col gap-6 mt-8 items-center w-full'>
                    <div className='bg-[#F7F7F7] rounded-lg w-full p-4 sm:p-6 flex flex-col gap-4'>
                        <p className='text-lg font-semibold text-[#333333]'>Know another writer drowning in citations?</p>
                        <p className='text-[#8A91A2] text-sm sm:text-base'>Share Tweakr and help them achieve citation perfection too!</p>
                        <div className='flex gap-3 sm:gap-4 items-center justify-center sm:justify-start flex-wrap'>
                            {["facebook", "twitch", "instagram", "twitter", "circum_linkedin"].map(social => (
                                <div className='bg-white p-3 sm:p-4 flex items-center justify-center rounded-full shadow hover:shadow-md transition-shadow cursor-pointer' key={social}>
                                    <img src={`/assets/${social}.svg`} alt={social} className="w-5 h-5 sm:w-6 sm:h-6"/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className='text-[#333333] text-lg font-medium mt-4'>More papers in your future? Upgrade for unlimited power!</p>
                    <motion.section
                        className="flex flex-col items-center justify-center gap-8 w-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
                            {pricingPlans.map((plan, i) => (
                                <motion.div
                                    key={plan.type} // Use a unique key
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                                    className={`rounded-2xl overflow-hidden shadow-lg border ${plan.isPopular ? "bg-[#155C51] text-white" : "bg-white text-gray-900 border-gray-200"
                                        } flex flex-col justify-between p-6 sm:p-8`}
                                >
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-semibold">{plan.type}</h3>
                                        <p className="text-2xl sm:text-3xl font-bold mt-2">{plan.price}</p>
                                        <p className="text-xs sm:text-sm mt-1">{plan.subtitle}</p>
                                    </div>
                                    <button
                                        className={`w-full py-3 rounded-full font-semibold mt-6 text-sm sm:text-base ${plan.isPopular
                                            ? "bg-white text-[#010F34] hover:bg-gray-100"
                                            : "bg-[#31DAC0] text-[#010F34] hover:bg-[#28bfa8]"
                                            } transition-all`}
                                    >
                                        {plan.buttonText}
                                    </button>
                                    <div className="flex flex-col gap-3 mt-6">
                                        {plan.features.map((feature) => ( // Removed index i as key, using feature itself if unique
                                            <div className="flex gap-3 items-start" key={feature}>
                                                <CheckCircle2Icon
                                                    className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-[#31DAC0]'}`}
                                                />
                                                <p className="text-sm sm:text-base">{feature}</p>
                                            </div>
                                        ))}
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
