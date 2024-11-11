import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/db';

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials) {
					return null;
				}
				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});
				// Add password check here (e.g., bcrypt.compare)
				if (user && user.password === credentials.password) {
					return user;
				}
				return null;
			},
		}),
	],
	callbacks: {
		async session({ session, user }) {
			if (session.user) {
				session.user.role = user.role;
			}
			return session;
		},
	},
});
