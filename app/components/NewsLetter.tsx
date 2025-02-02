"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Button from './Button'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const authFormSchema = () => {
    return z.object({
        newsletter: z.string().min(1, "Title is required"),
    });
};

const NewsLetter = () => {
    const formSchema = authFormSchema()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newsletter: "",
        },
    })
    return (
        <section className="py-16 bg-[#E8F4FA] flex flex-col items-center justify-center w-full px-4 sm:px-8 gap-8">
            <h1 className="text-center font-semibold text-[20px] sm:text-[24px] leading-[30px] sm:leading-[35px]">
                Lorem Ipsum is simply dummy <br className="hidden sm:block" />
                text of the printing.
            </h1>
            <Form {...form}>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px]">
                    <FormField
                        control={form.control}
                        name="newsletter"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Enter your Email"
                                        className="input-element w-full sm:w-[450px] p-3 text-sm sm:text-base"
                                        {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button
                        variant='outlined'
                        overrideStyle="py-3 px-5 text-sm sm:text-base"
                    >
                        SUBSCRIBE
                    </Button>
                </div>
            </Form>
        </section>
    )
}

export default NewsLetter
