"use client";
import React, { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import { getUserFromAuth } from "@/actions/user-actions";
import { getAuthToken } from "@/lib/utils";

const DashboardPage = () => {
	const {
		data: userData,
		// loading: userLoading,
		error: userError,
		fn: userFn,
	} = useFetch(getUserFromAuth);
	useEffect(() => {
		userFn(getAuthToken());
	}, []);

	return (
		<>
			<div>DashboardPage</div>;
			{userData && (
				<div>
					{userData.email} | {userData.fullName}
				</div>
			)}
			{userError && <div>{userError.message}</div>}
		</>
	);
};

export default DashboardPage;
