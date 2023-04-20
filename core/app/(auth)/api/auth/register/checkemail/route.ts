import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
	const data = await request.json();
	const userExists: User | null = await prisma.user.findUnique({
		where: {
			email: data.email,
		},
	});

	return NextResponse.json({ exists: Boolean(userExists) });
}
