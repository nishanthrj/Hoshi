import { getMediaFromRelation } from "@/utils/fetch";
import { redirect } from "next/navigation";

interface RedirectionParams {
	params: {
		id: number;
	};
}

export async function GET(request: Request, { params }: RedirectionParams) {
	const id: number = params.id;
	const data = await getMediaFromRelation("anime", id);
	redirect(`/anime/${data._id}/${data.slug}`);
}
