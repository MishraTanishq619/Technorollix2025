"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import useFetch from "@/hooks/use-fetch";
import { Badge } from "@/components/ui/badge";
import {
	getAllEventsAction,
	getPendingInvitesAction,
	getRegisteredEventsAction,
	submitEventsAction,
} from "@/actions/event-actions";
import { IEvent } from "@/models/event.model";
import { useRouter } from "next/navigation";
import { getUser } from "@/actions/user-actions";
// import Image from "next/image";

export default function EventsSelection() {
	const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
	const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
	const [pendingInvites, setPendingInvites] = useState<string[]>([]);
	const [allEvents, setAllEvents] = useState<IEvent[]>([]);
	const [isOutsider, setIsOutsider] = useState<boolean>(true); // Default to true for outsiders

	const router = useRouter();

	// Fetch all events
	const {
		data: allEventsData,
		// loading: allEventsLoading,
		// error: allEventsError,
		fn: fetchAllEventsFn,
	} = useFetch(getAllEventsAction);

	// Fetch registered events
	const {
		data: registeredData,
		loading: registeredLoading,
		// error: registeredError,
		fn: fetchRegisteredEventsFn,
	} = useFetch(getRegisteredEventsAction);

	// Fetch pending invites
	const {
		data: invitesData,
		loading: invitesLoading,
		// error: invitesError,
		fn: fetchPendingInvitesFn,
	} = useFetch(getPendingInvitesAction);

	// Submit selected events
	const {
		data: submitData,
		loading: submitLoading,
		error: submitError,
		fn: submitEventsFn,
	} = useFetch(submitEventsAction);

	useEffect(() => {
		// Fetch registered events and pending invites on component mount
		fetchAllEventsFn();
		fetchRegisteredEventsFn();
		fetchPendingInvitesFn();
		fetchUserStatus();
	}, []);

	// Fetch user status (Insider/Outsider)
	const fetchUserStatus = async () => {
		try {
			const user = await getUser();
			setIsOutsider(user?.isOutsider ?? true); // Default to true if not available
		} catch (error) {
			console.error("Failed to fetch user status", error);
		}
	};

	useEffect(() => {
		if (allEventsData) {
			setAllEvents(allEventsData.events);
		}
		if (registeredData) {
			setRegisteredEvents(registeredData.events);
		}
		if (invitesData) {
			setPendingInvites(invitesData.invites);
		}
	}, [allEventsData, registeredData, invitesData]);

	useEffect(() => {
		if (submitData) {
		  toast({
			title: "Success",
			description: "Successfully registered for events",
			variant: "default",
		  });
		  router.push("/dashboard");
		}
		if (submitError) {
		  // Extract a descriptive error message if available
		  const errorMessage =
			(submitError as { message?: string }).message ||
			"An unexpected error occurred. Please try again.";
		  toast({
			title: "Error",
			description: errorMessage,
			variant: "destructive",
		  });
		}
	  }, [submitData, submitError]);
	  

	const toggleEventSelection = (eventId: string) => {
		if (registeredEvents.includes(eventId)) return; // Prevent toggling registered events

		setSelectedEvents((prev) =>
			prev.includes(eventId)
				? prev.filter((id) => id !== eventId)
				: [...prev, eventId]
		);
	};

	const handleSubmit = async () => {
		if (selectedEvents.length === 0) {
			toast({
				title: "Error",
				description: "Please select at least one event",
				variant: "destructive",
			});
			return;
		}

		await submitEventsFn({ eventIds: selectedEvents });
	};

	const getEventStatus = (eventId: string) => {
		if (registeredEvents.includes(eventId)) {
			return "registered";
		}
		if (selectedEvents.includes(eventId)) {
			return "selected";
		}
		if (pendingInvites.includes(eventId)) {
			return "invited";
		}
		return "available";
	};

	const getCardClassName = (status: string) => {
		const baseClass = "cursor-pointer transition-all";
		switch (status) {
			case "registered":
				return `${baseClass} opacity-75 cursor-not-allowed bg-gray-50`;
			case "invited":
				return `${baseClass} ring-2 ring-yellow-400 ${
					selectedEvents.includes(status)
						? "bg-primary/5"
						: "bg-yellow-50"
				}`;
			case "selected":
				return `${baseClass} ring-2 ring-primary bg-primary/5`;
			default:
				return `${baseClass} hover:bg-gray-50`;
		}
	};

	return (
		<div className="max-w-6xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-6 text-center">
				Select Events
			</h1>

			{registeredLoading || invitesLoading ? (
				<div className="text-center">Loading events...</div>
			) : (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
						{allEvents?.map((event) => {
							const status = getEventStatus(event._id as string);

							return (
								<Card
									key={event._id as string}
									className={getCardClassName(status)}
									onClick={() =>
										toggleEventSelection(
											event._id as string
										)
									}
								>
									<CardHeader>
										
										<CardTitle className="text-lg flex justify-between items-center">
											{event.name}
											{status === "registered" && (
												<Badge className="bg-green-500">
													Registered
												</Badge>
											)}
											{status === "invited" && (
												<Badge className="bg-yellow-500">
													Team Invite
												</Badge>
											)}
											{status === "selected" && (
												<Badge className="bg-red-300">
													Selected
												</Badge>
											)}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-sm space-y-2">
											<p>
												<strong>Team Size:</strong>{" "}
												{event.teamSize} members
											</p>
											<p>
												<strong>Prize Pool:</strong> ₹
												{event.prizeMoney.toLocaleString()}
											</p>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>

					{isOutsider && <p className="my-2 text-gray-300 text-center">Note: One participant can participate in atmost 7 Events.</p>}

					<div className="flex justify-center">
						<Button
							onClick={handleSubmit}
							disabled={
								// submitLoading || selectedEvents.length === 0 || (isOutsider && selectedEvents?.length + registeredEvents?.length > 7)
								submitLoading || selectedEvents.length === 0
							}
							className="w-full max-w-md"
						>
							{submitLoading
								? "Submitting..."
								: "Register for Selected Events"}
						</Button>
					</div>
				</>
			)}
		</div>
	);
}
