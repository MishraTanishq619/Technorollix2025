"use client";
// import { useEffect, useState } from "react";
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
import { logout } from "@/lib/utils";

const UserDropdown = () => {
	const router = useRouter();

	// Task : add a functionality to render login and signup button if user is not authenticated and logout button if user is authenticated

	// const [user, setUser] = useState(false);
	// useEffect(() => {
	// 	setUser(isUserAuthenticated());
	// }, [router]);

	const logoutHandler = async () => {
		await logout();
		router.push("/auth/login");
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button variant={"outline"}>Open</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{/* {user ? ( */}
				<>
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
				</>
				{/* ) : ( */}
				<DropdownMenuItem
					onClick={() => {
						logoutHandler();
					}}
				>
					Logout
				</DropdownMenuItem>
				{/* )} */}
				{/* <DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>Subscription</DropdownMenuItem> */}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserDropdown;
