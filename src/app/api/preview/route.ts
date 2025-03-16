import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const secret = searchParams.get('secret');
	const slug = searchParams.get('slug') || '/';

	console.log('Received request for preview');
	console.log('URL:', req.url);
	console.log('Secret from query:', secret);
	console.log('Slug from query:', slug);
	console.log('Expected secret:', 'LfVnYq42KqbrcCwRiZmm');

	// TEMPORARY: Skip token check for testing
	// if (secret !== 'LfVnYq42KqbrcCwRiZmm') {
	// 	return new Response('Invalid token', { status: 401 });
	// }

	// Enable Draft Mode
	draftMode().enable();

	// Redirect to the path from the fetched post
	console.log('Redirecting to:', slug);
	redirect(slug);
}
