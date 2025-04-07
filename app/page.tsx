import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <div className="flex flex-col items-center justify-center gap-8 p-4 sm:p-8">
        <p className="text-[24px] font-semibold">When Citations Attack!</p>
        <img src="/assets/frustrated students trying to reference her work after long document processing.png" alt="video" />
        <p className="text-[16px] font-medium text-[#333333]">See how bad manual citations can be... and how Tweakrr makes them disappear forever.</p>
      </div>
      <div>
        <p>Trusted by over 14,540 businesses to enhance learning and drive educational growth.</p>

      </div>
    </div>
  );
}
