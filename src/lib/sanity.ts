import { createClient } from 'next-sanity';
import { draftMode } from 'next/headers';

// Regular client for published content
export const sanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	apiVersion: '2023-05-03',
	useCdn: process.env.NODE_ENV === 'production',
});

// Client for preview content (no CDN and with a token)
export const previewClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	apiVersion: '2023-05-03',
	useCdn: false,
	token: process.env.SANITY_API_TOKEN,
});

// Helper function to get the correct client based on preview state
export function getClient() {
	// Check if draftMode is enabled
	const isDraftMode = draftMode().isEnabled;
	return isDraftMode ? previewClient : sanityClient;
}

export async function getPosts() {
	const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "imagePath": mainImage.asset->_id,
    excerpt,
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->title
  }`;

	return await getClient().fetch(query);
}

// Helper functions for common queries
export async function getAllPosts() {
	const query = `*[_type == "post"] | order(publishedAt desc) {
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

	return await getClient().fetch(query);
}

export async function getPostBySlug(slug: string) {
	return getClient().fetch(
		`*[_type == "post" && slug.current == $slug][0] {
		_id,
		title,
		"slug": slug.current,
		excerpt,
		content,
		"mainImage": mainImage.asset->url,
		publishedAt,
		"tags": tags[]->{ _id, name }
	}`,
		{ slug }
	);
}

export async function getAllTags() {
	const query = `*[_type == "category"] {
    _id,
    title
  }`;

	return await getClient().fetch(query);
}

export async function searchPosts(query: string = '', tagId?: string) {
	let filter = '';
	const params: Record<string, string> = {};

	if (query && tagId) {
		filter = `&& (title match $query || excerpt match $query) && $tagId in tags[]._ref`;
		params.query = `*${query}*`;
		params.tagId = tagId;
	} else if (query) {
		filter = `&& (title match $query || excerpt match $query)`;
		params.query = `*${query}*`;
	} else if (tagId) {
		filter = `&& $tagId in tags[]._ref`;
		params.tagId = tagId;
	}

	return getClient().fetch(
		`*[_type == "post" ${filter}] | order(publishedAt desc) {
		_id,
		title,
		slug,
		excerpt,
		"mainImage": mainImage.asset->url,
		publishedAt,
		"tags": tags[]->{ _id, name }
	}`,
		params
	);
}
