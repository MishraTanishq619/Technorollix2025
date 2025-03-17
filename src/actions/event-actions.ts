"use server";

import { connectToDatabase } from "@/lib/mongodb";
import { Event, IEvent } from "@/models/event.model";
import { getUser } from "./user-actions";
import { ITeam, Team } from "@/models/team.model";
import { Invitation } from "@/models/invitation.model";
import { IUser, User } from "@/models/user.model";
import { eventSubEventData } from "@/data/event-subeventData";

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

		// Get all the events that the user has registered for
        const userEvents = await Promise.all(
            existingUser.teams.map(async (teamId:string) => {
                const team = await Team.findById(teamId);
                return team.event.toString();
            })
        );

		const allEventsArray = [...userEvents,...data.eventIds]
		const mainEventsCount = await getParticipatingEventsCountAction(allEventsArray);

		if (existingUser.isOutsider && (mainEventsCount.eventCount > 7)) {
			throw new Error("Outsider Participants are not allowed to register for more than 7 events.");
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
	{ eventName: string; teamCount: number; userCount: number; insiderCount: number; outsiderCount: number }[]

> {
    try {
        await connectToDatabase();

        // Fetch all events
        const events = await Event.find().lean<IEvent[]>();

        // Fetch all users
        const users = await User.find().lean<IUser[]>();

        // Create a map of user emails to user objects for quick lookup
        const userMap = new Map(users.map(user => [user.email, user]));

        // Initialize an array to hold the event details with counts
        const eventDetailsWithCounts = [];

        // Loop through each event to get the counts
        for (const event of events) {
            // Fetch teams for the current event
            const teams = await Team.find({ event: event._id }).lean<ITeam[]>();

            // Calculate the team count
            const teamCount = teams.length;

            // Initialize counters for insiders and outsiders
            let insiderCount = 0;
            let outsiderCount = 0;

            // Loop through each team to get the user counts
            for (const team of teams) {
                for (const memberEmail of team.members) {
                    const user = userMap.get(memberEmail);
                    if (user) {
                        if (user.isOutsider) {
                            outsiderCount++;
                        } else {
                            insiderCount++;
                        }
                    }
                }
            }

            // Calculate the user count
            const userCount = insiderCount + outsiderCount;

            // Add the event details with counts to the array
            eventDetailsWithCounts.push({
                eventName: event.name,
                teamCount,
                userCount,
                insiderCount,
                outsiderCount,
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


export async function getRegistrationCount(eventName: string): Promise<number> {
    try {
        await connectToDatabase();

        // Find the event in eventSubEventData
        const event = eventSubEventData.events.find(event => event.eventName === eventName);

        if (!event) {
            throw new Error(`Event with name ${eventName} not found`);
        }

        let totalTeams = 0;

        if (event.subEvents.length === 0) {
            // If the event does not have sub-events, find the number of teams participating in this event
            const teams = await Team.find({ event: event.event }).lean<ITeam[]>();
            totalTeams = teams.length;
        } else {
            // If the event has sub-events, get the sum of total teams registered in each sub-event
            for (const subEvent of event.subEvents) {
                const teams = await Team.find({ event: subEvent.subEvent }).lean<ITeam[]>();
                totalTeams += teams.length;
            }
        }

        return totalTeams;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch registration count for event ${eventName}: ${error.message}`);
        } else {
            throw new Error("Failed to fetch registration count for event");
        }
    }
}



export async function getParticipatingEventsCountAction(eventIds: string[], newEventId?: string) {
    try {
        await connectToDatabase();

        let eventCount = 0;
        const mainEventNames: string[] = [];
        let isNewEventIncluded = false;

        for (const eventId of eventIds) {
            // Check if the eventId is in the main events
            const mainEvent = eventSubEventData.events.find(
                (event) => event.event === eventId
            );

            if (mainEvent) {
                // If the eventId is a main event and not already in mainEventNames, increment the count and log the event name
                if (!mainEventNames.includes(mainEvent.eventName)) {
                    eventCount++;
                    mainEventNames.push(mainEvent.eventName);
                }
            } else {
                // Check if the eventId is in the sub-events
                for (const event of eventSubEventData.events) {
                    const subEvent = event.subEvents.find(
                        (subEvent) => subEvent.subEvent === eventId
                    );
                    if (subEvent) {
                        // If the eventId is a sub-event and the main event name is not already in mainEventNames, increment the count and log the main event name
                        if (!mainEventNames.includes(event.eventName)) {
                            eventCount++;
                            mainEventNames.push(event.eventName);
                        }
                        break;
                    }
                }
            }
        }

        // Check if the newEventId's main event is already included
        if (newEventId) {
            const mainEvent = eventSubEventData.events.find(
                (event) => event.event === newEventId
            );

            if (mainEvent) {
                isNewEventIncluded = mainEventNames.includes(mainEvent.eventName);
            } else {
                for (const event of eventSubEventData.events) {
                    const subEvent = event.subEvents.find(
                        (subEvent) => subEvent.subEvent === newEventId
                    );
                    if (subEvent) {
                        isNewEventIncluded = mainEventNames.includes(event.eventName);
                        break;
                    }
                }
            }
        }

        // Log the main event names

        return { eventCount, isNewEventIncluded };
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(
                `Failed to get participating events count: ${error.message}`
            );
        } else {
            throw new Error(
                "Failed to get participating events count due to an unknown error"
            );
        }
    }
}