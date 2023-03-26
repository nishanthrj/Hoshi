import { getAnimeFromRelation } from "@/utils/fetch";
import { redirect } from "next/navigation";

export async function GET(request: Request, { params }: any) {
	const id: number = params.id;
	const data = await getAnimeFromRelation(id);
	redirect(`/anime/${data._id}/${data.slug}`);
}
