"use client";
import { useState } from "react";
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
import { sendOtp, verifyOtp, resetPassword } from "@/actions/user-actions";

const emailFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

const otpFormSchema = z.object({
  email: z.string().email(),
  otp: z.string().min(6, { message: "OTP must be 6 characters long." }),
});

const passwordFormSchema = z.object({
  email: z.string().email(),
  otp: z.string().min(6),
  newPassword: z.string().min(6, { message: "Password must be at least 6 characters long." }),
});

export default function ResetPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: { email: "" },
  });

  const otpForm = useForm<z.infer<typeof otpFormSchema>>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: { email: "", otp: "" },
  });

  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: { email: "", otp: "", newPassword: "" },
  });

  const { fn: sendOtpFn } = useFetch(sendOtp);
  const { fn: verifyOtpFn } = useFetch(verifyOtp);
  const { fn: resetPasswordFn } = useFetch(resetPassword);

  const handleEmailSubmit = async (values: z.infer<typeof emailFormSchema>) => {
    setEmail(values.email);
    await sendOtpFn(values.email);
    setStep(2);
  };

  const handleOtpSubmit = async (values: z.infer<typeof otpFormSchema>) => {
    setOtp(values.otp);
    await verifyOtpFn(values);
    setStep(3);
  };

  const handlePasswordSubmit = async (values: z.infer<typeof passwordFormSchema>) => {
    await resetPasswordFn(values);
    toast({ title: "Success", description: "Password reset successfully!" });
    setStep(1);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {step === 1 && (
        <Form {...emailForm}>
          <form onSubmit={emailForm.handleSubmit(handleEmailSubmit)} className="space-y-4">
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Send OTP</Button>
          </form>
        </Form>
      )}

      {step === 2 && (
        <Form {...otpForm}>
          <form onSubmit={otpForm.handleSubmit(handleOtpSubmit)} className="space-y-4">
            <FormField
              control={otpForm.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter OTP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Verify OTP</Button>
          </form>
        </Form>
      )}

      {step === 3 && (
        <Form {...passwordForm}>
          <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-4">
            <FormField
              control={passwordForm.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter new password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Reset Password</Button>
          </form>
        </Form>
      )}
    </div>
  );
}