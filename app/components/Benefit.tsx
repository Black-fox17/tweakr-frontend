import React from 'react'

const Benefit = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="pt-10 pb-[7rem] px-4 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-12">
                <div className="flex flex-col gap-4 max-w-[400px]">
                    <h1 className="text-[32px] sm:text-[40px] font-medium">Benefits</h1>
                    <p className="text-[16px] sm:text-[18px] text-[#333333]">Why Students & Researchers Are Saying "Thank Goodness"</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                    <article className="flex flex-col gap-4 max-w-full sm:max-w-[411px]">
                        <img src="/assets/Clock-unwind.svg" alt="clock" className="w-[80px] h-[80px]" />
                        <h4 className="text-[20px] sm:text-[24px] font-medium">Hours Back in Your Life</h4>
                        <p className="text-[16px] sm:text-[18px]  text-[#333333]">What would you do with an extra 3 hours? Sleep? Netflix? Actually read the sources you're citing?</p>
                    </article>
                    <article className="flex flex-col gap-4 max-w-full sm:max-w-[411px]">
                        <img src="/assets/Perfect A.svg" alt="clock" className="w-[80px] h-[80px]" />
                        <h4 className="text-[20px] sm:text-[24px] font-medium">Citation Perfection Guaranteed</h4>
                        <p className="text-[16px] sm:text-[18px]  text-[#333333]">AI-driven referencing ensures every citation is correctly formatted.</p>
                    </article>
                    <article className="flex flex-col gap-4 max-w-full sm:max-w-[411px]">
                        <img src="/assets/Friedly-character.svg" alt="clock" className="w-[80px] h-[80px]" />
                        <h4 className="text-[20px] sm:text-[24px]  font-medium">Works With Your Writing Weapons of Choice</h4>
                        <p className="text-[16px] sm:text-[18px]  text-[#333333]">Google Docs, Word, or uploaded documents - we play nice with them all.</p>
                    </article>
                    <article className="flex flex-col gap-4 max-w-full sm:max-w-[411px]">
                        <img src="/assets/Style-stack.svg" alt="clock" className="w-[80px] h-[80px]" />
                        <h4 className="text-[20px] sm:text-[24px]  font-medium">More Citation Styles Than You Knew Existed</h4>
                        <p className="text-[16px] sm:text-[18px]  text-[#333333]">APA, MLA, Chicago, Harvard, IEEE, and 2,995 others you've never heard of (but might need someday).</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Benefit
