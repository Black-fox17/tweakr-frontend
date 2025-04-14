import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";


const dommyfaqs = [
    {
        question: "Who is a Mentee?",
        answer: "A mentee is an individual who seeks guidance and mentorship from an experienced professional to develop skills and achieve career goals.",
    },
    {
        question: "How can I become a mentor?",
        answer: "To become a mentor, you need to sign up on our platform, complete your profile, and apply to become a mentor in your field of expertise.",
    },
    {
        question: "Is the mentorship program free?",
        answer: "Yes, our mentorship program is free for all mentees. Mentors volunteer their time to help guide aspiring professionals.",
    },
    {
        question: "How do I connect with a mentor?",
        answer: "Once registered, you can browse mentor profiles, send a request, and schedule sessions based on availability.",
    },
];
const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="py-[7rem] items-start justify-center flex px-8 sm:flex-row flex-col gap-10 relative">
            <motion.div
                className='sm:max-w-[400px] w-full flex flex-col gap-4'
                initial={{ opacity: 0, x: -50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h1 className='text-[40px] font-semibold'>FAQ</h1>
                <p className='text-[#333333] text-[18px]'>As a students or academician, you’re overwhelmed with multiple files, documents, articles, blogs, making it hard to reference.</p>
            </motion.div>

            <motion.div
                className="w-full flex flex-col gap-8 sm:w-[840px]"
                initial={{ opacity: 0, x: 50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {dommyfaqs.map((faq, index) => (
                    <div key={index} className="bg-[#EDEDED] border border-[#EAEBEB] w-full rounded-2xl p-4 sm:p-6  text-[#333333] ">
                        <button
                            className="flex items-center justify-between w-full text-left font-semibold text-lg md:text-[24px]"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <div className="bg-[#010F34] flex items-center justify-center text-[#EDEDED] p-2 rounded-full">
                                {activeIndex === index ? (
                                    <Minus className="w-5 h-5" />
                                ) : (
                                    <Plus className="w-5 h-5" />
                                )}
                            </div>
                        </button>

                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden mt-6  text-sm md:text-[18px] text-justify"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </motion.div >
        </div>
    )
}

export default FAQs
