"use client";
import React, { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import { getUserFromAuth } from "@/actions/user-actions";
import { getAuthToken } from "@/lib/utils";

const DashboardPage = () => {
    const {
        data: userData,
        error: userError,
        fn: userFn,
    } = useFetch(getUserFromAuth);

    useEffect(() => {
        userFn(getAuthToken());
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            {userData ? (
                <div>
                    <p>Email: {userData.email}</p>
                    <p>Full Name: {userData.fullName}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            {userError && <p className="text-red-500">{userError.message}</p>}
        </div>
    );
};

export default DashboardPage;