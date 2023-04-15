import bcrypt from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),

	secret: process.env.NEXTAUTH_SECRET,

	session: {
		strategy: "jwt",
		maxAge: 60 * 24 * 60 * 60,
	},

	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "E-Mail", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const user = await prisma.user.findUnique({
					where: {
						email: credentials?.email,
					},
				});

				if (user && (await bcrypt.compare(credentials?.password!, user.password))) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
