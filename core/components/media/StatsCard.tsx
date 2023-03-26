interface StatsCardProps {
	completed: number;
	planning: number;
	watching: number;
	paused: number;
	dropped: number;
	total: number;
}

export default function StatsCard({
	completed,
	planning,
	watching,
	paused,
	dropped,
	total,
}: StatsCardProps) {
	const StatsBarWidth = {
		completed: `${Math.round((completed / total) * 100)}%`,
		planning: `${Math.round((planning / total) * 100)}%`,
		watching: `${Math.round((watching / total) * 100)}%`,
		paused: `${Math.round((paused / total) * 100)}%`,
		dropped: `${Math.round((dropped / total) * 100)}%`,
	};

	return (
		<div className="w-[min(30rem,100%)]">
			<div className="flex h-28 justify-between gap-4 rounded-t bg-dark-600 p-6">
				<div className="flex flex-col items-center text-sm font-medium text-dark-200">
					<h6 className="mb-2 w-full rounded bg-stats-green p-2 text-center text-sm font-medium text-dark-50">
						Completed
					</h6>
					<p>
						<span className="text-stats-green">{completed}</span> Users
					</p>
				</div>
				<div className="flex flex-col items-center text-sm font-medium text-dark-200">
					<h6 className="mb-2 w-full rounded bg-stats-blue p-2 text-center text-sm font-medium text-dark-50">
						Planning
					</h6>
					<p>
						<span className="text-stats-blue">{planning}</span> Users
					</p>
				</div>
				<div className="flex flex-col items-center text-sm font-medium text-dark-200">
					<h6 className="mb-2 w-full rounded bg-stats-violet p-2 text-center text-sm font-medium text-dark-50">
						Watching
					</h6>
					<p>
						<span className="text-stats-violet">{watching}</span> Users
					</p>
				</div>
				<div className="flex flex-col items-center text-sm font-medium text-dark-200">
					<h6 className="mb-2 w-full rounded bg-stats-red p-2 text-center text-sm font-medium text-dark-50">
						Dropped
					</h6>
					<p>
						<span className="text-stats-red">{dropped}</span> Users
					</p>
				</div>
			</div>

			<div className="flex h-full rounded-b">
				<div
					style={{ width: StatsBarWidth.completed }}
					className="h-2 w-1/5 bg-stats-green"></div>
				<div
					style={{ width: StatsBarWidth.planning }}
					className="h-2 w-1/5 bg-stats-blue"></div>
				<div
					style={{ width: StatsBarWidth.watching }}
					className="h-2 w-1/5 bg-stats-violet"></div>
				<div
					style={{ width: StatsBarWidth.paused }}
					className="h-2 w-1/5 bg-stats-yellow"></div>
				<div
					style={{ width: StatsBarWidth.dropped }}
					className="h-2 w-1/5 bg-stats-red"></div>
			</div>
		</div>
	);
}
