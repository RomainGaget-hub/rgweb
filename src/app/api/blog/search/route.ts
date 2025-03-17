import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity';

export async function GET(req: NextRequest) {
	const url = new URL(req.url);
	const query = url.searchParams.get('query') || '';
	const category = url.searchParams.get('category') || '';

	// Sanity GROQ Query
	const sanityQuery = `*[_type == "post" 
    && ($query == "" || title match $query || excerpt match $query)
    && ($category == "" || $category in categories[]->title)
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "imagePath": mainImage.asset->url,
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->title,
    "tags": tags[]->{ _id, name }
  }`;

	// Fix the params object
	const params: Record<string, string> = {
		query: query ? `*${query}*` : '',
		category: category,
	};

	try {
		// Fetch posts with the properly constructed params
		const posts = await sanityClient.fetch(sanityQuery, params);
		return NextResponse.json(posts);
	} catch (error) {
		console.error('Error fetching posts:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch posts' },
			{ status: 500 }
		);
	}
}
