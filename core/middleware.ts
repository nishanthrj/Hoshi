import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Database } from "@/types/db";

const protectedPages = ["/animelist", "/mangalist", "/settings", "/stats"];

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	const supabase = createMiddlewareSupabaseClient<Database>({ req, res });

	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session && protectedPages.some((page) => req.nextUrl.pathname.includes(page))) {
		redirect("/");
	}

	return res;
}
