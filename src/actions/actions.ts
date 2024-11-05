'use server';

import prisma from '@/lib/db';

export async function createPost({ title, content }) {
	return await prisma.post.create({
		data: {
			title,
			content,
		},
	});
}
