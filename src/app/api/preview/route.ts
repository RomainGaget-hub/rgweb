import { previewSecret } from '../../../../sanity/lib/preview';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const secret = searchParams.get('secret');
	const slug = searchParams.get('slug') || '/';

	// Check the secret
	if (secret !== previewSecret) {
		return new Response('Invalid token', { status: 401 });
	}

	// Enable Draft Mode
	draftMode().enable();

	// Redirect to the path from the fetched post
	redirect(slug);
}
