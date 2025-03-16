import { NextResponse } from 'next/server';
import { getClient } from '@/lib/sanity';

export const GET = async () => {
	const posts = await getClient()
		.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "imagePath": mainImage.asset->url,
    publishedAt
  }`);

	if (!posts) {
		return NextResponse.json({ message: 'Not Found' }, { status: 404 });
	}

	return NextResponse.json(posts);
};

export const POST = async () => {
	// Note: Creating posts via API requires a token with write permissions
	// This is just a placeholder - in production you'd want to add authentication
	return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
};
