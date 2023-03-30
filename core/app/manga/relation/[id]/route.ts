import { getMediaFromRelation } from "@/utils/fetch";
import { redirect } from "next/navigation";

interface RedirectionParams {
	params: {
		id: number;
	};
}

export async function GET(request: Request, { params }: RedirectionParams) {
	const id: number = params.id;
	const data = await getMediaFromRelation("manga", id);
	redirect(`/manga/${data._id}/${data.slug}`);
}
