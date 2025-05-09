import React, { useState } from 'react';

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
    page_number?: string;
};

type CitationSuggestionBoxProps = {
    suggestions: Citation[] | undefined;
    acceptedCitations?: Citation[];
    onAccept?: (citation: Citation) => void;
    onDismiss?: (citation: Citation) => void;
    onAcceptAll?: () => void;
    onFinalize?: (citationsToFinalize: Citation[]) => void;
    citationStyle?: 'APA' | 'MLA' | 'Chicago';
};

const CitationSuggestionBox: React.FC<CitationSuggestionBoxProps> = ({
    suggestions,
    acceptedCitations = [],
    onAccept = () => { },
    onDismiss = () => { },
    onFinalize = () => { },
    onAcceptAll = () => { },
    citationStyle = 'APA'
}) => {
    // State to store generated references
    const [references, setReferences] = useState<string[]>([]);
    const [showReferences, setShowReferences] = useState<boolean>(false);
    const [isGeneratingReferences, setIsGeneratingReferences] = useState<boolean>(false);

    // Function to generate references
    const handleGenerateReferences = () => {
        if (acceptedCitations.length === 0) {
            alert("No citations have been accepted yet.");
            return;
        }

        setIsGeneratingReferences(true);

        // Update all accepted citations to have status "accepted"
        const citationsToSend = acceptedCitations.map(citation => ({
            ...citation,
            status: "accepted"
        }));

        // Send to backend API
        fetch('https://tweakr.onrender.com/api/v1/citations/update-citations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                citations: citationsToSend,
                style: citationStyle
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to generate references');
            }
            return response.json();
        })
        .then(data => {
            if (data.references && Array.isArray(data.references)) {
                setReferences(data.references);
                setShowReferences(true);
            } else {
                console.error('Invalid references format received:', data);
                alert('Failed to generate references. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error generating references:', error);
            alert('Failed to generate references. Please try again.');
        })
        .finally(() => {
            setIsGeneratingReferences(false);
        });
    };

    // Function to copy references to clipboard
    const copyReferencesToClipboard = () => {
        const referencesText = references.join('\n\n');
        navigator.clipboard.writeText(referencesText)
            .then(() => alert('References copied to clipboard!'))
            .catch(err => console.error('Failed to copy references: ', err));
    };

    // Function to handle accepting a citation - just call the parent handler
    const handleAccept = (citation: Citation) => {
        // Create updated citation with status set to "accepted"
        const updatedCitation = { ...citation, status: "accepted" };
        
        // Call the parent component's onAccept handler which will update the parent state
        onAccept(updatedCitation);
        
        // Also send update to backend API
        // try {
        //     fetch('https://tweakr.onrender.com/api/v1/citations/update-citations', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ citations: [updatedCitation] }),
        //     }).catch(error => {
        //         console.error('Error updating citation status:', error);
        //     });
        // } catch (error) {
        //     console.error('Error updating citation status:', error);
        // }
    };

    // Function to handle dismissing a citation
    const handleDismiss = (citation: Citation) => {
        // Call the parent component's onDismiss handler
        onDismiss(citation);
    };

    // Function to handle accepting all citations
    const handleAcceptAll = () => {
        if (!suggestions) return;
        
        // We'll update the API but let the parent component handle state updates
        // Update all suggestions to accepted status
        const updatedCitations = suggestions.map(citation => ({
            ...citation,
            status: "accepted"
        }));
        
        // Send update to backend API
        // try {
        //     fetch('https://tweakr.onrender.com/api/v1/citations/update-citations', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ citations: updatedCitations }),
        //     }).catch(error => {
        //         console.error('Error updating all citation statuses:', error);
        //     });
        // } catch (error) {
        //     console.error('Error updating all citation statuses:', error);
        // }
        
        // Call the parent component's onAcceptAll handler
        onAcceptAll();
    };

    const handleFinalizeInternal = async () => {
        // Send finalized citations to backend if needed
        // if (acceptedCitations.length > 0) {
        //     const formData = {
        //         style: citationStyle,
        //         reviewed_citations: acceptedCitations
        //     }
        //     console.log(formData)
        //     try {
        //         const response = await fetch(`https://tweakr.onrender.com/api/v1/citations/update-citations`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(formData),
        //         });
        //         console.log(response)
        //         if (!response.ok) {
        //             console.error('Error finalizing citations in SuggestionBox: HTTP status', response.status);
        //             const errorText = await response.text();
        //             console.error('Error details:', errorText);
        //         } else {
        //             const responseData = await response.json();
        //             console.log('Finalized citations response from SuggestionBox:', responseData);
        //         }
        //     } catch (error) {
        //         console.error('Error finalizing citations in SuggestionBox:', error);
        //     }
        // }
    
        // Call the parent component's onFinalize handler
        if (onFinalize) {
            onFinalize(acceptedCitations);
        }
    };
    
    

    return (
        <div className="p-0 sm:p-6 w-full h-full flex flex-col gap-[26px] max-w-3xl mx-auto mb-[30rem] sm:mb-0">
            {suggestions ? (
                <div className="w-full flex flex-col gap-4 p-4 sm:p-0">
                    {suggestions.map((suggestion, index) => {
                        const isAccepted = acceptedCitations.some(c => c.id === suggestion.id);
                        return (
                            <div key={suggestion.id || index} className="p-2 sm:p-4 border-b text-[#545454] flex flex-col items-start gap-4">
                                <p className='text-[20px] truncate max-w-full'><s>{suggestion.original_sentence}</s></p>
                                <p className='text-[20px] text-[#010F34] max-w-full truncate'>{suggestion.original_sentence}</p>
                                <p className='bg-[#EAFBF9] text-[#010F34] font-medium text-[14px] rounded-md truncate max-w-full p-2'>
                                    Source: {suggestion.paper_details.title} ({suggestion.paper_details.year}) - {suggestion.paper_details.url}
                                </p>
                                <div className='flex gap-4'>
                                    <button
                                        className={`text-[14px] text-[#010F34] font-medium border-[#545454] border-[1.75px] rounded-sm shadow-md px-4 py-3 ${isAccepted ? 'bg-[#31DAC0]' : ''}`}
                                        onClick={() => handleAccept(suggestion)}
                                        disabled={isAccepted}
                                    >
                                        {isAccepted ? 'Accepted' : 'Accept'}
                                    </button>
                                    <button
                                        className='text-[14px] text-[#8A8A8A] font-medium px-4 py-3'
                                        onClick={() => handleDismiss(suggestion)}
                                    >
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                    <div className='flex items-center justify-between w-full px-4 py-2 bg-[#EDEDED] gap-3 fixed bottom-10 sm:bottom-0 left-0'>
                        <button
                            onClick={handleAcceptAll}
                            className='text-[14px] text-[#010F34] bg-white font-medium border-[#545454] border-[1.75px] rounded-sm shadow-md px-4 py-2 whitespace-nowrap w-full'
                        >
                            Accept All
                        </button>
                        <button
                            onClick={handleFinalizeInternal}
                            className='text-[14px] text-[#010F34] bg-[#31DAC0] font-medium rounded-sm shadow-md px-4 py-2 w-full'>
                            Finalize
                        </button>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col gap-2 items-center justify-center h-full'>
                    <img src="/assets/home-trend-down.svg" alt="no-suggestions" />
                    <h3 className="text-[20px] font-semibold text-[#010F34]">Let's get to work</h3>
                    <p className="text-[#010F34] text-[14px] font-medium">Suggestions will appear here</p>
                </div>
            )}
        </div>
    );
};

export default CitationSuggestionBox;