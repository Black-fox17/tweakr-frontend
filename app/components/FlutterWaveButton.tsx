'use client';

import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

interface FlutterwaveButtonProps {
    email: string;
    amount: number;
    name: string;
    phone: string;
}

const FlutterwaveButton: React.FC<FlutterwaveButtonProps> = ({
    email,
    amount,
    name = `customer ${email}`,
    phone = `phone ${email}`,
}) => {
    const config = {
        public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
        tx_ref: `${Date.now()}`,
        amount,
        currency: 'NGN',
        payment_options: 'card,ussd,banktransfer',
        customer: {
            email,
            phone_number: phone,
            name,
        },
        customizations: {
            title: 'Tweakrr Citation Payment',
            description: 'Payment for citation processing',
            logo: '/assets/logo.svg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);
    return (
        <button
            onClick={() => {
                handleFlutterPayment({
                    callback: (response) => {
                        console.log('Payment successful:', response);
                        closePaymentModal();
                    },
                    onClose: () => {
                        console.log('Payment modal closed');
                    },
                });
            }}
            className="flex items-center gap-3 p-4 rounded-md bg-[#FAFAFA] border border-[#E0E0E0] transition-all duration-200 hover:border-[#31DAC0] focus-within:border-[#31DAC0] w-full"        >
            <img src="/assets/paypal.svg" alt="paypal" className="w-[24px] h-[24px] object-contain" />
            <p className='bg-transparent outline-none text-[#333333] placeholder:text-[#9E9E9E] text-[16px] w-full'>
                Paypal
            </p>
        </button>
    );
};

export default FlutterwaveButton;
