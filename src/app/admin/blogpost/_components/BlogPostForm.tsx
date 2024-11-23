'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createPost, updatePost } from '../../_actions/blogPost';
import { useFormState, useFormStatus } from 'react-dom';
import { Post } from '@prisma/client';
import Image from 'next/image';

export default function BlogPostForm({ blogPost }: { blogPost?: Post | null }) {
	const [error, action] = useFormState(
		blogPost == null ? createPost : updatePost.bind(null, blogPost.id),
		{}
	);
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
				<Label htmlFor='slug'>Slug</Label>
				<Input
					id='slug'
					name='slug'
					type='text'
					required
					defaultValue={blogPost?.slug || ''}
				/>
				{error?.slug && <p className='text-red-500'>{error.slug}</p>}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='content'>Content</Label>
				<Textarea
					id='content'
					name='content'
					required
					defaultValue={blogPost?.content || ''}
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
