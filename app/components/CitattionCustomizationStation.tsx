'use client';

import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';

const CitationCustomizationStation = () => {
    return (
        <div className="p-6 w-full flex flex-col gap-[26px] max-w-3xl mx-auto">
            <h3 className="text-[#010F34] text-[24px] font-semibold">Citation Customization Station</h3>
            <div className="h-[0.5px] bg-[#D8D8D8] w-full"></div>

            {/* Style Guide */}
            <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#212121]">Which Style Guide Is Bossing You Around?</label>
                <Select>
                    <SelectTrigger className="border-[#FAFAFA] p-4 rounded-[10px] text-[#9E9E9E] text-[18px]">
                        <SelectValue placeholder="Choose style guide..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="apa">APA</SelectItem>
                            <SelectItem value="mla">MLA</SelectItem>
                            <SelectItem value="chicago">Chicago</SelectItem>
                            <SelectItem value="harvard">Harvard</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Timeframe */}
            <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#212121]">Source Publication Timeframe</label>
                <Select>
                    <SelectTrigger className="border-[#FAFAFA] p-4 rounded-[10px] text-[#9E9E9E] text-[18px]">
                        <SelectValue placeholder="Choose timeframe..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="5-years">Last 5 years</SelectItem>
                            <SelectItem value="10-years">Last 10 years</SelectItem>
                            <SelectItem value="any">Any Time</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Citation Intensity (Use radio buttons instead) */}
            <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#212121]">How Citation-Happy Should We Be?</label>
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-[#9E9E9E] text-[16px]">
                        <input type="radio" name="citation-intensity" value="essentials" />
                        Just the Essentials (when less is more)
                    </label>
                    <label className="flex items-center gap-2 text-[#9E9E9E] text-[16px]">
                        <input type="radio" name="citation-intensity" value="balanced" />
                        Balanced Approach (recommended for most papers)
                    </label>
                    <label className="flex items-center gap-2 text-[#9E9E9E] text-[16px]">
                        <input type="radio" name="citation-intensity" value="everything" />
                        Cite Everything (for when your grade depends on it)
                    </label>
                </div>
            </div>

            {/* Additional Instructions */}
            <div className="flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold text-[#212121]">Got Any Special Instructions?</h4>
                <p className="text-[#8A8A8A] text-[16px]">
                    (Like "only use journal articles" or "my professor is extremely picky about page numbers")
                </p>
            </div>

            {/* CTA Button */}
            <button className="bg-[#31DAC0] rounded-full py-[14px] px-[20px] font-semibold self-start w-full">
                Work Your Citation Magic
            </button>
        </div>
    );
};

export default CitationCustomizationStation;
