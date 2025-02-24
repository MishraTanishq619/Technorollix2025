"use client";
import React, { useEffect, useState } from "react";
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
import { getUserFromAuth } from "@/actions/user-actions";

const UserDropdown = () => {
	const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<{ fullName?: string; email?: string } | null>(null);

    useEffect(() => {
        const authToken = localStorage.getItem("auth-token");
        setToken(authToken);

        if (authToken) {
            fetchUser(authToken).then((userData) => {
                setUser(userData);
            });
        }
    }, []);

    useEffect(() => {
        if (token) {
            fetchUser(token).then((userData) => {
                setUser(userData);
            });
        } else {
            setUser(null);
        }
    }, [token]);


    const logoutHandler = async () => {
        await logout();
        localStorage.removeItem("auth-token");
        setToken(null);
        router.push("/auth/login");
    };

    const fetchUser = async (token: string) => {
        try {
            const userData = await getUserFromAuth(token);
            return userData;
        } catch (error) {
            console.error("Failed to fetch user data:", error);
            return null;
        }
    };
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
      <div className="h-10 w-36 bg-gradient-to-r from-[#ff2020] via-[#AA0406] to-[#8F0c11] flex items-center justify-center border-[3px] border-[#FFC363] rounded-full px-6 text-yellow-400 font-bold shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 pr-2"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFCD7C] to-[#D4881C]">Login</p>
        </div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{token ? (
                    <>
                        <DropdownMenuItem>
                            {user?.fullName || user?.email}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={logoutHandler}>
                            Logout
                        </DropdownMenuItem>
                    </>
                ) : (
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
                )}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserDropdown;