"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/context/GlobalContext'



type FormType = "sign-in" | "sign-up"

const authFormSchema = (formType: FormType) => {
    return z.object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters" }).max(20),
        confirmPassword: z.string().optional(),
    }).refine((data) => formType === "sign-in" || data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });
}

const AuthForm = ({ type }: { type: FormType }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const { setEmail, setPassword } = useGlobalContext()

    const router = useRouter()

    const formSchema = authFormSchema(type)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: type === "sign-up" ? "" : undefined,
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        setErrorMessage("")

        try {
            // const user =
            //     type === "sign-up"
            //         ? await createAccount({
            //             fullName: values.fullName || "",
            //             email: values.email
            //         })
            //         : await signInUser({ email: values.email })
            setEmail(values.email);
            setPassword(values.password);

            router.push("/dashboard");
        } catch (error) {
            setErrorMessage("Fail to create an account, Please try again")
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }

    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
                    <h1 className='form-title'>
                        {type === "sign-in" ? "Sign In" : "Sign Up"}
                    </h1>
                    <button className=' relative flex items-center justify-center gap-3 border border-light-300 px-4 py-2 rounded-[1rem] shadow-md hover:bg-gray-100 transition-all duration-200'>
                        <Image src="/assets/icons/google-icon.svg" alt="google" width={24} height={24} className="w-6 h-6 absolute left-4" />
                        <span className='text-gray-500 font-normal'>Continue with Google</span>
                    </button>
                    <div className="flex items-center gap-4 w-full">
                        <div className="flex-grow h-[1px] bg-gray-300"></div>
                        <span className="text-md text-brand font-bold">or</span>
                        <div className="flex-grow h-[1px] bg-gray-300"></div>
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className='shad-form-item'>
                                    <FormLabel className='shad-form-label'>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your Email "
                                            className='shad-input'
                                            {...field} />
                                    </FormControl>
                                </div>
                                <FormMessage className='shad-form-message' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <div className='shad-form-item'>
                                    <FormLabel className='shad-form-label'>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder=" Enter your Password"
                                            className='shad-input'
                                            {...field} />
                                    </FormControl>
                                </div>
                                <FormMessage className='shad-form-message' />
                            </FormItem>
                        )}
                    />
                    {type === "sign-up" && (
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='shad-form-item'>
                                        <FormLabel className='shad-form-label'>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder=" Enter your Password"
                                                className='shad-input'
                                                {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage className='shad-form-message' />
                                </FormItem>
                            )}
                        />
                    )}
                    <Button type="submit" className='form-submit-button' disabled={isLoading}>
                        {!isLoading && (type === "sign-in" ? "Sign In" : "Sign Up")}
                        {isLoading && (
                            <div className='flex gap-2 items-center justify-center'>
                                <Image src="/assets/icons/loader.svg" alt="loader" width={24} height={24} className='animate-spin ml-2' />
                                <p>Processing ...</p>
                            </div>
                        )}
                    </Button>

                    {errorMessage && (
                        <p className='error-message'>
                            *{errorMessage}
                        </p>
                    )}

                    <div className='body-2 flex justify-center'>
                        <p className='text-light-100'>{type === "sign-in" ? "Don't have an account?" : "Already have an account?"}</p>
                        <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                            className='ml-1 font-medium text-brand'>
                            {type === "sign-in" ? "Sign Up" : "Sign In"}
                        </Link>
                    </div>
                </form>
            </Form>
        </>
    )
}

export default AuthForm
