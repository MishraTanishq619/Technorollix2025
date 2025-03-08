"use server";

import { connectToDatabase } from "@/lib/mongodb";
import { Event, IEvent } from "@/models/event.model";
import { getUser } from "./user-actions";
import { ITeam, Team } from "@/models/team.model";
import { Invitation } from "@/models/invitation.model";
import { User } from "@/models/user.model";

// Fetch all events
export async function getAllEventsAction() {
	try {
		await connectToDatabase();
		const allEvents = await Event.find();
		return JSON.parse(JSON.stringify({ events: allEvents }));
	} catch {
		throw new Error("Failed to fetch all events");
	}
}

// Fetch registered events
export async function getRegisteredEventsAction() {
	try {
		await connectToDatabase();

		const user = await getUser();
		if (!user) {
			throw new Error("User not found");
		}

		const eventIds: string[] = [];

		for (const teamId of user.teams) {
			// Find the team
			const team = await Team.findById(teamId);
			if (!team) {
				throw new Error(`Team with ID ${teamId} not found`);
			}

			// Get the eventId from the team
			const eventId = team.event.toString();

			// Add the eventId to the array
			eventIds.push(eventId);
		}

		return JSON.parse(JSON.stringify({ events: eventIds }));

		// return {
		// 	events: ["67b3472cc46325c713bbe243", "67b3472cc46325c713bbe244"],
		// }; // Sample response
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(
				`Failed to fetch registered events: ${error.message}`
			);
		} else {
			throw new Error("Failed to fetch registered events");
		}
	}
}

// Task : Testing this is left.
// Fetch pending team invites
export async function getPendingInvitesAction() {
	try {
		await connectToDatabase();

		const user = await getUser();
		if (!user) {
			throw new Error("User not found");
		}

		const eventIds: string[] = [];

		// Find all invitations having inviteeEmail as user.email
		const invitations = await Invitation.find({
			inviteeEmail: user.email,
		});

		// Loop over the invitations
		for (const invitation of invitations) {
			// Get the teamId from the invitation
			const teamId = invitation.teamId;

			// Find the team
			const team = await Team.findById(teamId);
			if (!team) {
				throw new Error(`Team with ID ${teamId} not found`);
			}

			// Get the eventId from the team
			const eventId = team.event.toString();

			// Add the eventId to the array
			eventIds.push(eventId);
		}

		return JSON.parse(JSON.stringify({ invites: eventIds }));

		// return {
		// 	invites: ["67b3472cc46325c713bbe245", "67b3472cc46325c713bbe246"],
		// }; // Sample response
	} catch {
		throw new Error("Failed to fetch pending invites");
	}
}

// Submit event registrations
export async function submitEventsAction(data: { eventIds: string[] }) {
	try {
		await connectToDatabase();

		const user = await getUser();
		if (!user) {
			throw new Error("User not found");
		}

		const existingUser = await User.findOne({ email: user.email });
		if (!existingUser) {
			throw new Error("User not found");
		}

		if (existingUser.teams.length + data.eventIds.length > 7) {
            throw new Error("You are not allowed to register for more than 7 events.");
        }

		// Loop over the eventIds
		for (const eventId of data.eventIds) {
			// Find the event
			const event = await Event.findById(eventId);
			if (!event) {
				throw new Error(`Event with ID ${eventId} not found`);
			}

			// Create a new team object
			const newTeam = new Team({
				leader: existingUser.email,
				members: [existingUser.email],
				event: event._id,
				size: event.teamSize,
				invites: [],
			});

			// Save the team
			const savedTeam = await newTeam.save();

			// Append the new teamId to the existingUser's teams array
			existingUser.teams.push(savedTeam._id);
		}

		await existingUser.save();

		return { success: true };
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(
				`Failed to submit event registrations: ${error.message}`
			);
		} else {
			throw new Error("Failed to submit event registrations");
		}
	}
}

export async function getManagedEventsAction(eventIds: string[]) {
	try {
		await connectToDatabase();
		const managedEvents = await Event.find({ _id: { $in: eventIds } }).lean<
			IEvent[]
		>();
		return JSON.parse(JSON.stringify({ events: managedEvents }));
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch managed events: ${error.message}`);
		} else {
			throw new Error("Failed to fetch managed events");
		}
	}
}

export async function getEventById(eventId: string): Promise<IEvent> {
	try {
		await connectToDatabase();
		const event = await Event.findById(eventId).lean<IEvent>();
		if (!event) {
			throw new Error(`Event with ID ${eventId} not found`);
		}
		return JSON.parse(JSON.stringify(event));
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch event: ${error.message}`);
		} else {
			throw new Error("Failed to fetch event");
		}
	}
}

export async function getTeamsByEventId(
	eventId: string
): Promise<(ITeam & { createdAt: Date })[]> {
	try {
		await connectToDatabase();
		const teams = await Team.find({ event: eventId })
			.select("event members leader createdAt")
			.lean();
		return JSON.parse(JSON.stringify(teams));
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch teams: ${error.message}`);
		} else {
			throw new Error("Failed to fetch teams");
		}
	}
}


export async function getEventDetailsWithCounts(): Promise<
    { eventName: string; teamCount: number; userCount: number }[]
> {
    try {
        await connectToDatabase();

        // Fetch all events
        const events = await Event.find().lean<IEvent[]>();

        // Initialize an array to hold the event details with counts
        const eventDetailsWithCounts = [];

        // Loop through each event to get the counts
        for (const event of events) {
            // Fetch teams for the current event
            const teams = await Team.find({ event: event._id }).lean<ITeam[]>();

            // Calculate the team count
            const teamCount = teams.length;

            // Calculate the user count by aggregating the members from each team
            const userCount = teams.reduce((acc, team) => acc + team.members.length, 0);

            // Add the event details with counts to the array
            eventDetailsWithCounts.push({
                eventName: event.name,
                teamCount,
                userCount,
            });
        }

        return JSON.parse(JSON.stringify(eventDetailsWithCounts));
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch event details with counts: ${error.message}`);
        } else {
            throw new Error("Failed to fetch event details with counts");
        }
    }
}