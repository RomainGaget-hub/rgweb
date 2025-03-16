import { sanityClient } from '@/lib/sanity';

export type Post = {
	metadata: PostMetadata;
	content: string;
};

export type PostMetadata = {
	title?: string;
	date?: string;
	slug: string;
	published?: boolean;
	image?: string;
	author?: string;
};

export async function getPostbySlug(slug: string): Promise<Post | null> {
	try {
		const post = await sanityClient.fetch(
			`*[_type == "post" && slug.current == $slug][0] {
				_id,
				title,
				"slug": slug.current,
				content,
				"mainImage": mainImage.asset->url,
				publishedAt,
				published,
				"authorName": author->name
			}`,
			{ slug }
		);

		if (!post) {
			return null;
		}

		const metadata = {
			title: post.title,
			date: post.publishedAt,
			slug: post.slug,
			author: post.authorName || '',
			image: post.mainImage,
			published: post.published,
		};

		const content = post.content;

		return {
			metadata,
			content,
		};
	} catch (error) {
		console.error(error);
		return null;
	}
}
