"use server";
import { connectToDatabase } from "@/lib/mongodb";
import { Accommodation, IAccommodation } from "@/models/accomodation.model";
import { getUser } from "./user-actions";

export async function getAccommodationDetailsAction(): Promise<IAccommodation | null> {
	try {
		await connectToDatabase();

		const user = await getUser();
		if (!user) {
			throw new Error("User not found");
		}

		const accommodation = await Accommodation.findOne({
			userId: user?._id,
		}).lean<IAccommodation>();
		return JSON.parse(JSON.stringify(accommodation));
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(
				`Failed to fetch accommodation details: ${error.message}`
			);
		} else {
			throw new Error("Failed to fetch accommodation details");
		}
	}
}

interface AccommodationDetails {
	userId: string;
	arrivalTime: Date;
	departureTime: Date;
	additionalDetails?: string;
}
export async function setAccommodationDetailsAction(
	details: AccommodationDetails
): Promise<IAccommodation> {
	try {
		await connectToDatabase();
		let accommodation = await Accommodation.findOne({
			userId: details.userId,
		});

		if (accommodation) {
			// Update existing accommodation
			accommodation.arrivalTime = details.arrivalTime;
			accommodation.departureTime = details.departureTime;
			accommodation.additionalDetails =
				details.additionalDetails || accommodation.additionalDetails;
			await accommodation.save();
		} else {
			// Create new accommodation
			accommodation = new Accommodation(details);
			await accommodation.save();
		}

		return JSON.parse(JSON.stringify(accommodation));
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(
				`Failed to set accommodation details: ${error.message}`
			);
		} else {
			throw new Error("Failed to set accommodation details");
		}
	}
}
