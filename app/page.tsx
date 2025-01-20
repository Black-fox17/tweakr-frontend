import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Vision from "./components/Vision";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Vision />
      <HowItWorks />
      <Footer />
    </div>
  );
}
