import { Schema, model, Document, Types, models } from "mongoose";

interface IAccommodation extends Document {
	arrivalTime: Date;
	departureTime: Date;
	additionalDetails: string;
	userId: Types.ObjectId;
}

const accommodationSchema = new Schema<IAccommodation>(
	{
		arrivalTime: {
			type: Date,
			required: true,
		},
		departureTime: {
			type: Date,
			required: true,
		},
		additionalDetails: {
			type: String,
			required: false,
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true, // Automatically manage createdAt and updatedAt fields
	}
);

const Accommodation =
	models?.Accommodation ||
	model<IAccommodation>("Accommodation", accommodationSchema);

export { Accommodation };
export type { IAccommodation };
