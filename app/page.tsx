import FAQs from "./components/FAQs";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <div className="flex flex-col items-center justify-center gap-8 p-4 sm:p-8 py-10">
        <p className="text-[24px] font-semibold">When Citations Attack!</p>
        <img src="/assets/frustrated students trying to reference her work after long document processing.png" alt="video" />
        <p className="text-[16px] font-medium text-[#333333]">See how bad manual citations can be... and how Tweakrr makes them disappear forever.</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center py-12">
        <p className="font-medium">Trusted by over 14,540 businesses to enhance learning and drive educational growth.</p>
        <div className="grid grid-cols-6 gap-4">
          <img src="/assets/Logo (5).png" alt="logo" />
          <img src="/assets/Logo (5).png" alt="logo" />
          <img src="/assets/Logo (4).png" alt="logo" />
          <img src="/assets/Logo (2).png" alt="logo" />
          <img src="/assets/Logo (1).png" alt="logo" />
          <img src="/assets/Logo.png" alt="logo" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 py-10">
        <img src="/assets/image 4.png" alt="img" className="max-w-[678px]" />
        <div className="p-4 flex flex-col items-center justify-center gap-3">
          <h1 className="text-[40px] font-semibold">How it Works?</h1>
          <p className="text-[#333333] text-[18px]">Three Steps to Citation Liberation</p>
        </div>
        <div className="flex gap-8 relative">
          <img src="/assets/arrows.svg" alt="arrow" className="absolute top-[27%] left-[29%]" />
          <article className="max-w-[400px] flex flex-col">
            <img src="/assets/A lot of documents with a frustrated lady.svg" alt="" />
            <div className="py-8">
              <h4 className="text-[24px] fonr-semibold">Drop Your Masterpiece</h4>
              <p className="text-[18px] text-[#333333]">Just upload your document. No citation formatting required (we actually prefer it that way).</p>
            </div>
          </article>
          <article className="max-w-[400px] flex flex-col">
            <img src="/assets/A lot of documents with a frustrated lady (1).svg" alt="" />
            <div className="py-8">
              <h4 className="text-[24px] fonr-semibold">Pick Your Style (Guide)</h4>
              <p className="text-[18px] text-[#333333]">APA, MLA, Chicago... or whatever formatting torture your professor prefers..</p>
            </div>
          </article>
          <article className="max-w-[400px] flex flex-col">
            <img src="/assets/A lot of documents with a frustrated lady (2).svg" alt="" />
            <div className="py-8">
              <h4 className="text-[24px] fonr-semibold">Witness the Citation Transformation</h4>
              <p className="text-[18px] text-[#333333]">We add perfect in-text citations and build your reference list faster than you can say "bibliography."</p>
            </div>
          </article>
        </div>
      </div>
      <div className="py-10 px-8 sm:flex-row flex-col items-start justify-center flex gap-8">
        <div className="flex flex-col gap-4 max-w-[400px]">
          <h1 className="text-[40px] font-medium">Benefits</h1>
          <p className="text-[18px] text-[#333333]">Why Students & Researchers Are Saying "Thank Goodness"</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
          <article className="max-w-[411px] flex flex-col gap-4">
            <img src="/assets/Clock-unwind.svg" alt="clock" className="w-[80px] h-[80px]" />
            <h4 className="text-[24px] font-medium">Hours Back in Your Life</h4>
            <p className="text-[18px] text-[#333333]">What would you do with an extra 3 hours? Sleep? Netflix? Actually read the sources you're citing?</p>
          </article>
          <article className="max-w-[411px] flex flex-col gap-4">
            <img src="/assets/Perfect A.svg" alt="clock" className="w-[80px] h-[80px]" />
            <h4 className="text-[24px] font-medium">Citation Perfection Guaranteed</h4>
            <p className="text-[18px] text-[#333333]">AI-driven referencing ensures every citation is correctly formatted.</p>
          </article>
          <article className="max-w-[411px] flex flex-col gap-4">
            <img src="/assets/Friedly-character.svg" alt="clock" className="w-[80px] h-[80px]" />
            <h4 className="text-[24px] font-medium">Works With Your Writing Weapons of Choice</h4>
            <p className="text-[18px] text-[#333333]">Google Docs, Word, or uploaded documents - we play nice with them all.</p>
          </article>
          <article className="max-w-[411px] flex flex-col gap-4">
            <img src="/assets/Style-stack.svg" alt="clock" className="w-[80px] h-[80px]" />
            <h4 className="text-[24px] font-medium">More Citation Styles Than You Knew Existed</h4>
            <p className="text-[18px] text-[#333333]">APA, MLA, Chicago, Harvard, IEEE, and 2,995 others you've never heard of (but might need someday).</p>
          </article>
        </div>
      </div>
      <div className="py-10 items-center justify-center flex px-8 flex-col gap-10 relative">
        <div className="flex flex-col gap-4 items-center ">
          <h1 className="text-[40px] font-semibold">Testimonials</h1>
          <p className="text-[#333333] text-[18px]">From Citation Sufferers to Tweakrr Believers</p>
        </div>
        <img src="/assets/Giving a five star rating.svg" alt="rating" className="absolute left-[-3rem] top-[-4rem]" />
        <img src="/assets/document.svg" alt="rating" className="absolute right-0 bottom-[-5rem]" />
        <div className="flex flex-col gap-4 bg-[#EDEDEDCC]/80 rounded-[16px] p-4 sm:p-9 max-w-[1280px] z-50">
          <div className="p-8">
            <img src="/assets/Heading.svg" alt="map" />
          </div>
          <p className="text-[24px] text-[#1A1A1A]">"I spent more time formatting my citations than writing my actual thesis. <span className="font-bold">”Tweakrr gave me back a full weekend I would have spent on bibliographies!"</span></p>
          <div>
            <p className="font-semibold text-[24px]">- Jamie K.</p>
            <p className="text-[18px] text-[#333333]">Master's Student, University of Citation Suffering</p>
          </div>
        </div>
      </div>
      <FAQs />
    </div>
  );
}
