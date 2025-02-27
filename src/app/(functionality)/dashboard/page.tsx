/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { getUser } from "@/actions/user-actions";
import { getParticipatingTeams, getInvitedTeams } from "@/actions/team-actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { User, Calendar, Users } from "lucide-react";
import {
	acceptInviteAction,
	rejectInviteAction,
} from "@/actions/invite-actions";
import AccommodationModal from "@/components/accomodation-modal";
import { getAccommodationDetailsAction } from "@/actions/accomodation-actions";

const DashboardPage = () => {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState(false);

	interface SelectedInvite {
		_id: string;
		status: string;
		team: {
			event: {
				name: string;
				prizeMoney: string;
				teamSize: number;
			};
			leader: {
				_id: string;
				fullName: string;
			};
			members: {
				_id: string;
				fullName: string;
			}[];
		};
	}

	const [selectedInvite, setSelectedInvite] = useState<SelectedInvite | null>(
		null
	);
	const { data: userData, fn: userFn } = useFetch(getUser);
	const {
		data: participatingTeamsData,
		loading: participatingTeamsLoading,
		// error: participatingTeamsError,
		fn: participatingTeamsFn,
	} = useFetch(getParticipatingTeams);
	const {
		data: invitedTeamsData,
		loading: invitedTeamsLoading,
		// error: invitedTeamsError,
		fn: invitedTeamsFn,
	} = useFetch(getInvitedTeams);

	const { fn: acceptInvitationFn } = useFetch(acceptInviteAction);

	const { fn: rejectInvitationFn } = useFetch(rejectInviteAction);

	const {
		data: accommodationFetchData,
		loading: accommodationFetchLoading,
		// error: accommodationFetchError,
		fn: accommodationFetchFn,
	} = useFetch(getAccommodationDetailsAction);

	useEffect(() => {
		userFn();
		participatingTeamsFn();
		invitedTeamsFn();
		accommodationFetchFn();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (invitedTeamsData) {
			console.log("invitedTeamsData :", invitedTeamsData);
		}
		if (participatingTeamsData) {
			console.log("Participating Teams:", participatingTeamsData);
		}

		if (accommodationFetchData) {
			console.log("accommodationFetchData :", accommodationFetchData);
		}
	}, [participatingTeamsData, invitedTeamsData, accommodationFetchData]);

	const handleTeamClick = (teamId: string) => {
		router.push(`/team-details/${teamId}`);
	};

	const handleInviteAccept = async (inviteId: string) => {
		// Implement accept logic here
		console.log("Accepting invite:", inviteId);
		acceptInvitationFn(inviteId);
		setSelectedInvite(null);
		participatingTeamsFn();
		invitedTeamsFn();
	};

	const handleInviteReject = async (inviteId: string) => {
		// Implement reject logic here
		console.log("Rejecting invite:", inviteId);
		rejectInvitationFn(inviteId);
		setSelectedInvite(null);
		invitedTeamsFn();
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		accommodationFetchFn();
		setIsModalOpen(false);
	};

	return (
		<div className="container mx-auto p-6 space-y-6">
			<h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>

			{userData && (
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<User className="w-5 h-5" />
							User Profile
						</CardTitle>
					</CardHeader>
					<CardContent className="grid grid-cols-2 gap-4">
						<div>
							<p className="text-sm text-muted-foreground">
								Full Name
							</p>
							<p className="font-medium">{userData.fullName}</p>
						</div>
						<div>
							<p className="text-sm text-muted-foreground">
								Email
							</p>
							<p className="font-medium">{userData.email}</p>
						</div>
						<div>
							<p className="text-sm text-muted-foreground">
								Branch
							</p>
							<p className="font-medium">{userData.branch}</p>
						</div>
						<div>
							<p className="text-sm text-muted-foreground">
								Enrollment
							</p>
							<p className="font-medium">
								{userData.enrollmentNumber}
							</p>
						</div>
					</CardContent>
				</Card>
			)}

			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Accommodation Details</CardTitle>
				</CardHeader>
				<CardContent>
					{!accommodationFetchLoading ? (
						accommodationFetchData ? (
							<div>
								<p>
									Arrival Time:{" "}
									{new Date(
										accommodationFetchData.arrivalTime
									).toLocaleString()}
								</p>
								<p>
									Departure Time:{" "}
									{new Date(
										accommodationFetchData.departureTime
									).toLocaleString()}
								</p>
								<p>
									Additional Details:{" "}
									{accommodationFetchData.additionalDetails}
								</p>
								<Button
									className="mt-4"
									disabled={!userData?.isOutsider}
									onClick={handleOpenModal}
								>
									Edit Accommodation
								</Button>
							</div>
						) : (
							<div>
								<p>Accommodation not availed.</p>
								<p>
									Note: Avail if you are an outsider
									participant.
								</p>
								<Button
									className="mt-4"
									disabled={!userData?.isOutsider}
									onClick={handleOpenModal}
								>
									Add Accommodation
								</Button>
							</div>
						)
					) : (
						<div>Loading Accommodation details...</div>
					)}
				</CardContent>
			</Card>
			{userData && (
				<AccommodationModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					initialData={
						accommodationFetchData
							? {
									...accommodationFetchData,
									arrivalTime:
										accommodationFetchData.arrivalTime.toISOString(),
									departureTime:
										accommodationFetchData.departureTime.toISOString(),
									userId: userData?._id,
							  }
							: { userId: userData?._id }
					}
				/>
			)}

			<div className="grid md:grid-cols-2 gap-6">
				{/* Participating Teams Section */}
				<Card className="h-full">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Users className="w-5 h-5" />
							Participating Teams
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ScrollArea className="h-[400px] pr-4">
							{participatingTeamsLoading ? (
								<p className="text-center text-muted-foreground">
									Loading Participating Teams...
								</p>
							) : participatingTeamsData?.length > 0 ? (
								<div className="space-y-4">
									{participatingTeamsData.map((team: any) => (
										<Card
											key={team._id}
											className="cursor-pointer hover:bg-accent transition-colors"
											onClick={() =>
												handleTeamClick(team._id)
											}
										>
											<CardContent className="pt-6">
												<div className="flex justify-between items-start mb-2">
													<div>
														<p className="font-medium">
															{team.event.name}
														</p>
														<p className="text-sm text-muted-foreground">
															Led by{" "}
															{
																team.leader
																	.fullName
															}
														</p>
													</div>
													<Badge>
														{team.leader.email ===
														userData?.email
															? "Leader"
															: "Member"}
													</Badge>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							) : (
								<p className="text-center text-muted-foreground">
									No participating teams found
								</p>
							)}
						</ScrollArea>
					</CardContent>
				</Card>

				{/* Invited Teams Section */}
				<Card className="h-full">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Calendar className="w-5 h-5" />
							Team Invitations
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ScrollArea className="h-[400px] pr-4">
							{invitedTeamsLoading ? (
								<p className="text-center text-muted-foreground">
									Loading Invitations...
								</p>
							) : invitedTeamsData?.length > 0 ? (
								<div className="space-y-4">
									{invitedTeamsData.map((invite: any) => (
										<Card
											key={invite._id}
											className={
												invite.status === "PENDING"
													? "cursor-pointer hover:bg-accent transition-colors"
													: ""
											}
											onClick={() =>
												invite.status === "PENDING" &&
												setSelectedInvite(invite)
											}
										>
											<CardContent className="pt-6">
												<div className="flex justify-between items-start mb-2">
													<div>
														<p className="font-medium">
															{
																invite.team
																	.event.name
															}
														</p>
														<p className="text-sm text-muted-foreground">
															Led by{" "}
															{
																invite.team
																	.leader
																	.fullName
															}
														</p>
													</div>
													<Badge
														variant={
															invite.status ===
															"PENDING"
																? "secondary"
																: invite.status ===
																  "ACCEPTED"
																? "default"
																: "destructive"
														}
													>
														{invite.status}
													</Badge>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							) : (
								<p className="text-center text-muted-foreground">
									No invitations found
								</p>
							)}
						</ScrollArea>
					</CardContent>
				</Card>
			</div>

			{/* Register on More Events */}
			<div className="text-center mt-8">
				<Button onClick={() => router.push("/events-selection")}>
					Register for More Events
				</Button>
			</div>

			{/* Invitation Modal */}
			<Dialog
				open={selectedInvite !== null}
				onOpenChange={() => setSelectedInvite(null)}
			>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Team Invitation</DialogTitle>
						<DialogDescription>
							You have been invited to join{" "}
							{selectedInvite?.team?.event.name}
						</DialogDescription>
					</DialogHeader>

					<div className="space-y-4">
						<div>
							<h4 className="font-medium mb-2">Event Details</h4>
							<p className="text-sm text-muted-foreground">
								PrizeMoney:{" "}
								{selectedInvite?.team.event.prizeMoney}
							</p>
							<p className="text-sm text-muted-foreground">
								TeamSize: {selectedInvite?.team.event.teamSize}
							</p>
						</div>

						<div>
							<h4 className="font-medium mb-2">Team Members</h4>
							<div className="space-y-2">
								{selectedInvite?.team.members.map((member) => (
									<div
										key={member._id}
										className="flex justify-between items-center"
									>
										<p className="text-sm">
											{member.fullName}
										</p>
										<Badge variant="outline">
											{member._id ===
											selectedInvite.team.leader._id
												? "Leader"
												: "Member"}
										</Badge>
									</div>
								))}
							</div>
						</div>

						<Separator />

						<div className="flex justify-end gap-4">
							<Button
								variant="outline"
								onClick={() =>
									selectedInvite &&
									handleInviteReject(selectedInvite._id)
								}
							>
								Reject
							</Button>
							<Button
								onClick={() =>
									selectedInvite &&
									handleInviteAccept(selectedInvite._id)
								}
							>
								Accept
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default DashboardPage;
