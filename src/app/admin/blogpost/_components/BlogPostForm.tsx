'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createPost, updatePost } from '../../_actions/blogPost';
import { useFormState, useFormStatus } from 'react-dom';
import { Post } from '@prisma/client';
import Image from 'next/image';
import 'simplemde/dist/simplemde.min.css';
import { useState } from 'react';

export default function BlogPostForm({ blogPost }: { blogPost?: Post | null }) {
	const [error, action] = useFormState(
		blogPost == null ? createPost : updatePost.bind(null, blogPost.id),
		{}
	);
	const [fileContent, setFileContent] = useState<string | null>(null);

	// Handler for uploading and reading the MDX file
	const handleFileUpload = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			if (e.target?.result) {
				setFileContent(e.target.result as string);
			}
		};
		reader.readAsText(file);
	};
	return (
		<form action={action} className='space-y-8'>
			<div className='space-y-2'>
				<Label htmlFor='title'>Title</Label>
				<Input
					id='title'
					name='title'
					type='text'
					required
					defaultValue={blogPost?.title || ''}
				/>
				{error?.title && <p className='text-red-500'>{error.title}</p>}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='mdxUpload'>Upload MDX File</Label>
				<Input
					id='mdxUpload'
					name='mdxUpload'
					type='file'
					accept='.mdx'
					required
					onChange={handleFileUpload}
				/>
				{error?.content && <p className='text-red-500'>{error.content}</p>}
			</div>
			{/* Hidden field to include MDX content in the form submission */}
			<input type='hidden' name='content' value={fileContent || ''} required />
			<div className='space-y-2'>
				<Label htmlFor='image'>Image</Label>
				<Input
					id='image'
					name='image'
					type='file'
					required={blogPost == null}
				/>
				{blogPost != null && (
					<Image
						src={`${blogPost.imagePath}`}
						alt={blogPost.title}
						width={200}
						height={200}
					/>
				)}
				{error?.image && <p className='text-red-500'>{error.image}</p>}
			</div>
			<SubmitButton />
		</form>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button type='submit' disabled={pending}>
			{pending ? 'Saving...' : 'Save'}
		</Button>
	);
}
