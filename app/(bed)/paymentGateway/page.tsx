"use client"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import React, { useState } from 'react'
import Button from "@/app/components/Button"
import { useGlobalContext } from '@/context/GlobalContext'

import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useRouter } from "next/navigation"


const authFormSchema = z.object({
    country: z.string().min(1, "Country is required"),
    cardName: z.string().min(1, "Name on Card is required"),
    cardNumber: z
        .string()
        .regex(/^\d{16}$/, "Card Number must be 16 digits"),
    expirationDate: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration Date must be in MM/YY format"),
    securityCode: z
        .string()
        .regex(/^\d{3,4}$/, "Security Code must be 3 or 4 digits"),
    postalCode: z.string().min(4, "Postal Code must be at least 4 characters"),
});

const page = () => {
    const { subscriptionType, amount, email } = useGlobalContext()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [paymentMethod, setPaymentMethod] = useState<"card" | "mobilemoney">("card");

    const router = useRouter()

    const userDetails = {
        name: 'Kelvin Joe Young',
        email: email,
        phone_number: '07000001100',
        address: '123 Street Name, City, Country',
    };

    const flutterwaveConfig = {
        public_key: "FLWPUBK_TEST-7d6d6a7753da24b521bd1fd56b9b3ed0-X",
        tx_ref: Date.now().toString(),
        amount: amount,
        currency: "USD",
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: userDetails.email,
            phone_number: userDetails.phone_number,
            name: userDetails.name,
        },
        customizations: {
            title: "Subscription Payment",
            description: "Payment for yearly subscription",
            logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
    };

    const handleFlutterwaveSuccess = (response: any) => {
        console.log("Payment successful:", response);
        closePaymentModal();
        router.push("/dashboard");
    };

    const handleFlutterwaveError = () => {
        alert("Payment failed! Please try again.");
    };

    const flutterwaveButtonProps = {
        ...flutterwaveConfig,
        callback: handleFlutterwaveSuccess,
        onClose: handleFlutterwaveError,
    };

    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            country: "",
            cardName: "",
            cardNumber: "",
            expirationDate: "",
            securityCode: "",
            postalCode: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof authFormSchema>) => {
        setIsLoading(true);
        console.log("Card Payment Form Submitted: ", data);

        // Simulate form submission or API call
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };



    return (
        <div className='my-12  flex flex-col items-stretch justify-center md:flex-row gap-8 section-padding'>
            <div className="border border-light-300 p-6 shadow-xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flexflex-col">
                            <h1 className="text-2xl">Payment Information</h1>
                            <p className="text-4 text-light-100">
                                Please enter your card details to complete the checkout process.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 mb-8">
                            <h2 className="text-4 text-brand">Your Country</h2>
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className='flex flex-col gap-4'>
                                            <FormLabel className='input-label'>Country</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter the Title"
                                                    className='input-element'
                                                    {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage className='shad-form-message ' />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4 text-brand">Enter Billing Info</h2>
                            <div className="flex gap-4 w-full flex-col md:flex-row">
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod("card")}
                                    className={`flex items-center justify-center py-2 px-4 w-full rounded-[5px] ${paymentMethod === "card" ? "bg-brand text-white" : "bg-light-400"
                                        }`}
                                >
                                    Pay with Card
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod("mobilemoney")}
                                    className={`flex items-center justify-center py-2 px-4 w-full rounded-[5px] ${paymentMethod === "mobilemoney" ? "bg-brand text-white" : "bg-light-400"
                                        }`}
                                >
                                    Pay with Bank Transfer
                                </button>
                            </div>
                            {paymentMethod === "card" && (
                                <>
                                    <div className="flex items-center justify-center gap-4 text-light-200 w-full">
                                        <div className="h-[1px] w-full bg-light-200"></div>
                                        <p className="whitespace-nowrap">or pay with credit card</p>
                                        <div className="h-[1px] w-full bg-light-200"></div>
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="cardName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex flex-col gap-4'>
                                                    <FormLabel className='input-label'>Name on Card</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your Card Name"
                                                            className='input-element'
                                                            {...field} />
                                                    </FormControl>
                                                </div>
                                                <FormMessage className='shad-form-message ' />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="cardNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className='flex flex-col gap-4 relative'>
                                                    <FormLabel className='input-label'>Card Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter the Card Number"
                                                            className='input-element'
                                                            {...field} />
                                                    </FormControl>
                                                    <div className="flex gap-1 items-center justify-center absolute top-10 right-1">
                                                        <Image
                                                            src="/assets/images/creditCard1.svg"
                                                            alt="visa"
                                                            width={37}
                                                            height={37} />
                                                        <Image
                                                            src="/assets/images/creditCard2.svg"
                                                            alt="mastercard"
                                                            width={37}
                                                            height={37} />
                                                        <Image
                                                            src="/assets/images/creditCard3.svg"
                                                            alt="amex"
                                                            width={37}
                                                            height={37} />
                                                        <Image
                                                            src="/assets/images/creditCard4.svg"
                                                            alt="amex"
                                                            width={37}
                                                            height={37} />
                                                    </div>
                                                </div>
                                                <FormMessage className='shad-form-message ' />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex flex-wrap align-center justify-between w-full gap-4 mb-8">
                                        <FormField
                                            control={form.control}
                                            name="expirationDate"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='flex flex-col gap-4'>
                                                        <FormLabel className='input-label'>Expiration</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="MM/YY"
                                                                className='input-element'
                                                                {...field} />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage className='shad-form-message ' />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="securityCode"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='flex flex-col gap-4 relative'>
                                                        <FormLabel className='input-label'>Security Code</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="CVC"
                                                                className='input-element'
                                                                {...field} />
                                                        </FormControl>
                                                        <div className="flex absolute top-10 right-1">
                                                            <Image
                                                                src="/assets/images/creditCard5.svg"
                                                                alt="amex"
                                                                width={40}
                                                                height={40} />                                                </div>
                                                    </div>
                                                    <FormMessage className='shad-form-message ' />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="postalCode"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='flex flex-col gap-4'>
                                                        <FormLabel className='input-label'>Billing Zip/Postal Code
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Zip/Postal Code"
                                                                className='input-element'
                                                                {...field} />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage className='shad-form-message ' />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button
                                        overrideStyle="w-full py-4 px-8  "
                                        variant="outlined"
                                    >
                                        {isLoading ?
                                            <div className="flex gap-2 items-center justify-center" >
                                                <span className="animate-spin">
                                                    <Image
                                                        src="/assets/icons/loader.svg"
                                                        alt="loader"
                                                        width={24}
                                                        height={24} />
                                                </span>
                                                <span>Processing...</span>
                                            </div> : "Complete Checkout"}
                                    </Button>
                                </>
                            )}
                            {paymentMethod === "mobilemoney" && (
                                <Button
                                    overrideStyle="w-full py-4 px-8"
                                    variant="outlined"
                                >
                                    <FlutterWaveButton {...flutterwaveButtonProps}>
                                        Pay with Bank Transfer
                                    </FlutterWaveButton>
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
            <div
                className="  border border-light-300 p-6 shadow-xl flex flex-col gap-6"
            >
                <h1 className="text-2xl">Order Summary</h1>
                <div className="h-[1px] w-full bg-light-200"></div>
                <div className="flex item-center justify-between text-light-100 w-full">
                    <p>{subscriptionType} Subscription</p>
                    <p><strong>${amount}</strong> / {subscriptionType}</p>
                </div>
                <div className="h-[1px] w-full bg-light-200"></div>
                <div className="flex flex-col gap-4 text-light-100 w-full">
                    <h3>auto renewal</h3>
                    <p>We will bill you {subscriptionType} until you cancel.</p>
                </div>
                <div className="h-[1px] w-full bg-light-200"></div>
                <div className="flex item-center justify-between text-light-100 w-full">
                    <p>Subtotal</p>
                    <p><strong>${amount}</strong></p>
                </div>
                <div className="flex item-center justify-between text-light-100 w-full">
                    <p>Tax</p>
                    <p><strong></strong></p>
                </div>
                <div className="flex item-center justify-between text-light-100 w-full">
                    <p>Amount Due Today</p>
                    <p><strong>${amount}</strong></p>
                </div>
                <div className="h-[1px] w-full bg-light-200"></div>
            </div>
        </div>
    )
}

export default page
