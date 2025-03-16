import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity';

export async function GET(req: NextRequest) {
	const url = new URL(req.url);
	const query = url.searchParams.get('query') || '';
	const category = url.searchParams.get('category') || '';

	// Sanity GROQ Query
	const sanityQuery = `*[_type == "post" 
    && ($query == "" || title match $query)
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
    "categories": categories[]->title
  }`;

	// Fix the params object
	const params: Record<string, string> = {};
	if (query) {
		params.query = `${query}*`;
	}
	if (category) {
		params.category = category;
	}

	// Then use the properly constructed params object
	const posts = await sanityClient.fetch(sanityQuery, params);

	return NextResponse.json(posts);
}
