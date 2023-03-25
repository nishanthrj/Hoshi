import Trailer from "@/components/media/Trailer";

export default function TrailerSection() {
	return (
		<div>
			<h1 className="mb-4 text-lg font-semibold uppercase tracking-widest text-dark-100">
				Trailer
			</h1>
			<Trailer
				video="https://www.youtube.com/embed/1-o7fmQqSNg"
				thumbnail="https://img.youtube.com/vi/1-o7fmQqSNg/maxresdefault.jpg"
			/>
		</div>
	);
}
