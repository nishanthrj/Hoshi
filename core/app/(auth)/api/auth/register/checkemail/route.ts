import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

export async function POST(request: Request) {
	const data = await request.json();
	const userExists = await prisma.user.findUnique({
		where: {
			email: data.email,
		},
	});

	return NextResponse.json({ exists: Boolean(userExists) });
}
