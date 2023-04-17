import { getMediaFromRelation } from "@/utils/fetch";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const id: number = Number(searchParams.get("id"));
	const ext: string = searchParams.get("ext")!;
	const data = await getMediaFromRelation("anime", ext, id);
	redirect(`/anime/${data._id}`);
}
