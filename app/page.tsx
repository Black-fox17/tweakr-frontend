import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <HowItWorks />
      <Footer />
    </div>
  );
}
