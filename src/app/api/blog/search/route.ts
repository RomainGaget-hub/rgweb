import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { query, tag } = await req.json();

		// Fetch posts based on the search query and tag
		const posts = await prisma.post.findMany({
			where: {
				AND: [
					{
						OR: [
							{ title: { contains: query.toLowerCase() } },
							{ content: { contains: query.toLowerCase() } },
						],
					},
					tag
						? {
								tags: {
									some: { name: tag.name },
								},
							}
						: {},
				],
			},
			include: {
				tags: true, // Include related tags for each post
			},
		});

		return NextResponse.json(posts);
	} catch (error) {
		console.error('Error fetching posts:', error);
		return NextResponse.json(
			{ error: 'Something went wrong' },
			{ status: 500 }
		);
	}
}
