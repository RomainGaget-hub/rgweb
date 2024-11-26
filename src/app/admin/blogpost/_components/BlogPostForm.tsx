'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createPost, updatePost } from '../../_actions/blogPost';
import { useFormState, useFormStatus } from 'react-dom';
import { Post } from '@prisma/client';
import Image from 'next/image';
import SimpleMdeReact from 'react-simplemde-editor';
import 'simplemde/dist/simplemde.min.css';
import { useState } from 'react';

export default function BlogPostForm({ blogPost }: { blogPost?: Post | null }) {
	const [error, action] = useFormState(
		blogPost == null ? createPost : updatePost.bind(null, blogPost.id),
		{}
	);
	const [content, setContent] = useState(blogPost?.content || '');
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
				<Label htmlFor='content'>Content</Label>
				<textarea
					id='content'
					name='content'
					required
					readOnly
					hidden
					value={content}
				/>
				<SimpleMdeReact
					value={blogPost?.content || content}
					onChange={setContent}
				/>
				{error?.content && <p className='text-red-500'>{error.content}</p>}
			</div>
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
