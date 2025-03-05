"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const otpSchema = z.object({
    otp: z.string().min(6, { message: "OTP must be 6 digits." }),
});

export default function VerifyOtp({ onNext }: { onNext: () => void }) {
    const form = useForm<z.infer<typeof otpSchema>>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof otpSchema>) => {
        const storedOtp = sessionStorage.getItem("signupOtp");
        if (values.otp !== storedOtp) {
            toast({
                title: "Error",
                description: "The entered OTP is incorrect.",
                variant: "destructive",
            });
            return;
        }

        onNext();
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Verify OTP</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormItem>
                        <FormLabel>OTP</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Enter OTP" {...form.register("otp")} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    <Button type="submit" className="w-full">Verify OTP</Button>
                </form>
            </Form>
        </div>
    );
}