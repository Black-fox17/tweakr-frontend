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
import CitationReferencesBox from '../components/CitationReferencesBox'
import CitationIsReadyModal from '../components/CitationIsReadyModal'
import CreateAccountModal from '../components/CreateAccountModal'
import CitationPerfectionAchieve from '../components/CitationPerfectionAchieve'
import { getCitationSuggestions, processPaper, extractContent } from '@/service/citationService'
import { useQuery, useMutation } from '@tanstack/react-query'
import { Citation } from '../components/CitationSuggestionBox'
import CostBreakDown from '../components/CostBreakDown'
import { annotateTextWithCitation } from '@/hooks/annotateTextWithCitations'
import { toast } from 'sonner'

const Page = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
    const [showAssistant, setShowAssistant] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isCitationReady, setIsCitationReady] = useState(false)
    const [isRegisterReady, setIsRegisterReady] = useState(false)
    const [isCitationPerfectionAchieved, setIsCitationPerfectionAchievd] = useState(false)
    const [isPayment, setIsPayment] = useState(false)
    const [activeTab, setActiveTab] = useState<'suggestions' | 'settings' | 'references'>('suggestions')
    const [isUploading, setIsUploading] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const [annotatedText, setAnnotatedText] = useState('');


    const [selectedStyleGuide, setSelectedStyleGuide] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [citationIntensity, setCitationIntensity] = useState('');


    const [acceptedCitations, setAcceptedCitations] = useState<Citation[]>([]);
    const [dismissedCitations, setDismissedCitations] = useState<Citation[]>([]);


    const formData = new FormData();
    if (uploadedFiles.length > 0) {
        formData.append('file', uploadedFiles[0]);
    }


    const createFormDataForGetCitationSuggestions = () => {
        const formData = new FormData();
        if (uploadedFiles.length > 0 && uploadedFiles[0]) {
            formData.append('input_file', uploadedFiles[0]);
        }
        return formData;
    };



    const { data, refetch, isFetching, error, isSuccess: suggestionSuccesful } = useQuery({
        queryKey: ['getCitationSuggestions'],
        queryFn: async () => {
            const formData = createFormDataForGetCitationSuggestions();
            return getCitationSuggestions(formData);
        },
        enabled: false,
    });

    if (error) {
        console.error('Failed to get suggestions:', error);
        toast.error("Failed to get suggestions")
    }

    useEffect(() => {
        if (suggestionSuccesful && data) {
            setIsCitationReady(true);
        }
    }, [suggestionSuccesful, data]);

    useEffect(() => {
        if (isCitationReady) {
            const timeout = setTimeout(() => {
                setIsRegisterReady(true);
            }, 30000); // 

            return () => clearTimeout(timeout);
        }
    }, [isCitationReady]);

    const handleWorkMagic = () => {
        if (!uploadedFiles[0]) return;
        refetch();
        setActiveTab("suggestions");
    };


    const { data: extract, isSuccess } = useQuery({
        queryKey: ['extract-content', uploadedFiles[0]],
        queryFn: () => extractContent(formData),
        enabled: uploadedFiles.length > 0,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (isSuccess && extract) {
            const text = typeof extract === "string" ? extract : JSON.stringify(extract);
            const words = text.trim().split(/\s+/);
            setWordCount(words.length);
        }
    }, [isSuccess, extract]);


    useEffect(() => {
        if (uploadedFiles.length > 0) {
            setIsUploading(true);
        }
    }, [uploadedFiles]);

    useEffect(() => {
        if (isSuccess) {
            setIsUploading(false);
        }
    }, [isSuccess, extract]);

    useEffect(() => {
        if (isCitationReady) {
            const timeout = setTimeout(() => {
                setIsCitationReady(false);
                setIsRegisterReady(true);
            }, 4000);

            return () => clearTimeout(timeout);
        }
    }, [isCitationReady]);

    const suggestionsToDisplay = useMemo(() => {
        return data?.data?.citations?.flat().filter((citation: Citation) =>
            !acceptedCitations.find(c => c.id === citation.id) &&
            !dismissedCitations.find(c => c.id === citation.id)
        );
    }, [data, acceptedCitations, dismissedCitations]);

    const handleAcceptAll = () => {
        if (!data?.data?.citations) return;
        const flatCitations: Citation[] = data.data.citations.flat();

        const newAccepted = flatCitations.filter((citation: Citation) =>
            !acceptedCitations.find(c => c.id === citation.id) &&
            !dismissedCitations.find(c => c.id === citation.id)
        );

        const updated = [...acceptedCitations, ...newAccepted];
        setAcceptedCitations(updated);

        if (extract?.data?.content) {
            const rawText = extract.data.content;
            const updatedText = annotateTextWithCitation(rawText, updated);
            setAnnotatedText(updatedText);
        }
    };


    const handleFinalize = () => {
        setIsPayment(true)

        // if (!annotatedText) return;

        // const element = document.createElement("div");
        // element.innerHTML = `<div style="font-family: Arial; white-space: pre-wrap;">${annotatedText}</div>`;

        // const html2pdf = require("html2pdf.js");
        // html2pdf().from(element).save("annotated-document.pdf");
    };



    const handleAcceptCitation = (citation: Citation) => {
        // Prevent duplicates
        setAcceptedCitations(prev => {
            const alreadyAccepted = prev.some(c => c.id === citation.id);
            if (alreadyAccepted) return prev;

            const updated = [...prev, citation];

            // Live re-annotate
            if (extract?.data?.content) {
                const rawText = extract.data.content;
                const updatedText = annotateTextWithCitation(rawText, updated);
                setAnnotatedText(updatedText);
            }

            return updated;
        });
    };


    const handleDismissCitation = (citation: Citation) => {
        setDismissedCitations(prev => [...prev, citation]);
        setAcceptedCitations(prev => prev.filter(c => c.id !== citation.id));
    };

    console.log(annotatedText)

    return (
        <>
            {isCitationReady && <CitationIsReadyModal />}
            {isRegisterReady && <CreateAccountModal setIsRegisterReady={setIsRegisterReady} />}
            {isCitationPerfectionAchieved && <CitationPerfectionAchieve />}
            <div className="relative w-full h-screen flex bg-white transition-all duration-500">
                {/* Main Content Section (Navbar + Page Body) */}
                <div
                    className={`flex flex-col flex-1 transition-all duration-500 ${showAssistant && isSidebarOpen ? 'w-[70%]' : 'w-full'
                        }`}
                >
                    {/* Top Navbar */}
                    <nav className={`${isSidebarOpen ? "py-6" : "py-4"} px-2 sm:px-12 bg-white flex items-center justify-between w-full border-b h border-[#EDEDED] relative`}>
                        <img src="/assets/Green (2).svg" alt="logo" />

                        <div className="text-[#545454] text-[20px] font-medium bg-[#EAFBF9] py-1 px-2 rounded-[8px] hidden sm:block sm:absolute left-[40%]">
                            Untitled Document
                        </div>
                        <div className='flex sm:hidden gap-2'>
                            <div className="text-[#545454] text-[20px] font-medium bg-[#EAFBF9] py-1 px-2 rounded-[8px] ">
                                lorem ipsum
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
                            <div className="hidden sm:flex gap-4 absolute right-0 ">
                                <button className="flex gap-2 text-[12px] rounded-full border-[1.75px] border-[#616161] bg-[#FAFAFA] shadow-sm p-4">
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

                    {/* Body Content */}
                    <div className="flex-1 w-full flex flex-col items-center justify-center overflow-y-auto px-4 sm:px-12 py-6">
                        {!isSuccess && !isFetching ? (
                            <FileUploader
                                files={uploadedFiles}
                                onChange={(files) => setUploadedFiles(files)}
                                isPending={isUploading}
                            />
                        ) : isFetching ? (
                            <div className="space-y-4 w-full">
                                {/* multiple skeleton lines */}
                                {Array.from({ length: 40 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-[22px] bg-[#D9D9D9] rounded animate-pulse"
                                    />
                                ))}
                            </div>
                        ) : isCitationPerfectionAchieved ? (
                            <div className="py-4 overflow-y-scroll w-full">
                                <p className="text-[#545454] whitespace-pre-wrap">
                                    {annotatedText}
                                </p>
                            </div>
                            // ) : annotatedText ? (
                            //     <div className="py-4 overflow-y-scroll w-full">
                            //         <p className="text-[#545454] whitespace-pre-wrap">
                            //             {annotatedText}
                            //         </p>
                            //     </div>
                        ) : (
                            <div className="py-4 overflow-y-scroll w-full">
                                <p className="text-[#545454] whitespace-pre-wrap">
                                    {extract?.data?.content ?? 'No content found'}
                                </p>
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
                                    className={` ${activeTab === 'suggestions' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 flex items-center gap-2 rounded-[8px] justify-start px-4 py-2`}
                                    onClick={() => setActiveTab('suggestions')}
                                >
                                    <Zap />
                                    Suggestions
                                </button>
                                <button
                                    className={`${activeTab === 'settings' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 items-center flex gap-2 justify-start rounded-[8px] py-2 px-4 w-[144px]`}
                                    onClick={() => setActiveTab('settings')}
                                >
                                    <Settings />
                                    Settings
                                </button>
                                <button
                                    className={`${activeTab === 'references' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 flex items-center justify-start gap-2 rounded-[8px] px-4 py-2`}
                                    onClick={() => setActiveTab('references')}
                                >
                                    <Clipboard className='w-[16px] h-[16px]' />
                                    References
                                </button>
                            </nav>

                            <div className="overflow-y-auto flex-1">
                                {activeTab === 'suggestions' && !isPayment &&
                                    <CitationSuggestionBox
                                        suggestions={suggestionsToDisplay}
                                        onAccept={handleAcceptCitation}
                                        onDismiss={handleDismissCitation}
                                        acceptedCitations={acceptedCitations}
                                        onAcceptAll={handleAcceptAll}
                                        onFinalize={handleFinalize}
                                    />
                                }
                                {activeTab === 'settings' && !isPayment &&
                                    <CitattionCustomizationStation
                                        selectedStyleGuide={selectedStyleGuide}
                                        setSelectedStyleGuide={setSelectedStyleGuide}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                        citationIntensity={citationIntensity}
                                        setCitationIntensity={setCitationIntensity}
                                        onWorkMagic={handleWorkMagic}
                                    />}
                                {/* {isPayment && <CostBreakDown />} */}
                                {activeTab === 'references' && !isPayment && <CitationReferencesBox />}
                            </div>
                        </div>
                    </div>
                )}

                {showAssistant && (
                    <nav className="lg:hidden py-2 px-4 fixed bottom-0 left-0 z-50 bg-white flex items-center justify-between border-b border-b-[#EDEDED] w-full">
                        <button
                            className={` ${activeTab === 'suggestions' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 flex flex-col items-center gap-2 rounded-[8px] justify-start px-4 py-2 text-[14px]`}
                            onClick={() => setActiveTab('suggestions')}
                        >
                            <Zap className='w-[24px] h-[24px]' />
                            Suggestions
                        </button>
                        <button
                            className={`${activeTab === 'settings' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 items-center flex-col flex gap-2 justify-start rounded-[8px] py-2 px-4 w-[144px]`}
                            onClick={() => setActiveTab('settings')}
                        >
                            <Settings className='w-[24px] h-[24px]' />
                            Settings
                        </button>
                        <button
                            className={`${activeTab === 'references' ? 'bg-[#E6E7EB] text-[#010F34]' : 'text-[#8A91A2]'} transition-all duration-300 flex-col flex items-center justify-start gap-2 rounded-[8px] px-4 py-2`}
                            onClick={() => setActiveTab('references')}
                        >
                            <Clipboard className='w-[24px] h-[24px]' />
                            References
                        </button>
                    </nav>)}

            </div >
        </>
    )
}

export default Page
