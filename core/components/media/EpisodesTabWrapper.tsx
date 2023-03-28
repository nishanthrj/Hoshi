"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

interface EpisodesTabWrapperProps {
	children: React.ReactNode;
}

export default function EpisodesTabWrapper({ children }: EpisodesTabWrapperProps) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
