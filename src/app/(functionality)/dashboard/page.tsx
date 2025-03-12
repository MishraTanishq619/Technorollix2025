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
import { toast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Payments from "@/components/payments";
import { getMergedEvents } from "@/lib/utils";


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
		fn: participatingTeamsFn,
	} = useFetch(getParticipatingTeams);
	const {
		data: invitedTeamsData,
		loading: invitedTeamsLoading,
		fn: invitedTeamsFn,
	} = useFetch(getInvitedTeams);

	const { error: acceptInvitationError, fn: acceptInvitationFn } =
		useFetch(acceptInviteAction);

	const { fn: rejectInvitationFn } = useFetch(rejectInviteAction);

	const {
		data: accommodationFetchData,
		loading: accommodationFetchLoading,
		fn: accommodationFetchFn,
	} = useFetch(getAccommodationDetailsAction);

	// const [payAmount, setPayAmount] = useState(0)

	// Create a function to calculate the payAmount. 
	// This will input number of teams with individualSchema and number of teamSchema
	// if sum of both teams >= 4 : 499
	// for individualSchema :
		// if number of individualSchema teams == 1 : 99
		// if number of individualSchema teams == (2 or 3) : 199
	// for teamSchema :
		// if number of teamSchema teams == 1 : 299
		// if number of teamSchema teams == 2 : 299 * 2
		// if number of teamSchema teams == 3 : 299 * 3
	
		function calculatePayAmount(individualSchemaCount: number, teamSchemaCount: number): number {
			const totalTeams = individualSchemaCount + teamSchemaCount;
		
			// If the sum of both teams is >= 4, return 499
			if (totalTeams >= 4) {
				return 499;
			}
		
			let payAmount = 0;
		
			// Calculate pay amount for individualSchema teams
			if (individualSchemaCount === 1) {
				payAmount += 99;
			} else if (individualSchemaCount === 2 || individualSchemaCount === 3) {
				payAmount += 199;
			}
		
			// Calculate pay amount for teamSchema teams
			if (teamSchemaCount === 1) {
				payAmount += 299;
			} else if (teamSchemaCount === 2) {
				payAmount += 299 * 2;
			} else if (teamSchemaCount === 3) {
				payAmount += 299 * 3;
			}
		
			return payAmount;
		}

			
	const [MergedleadingEvents, setMergedLeadingEvents] = useState<any[]>([])
	const [payAmount, setPayAmount] = useState(0)

	useEffect(() => {
		if (participatingTeamsData) {
			console.log(participatingTeamsData);

			const mergedTeamsArray = getMergedEvents(participatingTeamsData, userData.email);

			setPayAmount(
				calculatePayAmount(
					mergedTeamsArray?.filter((event:any) => event.individualSchema)
						.length,
					mergedTeamsArray?.filter((event:any) => !event.individualSchema)
						.length
				)
			);
			setMergedLeadingEvents(mergedTeamsArray);
			
		}
	
	}, [participatingTeamsData])
	
	useEffect(() => {
		if (acceptInvitationError) {
			toast({
				title: "Error",
				description: acceptInvitationError.message,
				variant: "destructive",
			});
		}
	}, [acceptInvitationError]);

	useEffect(() => {
		userFn();
		participatingTeamsFn();
		invitedTeamsFn();
		accommodationFetchFn();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleTeamClick = (teamId: string) => {
		router.push(`/team-details/${teamId}`);
	};

	const handleInviteAccept = async (inviteId: string) => {
		// Implement accept logic here
		acceptInvitationFn(inviteId);
		setSelectedInvite(null);
		participatingTeamsFn();
		invitedTeamsFn();
	};

	const handleInviteReject = async (inviteId: string) => {
		// Implement reject logic here
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

			{userData?.isOutsider && (
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
										{
											accommodationFetchData.additionalDetails
										}
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
			)}
			{userData && (
				<AccommodationModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					initialData={
						accommodationFetchData
							? {
									...accommodationFetchData,
									arrivalTime: new Date(
										accommodationFetchData.arrivalTime
									).toISOString(),
									departureTime: new Date(
										accommodationFetchData.departureTime
									).toISOString(),
									userId: userData?._id,
							  }
							: { userId: userData?._id }
					}
				/>
			)}

			{/* Register on More Events */}
			<div className="text-center mt-8">
				<Button onClick={() => router.push("/events-selection")}>
					Register for Events as leader
				</Button>
			</div>

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

			{/* Payments section */}

			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Payments Section</CardTitle>
				</CardHeader>
				<CardContent>
				<Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Event Name</TableHead>
                                <TableHead>Participating subevents</TableHead>
                                <TableHead>Type of pay scheme</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {MergedleadingEvents &&
                                MergedleadingEvents.map((event, k) => {
                                    return (
                                        <TableRow key={k}>
                                            <TableCell>{event.eventName}</TableCell>
                                            <TableCell>{event.teams.length}</TableCell>
                                            <TableCell>{event.individualSchema ? "Individual" : "Team"}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
					</Table>
					<br />
					<div className=" flex justify-between">
						<div>
							<p>Total Individual schema : {MergedleadingEvents?.filter(event => event.individualSchema).length}</p>
							<p>Total Team schema : {MergedleadingEvents?.filter(event => !event.individualSchema).length}</p>

							{/* <p>Total Individual schema : {leadingTeamsDummy?.filter(team => isSingleMemberOutsiderTeam(team)).length}</p>
							<p>Total Team schema : {leadingTeamsDummy?.filter(team => !isSingleMemberOutsiderTeam(team)).length}</p> */}
							
							<p>Amount to be paid : { payAmount }</p>
							{/* <p>Amount to be paid : { calculatePayAmount(leadingTeams?.filter(team => isSingleMemberOutsiderTeam(team)).length,
	leadingTeams?.filter(team => !isSingleMemberOutsiderTeam(team)).length)}</p> */}
						</div>
						<div>
							{/* Here, give a "Pay" button. This will open a modal.
								the modal should show a Scan QR or Click the link, provide space for that.
								At the top of modal, give a note saying that After the payment is done, transactionId will be sent to your mail via eassbuzz.
								You need to fill that in the input given in user dashboard.

								So, give a button of "Add TransactionId" here. This will open its modal, should have an input box and confirm button.
								This will call "addTransactionIdAction".
							*/}
						</div>
					</div>
					<Payments payAmount={payAmount} userEmail={userData?.email} />
				</CardContent>
			</Card>

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

