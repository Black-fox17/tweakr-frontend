"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SelectItem } from "@/components/ui/select"
import FileUploader from "./FileUploader"
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
import Button from "./Button"


type FormType = "draft"

const authFormSchema = () => {
    return z.object({
        title: z.string(),
        author: z.string().min(2).max(50),
        year: z.string(),
        files: z.array(z.instanceof(File)),
    })
}

const DraftForm = () => {
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

    return (
        <div className="space-y-6 my-12">
            <div className="mb-9 space-y-1">
                <h3 className='text-lg sm:text-xl md:text-2xl font-normal mb-8'>
                    Upload, Edit, and Download Documents Effortlessly
                </h3>
            </div>
            <Form {...form}
            >
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
                    name="files"
                    render={({ field }) => (
                        <FormItem>
                            <div className='flex flex-col gap-4'>
                                <FormLabel className='input-label'>Upload Draft</FormLabel>
                                <FormControl>
                                    <FileUploader files={field.value} onChange={field.onChange} />
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
                            <div className='flex flex-col gap-4 mb-8'>
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
                <div className="inline w-fit">
                    <Button
                        overrideStyle="w-full py-2 px-8  "
                        variant="outlined"
                    >
                        Upload File
                    </Button>
                </div>

            </Form>
        </div>
    )
}

export default DraftForm
