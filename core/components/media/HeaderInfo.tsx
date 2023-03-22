import Tag from "@/components/common/Tag";

export default function HeaderInfo() {
	return (
		<div className="relative mt-2 w-[min(95%,60rem)] font-medium">
			<span className="text-[.8rem] text-dark-200 max-xs:hidden ">Cloverworks</span>
			<h1 className="text-xl font-semibold text-dark-50 line-clamp-2 max-xs:text-center">
				Bocchi the Rock!
			</h1>
			<span className="absolute w-full text-xs text-dark-100 max-xs:text-center ">
				TV • 12 Episodes • Finished
			</span>
			<div className="mt-8 flex w-full gap-2 text-dark-100 max-xs:justify-center">
				<Tag>Music</Tag>
				<Tag>Slice of Life</Tag>
				<Tag>Comedy</Tag>
			</div>
			<p className="mt-4 text-justify text-sm font-normal leading-6 text-dark-100">
				Hitori Gotoh, “Bocchi-chan,” is a girl who's so introverted and shy around people
				that she'd always start her conversations with “Ah...” During her middle school
				years, she started playing the guitar, wanting to join a band because she thought it
				could be an opportunity for even someone shy like her to also shine. But because she
				had no friends, she ended up practicing guitar for six hours every day all by
				herself. After becoming a skilled guitar player, she uploaded videos of herself
				playing the guitar to the internet under the name “Guitar Hero” and fantasized about
				performing at her school's cultural festival concert. But not only could she not
				find any bandmates, before she knew it, she was in high school and still wasn't able
				to make a single friend! She was really close to becoming a shut-in, but one day,
				Nijika Ijichi, the drummer in Kessoku Band, reached out to her. And because of that,
				her everyday life started to change little by little...
			</p>
		</div>
	);
}
