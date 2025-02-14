import nodemailer from "nodemailer";

export async function sendWelcomeEmail(
	recipientEmail: string,
	password: string
): Promise<void> {
	// Create a transporter object using SMTP transport
	const transporter = nodemailer.createTransport({
		service: "gmail", // Use your email service provider
		auth: {
			user: "your-email@gmail.com", // Your email address
			pass: "your-email-password", // Your email password
		},
	});

	// Define email options
	const mailOptions = {
		from: "your-email@gmail.com", // Sender address
		to: recipientEmail, // List of recipients
		subject: "Welcome to Technorollix2025", // Subject line
		text: `Welcome to Technorollix2025! Your numeric password is: ${password}`, // Plain text body
	};

	// Send email
	try {
		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent: " + info.response);
	} catch (error) {
		console.error("Error sending email: " + error);
	}
}

// Example usage
// sendWelcomeEmail("recipient@example.com", 123456);
