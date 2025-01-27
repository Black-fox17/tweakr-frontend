"use client"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SelectItem } from "@/components/ui/select"
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

    const [isLoading, setIsLoading] = useState(false);



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
    })

    const onSubmit = async (data: z.infer<typeof authFormSchema>) => {
        setIsLoading(true);
        // Simulate form submission or API call
        console.log("Form submitted: ", data);
        setTimeout(() => {
            setIsLoading(false);
            // onSuccess(); // Trigger the PaymentModal on successful submission
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
                            <div className="flex gap-4 w-full">
                                <button>
                                    paypal
                                </button>
                                <button>
                                    google pay
                                </button>
                            </div>
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
                                        <div className='flex flex-col gap-4'>
                                            <FormLabel className='input-label'>Card Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter the Card Number"
                                                    className='input-element'
                                                    {...field} />
                                            </FormControl>
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
                                                    <Input placeholder="Enter card Expiration Date"
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
                                            <div className='flex flex-col gap-4'>
                                                <FormLabel className='input-label'>Security Code</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter card Security Code"
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
                                    name="postalCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className='flex flex-col gap-4'>
                                                <FormLabel className='input-label'>Billing Zip/Postal Code
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter the Billing Zip"
                                                        className='input-element'
                                                        {...field} />
                                                </FormControl>
                                            </div>
                                            <FormMessage className='shad-form-message ' />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Button
                            overrideStyle="w-full py-4 px-8  "
                            variant="outlined"
                        >
                            {isLoading ?
                                <div>
                                    <span className="animate-spin">
                                        <Image
                                            src="/assets/icons/loader.svg"
                                            alt="loader"
                                            width={24}
                                            height={24} />
                                    </span>
                                    <span>Uploading...</span>
                                </div>
                                : "Complete Checkout"}
                        </Button>
                    </form>
                </Form>
            </div>
            <div
                className="  border border-light-300 p-6 shadow-xl flex flex-col gap-6"
            >
                <h1 className="text-2xl">Order Summary</h1>
                <div className="h-[1px] w-full bg-light-200"></div>
                <div className="flex item-center justify-between text-light-100 w-full">
                    <p>Yearly Subscription</p>
                    <p><strong>$54.00</strong> / year</p>
                </div>
                <div className="h-[1px] w-full bg-light-200"></div>
                <div className="flex flex-col gap-4 text-light-100 w-full">
                    <h3>auto renewal</h3>
                    <p>We will bill you yearly until you cancel.</p>
                </div>
                <div className="h-[1px] w-full bg-light-200"></div>
                <div className="flex item-center justify-between text-light-100 w-full">
                    <p>Subtotal</p>
                    <p><strong>$54.00</strong></p>
                </div>
                <div className="flex item-center justify-between text-light-100 w-full">
                    <p>Tax</p>
                    <p><strong></strong></p>
                </div>
                <div className="flex item-center justify-between text-light-100 w-full">
                    <p>Amount Due Today</p>
                    <p><strong>$54.00</strong></p>
                </div>
                <div className="h-[1px] w-full bg-light-200"></div>

            </div>
        </div>
    )
}

export default page
