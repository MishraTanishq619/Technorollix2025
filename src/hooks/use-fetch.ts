/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { toast } from "./use-toast";
import { useState, useCallback } from "react";

type FetchCallback<T> = (...args: any[]) => Promise<T>;

const useFetch = <T>(cb: FetchCallback<T>) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean | null>(null);
	const [error, setError] = useState<Error | null>(null);

	const execute = useCallback(async (...args: any[]) => {
		setLoading(true);
		setError(null);
		try {
			const res = await cb(...args);
			setData(res ? JSON.parse(JSON.stringify(res)) : null); // Ensure plain object
		} catch (error: any) {
			setError(error);
			// toast({
			// 	title: "Error",
			// 	description: error.message,
			// 	variant: "destructive",
			// });
		} finally {
			setLoading(false);
		}
	}, [cb]);

	return { data, loading, error, fn: execute, setData };
};

export default useFetch;
