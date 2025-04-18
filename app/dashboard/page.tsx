"use client"

import React, { use, useState } from 'react'
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

const Page = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
    const [showAssistant, setShowAssistant] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isCitationReady, setIsCitationReady] = useState(false)
    const [isRegisterReady, setIsRegisterReady] = useState(false)
    const [isCitationPerfectionAchieved, setIsCitationPerfectionAchievd] = useState(true)
    const [activeTab, setActiveTab] = useState<'suggestions' | 'settings' | 'references'>('suggestions')


    return (
        <>
            {isCitationReady && <CitationIsReadyModal />}
            {isRegisterReady && <CreateAccountModal />}
            {isCitationPerfectionAchieved && <CitationPerfectionAchieve />}
            <div className="relative w-full h-screen flex overflow-hidden bg-white transition-all duration-500">
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
                    <div className="flex-1 flex items-center justify-center px-12">
                        {/* {showAssistant && ( */}
                        <FileUploader files={uploadedFiles} onChange={setUploadedFiles} />
                        {/* )} */}
                    </div>
                </div>

                {/* Sidebar */}
                {showAssistant && (
                    <div
                        className={`transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#FDFDFD] border-l border-[#EDEDED] h-full overflow-hidden`}
                    >
                        {/* Important: no fixed width inside! Let it be full */}
                        <div className="w-full h-full flex flex-col">
                            {/* Sidebar Navbar */}
                            <nav className="p-4 bg-white flex items-center justify-between border-b border-b-[#EDEDED]">
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
                                {activeTab === 'suggestions' && <CitationSuggestionBox />}
                                {activeTab === 'settings' && <CitattionCustomizationStation />}
                                {activeTab === 'references' && <CitationReferencesBox />}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Page
