import React from 'react';

export type Citation = {
    id: string;
    metadata: {
        paragraph_index: number;
        sentence_index: number;
    };
    original_sentence: string;
    paper_details: {
        title: string;
        authors: string[];
        year: string;
        url: string;
        doi: string;
    };
    status: string;
};

type CitationSuggestionBoxProps = {
    suggestions: Citation[] | undefined;
    acceptedCitations?: Citation[];
    onAccept?: (citation: Citation) => void;
    onDismiss?: (citation: Citation) => void;
    onAcceptAll?: () => void;
    onFinalize?: () => void;
};



const CitationSuggestionBox: React.FC<CitationSuggestionBoxProps> = ({
    suggestions,
    onAccept = () => { },
    onDismiss = () => { },
    acceptedCitations,
    onFinalize = () => { },
    onAcceptAll = () => { }
}) => {

    return (
        <div className="p-0 sm:p-6 w-full h-full flex flex-col gap-[26px] max-w-3xl mx-auto mb-[30rem] sm:mb-0">
            {suggestions ? (
                <div className="w-full flex flex-col gap-4 p-4 sm:p-0">
                    {suggestions.map((suggestion, index) => {
                        const isAccepted = acceptedCitations?.some(c => c.id === suggestion.id);
                        return (
                            <div key={suggestion.id || index} className="p-2 sm:p-4 border-b text-[#545454] flex flex-col items-start gap-4">
                                <p className='text-[20px] truncate max-w-full'><s>{suggestion.original_sentence}</s></p>
                                <p className='text-[20px] text-[#010F34] max-w-full truncate'>{suggestion.original_sentence}</p>
                                <p className='bg-[#EAFBF9] text-[#010F34] font-medium text-[14px] rounded-md truncate max-w-full p-2'>
                                    Source: {suggestion.paper_details.url}
                                </p>
                                <div className='flex gap-4'>
                                    <button
                                        className={`text-[14px] text-[#010F34] font-medium border-[#545454] border-[1.75px] rounded-sm shadow-md px-4 py-3  ${isAccepted && 'bg-[#31DAC0]'}`}
                                        onClick={() => onAccept(suggestion)}
                                        disabled={isAccepted}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className='text-[14px] text-[#8A8A8A] font-medium px-4 py-3'
                                        onClick={() => onDismiss(suggestion)}
                                    >
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                    <div className='flex items-center justify-between w-full px-4 py-2 bg-[#EDEDED] gap-3 fixed bottom-10 sm:bottom-0 left-0'>
                        <button
                            onClick={onAcceptAll}
                            className='text-[14px] text-[#010F34] bg-white font-medium border-[#545454] border-[1.75px] rounded-sm shadow-md px-4 py-2 whitespace-nowrap w-full'
                        >
                            Accept All
                        </button>
                        <button
                            onClick={onFinalize}
                            className='text-[14px] text-[#010F34] bg-[#31DAC0] font-medium rounded-sm shadow-md px-4 py-2 w-full'>
                            Finalize
                        </button>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col gap-2 items-center justify-center h-full'>
                    <img src="/assets/home-trend-down.svg" alt="no-suggestions" />
                    <h3 className="text-[20px] font-semibold text-[#010F34]">Let’s get to work</h3>
                    <p className="text-[#010F34] text-[14px] font-medium">Suggestions will appear here</p>
                </div>
            )}
        </div>
    );
};

export default CitationSuggestionBox;
