"use client"

import React, { useEffect, useState } from 'react'
import FileUploader from '../components/Fileuploader'
import CitattionCustomizationStation from '../components/CitattionCustomizationStation'
import {
    ChevronLeftIcon,
    ChevronRight,
    Clipboard,
    RotateCw,
    Settings,
    Zap,
} from 'lucide-react'
import CitationSuggestionBox from '../components/CitationSuggestionBox'
import CitationReferencesBox from '../components/CitationReferencesBox'
import CitationIsReadyModal from '../components/CitationIsReadyModal'
import CreateAccountModal from '../components/CreateAccountModal'
import CitationPerfectionAchieve from '../components/CitationPerfectionAchieve'
import { getCitationSuggestions, processPaper, extractContent } from '@/service/citationService'
import { useQuery, useMutation } from '@tanstack/react-query'
import { Skeleton } from '@/components/ui/skeleton'
import CostBreakDown from '../components/CostBreakDown'

const Page = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
    const [showAssistant, setShowAssistant] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isCitationReady, setIsCitationReady] = useState(false)
    const [isRegisterReady, setIsRegisterReady] = useState(false)
    const [isCitationPerfectionAchieved, setIsCitationPerfectionAchievd] = useState(false)
    const [activeTab, setActiveTab] = useState<'suggestions' | 'settings' | 'references'>('suggestions')
    const [isUploading, setIsUploading] = useState(false);

    const [selectedStyleGuide, setSelectedStyleGuide] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [citationIntensity, setCitationIntensity] = useState('');

    const formData = new FormData();
    if (uploadedFiles.length > 0) {
        formData.append('file', uploadedFiles[0]);
    }


    const createFormDataForProcessPaper = () => {
        const formData = new FormData();
        if (uploadedFiles.length > 0) {
            formData.append('file', uploadedFiles[0]);
        }
        formData.append('style', selectedStyleGuide);
        formData.append('category', selectedCategory);
        return formData;
    };

    const createFormDataForGetCitationSuggestions = () => {
        const formData = new FormData();
        if (uploadedFiles.length > 0) {
            formData.append('input_file', uploadedFiles[0]);
        }
        return formData;
    };


    const { mutate: runProcessPaper, isPending } = useMutation({
        mutationFn: async () => {
            const formData = createFormDataForProcessPaper();

            return processPaper(formData);
        },
        onSuccess: () => {
            console.log('Processing success 🎉');
            setIsCitationReady(true);
        },
        onError: (error) => {
            console.error('Processing failed 😢', error);
        }
    });


    const { data, refetch, isFetching, error } = useQuery({
        queryKey: ['getCitationSuggestions'],
        queryFn: async () => {
            const formData = createFormDataForGetCitationSuggestions();
            return getCitationSuggestions(formData);
        },
        enabled: false,
    });

    if (error) {
        console.error('Failed to get suggestions:', error);
    }

    const handleWorkMagic = () => {
        if (!uploadedFiles[0]) return;
        refetch();
        runProcessPaper();
        setActiveTab("suggestions");
    };


    const { data: extract, isSuccess } = useQuery({
        queryKey: ['extract-content', uploadedFiles[0]],
        queryFn: () => extractContent(formData),
        enabled: uploadedFiles.length > 0,
        refetchOnWindowFocus: false,
    });

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


    return (
        <>
            {isCitationReady && <CitationIsReadyModal />}
            {isRegisterReady && <CreateAccountModal />}
            {isCitationPerfectionAchieved && <CitationPerfectionAchieve />}
            <div className="relative w-full h-screen flex bg-white transition-all duration-500">
                {/* Main Content Section (Navbar + Page Body) */}
                <div
                    className={`flex flex-col flex-1 transition-all duration-500 ${showAssistant && isSidebarOpen ? 'w-[70%]' : 'w-full'
                        }`}
                >
                    {/* Top Navbar */}
                    <nav className={`${isSidebarOpen ? "py-6" : "py-4"} px-12 bg-white flex items-center justify-between w-full border-b border-[#EDEDED] relative`}>
                        <img src="/assets/Green (2).svg" alt="logo" />

                        <div className="text-[#545454] text-[20px] font-medium bg-[#EAFBF9] py-1 px-2 rounded-[8px] absolute left-[40%]">
                            Untitled Document
                        </div>

                        {!showAssistant && !isSidebarOpen ? (
                            <button
                                className="bg-[#31DAC0] rounded-full text-white py-[14px] px-[20px] font-medium"
                                onClick={() => {
                                    setShowAssistant(true)
                                    setIsSidebarOpen(true)
                                }}
                            >
                                Check Assistants
                            </button>
                        ) : (
                            <div className="flex gap-4 absolute right-0 ">
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
                    <div className="flex-1 flex flex-col overflow-y-auto px-12 py-6">
                        {!isSuccess && !isFetching ? (
                            <FileUploader
                                files={uploadedFiles}
                                onChange={(files) => setUploadedFiles(files)}
                                isPending={isUploading}
                            />
                        ) : isFetching ? (
                            <div className="space-y-4 ">
                                {/* multiple skeleton lines */}
                                {Array.from({ length: 40 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-[22px] bg-[#D9D9D9] rounded animate-pulse"
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="py-4 overflow-y-scroll w-full">
                                <p className="text-[#545454] whitespace-pre-wrap">
                                    {extract?.data?.content ?? 'No content found'}
                                </p>
                            </div>
                        )}
                    </div>

                </div>

                {/* Sidebar */}
                {showAssistant && (
                    <div
                        className={`transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#FDFDFD] border-l border-[#EDEDED] h-full overflow-hidden w-full lg:w-[30%] fixed lg:static top-0 right-0 z-50`}
                    >
                        {/* Important: no fixed width inside! Let it be full */}
                        <div className="w-full h-full flex flex-col">
                            {/* Sidebar Navbar */}
                            <nav className="p-4 bg-white flex items-center justify-between border-b border-b-[#EDEDED] overflow-x-scroll">
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

                            {/* Sidebar Content */}
                            <div className="p-4 overflow-y-auto flex-1">
                                {activeTab === 'suggestions' && <CitationSuggestionBox suggestions={data?.data.citations} />}
                                {activeTab === 'settings' &&
                                    <CitattionCustomizationStation
                                        selectedStyleGuide={selectedStyleGuide}
                                        setSelectedStyleGuide={setSelectedStyleGuide}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                        citationIntensity={citationIntensity}
                                        setCitationIntensity={setCitationIntensity}
                                        onWorkMagic={handleWorkMagic}
                                    />}
                                {activeTab === 'references' && <CitationReferencesBox />}
                            </div>
                        </div>
                    </div>
                )}

                <CostBreakDown />

            </div>
        </>
    )
}

export default Page
