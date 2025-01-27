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

const authFormSchema = () => {
    return z.object({
        title: z.string().min(1, "Title is required"),
        author: z.string().min(2, "Author name must be at least 2 characters").max(50),
        year: z.string().min(4, "Year must be 4 digits").max(4, "Year must be 4 digits"),
        files: z
            .array(z.instanceof(File))
            .nonempty("You must upload at least one file"),
    });
};

const page = () => {

    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema()


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            files: [] as File[],
            title: "",
            author: "",
            year: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        // Simulate form submission or API call
        setTimeout(() => {
            setIsLoading(false);
            // onSuccess(); // Trigger the PaymentModal on successful submission
        }, 1000);
    };

    return (
        <div className='mt-12 mt-6 flex flex-col sm:flex-row gap-4 section-padding'>
            <div className="flex-1 border border-light-300 p-4 shadow-xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='flex flex-col gap-4'>
                                        <FormLabel className='input-label'>Title</FormLabel>
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
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='flex flex-col gap-4'>
                                        <FormLabel className='input-label'>Author Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter the Author Name"
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
                            name="year"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='flex flex-col gap-4'>
                                        <FormLabel className='input-label'>Paper Year</FormLabel>
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
                        <Button
                            overrideStyle="w-full py-2 px-8  "
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
                                : "Upload File Info"}
                        </Button>
                    </form>
                </Form>
            </div>
            <div
                className="flex-1">
                hhhhhh
            </div>
        </div>
    )
}

export default page
