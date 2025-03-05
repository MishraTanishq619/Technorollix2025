"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import useFetch from "@/hooks/use-fetch";
import { getTeamDetailsAction } from "@/actions/team-actions";
import { useParams } from "next/navigation";
import { getUser } from "@/actions/user-actions";
import Image from "next/image";
import {
	cancelInviteAction,
	sendTeamInviteAction,
} from "@/actions/invite-actions";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function TeamDetails() {
	const params = useParams();
	const [isLeader, setIsLeader] = useState(false);
	const [inviteeEmail, setInviteeEmail] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [canSendMoreInvites, setCanSendMoreInvites] = useState(false);

	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);
	
	const [paymentDetails, setPaymentDetails] = useState({
		numberOfOutsiders: 0,
		amountToBePaid: 0,
		eligible: true,
		transactionId:""
	});

	// Fetch team details
	const {
		data: teamData,
		loading: teamLoading,
		error: teamError,
		fn: fetchTeamDetailsFn,
	} = useFetch(getTeamDetailsAction);

	// Send invite
	const {
		// data: inviteData,
		loading: inviteLoading = false,
		error: inviteError,
		fn: sendInviteFn,
	} = useFetch(sendTeamInviteAction);

	// Cancel invite
	const {
		// data: cancelInviteData,
		// loading: cancelInviteLoading,
		// error: cancelInviteError,
		fn: cancelInviteFn,
	} = useFetch(cancelInviteAction);

	// user
	const {
		data: userData,
		// loading: userLoading,
		// error: userError,
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
			const pendingInvites = teamData?.invites.filter(
				(invite: { status: string }) => invite.status === "PENDING"
			).length;

			if (
				teamData?.team?.members.length + pendingInvites <
				teamData?.event?.teamSize
			) {
				setCanSendMoreInvites(true);
			} else {
				setCanSendMoreInvites(false);
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
			inviteeEmail: inviteeEmail,
		});

		if (!inviteError) {
			setInviteeEmail("");
			setIsModalOpen(false);
			// Refresh team details to get updated invites list
			fetchTeamDetailsFn(params.teamId);
		}
	};

	const handleCancelInvite = async (inviteId: string) => {
		await cancelInviteFn(inviteId);
		toast({
			title: "Invite Canceled",
			description: `The invite has been canceled.`,
		});
		fetchTeamDetailsFn(params.teamId);
	};



	const handleOpenDialog = () => {
		setIsDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setIsDialogOpen(false);
	};

	const handlePayment = () => {
		handleOpenDialog();
	};

	const handleOpenConfirmationDialog = () => {
		setIsConfirmationDialogOpen(true);
	};

	const handleCloseConfirmationDialog = () => {
		setIsConfirmationDialogOpen(false);
	};



	const handleAddTransactionId = () => {
		// Handle adding transaction ID logic here
		toast({
			title: "Transaction ID",
			description: "Transaction ID added successfully!",
		});
	};

	useEffect(() => {
		if (teamData) {
			// count members emails without @opju.ac.in
			// if count is 1 then amount to be paid is 99
			// if count is 2 or 3 then amount to be paid is 199
			// if count is 4 to 7 then amount to be paid is 499
			const outsidersCount = teamData.members.filter(
				(member) => member.isOutsider
			).length;
			let amountToBePaid = 0;
			if (outsidersCount === 1) {
				amountToBePaid = 99;
			} else if (outsidersCount >= 2 && outsidersCount <= 3) {
				amountToBePaid = 199;
			} else if (outsidersCount >= 4 && outsidersCount <= 7) {
				amountToBePaid = 499;
			}
			setPaymentDetails((prev) => ({
				...prev,
				numberOfOutsiders: outsidersCount,
				amountToBePaid,
			}));
		}
	}, [teamData]);


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
								{teamData.event.teamSize} members
							</p>
							<p>
								<strong>Prize Pool:</strong> ₹
								{teamData.event.prizeMoney.toLocaleString()}
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
							<DialogTrigger
								asChild
								disabled={!canSendMoreInvites}
							>
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
										disabled={inviteLoading || false}
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
						{(() => {
							const leader = teamData.members.find(
								(m: { email: string }) =>
									m.email === teamData.team.leader
							);
							return (
								<div className="space-y-2">
									<p>
										<strong>Name:</strong>{" "}
										{leader?.fullName}
									</p>
									<p>
										<strong>Email:</strong> {leader?.email}
									</p>
									<p>
										<strong>Branch:</strong>{" "}
										{leader?.branch}
									</p>
									<p>
										<strong>Enrollment:</strong>{" "}
										{leader?.enrollmentNumber}
									</p>
								</div>
							);
						})()}
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
										(member: { email: string }) =>
											member.email !==
											teamData.team.leader
									)
									.map(
										(member: {
											email: string;
											fullName: string;
											branch: string;
											enrollmentNumber: string;
										}) => (
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
										)
									)
							)}
						</div>
					</CardContent>
				</Card>

				{/* Invites Section */}
				<Card className="mb-4">
					<CardHeader>
						<CardTitle className="text-md">Invites</CardTitle>
					</CardHeader>
					<CardContent>
						{teamData.invites.length > 0 ? (
							<div className="space-y-2">
								{teamData.invites.map(
									(invite: {
										_id: string;
										inviteeEmail: string;
										status: string;
									}) => (
										<div
											key={invite._id}
											className={`flex items-center justify-between p-2 rounded ${
												invite.status === "ACCEPTED"
													? "bg-green-50"
													: invite.status ===
													  "PENDING"
													? "bg-yellow-50"
													: invite.status ===
													  "REJECTED"
													? "bg-red-50"
													: "bg-gray-50"
											}`}
										>
											<span>{invite.inviteeEmail}</span>
											<Badge variant="secondary">
												{invite.status}
											</Badge>
											{isLeader &&
												invite.status === "PENDING" && (
													<Button
														variant="destructive"
														size="sm"
														onClick={() =>
															handleCancelInvite(
																invite._id
															)
														}
													>
														Cancel
													</Button>
												)}
										</div>
									)
								)}
							</div>
						) : (
							<p className="text-gray-500">No invites found</p>
						)}
					</CardContent>
				</Card>

				<Card className="mb-6">
					<CardHeader>
						<CardTitle className="flex w-full justify-between">
							<h1>Payment Details</h1>

							<HoverCard>
								<HoverCardTrigger className="border px-1.5">
									<p className="text-sm text-muted-foreground">
										i
									</p>
								</HoverCardTrigger>
								<HoverCardContent>
									<p className="text-nowrap">
										Finalise the team members,
										<br /> with no pending invitations.
										<br /> Then only do the payments
									</p>
									<br />
									<p className="text-nowrap">
										1 outsider participant = Rs.99
									</p>
									<p className="text-nowrap">
										2-3 outsider participant = Rs.199
									</p>
									<p className="text-nowrap">
										4-7 outsider participant = Rs.499
									</p>
								</HoverCardContent>
							</HoverCard>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<p className="text-sm text-muted-foreground">
									Number of Outsider Participants
								</p>
								<p className="font-medium">
									{paymentDetails.numberOfOutsiders}
								</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Amount to be Paid
								</p>
								<p className="font-medium">
									{paymentDetails.amountToBePaid}
								</p>
							</div>
							{/* <div>
								<p className="text-sm text-muted-foreground">
									Payment Status
								</p>
								<p className="font-medium">
									{paymentDetails.paymentStatus}
								</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Payment Confirmation Status
								</p>
								<p className="font-medium">
									{paymentDetails.paymentConfirmationStatus}
								</p>
							</div> */}
							<div className="flex gap-4">
								<Button
									onClick={handlePayment}
									disabled={
										true ||
										paymentDetails.numberOfOutsiders === 0
									}
								>
									Pay
								</Button>

								<Button
									disabled={true}
									onClick={handleOpenConfirmationDialog}
								>
									Add Transaction ID
								</Button>
								<p>Note: This functionality will be added soon.</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Payment Confirmation</DialogTitle>
					</DialogHeader>
					<p>
						Click the link or scan the QR for payment. After
						completing the payment, you will receive the transaction
						ID in your email. You need to come back and fill it
						here.
					</p>
					<DialogFooter>
						<Button onClick={handleCloseDialog}>OK</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<Dialog
				open={isConfirmationDialogOpen}
				onOpenChange={handleCloseConfirmationDialog}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Payment Confirmation</DialogTitle>
					</DialogHeader>

					<div className="space-y-4">
						<p>
							First you need to do the payment. Then you will
							recieve the payment TransactionId in throught your
							email. Copy that transactionId and put that here.
						</p>
						<Input
							type="text"
							placeholder="Enter Transaction ID"
							value={paymentDetails.transactionId}
							onChange={(e) =>
								setPaymentDetails((d) => ({
									...d,
									transactionId: e.target.value,
								}))
							}
						/>
					</div>
					<DialogFooter>
						<Button onClick={handleAddTransactionId}>
							Confirm
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
