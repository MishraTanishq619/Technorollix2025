"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { setAccommodationDetailsAction } from "@/actions/accomodation-actions";
import { Textarea } from "./ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import {
	Form,
	FormControl,
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

const accommodationFormSchema = z.object({
	arrivalDate: z.date({
		required_error: "Arrival date is required",
	}),
	arrivalTime: z.string({
		required_error: "Arrival time is required",
	}),
	departureDate: z.date({
		required_error: "Departure date is required",
	}),
	departureTime: z.string({
		required_error: "Departure time is required",
	}),
	additionalDetails: z.string().optional(),
});

// Generate time options in 30-minute intervals with AM/PM format
const generateTimeOptions = () => {
	const options = [];
	for (let hour = 0; hour < 24; hour++) {
		for (const minute of [0, 30]) {
			// Store 24-hour format as value for processing
			const militaryTime = `${hour.toString().padStart(2, "0")}:${minute
				.toString()
				.padStart(2, "0")}`;

			// Create display value in 12-hour format with AM/PM
			const isPM = hour >= 12;
			const displayHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
			const displayMinute = minute.toString().padStart(2, "0");
			const displayTime = `${displayHour}:${displayMinute} ${
				isPM ? "PM" : "AM"
			}`;

			options.push({
				value: militaryTime,
				display: displayTime,
			});
		}
	}
	return options;
};

const timeOptions = generateTimeOptions();

