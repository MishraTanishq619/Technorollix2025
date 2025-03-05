"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
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
import { userLogin } from "@/actions/user-actions";
import { useEffect } from "react";
import Cookies from "js-cookie";

// Define the form schema
const loginFormSchema = z.object({
	email: z.string().email({ message: "Please enter a valid email address." }),
	password: z.string()
});

export default function LoginForm() {
    const router = useRouter();

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const {
        data: userLoginData,
        loading: userLoginLoading,
        error: userLoginError,
        fn: userLoginFn,
    } = useFetch(userLogin);

    const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
        // Here you would typically send the form data to your backend
        await userLoginFn(values);
    };

    useEffect(() => {
        console.log("error login : ", userLoginError);
        if (userLoginError) {
            toast({
                title: "Error",
                description: userLoginError.message,
                variant: "destructive",
            });
            return;
        }
        console.log("login func : ", userLoginData, userLoginData?.token);
        if (userLoginData && userLoginData.token) {
            Cookies.set("auth-token", userLoginData.token, {
                expires: 1,
                // secure: true,
                // sameSite: "Strict",
            });
            toast({
                title: "Success",
                description: "You have logged in successfully!",
            });
            if (userLoginData.user.isAdmin) {
                router.push("/admin/dashboard"); // Redirect to the admin dashboard
            } else {
                router.push("/dashboard"); // Redirect to the user dashboard
            }
        }
    }, [userLoginData, userLoginError, userLoginLoading, router]);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </Form>
            <div className="mt-4 text-center">
                <p className="text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/signup">
					<span className="text-blue-500 hover:underline">Sign up</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}
