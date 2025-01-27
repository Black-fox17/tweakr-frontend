"use client";

import { useState } from 'react';
import DraftForm from '@/app/components/DraftForm'
import PaymentModal from '@/app/components/PaymentModal'
import React from 'react'

const page = () => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);

    const handleFormSuccess = () => {
        setIsPaymentModalOpen(true);
    };

    const closeModal = () => {
        setIsPaymentModalOpen(false);
    };
    return (
        <div className='flex flex-col items-center justify-center mt-16 px-4 text-center'>
            <h1 className='text-2xl sm:text-2xl md:text-3xl font-semibold mb-2 leading-tight'>
                Secure Your Work and Experience a Personalized Platform!<br />
                Manage Drafts, References, and Preferences with Ease.
            </h1>
            <DraftForm onSuccess={handleFormSuccess} />
            {isPaymentModalOpen && <PaymentModal onClose={closeModal} />}
        </div>
    )
}

export default page
