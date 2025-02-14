import React from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const UserDropdown = () => {
	const router = useRouter();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button variant={"outline"}>Open</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => {
						router.push("/auth/signup");
					}}
				>
					SignUp
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						router.push("/auth/login");
					}}
				>
					Login
				</DropdownMenuItem>
				{/* <DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>Subscription</DropdownMenuItem> */}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserDropdown;
