import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import type { Database } from "@/types/db";

export const revalidate = 0;

export async function POST(request: Request) {
	const supabase = createRouteHandlerSupabaseClient<Database>({
		headers,
		cookies,
	});

	const { username } = await request.json();

	const { data } = await supabase.from("profiles").select("*").eq("username", username);
	const userExists = data && data?.length > 0;

	return NextResponse.json({ exists: Boolean(userExists) });
}
