import { motion } from "framer-motion";

const TestimonialsSection = () => {
    return (
        <div className="py-10 items-center justify-center flex px-8 flex-col gap-10 relative">
            {/* Heading + Subtext */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 items-center "
            >
                <h1 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold">
                    Testimonials
                </h1>
                <p className="text-[#333333] text-[16px] sm:text-[18px]">
                    From Citation Sufferers to Tweakrr Believers
                </p>
            </motion.div>

            {/* Decorative SVGs */}
            <motion.img
                src="/assets/Giving a five star rating.svg"
                alt="rating"
                className="absolute left-[-3rem] top-[-4rem]"
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 60 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            />

            <motion.img
                src="/assets/document.svg"
                alt="document"
                className="absolute right-0 bottom-[-3rem]"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            />

            {/* Testimonial Box */}
            <motion.div
                className="flex flex-col gap-4 bg-[#EDEDEDCC]/80 rounded-[16px] p-4 sm:p-9 max-w-[90%] sm:max-w-[700px] lg:max-w-[1280px] z-50"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <div className="p-8">
                    <img src="/assets/Heading.svg" alt="map" />
                </div>
                <p className="text-[18px] sm:text-[20px] md:text-[24px] text-[#1A1A1A] ">
                    "I spent more time formatting my citations than writing my actual thesis.{" "}
                    <span className="font-bold">
                        Tweakrr gave me back a full weekend I would have spent on bibliographies!"
                    </span>
                </p>
                <div>
                    <p className="font-semibold text-[18px] sm:text-[20px] md:text-[24px]">- Jamie K.</p>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#333333]">
                        Master's Student, University of Citation Suffering
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default TestimonialsSection;
