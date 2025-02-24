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
                <Button variant={"outline"}>Open</Button>
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