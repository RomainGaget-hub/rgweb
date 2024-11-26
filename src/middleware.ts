import { NextRequest, NextResponse } from 'next/server';
import { isValidPassword } from './lib/utils';

export async function middleware(req: NextRequest) {
	if ((await isAuthanticated(req)) === false) {
		return new NextResponse('Unauthorized', {
			status: 401,
			headers: { 'WWW-Authenticate': 'Basic' },
		});
	}
}

async function isAuthanticated(req: NextRequest) {
	const authHeader =
		req.headers.get('Authorization') || req.headers.get('authorization');

	if (!authHeader) return false;

	const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64')
		.toString()
		.split(':');

	console.log(username, password);
	console.log(process.env.ADMIN_USERNAME, process.env.ADMIN_HASHED_PASSWORD);

	return (
		username === process.env.ADMIN_USERNAME &&
		password === process.env.ADMIN_HASHED_PASSWORD
	);
}

export const config = {
	matcher: ['/admin/:path*'], // Apply middleware only to admin routes
};
