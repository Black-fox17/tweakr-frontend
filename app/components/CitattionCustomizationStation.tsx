'use client';

import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/service/citationService';

import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';

// It's good practice to define or import this type if it's used in multiple places.
// If CitationStyle is defined and exported from page.tsx or a shared types file, import it.
// For now, let's assume it's defined in page.tsx and we'll use a compatible type here.
type CitationStyleType = 'APA' | 'MLA' | 'Chicago';

interface Props {
    selectedStyleGuide: CitationStyleType;
    setSelectedStyleGuide: (value: CitationStyleType) => void;
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
    citationIntensity: string;
    setCitationIntensity: (value: string) => void;
    onWorkMagic: () => void;
    isProcessing?: boolean;
}

const CitationCustomizationStation = ({
    selectedStyleGuide,
    setSelectedStyleGuide,
    selectedCategory,
    setSelectedCategory,
    citationIntensity,
    setCitationIntensity,
    onWorkMagic,
    isProcessing,
}: Props) => {

    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });


    return (
        <div className="p-6 w-full flex flex-col gap-[26px] max-w-3xl mx-auto mb-[13rem] sm:mb-0">
            <h3 className="text-[#010F34] text-[24px] font-semibold">Citation Customization Station</h3>
            <div className="h-[0.5px] bg-[#D8D8D8] w-full"></div>

            {/* Style Guide */}
            <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#212121]">Which Style Guide Is Bossing You Around?</label>
                <Select value={selectedStyleGuide} onValueChange={(value) => setSelectedStyleGuide(value as CitationStyleType)}>
                    <SelectTrigger className="border-[#FAFAFA] p-4 rounded-[10px] text-[#9E9E9E] text-[18px]">
                        <SelectValue placeholder="Choose style guide..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {["APA", "MLA", "Chicago"].map((value) => (
                                <SelectItem key={value} value={value}>{value}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Timeframe */}
            <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#212121]">Category</label>
                <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
                    <SelectTrigger className="border-[#FAFAFA] p-4 rounded-[10px] text-[#9E9E9E] text-[18px]">
                        <SelectValue placeholder="Choose category..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {isLoading ? (
                                <div className="p-4 text-center text-gray-400">Loading...</div>
                            ) : (
                                categories?.data?.categories?.map((category: any) => (
                                    <SelectItem key={category} value={category} >
                                        {category}
                                    </SelectItem>
                                ))
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Citation Intensity (Use radio buttons instead) */}
            <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#212121]">How Citation-Happy Should We Be?</label>
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-[#9E9E9E] text-[16px]">
                        <input type="radio" name="citation-intensity" value="essentials" onChange={(e) => setCitationIntensity(e.target.value)}
                        />
                        Just the Essentials (when less is more)
                    </label>
                    <label className="flex items-center gap-2 text-[#9E9E9E] text-[16px]">
                        <input type="radio" name="citation-intensity" value="balanced" onChange={(e) => setCitationIntensity(e.target.value)}
                        />
                        Balanced Approach (recommended for most papers)
                    </label>
                    <label className="flex items-center gap-2 text-[#9E9E9E] text-[16px]">
                        <input type="radio" name="citation-intensity" value="everything" onChange={(e) => setCitationIntensity(e.target.value)}
                        />
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
            <button
                onClick={onWorkMagic}
                className="bg-[#31DAC0] rounded-full py-[14px] px-[20px] font-semibold self-start w-full">
                Work Your Citation Magic
            </button>
        </div>
    );
};

export default CitationCustomizationStation;
