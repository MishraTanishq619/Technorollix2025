import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PaymentsDataPage() {
	return (
		<div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6 text-center">
				Payments Data
			</h1>
			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Under Development</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-center">
						We are still developing the payments part. Please check
						back later.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
