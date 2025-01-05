import prisma from '@/lib/db';

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
};

export async function getPostbySlug(slug: string): Promise<Post | null> {
	try {
		const post = await prisma.post.findUnique({
			where: {
				slug: slug,
			},
			include: {
				author: {
					select: {
						name: true, // Select only the `name` field from the related `User`
					},
				},
			},
		});

		if (!post) {
			return null;
		}
		//const { data, content } = matter(post.content);
		const metadata = {
			title: post.title,
			date: post.createdAt.toISOString(),
			slug: post.slug,
			author: post.author ? post.author.name : '',
			image: post.imagePath,
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
