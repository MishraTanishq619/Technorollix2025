"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import useFetch from "@/hooks/use-fetch";
import { userSignup } from "@/actions/user-actions";

const formSchema = z.object({
    fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    mobileNumber: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit mobile number." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters." }),
    branch: z.string().optional(),
    enrollmentNumber: z.string().optional(),
    address: z.string().optional(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export default function SignupForm() {
    const router = useRouter();
    const isOutsider = JSON.parse(sessionStorage.getItem("isOutsider") || "true");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            mobileNumber: "",
            password: "",
            confirmPassword: "",
            branch: "NA",
            enrollmentNumber: "NA",
            address: "",
        },
    });

    useEffect(() => {
        const email = sessionStorage.getItem("signupEmail") || "";
        form.setValue("email", email);
    }, [form]);

    const { data: userSignupData, loading: userSignupLoading, error: userSignupError, fn: userSignupFn } = useFetch(userSignup);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const userData = {
            ...values,
            isOutsider,
            branch: isOutsider ? "NA" : values.branch,
            enrollmentNumber: isOutsider ? "NA" : values.enrollmentNumber,
            address: isOutsider ? values.address : "OPJU",
        };
        await userSignupFn(userData);
    };

    useEffect(() => {
        if (userSignupError) {
            console.log(userSignupError);
            toast({
                title: "Error",
                description: userSignupError.message,
                variant: "destructive",
            });
        }
        if (userSignupData) {
            console.log(userSignupData);
            toast({
                title: "Success",
                description: "Your account has been created successfully!",
            });
            router.push("/auth/login");
        }
    }, [userSignupError, userSignupData, userSignupLoading, router]);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} disabled />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="mobileNumber" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                                <Input placeholder="1234567890" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    {isOutsider ? (
                        <FormField control={form.control} name="address" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    ) : (
                        <>
                            <FormField control={form.control} name="branch" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Branch</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Software Engineering" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="enrollmentNumber" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enrollment Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. EN12345" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </>
                    )}
                    <FormField control={form.control} name="password" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Enter your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Confirm your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
        </div>
    );
}