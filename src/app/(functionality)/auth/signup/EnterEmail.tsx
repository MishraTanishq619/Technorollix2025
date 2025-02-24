"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const emailSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function EnterEmail({ onNext }: { onNext: () => void }) {
    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof emailSchema>) => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(`OTP sent to ${values.email}: ${otp}`);

        sessionStorage.setItem("signupEmail", values.email);
        sessionStorage.setItem("signupOtp", otp);

        toast({
            title: "OTP Sent",
            description: `An OTP has been sent to ${values.email}. Please check your inbox.`,
        });

        onNext();
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Enter Email</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="john@example.com" {...form.register("email")} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    <Button type="submit" className="w-full">Send OTP</Button>
                </form>
            </Form>
        </div>
    );
}