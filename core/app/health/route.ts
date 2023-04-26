import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
	const res = await fetch("http://api.hoshi.ga/");
	return NextResponse.json(await res.json());
}
