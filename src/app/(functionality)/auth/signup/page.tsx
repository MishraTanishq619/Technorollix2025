"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
// import { sendWelcomeEmail } from "@/actions/mailer";
import useFetch from "@/hooks/use-fetch";
import { userSignup } from "@/actions/user-actions";

// Define the initial form schema (without password)
const initialFormSchema = z.object({
	fullName: z
		.string()
		.min(2, { message: "Full name must be at least 2 characters." }),
	course: z.string().min(1, { message: "Please select a course." }),
	branch: z.string().min(1, { message: "Please enter your branch." }),
	enrollmentNumber: z
		.string()
		.min(1, { message: "Please enter your enrollment number." }),
	mobileNumber: z.string().regex(/^\d{10}$/, {
		message: "Please enter a valid 10-digit mobile number.",
	}),
	email: z.string().email({ message: "Please enter a valid email address." }),
});

// Define the complete form schema (including password)
const completeFormSchema = initialFormSchema.extend({
	password: z
		.string()
		.regex(/^\d+$/, { message: "Password must contain only numbers." })
		.min(6, { message: "Password must be at least 6 digits." }),
});

export default function SignupForm() {
	const [sentPassword, setSentPassword] = useState<string | null>(null);
	const [isPasswordSent, setIsPasswordSent] = useState(false);

	const router = useRouter();

	const form = useForm<z.infer<typeof completeFormSchema>>({
		resolver: zodResolver(
			isPasswordSent ? completeFormSchema : initialFormSchema
		),
		defaultValues: {
			fullName: "",
			course: "",
			branch: "",
			enrollmentNumber: "",
			mobileNumber: "",
			email: "",
			password: "",
		},
	});

	const {
		data: userSignupData,
		// loading: userSignupLoading,
		error: userSignupError,
		fn: userSignupFn,
	} = useFetch(userSignup);

	const sendPasswordToEmail = async () => {
		// Validate all fields except password
		const result = await form.trigger([
			"fullName",
			"course",
			"branch",
			"enrollmentNumber",
			"mobileNumber",
			"email",
		]);

		if (!result) {
			toast({
				title: "Error",
				description: "Please fill in all required fields correctly.",
				variant: "destructive",
			});
			return;
		}

		const email = form.getValues("email");

		// This is a placeholder. In a real application, you would call an API to send the email.
		const generatedPassword = Math.random().toString().slice(2, 8);
		setSentPassword(generatedPassword);
		setIsPasswordSent(true);

		console.log("generatedPassword: ", generatedPassword);
		// await sendWelcomeEmail(email, generatedPassword);

		toast({
			title: "Password Sent",
			description: `A password has been sent to ${email}. Please check your inbox.`,
		});
	};

	const onSubmit = async (values: z.infer<typeof completeFormSchema>) => {
		if (values.password !== sentPassword) {
			toast({
				title: "Error",
				description:
					"The entered password does not match the one sent to your email.",
				variant: "destructive",
			});
			return;
		}

		console.log(values);
		// Here you would typically send the form data to your backend
		await userSignupFn(values);
		if (userSignupError) {
			toast({
				title: "Error",
				description: userSignupError.message,
				variant: "destructive",
			});
			return;
		}
		console.log("userSignupData : ", userSignupData);
		toast({
			title: "Success",
			description: "Your account has been created successfully!",
		});
		router.push("/auth/login");
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<FormField
						control={form.control}
						name="fullName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<Input placeholder="John Doe" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="course"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Course</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a course" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="cs">
											Computer Science
										</SelectItem>
										<SelectItem value="ee">
											Electrical Engineering
										</SelectItem>
										<SelectItem value="me">
											Mechanical Engineering
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="branch"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Branch</FormLabel>
								<FormControl>
									<Input
										placeholder="e.g. Software Engineering"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="enrollmentNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Enrollment Number</FormLabel>
								<FormControl>
									<Input
										placeholder="e.g. EN12345"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="mobileNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Mobile Number</FormLabel>
								<FormControl>
									<Input
										placeholder="1234567890"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="john@example.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="button"
						onClick={sendPasswordToEmail}
						className="w-full"
					>
						Send Password to Email
					</Button>
					{isPasswordSent && (
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Enter the password sent to your email"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Enter the numeric password sent to your
										email.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}
					<Button
						type="submit"
						className="w-full"
						disabled={!isPasswordSent}
					>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
