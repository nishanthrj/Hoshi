import { getMangaFromRelation } from "@/utils/fetch";
import { redirect } from "next/navigation";

export async function GET(request: Request, { params }: any) {
	const id: number = params.id;
	const data = await getMangaFromRelation(id);
	redirect(`/manga/${data._id}/${data.slug}`);
}
