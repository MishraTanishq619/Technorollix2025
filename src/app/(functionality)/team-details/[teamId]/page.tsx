"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import useFetch from "@/hooks/use-fetch";
import {
	getTeamDetailsAction,
	sendTeamInviteAction,
} from "@/actions/team-actions";
import { useParams } from "next/navigation";
import { getUser } from "@/actions/user-actions";
import Image from "next/image";

export default function TeamDetails() {
	const params = useParams();
	const [isLeader, setIsLeader] = useState(false);
	const [inviteeEmail, setInviteeEmail] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Fetch team details
	const {
		data: teamData,
		loading: teamLoading,
		error: teamError,
		fn: fetchTeamDetailsFn,
	} = useFetch(getTeamDetailsAction);

	// Send invite
	const {
		data: inviteData,
		loading: inviteLoading,
		error: inviteError,
		fn: sendInviteFn,
	} = useFetch(sendTeamInviteAction);

	// user
	const {
		data: userData,
		// loading: userLoading,
		error: userError,
		fn: userFn,
	} = useFetch(getUser);
	useEffect(() => {
		userFn();
	}, []);

	useEffect(() => {
		fetchTeamDetailsFn(params.teamId);
	}, [params.teamId]);

	useEffect(() => {
		if (teamData && userData) {
			console.log("teamData, userData :", teamData, userData);
			// Check if current user is team leader
			if (userData?.email === teamData?.team?.leader) {
				setIsLeader(true);
			}
		}
	}, [userData, teamData]);

	const handleSendInvite = async () => {
		if (!inviteeEmail) {
			toast({
				title: "Error",
				description: "Please enter an email address",
				variant: "destructive",
			});
			return;
		}

		await sendInviteFn({
			teamId: params.teamId,
			email: inviteeEmail,
		});

		if (!inviteError) {
			setInviteeEmail("");
			setIsModalOpen(false);
			// Refresh team details to get updated invites list
			fetchTeamDetailsFn({ teamId: params.teamId });
		}
	};

	if (teamLoading) {
		return <div className="text-center p-6">Loading team details...</div>;
	}

	if (teamError) {
		return (
			<div className="text-center p-6 text-red-500">
				Error loading team details
			</div>
		);
	}

	if (!teamData) {
		return <div className="text-center p-6">Team not found</div>;
	}

	return (
		<div className="max-w-4xl mx-auto p-6">
			{/* Event Card */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Event Details</h2>
				<Card>
					<CardHeader>
						<Image
							src={teamData.event.image}
							alt={teamData.event.name}
							className="w-full h-48 object-cover rounded-t-lg mb-4"
							width={800}
							height={400}
						/>
						<CardTitle className="text-lg">
							{teamData.event.name}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-sm space-y-2">
							<p>
								<strong>Team Size:</strong>{" "}
								{teamData.event.teamsize} members
							</p>
							<p>
								<strong>Prize Pool:</strong> ₹
								{teamData.event.prizemoney.toLocaleString()}
							</p>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Team Details */}
			<div className="mb-8">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-semibold">Team Details</h2>
					{isLeader && (
						<Dialog
							open={isModalOpen}
							onOpenChange={setIsModalOpen}
						>
							<DialogTrigger asChild>
								<Button>Invite Member</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>
										Invite Team Member
									</DialogTitle>
								</DialogHeader>
								<div className="space-y-4 mt-4">
									<Input
										placeholder="Enter email address"
										type="email"
										value={inviteeEmail}
										onChange={(e) =>
											setInviteeEmail(e.target.value)
										}
									/>
									<Button
										onClick={handleSendInvite}
										disabled={inviteLoading}
										className="w-full"
									>
										{inviteLoading
											? "Sending..."
											: "Send Invite"}
									</Button>
								</div>
							</DialogContent>
						</Dialog>
					)}
				</div>

				{/* Leader Section */}
				<Card className="mb-4">
					<CardHeader>
						<CardTitle className="text-md">Team Leader</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							<p>
								<strong>Name:</strong>{" "}
								{
									teamData.members.find(
										(m) => m.email === teamData.team.leader
									)?.fullName
								}
							</p>
							<p>
								<strong>Email:</strong>{" "}
								{
									teamData.members.find(
										(m) => m.email === teamData.team.leader
									)?.email
								}
							</p>
							<p>
								<strong>Branch:</strong>{" "}
								{
									teamData.members.find(
										(m) => m.email === teamData.team.leader
									)?.branch
								}
							</p>
							<p>
								<strong>Enrollment:</strong>{" "}
								{
									teamData.members.find(
										(m) => m.email === teamData.team.leader
									)?.enrollmentNumber
								}
							</p>
						</div>
					</CardContent>
				</Card>

				{/* Members Section */}
				<Card className="mb-4">
					<CardHeader>
						<CardTitle className="text-md">
							Other Team Members
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{teamData.members.length === 1 ? (
								<p className="text-gray-500">
									No other members
								</p>
							) : (
								teamData.members
									.filter(
										(member) =>
											member.email !==
											teamData.team.leader
									)
									.map((member) => (
										<div
											key={member.email}
											className="p-4 bg-gray-50 rounded-lg"
										>
											<p>
												<strong>Name:</strong>{" "}
												{member.fullName}
											</p>
											<p>
												<strong>Email:</strong>{" "}
												{member.email}
											</p>
											<p>
												<strong>Branch:</strong>{" "}
												{member.branch}
											</p>
											<p>
												<strong>Enrollment:</strong>{" "}
												{member.enrollmentNumber}
											</p>
										</div>
									))
							)}
						</div>
					</CardContent>
				</Card>

				{/* Pending Invites Section */}
				<Card>
					<CardHeader>
						<CardTitle className="text-md">
							Pending Invites
						</CardTitle>
					</CardHeader>
					<CardContent>
						{teamData.invites.length > 0 ? (
							<div className="space-y-2">
								{teamData.invites.map((invite) => (
									<div
										key={invite}
										className="flex items-center justify-between p-2 bg-yellow-50 rounded"
									>
										<span>{invite}</span>
										<Badge variant="secondary">
											Pending
										</Badge>
									</div>
								))}
							</div>
						) : (
							<p className="text-gray-500">No pending invites</p>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
