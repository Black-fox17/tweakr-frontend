"use client"

import React, { useEffect, useState, useMemo } from 'react'
import FileUploader from '../components/Fileuploader'
import CitattionCustomizationStation from '../components/CitattionCustomizationStation'
import {
    ChevronLeftIcon,
    ChevronRight,
    Clipboard,
    RotateCw,
    Settings,
    Zap,
    ArrowDown
} from 'lucide-react'
import CitationSuggestionBox from '../components/CitationSuggestionBox'
import CitationIsReadyModal from '../components/CitationIsReadyModal'
import CreateAccountModal from '../components/CreateAccountModal'
import CitationPerfectionAchieve from '../components/CitationPerfectionAchieve'
import { getCitationSuggestions, extractContent } from '@/service/citationService'
import { useQuery } from '@tanstack/react-query'
import { Citation } from '../components/CitationSuggestionBox'
import CostBreakDown from '../components/CostBreakDown'
import { annotateTextWithCitation } from '@/hooks/annotateTextWithCitations'
import { handleFinalize as handleFinalizeFromProcessor } from '@/lib/documentProcessor'
import { toast } from 'sonner'

// Define a type for the result of the processor's handleFinalize
type DocumentProcessingResult = {
    documentUrl: string;
    downloadFile: () => void;
    statistics: {
        citationCount: number;
        referenceCount: number;
    };
} | null;

// Define the type for citation styles, mirroring what CitationSuggestionBox expects for its prop
type CitationStyle = 'APA' | 'MLA' | 'Chicago';

