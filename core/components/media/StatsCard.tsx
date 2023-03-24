export default function StatsCard() {
	return (
		<div className="w-[30rem]">
			<div className="flex h-28 justify-between gap-4 rounded-t bg-dark-600 p-6">
				<div className="flex flex-col items-center text-sm font-medium text-dark-200">
					<h6 className="mb-2 w-full rounded bg-stats-green p-2 text-center text-sm font-medium text-dark-50">
						Completed
					</h6>
					<p>
						<span className="text-stats-green">217,640</span> Users
					</p>
				</div>
				<div className="flex flex-col items-center text-sm font-medium text-dark-200">
					<h6 className="mb-2 w-full rounded bg-stats-blue p-2 text-center text-sm font-medium text-dark-50">
						Planning
					</h6>
					<p>
						<span className="text-stats-blue">80,426</span> Users
					</p>
				</div>
				<div className="flex flex-col items-center text-sm font-medium text-dark-200">
					<h6 className="mb-2 w-full rounded bg-stats-violet p-2 text-center text-sm font-medium text-dark-50">
						Watching
					</h6>
					<p>
						<span className="text-stats-violet">55,340</span> Users
					</p>
				</div>
				<div className="flex flex-col items-center text-sm font-medium text-dark-200">
					<h6 className="mb-2 w-full rounded bg-stats-red p-2 text-center text-sm font-medium text-dark-50">
						Dropped
					</h6>
					<p>
						<span className="text-stats-red">3,162</span> Users
					</p>
				</div>
			</div>

			<div className="flex h-full rounded-b">
				<div className="h-2 w-1/5 bg-stats-green"></div>
				<div className="h-2 w-1/5 bg-stats-blue"></div>
				<div className="h-2 w-1/5 bg-stats-violet"></div>
				<div className="h-2 w-1/5 bg-stats-yellow"></div>
				<div className="h-2 w-1/5 bg-stats-red"></div>
			</div>
		</div>
	);
}
