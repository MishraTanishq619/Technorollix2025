"use client";
import React, { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import { getUser } from "@/actions/user-actions";

const DashboardPage = () => {
	const {
		data: userData,
		// loading: userLoading,
		error: userError,
		fn: userFn,
	} = useFetch(getUser);
	useEffect(() => {
		userFn();
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
