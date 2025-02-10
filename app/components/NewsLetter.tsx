"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import Button from "./Button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form";

const authFormSchema = () => {
    return z.object({
        newsletter: z.string().min(1, "Title is required"),
    });
};

const NewsLetter = () => {
    const formSchema = authFormSchema();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newsletter: "",
        },
    });

    return (
        <motion.section
            className="py-16 bg-[#E8F4FA] flex flex-col items-center justify-center w-full px-4 sm:px-8 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.h1
                className="text-center font-semibold text-[20px] sm:text-[24px] leading-[30px] sm:leading-[10px]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Stay Updated with the Latest Insights!
            </motion.h1>

            <motion.p
                className="pb-4 text-center"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                Subscribe to our newsletter and never miss important updates, expert tips, and exclusive content.
            </motion.p>

            <Form {...form}>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <FormField
                        control={form.control}
                        name="newsletter"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your Email"
                                        className="input-element w-full sm:w-[450px] p-3 text-sm sm:text-base"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button variant="outlined" overrideStyle="py-3 px-5 text-sm sm:text-base">
                        SUBSCRIBE
                    </Button>
                </motion.div>
            </Form>
        </motion.section>
    );
};

export default NewsLetter;
