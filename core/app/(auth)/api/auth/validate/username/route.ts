import "server-only";

import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import type { Database } from "@/types/db";

export const revalidate = 0;

export async function POST(request: Request) {
	const supabase = createClient<Database>(
		process.env.SUPABASE_ADMIN_URL!,
		process.env.SUPABASE_ADMIN_KEY!,
	);

	const { username } = await request.json();

	const { data } = await supabase.from("profiles").select("*").eq("username", username);
	const userExists = data && data?.length > 0;

	return NextResponse.json({ exists: Boolean(userExists) });
}
