"use server";

import { connectToDatabase } from "@/lib/mongodb";
import { Team, ITeam } from "@/models/team.model";
import { Event, IEvent } from "@/models/event.model";
import { User, IUser } from "@/models/user.model";
import { Invitation, IInvitation } from "@/models/invitation.model";

export async function getTeamDetailsAction(teamId: string) {
	try {
		await connectToDatabase();

		// Query your database to get:
		// 1. Team details
		const team = await Team.findById(teamId);
		if (!team) {
			throw new Error(`Team with ID ${teamId} not found`);
		}

		// 2. Event details
		const event = await Event.findById(team.event);
		if (!event) {
			throw new Error(`Event with ID ${team.event} not found`);
		}

		// 3. Member details
		const members = await User.find({
			email: { $in: team.members },
		});

		// 4. Pending invites
		const invites = await Invitation.find({ teamId: team._id });

		return JSON.parse(
			JSON.stringify({
				team,
				event,
				members,
				invites,
			})
		);
	} catch (error) {
		throw new Error(`Failed to get team details: ${error.message}`);
	}
}
// Send team invite
export async function sendTeamInviteAction({
	teamId,
	inviteeEmail,
}: {
	teamId: string;
	inviteeEmail: string;
}) {
	try {
		// 1. Verify current user is team leader
		// 2. Verify team has space for more members
		// 3. Verify email is valid and user exists
		// 4. Create invite record in database
		return { success: true };
	} catch (error) {
		throw new Error("Failed to send invite");
	}
}
