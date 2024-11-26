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

	await fs.mkdir('public/blogImg', { recursive: true });
	const imagePath = `/blogImg/${crypto.randomUUID()}-${data.image.name}`;
	await fs.writeFile(
		`public${imagePath}`,
		Buffer.from(await data.image.arrayBuffer())
	);

	await prisma.post.create({
		data: {
			title: data.title,
			slug: createSlug(data.title),
			excerpt: createExcerpt(data.content),
			content: data.content,
			imagePath,
		},
	});

	redirect('/admin/blogpost');
}

const editSchema = addSchema.extend({
	image: imageSchema.optional(),
});

export async function updatePost(
	id: string,
	prevState: unknown,
	formData: FormData
) {
	const result = editSchema.safeParse(Object.fromEntries(formData.entries()));
	if (!result.success) {
		return result.error.formErrors.fieldErrors;
	}

	const data = result.data;
	console.log(data, 'data');

	const post = await prisma.post.findUnique({ where: { id } });

	if (post === null) {
		throw new Error('Post not found');
	}

	let imagePath = post.imagePath;
	if (data.image !== null && data.image && data.image.size > 0) {
		await fs.unlink(`public${post.imagePath}`);
		imagePath = `/blogImg/${crypto.randomUUID()}-${data.image.name}`;
		await fs.writeFile(
			`public${imagePath}`,
			Buffer.from(await data.image.arrayBuffer())
		);
	}

	await prisma.post.update({
		where: { id },
		data: {
			title: data.title,
			slug: createSlug(data.title),
			content: data.content,
			excerpt: createExcerpt(data.content),
			imagePath,
		},
	});

	redirect('/admin/blogpost');
}

export async function togglePostPublished(id: string, isPublished: boolean) {
	await prisma.post.update({
		where: { id },
		data: { published: isPublished },
	});
}

export async function deletePost(id: string) {
	const blogpost = await prisma.post.delete({ where: { id } });
	if (blogpost === null) {
		throw new Error('Post not found');
	}

	await fs.unlink(`public${blogpost.imagePath}`);
}

function createExcerpt(content: string, maxLength: number = 200): string {
	// Remove Markdown syntax using a simple regex (handles headings, links, etc.)
	const plainText = content
		.replace(/[#*_>\-\+~`]/g, '') // Remove basic Markdown symbols
		.replace(/\[(.*?)\]\(.*?\)/g, '$1') // Replace Markdown links [text](url) with "text"
		.replace(/!\[(.*?)\]\(.*?\)/g, '$1') // Replace image Markdown with "alt text"
		.replace(/(```[\s\S]*?```|`.*?`)/g, '') // Remove code blocks and inline code
		.replace(/\n+/g, ' ') // Collapse newlines into spaces
		.trim();

	// Truncate the plain text to the desired maxLength
	return plainText.length > maxLength
		? `${plainText.substring(0, maxLength)}...`
		: plainText;
}

function createSlug(title: string): string {
	return title
		.toLowerCase() // Convert to lowercase
		.trim() // Remove leading/trailing spaces
		.replace(/[^\w\s-]/g, '') // Remove special characters (except spaces and hyphens)
		.replace(/\s+/g, '-'); // Replace spaces with hyphens
}
