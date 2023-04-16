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
			credentials: {},
			async authorize(credentials) {
				const { email, password } = credentials as Credentials;
				const user = await prisma.user.findUnique({
					where: {
						email: email,
					},
				});

				if (user && (await bcrypt.compare(password, user.password))) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],

	pages: {
		signIn: "/login",
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