// Format date function to replace date-fns format
const formatDate = (date: Date | undefined) => {
	if (!date) return "";

	const options: Intl.DateTimeFormatOptions = {
		weekday: "short",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return date.toLocaleDateString("en-US", options);
};

// Extract time from date object and convert to AM/PM format
const extractTime = (date: Date | undefined) => {
	if (!date) return "";

	// Get hours and minutes in 24-hour format
	const hours = date.getHours();
	const minutes = date.getMinutes().toString().padStart(2, "0");

	// Convert to 24-hour format string (for form value)
	return `${hours.toString().padStart(2, "0")}:${minutes}`;
};

// Convert 24-hour time to 12-hour format with AM/PM
// @typescript-eslint/no-unused-vars
const formatTimeForDisplay = (time: string) => {
	if (!time) return "";

	const [hourStr, minuteStr] = time.split(":");
	const hour = parseInt(hourStr, 10);
	const isPM = hour >= 12;
	const displayHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM

	return `${displayHour}:${minuteStr} ${isPM ? "PM" : "AM"}`;
};

interface AccommodationModalProps {
	isOpen: boolean;
	onClose: () => void;
	initialData: {
		arrivalTime?: string;
		departureTime?: string;
		additionalDetails?: string;
		userId?: string;
	} | null;
}

export default function AccommodationModal({
	isOpen,
	onClose,
	initialData,
}: AccommodationModalProps) {
	const form = useForm({
		resolver: zodResolver(accommodationFormSchema),
		defaultValues: {
			arrivalDate: undefined,
			arrivalTime: "",
			departureDate: undefined,
			departureTime: "",
			additionalDetails: "",
		},
	});

	useEffect(() => {
		if (initialData) {
			const arrivalDateTime = initialData.arrivalTime
				? new Date(initialData.arrivalTime)
				: undefined;
			const departureDateTime = initialData.departureTime
				? new Date(initialData.departureTime)
				: undefined;

			form.reset({
				arrivalDate: arrivalDateTime,
				arrivalTime: arrivalDateTime
					? extractTime(arrivalDateTime)
					: "",
				departureDate: departureDateTime,
				departureTime: departureDateTime
					? extractTime(departureDateTime)
					: "",
				additionalDetails: initialData.additionalDetails || "",
			});
		}
	}, [initialData, form]);

	const onSubmit = async (values: {
		arrivalDate: Date;
		arrivalTime: string;
		departureDate: Date;
		departureTime: string;
		additionalDetails?: string;
	}) => {
		try {
			// Combine date and time values
			const arrivalDateTime = new Date(values.arrivalDate);
			const [arrivalHours, arrivalMinutes] = values.arrivalTime
				.split(":")
				.map(Number);
			arrivalDateTime.setHours(arrivalHours, arrivalMinutes);

			const departureDateTime = new Date(values.departureDate);
			const [departureHours, departureMinutes] = values.departureTime
				.split(":")
				.map(Number);
			departureDateTime.setHours(departureHours, departureMinutes);

			await setAccommodationDetailsAction({
				userId: initialData?.userId || "undefined",
				arrivalTime: arrivalDateTime,
				departureTime: departureDateTime,
				additionalDetails: values.additionalDetails,
			});

			toast({
				title: "Success",
				description: "Accommodation details saved successfully!",
			});
			onClose();
		} catch (error) {
			toast({
				title: "Error",
				description:
					error instanceof Error
						? error.message
						: "An unknown error occurred",
				variant: "destructive",
			});
		}
	};

	// Find display time from stored 24-hour time value
	const getDisplayTime = (timeValue: string) => {
		const option = timeOptions.find((option) => option.value === timeValue);
		return option ? option.display : "Select time";
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle className="text-xl font-bold">
						Accommodation Details
					</DialogTitle>
					<DialogDescription>
						Please enter your arrival and departure information
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<div className="space-y-4">
							{/* Arrival Date and Time */}
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<FormField
									control={form.control}
									name="arrivalDate"
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FormLabel className="font-medium">
												Arrival Date
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant="outline"
															className={cn(
																"pl-3 text-left font-normal",
																!field.value &&
																	"text-gray-400"
															)}
														>
															{field.value
																? formatDate(
																		field.value
																  )
																: "Select date"}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent
													className="w-auto p-0"
													align="start"
												>
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={
															field.onChange
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="arrivalTime"
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FormLabel className="font-medium">
												Arrival Time
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												value={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select time">
															{field.value
																? getDisplayTime(
																		field.value
																  )
																: "Select time"}
														</SelectValue>
														<Clock className="ml-auto h-4 w-4 opacity-50" />
													</SelectTrigger>
												</FormControl>
												<SelectContent className="max-h-56 overflow-y-auto">
													{timeOptions.map(
														(option) => (
															<SelectItem
																key={`arrival-${option.value}`}
																value={
																	option.value
																}
															>
																{option.display}
															</SelectItem>
														)
													)}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{/* Departure Date and Time */}
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<FormField
									control={form.control}
									name="departureDate"
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FormLabel className="font-medium">
												Departure Date
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant="outline"
															className={cn(
																"pl-3 text-left font-normal",
																!field.value &&
																	"text-gray-400"
															)}
														>
															{field.value
																? formatDate(
																		field.value
																  )
																: "Select date"}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent
													className="w-auto p-0"
													align="start"
												>
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={
															field.onChange
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="departureTime"
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FormLabel className="font-medium">
												Departure Time
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												value={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select time">
															{field.value
																? getDisplayTime(
																		field.value
																  )
																: "Select time"}
														</SelectValue>
														<Clock className="ml-auto h-4 w-4 opacity-50" />
													</SelectTrigger>
												</FormControl>
												<SelectContent className="max-h-56 overflow-y-auto">
													{timeOptions.map(
														(option) => (
															<SelectItem
																key={`departure-${option.value}`}
																value={
																	option.value
																}
															>
																{option.display}
															</SelectItem>
														)
													)}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{/* Additional Details */}
							<FormField
								control={form.control}
								name="additionalDetails"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-medium">
											Additional Details
										</FormLabel>
										<FormControl>
											<Textarea
												{...field}
												placeholder="Any special requirements or notes"
												className="min-h-24 resize-none"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<DialogFooter className="gap-2 sm:gap-0">
							<Button
								type="button"
								variant="outline"
								onClick={onClose}
							>
								Cancel
							</Button>
							<Button type="submit">Save Details</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
