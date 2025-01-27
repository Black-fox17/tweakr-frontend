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
            <h1 className='text-2xl sm:text-2xl md:text-3xl font-semibold leading-tight'>
                Secure Your Work and Experience a Personalized Platform!
            </h1>
            <h3 className='text-[1rem] sm:text-xl md:text-2xl mt-2 font-semibold leading-tight'>                Manage Drafts, References, and Preferences with Ease.
            </h3>
            <DraftForm onSuccess={handleFormSuccess} />
            {isPaymentModalOpen && <PaymentModal onClose={closeModal} />}
        </div>
    )
}

export default page
