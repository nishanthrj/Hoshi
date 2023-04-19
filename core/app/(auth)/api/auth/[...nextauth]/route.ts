import NextAuth from "next-auth";
import { authOptions } from "@/nextAuth/options";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
