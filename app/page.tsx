import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Vision from "./components/Vision";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";



export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Vision />
      <About />
      <HowItWorks />
      <NewsLetter />
      <Footer />
    </div>
  );
}
