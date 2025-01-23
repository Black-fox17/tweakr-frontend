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


type FormType = "sign-in" | "sign-up"

const authFormSchema = (formType: FormType) => {
    return z.object({
        email: z.string().email(),
        fullName: formType === "sign-up"
            ? z.string().min(2).max(50)
            : z.string().optional()
    })
}

const DraftForm = ({ type }: { type: FormType }) => {
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "", email: ""
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <div className='flex flex-col gap-4'>
                                <FormLabel className='input-label'>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder=""
                                        className='input-element'
                                        {...field} />
                                </FormControl>
                            </div>
                            <FormMessage className='' />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <div className='flex flex-col gap-4'>
                                <FormLabel className='input-label'>Upload Draft</FormLabel>
                                <FormControl>
                                    <FileUploader files={field.value} onChange={field.onChange} />
                                </FormControl>
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <div className='flex flex-col gap-4'>
                                <FormLabel className='input-label'>Upload Draft</FormLabel>
                                <FormControl>
                                </FormControl>
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <div className='flex flex-col gap-4'>
                                <FormLabel className='input-label'>Upload Draft</FormLabel>
                                <FormControl>
                                </FormControl>
                            </div>
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
