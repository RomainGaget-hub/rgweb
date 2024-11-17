'use server';

import prisma from '@/lib/db';
import fs from 'fs/promises';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const fileSchema = z.instanceof(File, { message: 'Required' });
const imageSchema = fileSchema.refine(
	(file) => file.size === 0 || file.type.startsWith('image/')
);

const addSchema = z.object({
	title: z.string().min(3),
	slug: z.string().min(3),
	content: z.string().min(3),
	image: imageSchema.refine((file) => file.size > 0, 'Required'),
});

export async function createPost(prevState: unknown, formData: FormData) {
	const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
	if (!result.success) {
		return result.error.formErrors.fieldErrors;
	}

	const data = result.data;
	console.log(data, 'data');

	await fs.mkdir('blogs', { recursive: true });
	const imagePath = `blogs/${crypto.randomUUID()}-${data.image.name}`;
	await fs.writeFile(imagePath, Buffer.from(await data.image.arrayBuffer()));

	await prisma.post.create({
		data: {
			title: data.title,
			slug: (data.slug as string).replace(/\s+/g, '-').toLowerCase(),
			content: data.content,
			imagePath,
		},
	});

	redirect('/admin/blogpost');
}
