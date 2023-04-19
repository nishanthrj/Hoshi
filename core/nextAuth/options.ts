import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
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
				const user: User = await prisma.user.findUnique({
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

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.username = (user as CustomAdapterUser).username;
				token.email = user.email;
			}
			return token;
		},

		async session({ session, token }) {
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
					username: token.username,
					email: token.email,
				},
			};
		},
	},

	pages: {
		signIn: "/login",
	},
};
