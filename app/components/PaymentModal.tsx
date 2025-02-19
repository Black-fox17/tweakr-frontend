"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";

const PaymentModal = ({ onClose }: { onClose: () => void }) => {
    const { setAmount, amount, setSubscriptionType } = useGlobalContext()
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter()

    const handleSubscriptionClick = (type: string, price: number) => {
        setSubscriptionType(type);
        setAmount(price);
        router.push("/paymentGateway")
    };

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="rounded-[5px] border border-light-300  text-dark-700 sm:px-8">
                <DialogHeader className='mb-4 space-y-2'>
                    <DialogTitle className="text-[1.5rem]">Word Count Pricing</DialogTitle>
                    <DialogDescription className="text-[1rem]">
                        Our service calculates costs based on word count:
                        <ul className="mt-4 list-disc list-inside">
                            <li>
                                <strong className="text-brand">₦1,500</strong> for up to 3,000 words (Nigerian users).
                            </li>
                            <li>
                                <strong className="text-brand">$1.5</strong> for up to 3,000 words (Non-Nigerian users).
                            </li>
                        </ul>
                        Please choose your preferred option below:
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-4 mt-4">
                    <Button
                        variant="ghost"
                        onClick={() => {
                            setOpen(false);
                            router.push("/plans")
                        }}
                        className="text-white bg-brand rounded-[5px]"
                    >
                        Check Other Plans
                    </Button>
                    <Button
                        variant="default"
                        className="text-white bg-brand rounded-[5px]"
                        onClick={() => handleSubscriptionClick("3,000 words", 25)}
                    >
                        Proceed to Payment
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PaymentModal;