const Page = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [showAssistant, setShowAssistant] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCitationReady, setIsCitationReady] = useState(false);
    const [isRegisterReady, setIsRegisterReady] = useState(false);
    const [isCitationPerfectionAchieved, setIsCitationPerfectionAchieved] = useState(false);
    const [isPayment, setIsPayment] = useState(false);
    const [activeTab, setActiveTab] = useState('settings');
    const [isUploading, setIsUploading] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const [annotatedText, setAnnotatedText] = useState('');

    // New state variables for document processing
    const [selectedStyleGuide, setSelectedStyleGuide] = useState<CitationStyle>('APA');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [citationIntensity, setCitationIntensity] = useState('');
    const [acceptedCitations, setAcceptedCitations] = useState<Citation[]>([]);
    const [dismissedCitations, setDismissedCitations] = useState<Citation[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    
    // State to hold the result from documentProcessor.handleFinalize
    const [processingResult, setProcessingResult] = useState<DocumentProcessingResult>(null);

    const createFormDataForFileUpload = (fieldName: string = 'file') => {
        const formData = new FormData();
        if (uploadedFiles.length > 0 && uploadedFiles[0]) {
            formData.append(fieldName, uploadedFiles[0]);
        }
        return formData;
    };

    const { data: citationSuggestionsData, refetch: refetchSuggestions, isFetching: isLoadingSuggestions, error: suggestionsError, isSuccess: suggestionSuccesful } = useQuery({
        queryKey: ['getCitationSuggestions'],
        queryFn: async () => {
            const formData = createFormDataForFileUpload('input_file');
            if (!formData.has('input_file')) {
                toast.error("Please upload a file first for suggestions.");
                return null;
            }
            return getCitationSuggestions(formData);
        },
        enabled: false,
    });

    if (suggestionsError) {
        console.error('Failed to get suggestions:', suggestionsError);
        toast.error("Failed to get suggestions. Please try again.");
    }

    const { data: extractResult, isSuccess: extractIsSuccess, isFetching: isLoadingExtract } = useQuery({
        queryKey: ['extract-content', uploadedFiles[0]?.name],
        queryFn: () => {
            const formData = createFormDataForFileUpload('file');
            
            console.log('--- Debugging extractContent Call ---');
            console.log('File being used for FormData:', uploadedFiles[0]);

            if (!formData.has('file')) {
                console.error("CRITICAL: 'file' is MISSING from FormData before calling extractContent.");
                toast.error("Error: File not correctly added to form data for extraction.");
                return Promise.reject(new Error("File not found in form data for extraction"));
            } else {
                console.log("FormData 'file' field:", formData.get('file'));
            }

            return extractContent(formData);
        },
        enabled: uploadedFiles.length > 0 && !!uploadedFiles[0],
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (suggestionSuccesful && citationSuggestionsData) {
            setIsCitationReady(true);
        }
    }, [suggestionSuccesful, citationSuggestionsData]);

    useEffect(() => {
        if (isCitationReady) {
            const timeout = setTimeout(() => {
                setIsRegisterReady(true);
            }, 30000);
            return () => clearTimeout(timeout);
        }
    }, [isCitationReady]);
    
    useEffect(() => {
        if (extractIsSuccess && extractResult) {
            const text = typeof extractResult.data?.content === "string" ? extractResult.data.content : "";
            setAnnotatedText(text);
            const words = text.trim().split(/\s+/);
            setWordCount(words.length);
            setIsUploading(false);
        }
    }, [extractIsSuccess, extractResult]);

    useEffect(() => {
        if (uploadedFiles.length > 0) {
            setIsUploading(true);
        }
    }, [uploadedFiles]);

    const handleWorkMagic = () => {
        if (!uploadedFiles[0]) {
            toast.error("Please upload a document first.");
            return;
        }
        refetchSuggestions();
        setActiveTab("suggestions");
    };

    const suggestionsToDisplay = useMemo(() => {
        return citationSuggestionsData?.data?.citations?.flat().filter((citation: Citation) =>
            !acceptedCitations.find(c => c.id === citation.id) &&
            !dismissedCitations.find(c => c.id === citation.id)
        ) || [];
    }, [citationSuggestionsData, acceptedCitations, dismissedCitations]);

    const handleAcceptAll = () => {
        if (!citationSuggestionsData?.data?.citations) return;
        const flatCitations: Citation[] = citationSuggestionsData.data.citations.flat();

        const newAccepted = flatCitations.filter((citation: Citation) =>
            !acceptedCitations.find(c => c.id === citation.id) &&
            !dismissedCitations.find(c => c.id === citation.id)
        );

        const updatedAcceptedCitations = [...acceptedCitations, ...newAccepted];
        setAcceptedCitations(updatedAcceptedCitations);

        if (extractResult?.data?.content) {
            const rawText = extractResult.data.content;
            const updatedLiveText = annotateTextWithCitation(rawText, updatedAcceptedCitations);
            setAnnotatedText(updatedLiveText);
        }
    };
    
    const handleAcceptCitation = (citation: Citation) => {
        setAcceptedCitations(prev => {
            const alreadyAccepted = prev.some(c => c.id === citation.id);
            if (alreadyAccepted) return prev;

            const updated = [...prev, citation];
            if (extractResult?.data?.content) {
                const rawText = extractResult.data.content;
                const updatedLiveText = annotateTextWithCitation(rawText, updated);
                setAnnotatedText(updatedLiveText);
            }
            return updated;
        });
    };

    const handleDismissCitation = (citation: Citation) => {
        setDismissedCitations(prev => [...prev, citation]);
        setAcceptedCitations(prev => prev.filter(c => c.id !== citation.id));
    };

    const handleFinalizeDocument = async (citationsFromBox: Citation[]) => {
        if (!extractResult?.data?.content || citationsFromBox.length === 0) {
            toast.error("No content or citations to process.");
            setProcessingResult(null);
            setIsCitationPerfectionAchieved(false);
            return;
        }
        setIsProcessing(true);
        setProcessingResult(null);
        setIsCitationPerfectionAchieved(false);

        try {
            const result = await handleFinalizeFromProcessor(
                extractResult,
                citationsFromBox,
                selectedStyleGuide
            );
            setProcessingResult(result);
            setIsCitationPerfectionAchieved(true);
            toast.success("Document processed successfully!");
        } catch (error) {
            console.error('Error finalizing document:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to finalize document.');
            setIsCitationPerfectionAchieved(false);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleCloseCitationReadyModal = () => {
        setIsCitationReady(false);
    };

    return (
        <>
            {isCitationReady && <CitationIsReadyModal onClose={handleCloseCitationReadyModal} />}
            {isRegisterReady && <CreateAccountModal setIsRegisterReady={setIsRegisterReady} />}
            
            {isCitationPerfectionAchieved && processingResult && (
                <CitationPerfectionAchieve 
                    documentUrl={processingResult.documentUrl} 
                    onDownloadClick={processingResult.downloadFile}
                    citationCount={processingResult.statistics.citationCount}
                    referenceCount={processingResult.statistics.referenceCount}
                />
            )}

            <div className="relative w-full h-screen flex bg-white transition-all duration-500">
                <div
                    className={`flex flex-col flex-1 transition-all duration-500 ${showAssistant && isSidebarOpen ? 'w-[70%]' : 'w-full'
                        }`}
                >
                    <nav className={`${isSidebarOpen ? "py-6" : "py-4"} px-2 sm:px-12 bg-white flex items-center justify-between w-full border-b h border-[#EDEDED] relative`}>
                        <img src="/assets/Green (2).svg" alt="logo" />
                        <div className="text-[#545454] text-[20px] font-medium bg-[#EAFBF9] py-1 px-2 rounded-[8px] hidden sm:block sm:absolute left-[40%]">
                            {uploadedFiles[0]?.name || "Untitled Document"}
                        </div>
                        <div className='flex sm:hidden gap-2'>
                            <div className="text-[#545454] text-[20px] font-medium bg-[#EAFBF9] py-1 px-2 rounded-[8px] ">
                                {uploadedFiles[0]?.name ? uploadedFiles[0].name.substring(0,10) + "..." : "Document"}
                            </div>
                            <button
                                className='p-2.5 border-[1.75px] shadow-sm border-[#616161] rounded-full  items-center'
                                onClick={() => {
                                    setIsSidebarOpen((prev) => !prev)
                                    setShowAssistant((prev) => !prev)
                                }}
                            >
                                <ArrowDown className='w-4 h-4' />
                            </button>
                        </div>
                        {!showAssistant && !isSidebarOpen ? (
                            <button
                                className="hidden sm:flex bg-[#31DAC0] rounded-full text-white py-[14px] px-[20px] font-medium"
                                onClick={() => {
                                    setIsSidebarOpen((prev) => !prev)
                                    setShowAssistant((prev) => !prev)
                                }}
                            >
                                Check Assistants
                            </button>
                        ) : (
                            <div className="hidden sm:flex gap-4 items-center">
                                <button 
                                    onClick={() => setUploadedFiles([])}
                                    className="flex gap-2 text-[12px] rounded-full border-[1.75px] border-[#616161] bg-[#FAFAFA] shadow-sm p-4 items-center"
                                >
                                    <RotateCw className='w-[16px] h-[16px]' />
                                    Reupload
                                </button>
                                <button
                                    className="border border-[#EDEDED] p-[10px] rounded-l-[4px]"
                                    onClick={() => {
                                        setIsSidebarOpen((prev) => !prev)
                                        setShowAssistant((prev) => !prev)
                                    }}
                                >
                                    {isSidebarOpen ? <ChevronRight className='w-[24px] h-[24px]' /> : <ChevronLeftIcon className='w-[24px] h-[24px]' />}
                                </button>
                            </div>
                        )}
                    </nav>

                    <div className="flex-1 w-full flex flex-col items-center justify-center overflow-y-auto px-4 sm:px-12 py-6">
                        {isLoadingExtract && !extractResult && (
                             <div className="space-y-4 w-full">
                                {Array.from({ length: 40 }).map((_, index) => (
                                    <div key={index} className="w-full h-[22px] bg-[#D9D9D9] rounded animate-pulse"/>
                                ))}
                            </div>
                        )}
                        {!isLoadingExtract && !extractIsSuccess && !isLoadingSuggestions && !uploadedFiles.length ? (
                            <FileUploader
                                files={uploadedFiles}
                                onChange={(files) => setUploadedFiles(files as File[])}
                                isPending={isUploading}
                            />
                        ) : isLoadingSuggestions && !citationSuggestionsData ? (
                            <div className="space-y-4 w-full">
                                {Array.from({ length: 40 }).map((_, index) => (
                                    <div key={index} className="w-full h-[22px] bg-[#D9D9D9] rounded animate-pulse"/>
                                ))}
                            </div>
                        ) : isCitationPerfectionAchieved && processingResult ? (
                             <div className="py-4 overflow-y-scroll w-full text-center">
                                <h2 className="text-2xl font-semibold mb-4">Document Ready!</h2>
                                <p className="text-lg mb-2">Your document "{uploadedFiles[0]?.name}" has been processed.</p>
                                <p className="text-md mb-1">Citations: {processingResult.statistics.citationCount}</p>
                                <p className="text-md mb-4">References: {processingResult.statistics.referenceCount}</p>
                            </div>
                        ) : extractResult?.data?.content ? (
                            <div className="py-4 overflow-y-scroll w-full">
                                <p className="text-[#545454] whitespace-pre-wrap">
                                    {annotatedText}
                                </p>
                            </div>
                        ) : (
                             <div className="text-center">
                                <p>Processing your document or waiting for action...</p>
                                {uploadedFiles.length > 0 && !extractResult && !isLoadingExtract && (
                                    <p className="text-red-500">Could not extract content from the uploaded file.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {showAssistant && (
                    <div
                        className={`transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}  bg-[#FDFDFD] border-l border-[#EDEDED] h-full overflow-hidden w-full lg:w-[38%] fixed lg:static top-0 right-0 z-0 sm:z-30 mt-[8rem] sm:mt-0`}
                    >
                        <div className="w-full h-full flex flex-col">
                            <nav className="p-4 bg-white hidden lg:flex items-center justify-between border-b border-b-[#EDEDED] overflow-x-scroll">
                                <button
                                    className={`${activeTab === 'settings' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 items-center flex gap-2 justify-start rounded-[8px] py-2 px-4 w-[144px]`}
                                    onClick={() => setActiveTab('settings')}
                                >
                                    <Settings />
                                    Settings
                                </button>
                                <button
                                    className={` ${activeTab === 'suggestions' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 flex items-center gap-2 rounded-[8px] justify-start px-4 py-2`}
                                    onClick={() => setActiveTab('suggestions')}
                                    disabled={!extractIsSuccess}
                                >
                                    <Zap />
                                    Suggestions
                                </button>
                                <button
                                    className={`${activeTab === 'references' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 flex items-center justify-start gap-2 rounded-[8px] px-4 py-2`}
                                    onClick={() => setActiveTab('references')}
                                    disabled={!extractIsSuccess}
                                >
                                    <Clipboard className='w-[16px] h-[16px]' />
                                    References
                                </button>
                            </nav>

                            <div className="overflow-y-auto flex-1">
                                {activeTab === 'suggestions' && !isPayment && extractIsSuccess && (
                                    <CitationSuggestionBox
                                        suggestions={suggestionsToDisplay}
                                        onAccept={handleAcceptCitation}
                                        onDismiss={handleDismissCitation}
                                        acceptedCitations={acceptedCitations}
                                        onAcceptAll={handleAcceptAll}
                                        onFinalize={handleFinalizeDocument}
                                        citationStyle={selectedStyleGuide}
                                    />
                                )}
                                {activeTab === 'settings' && !isPayment && (
                                    <CitattionCustomizationStation
                                        selectedStyleGuide={selectedStyleGuide}
                                        setSelectedStyleGuide={setSelectedStyleGuide}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                        citationIntensity={citationIntensity}
                                        setCitationIntensity={setCitationIntensity}
                                        onWorkMagic={handleWorkMagic}
                                        isProcessing={isLoadingSuggestions || isLoadingExtract}
                                    />
                                )}
                                {isPayment && <CostBreakDown
                                    wordCount={wordCount}
                                    acceptedCitation={acceptedCitations.length}
                                    setIsPayment={setIsPayment}
                                />}
                                {activeTab === 'references' && !isPayment && processingResult && (
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Document Statistics</h3>
                                        <p>Citations Added: {processingResult.statistics.citationCount}</p>
                                        <p>Reference Entries: {processingResult.statistics.referenceCount}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                
                {showAssistant && isSidebarOpen && (
                    <nav className="lg:hidden py-2 px-4 fixed bottom-0 left-0 z-50 bg-white flex items-center justify-around border-t border-t-[#EDEDED] w-full">
                        <button
                            className={`${activeTab === 'settings' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 items-center flex-col flex gap-1 justify-center rounded-[8px] py-2 px-3 text-xs w-1/3`}
                            onClick={() => setActiveTab('settings')}
                        >
                            <Settings className='w-[20px] h-[20px]' />
                            Settings
                        </button>
                        <button
                            className={` ${activeTab === 'suggestions' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 flex flex-col items-center gap-1 justify-center rounded-[8px] py-2 px-3 text-xs w-1/3`}
                            onClick={() => setActiveTab('suggestions')}
                             disabled={!extractIsSuccess}
                        >
                            <Zap className='w-[20px] h-[20px]' />
                            Suggestions
                        </button>
                        <button
                            className={`${activeTab === 'references' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 flex-col flex items-center justify-center gap-1 rounded-[8px] py-2 px-3 text-xs w-1/3`}
                            onClick={() => setActiveTab('references')}
                             disabled={!extractIsSuccess}
                        >
                            <Clipboard className='w-[20px] h-[20px]' />
                            References
                        </button>
                    </nav>
                )}
            </div >
        </>
    )
}

export default Page
