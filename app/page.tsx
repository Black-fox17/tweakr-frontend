import Image from "next/image";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HowItWorks />
    </div>
  );
}
