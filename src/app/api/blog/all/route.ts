import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const posts = await prisma.post.findMany({
			include: {
				tags: true, // Include related tags
			},
			orderBy: {
				createdAt: 'desc', // Sort by newest posts
			},
		});

		return NextResponse.json(posts);
	} catch (error) {
		console.error('Error fetching all posts:', error);
		return NextResponse.json(
			{ error: 'Something went wrong' },
			{ status: 500 }
		);
	}
}
