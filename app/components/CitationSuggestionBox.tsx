import React, { useState } from 'react';

type CitationSuggestionBoxProps = {
    suggestions: string[][] | undefined;
};

const MAX_VISIBLE = 10

const CitationSuggestionBox: React.FC<CitationSuggestionBoxProps> = ({ suggestions }) => {
    const [visibleCount, setVisibleCount] = useState(MAX_VISIBLE);

    console.log(suggestions)
    return (
        <div className="flex items-center justify-center w-full h-full flex-col">
            {suggestions && suggestions.length > 0 ? (
                <div className="w-full">
                    {[1, 2].map((suggestion, index) => (
                        <div key={index} className="p-2 border-b text-[#545454] flex flex-col items-start gap-4">
                            {suggestion}
                            <p className='text-[20px] truncate max-w-full'><s>Get Paid in dollar</s></p>
                            <p className='text-[20px] text-[#010F34] max-w-full truncate'>Get Paid in dollar fgfgfgfgfg</p>
                            <p className='bg-[#EAFBF9] text-[#010F34] font-medium text-[14px] rounded-md truncate max-w-full p-2'>Source: https://xyzxyzxyz.com</p>
                            <div className='flex gap-4'>
                                <button className='text-[14px] text-[#010F34] font-medium border-[#545454] border-[1.75px] rounded-sm shadow-md px-4 py-3'>
                                    Accept
                                </button>
                                <button className='text-[14px] text-[#8A8A8A] font-medium  px-4 py-3'>
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col gap-2 items-center justify-center">
                    <img src="/assets/home-trend-down.svg" alt="home-icon" />
                    <h3 className="text-[20px] font-semibold text-[#010F34]">Let’s get to work</h3>
                    <p className="text-[#010F34] text-[14px] font-medium">Suggestions will appear here</p>
                </div>
            )}
        </div>
    );
};

export default CitationSuggestionBox;
