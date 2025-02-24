import { Schema, model, Document, Types, models } from "mongoose";

// Define the interface for the User document
interface IUser extends Document {
	fullName: string;
	course: string;
	branch: string;
	enrollmentNumber: string;
	mobileNumber: string;
	email: string;
	password: string;
	isAdmin?: boolean;
	permissions?: {
		isManager: boolean;
		managedEvents: Types.ObjectId[];
	};
	teams: Types.ObjectId[];
}

// Define the user schema
const userSchema = new Schema<IUser>(
	{
		fullName: {
			type: String,
			required: true,
			minlength: 2,
		},
		course: {
			type: String,
			required: true,
		},
		branch: {
			type: String,
			required: true,
		},
		enrollmentNumber: {
			type: String,
			required: true,
		},
		mobileNumber: {
			type: String,
			required: true,
			match: /^\d{10}$/,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
			match: /^\d+$/,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		permissions: {
			isManager: { type: Boolean, default: false },
			managedEvents: [{ type: Schema.Types.ObjectId, ref: "Event" }],
		},
		teams: [
			{
				type: Types.ObjectId,
				ref: "Team",
			},
		],
	},
	{
		timestamps: true,
	}
);

// Create and export the user model
const User = models?.User || model<IUser>("User", userSchema);

export { User };
export type { IUser };
