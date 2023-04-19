import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/prisma/client";

export async function POST(request: Request) {
	const data = await request.json();
	const user: User = await prisma.user.create({
		data: {
			email: data.email,
			username: data.username,
			password: await bcrypt.hash(data.password, 10),
			image: null,
		},
	});

	if (user)
		return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
	else return NextResponse.json({ message: "Failed to register user" }, { status: 500 });
}
