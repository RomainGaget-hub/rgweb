import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	const { pathname } = req.nextUrl;

	// Allow if token exists and user has admin role
	// if (pathname.startsWith('/admin')) {
	// 	if (!token || token.role !== 'admin') {
	// 		return NextResponse.redirect(new URL('/login', req.url));
	// 	}
	// }

	return NextResponse.next();
}

export const config = {
	matcher: ['/admin/:path*'], // Apply middleware only to admin routes
};
