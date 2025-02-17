import { Schema, model, Document, models } from "mongoose";

// Define the interface for the Event document
interface IEvent extends Document {
	name: string;
	image: string;
	teamsize: number;
	prizemoney: number;
}

// Define the event schema
const eventSchema = new Schema<IEvent>(
	{
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		teamsize: {
			type: Number,
			required: true,
		},
		prizemoney: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// Create and export the event model
const Event = models?.Event || model<IEvent>("Event", eventSchema);

export { Event };
export type { IEvent };
