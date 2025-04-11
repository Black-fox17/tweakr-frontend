"use client"

import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import { motion } from "framer-motion";
import HowItWorks from "./components/HowItWorks";
import Benefit from "./components/Benefit";
import TestimonialsSection from "./components/Testimonial";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <div className="flex flex-col items-center justify-center gap-8 p-4 sm:p-8 py-10">
        <motion.p
          className="text-[24px] font-semibold"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          When Citations Attack!
        </motion.p>
        <motion.img
          src="/assets/frustrated students trying to reference her work after long document processing.png"
          alt="video"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[16px] font-medium text-[#333333]">
          See how bad manual citations can be... and how Tweakrr makes them disappear forever.
        </motion.p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center py-12">
        <p className="font-medium text-center">Trusted by over 14,540 businesses to enhance learning and drive educational growth.</p>
        <motion.div
          className="flex items-stretch space-x-8 w-max"
          animate={{ x: [100, -100] }} // Adjust based on content width
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 20,
          }}
        >
          <img src="/assets/Logo (5).png" alt="logo" />
          <img src="/assets/Logo (5).png" alt="logo" />
          <img src="/assets/Logo (4).png" alt="logo" />
          <img src="/assets/Logo (2).png" alt="logo" />
          <img src="/assets/Logo (1).png" alt="logo" />
          <img src="/assets/Logo.png" alt="logo" />
        </motion.div>
      </div>
      <HowItWorks />
      <Benefit />
      <TestimonialsSection />
      <FAQs />
      <Footer />
    </div>
  );
}
