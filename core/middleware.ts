import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";
import { Database } from "@/types/db";

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
	await supabase.auth.getSession();
	return res;
}
