"use client";

import { useState } from 'react';
import DraftForm from '@/app/components/DraftForm'
import PaymentModal from '@/app/components/PaymentModal'
import DraftList from '@/app/components/DraftList';
import ReferenceList from '@/app/components/ReferenceList';
import SettingsPanel from '@/app/components/SettingsPanel';
import React from 'react'
import { Menu, X } from "lucide-react";


const page = () => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("drafts");
    const [drafts, setDrafts] = useState([]);
    const [references, setReferences] = useState(["hello", "likj"]);
    const [citationStyle, setCitationStyle] = useState("APA");


    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleFormSuccess = () => {
        setIsPaymentModalOpen(true);
    };

    const closeModal = () => {
        setIsPaymentModalOpen(false);
    };
    return (
        <div className="flex h-screen bg-gray-100">
            <aside className={`fixed md:relative bg-white w-64 md:w-72 h-full shadow-lg p-5 transition-transform duration-300
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                <div className="flex justify-between items-center md:block">
                    <h2 className="text-xl font-bold text-gray-700">Dashboard</h2>
                    <button className="md:hidden p-2 text-gray-500" onClick={toggleSidebar}>
                        <X size={24} />
                    </button>
                </div>
                <nav className="mt-6">
                    {["drafts", "references", "settings"].map((tab) => (
                        <button
                            key={tab}
                            className={`block w-full text-left px-4 py-2 rounded-lg text-gray-700 transition
                                ${activeTab === tab ? "bg-gray-200 font-bold" : "hover:bg-gray-100"}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </nav>
            </aside>
            <button className="absolute top-18 left-4 md:hidden bg-gray-700 text-white p-2 rounded" onClick={toggleSidebar}>
                <Menu size={24} />
            </button>
            <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                <h1 className="text-2xl font-bold text-gray-800">
                    {activeTab === "drafts" ? "Uploaded Drafts" :
                        activeTab === "references" ? "Stored References" : "Settings"}
                </h1>

                {/* Drafts Section */}
                {activeTab === "drafts" && (
                    <>
                        <DraftForm onSuccess={handleFormSuccess} />
                        {/* <DraftList drafts={drafts} /> */}
                    </>
                )}

                {/* References Section */}
                {activeTab === "references" && <ReferenceList references={references} />}

                {/* Settings Section */}
                {activeTab === "settings" && <SettingsPanel citationStyle={citationStyle} setCitationStyle={setCitationStyle} />}

                {/* Payment Modal */}
                {isPaymentModalOpen && <PaymentModal onClose={closeModal} />}
            </main>
        </div>
    )
}

export default page
