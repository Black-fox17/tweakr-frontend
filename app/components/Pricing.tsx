import { CheckCircle2Icon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
    {
        type: "Pay-As-You-Go",
        price: "₦1,500 / $1.5",
        subtitle: "(Nigerians) / (Non-Nigerians)",
        buttonText: "Get Started",
        features: [
            "3000 words document",
            "One-time payment per document",
            "Instant referencing",
            "No subscription required",
            "Full access to citation tools",
        ],
        isPopular: false,
    },
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

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3, // adjust the delay for ascending animation
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};


const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};


const Pricing = () => {
    return (
        <motion.section
            className="flex flex-col items-center justify-center gap-16 px-6 py-20 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-3xl">
                <h2 className="text-4xl font-bold text-gray-900">Pricing</h2>
                <p className="text-lg text-gray-600 mt-2">
                    Pricing That Makes Cents <span className="font-mono">¢</span> (And Saves Dollars)
                </p>
            </motion.div>

            {/* Pricing Cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
                variants={containerVariants}
            >
                {pricingPlans.map((plan, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.3, duration: 0.6, ease: "easeOut" }}
                        className={`rounded-3xl overflow-hidden shadow-lg border ${plan.isPopular ? "bg-[#155C51] text-white" : "bg-white text-gray-900 border-gray-200"
                            } flex flex-col justify-between`}
                    >
                        {plan.isPopular && (
                            <div className="text-[#155C51] bg-[#EAFBF9] text-center font-semibold py-2">
                                Most Popular
                            </div>
                        )}
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
    );
};

export default Pricing;
