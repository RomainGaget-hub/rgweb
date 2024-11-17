'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createPost } from '../../_actions/blogPost';
import { useFormState, useFormStatus } from 'react-dom';

export default function BlogPostForm() {
	const [error, action] = useFormState(createPost, {});
	return (
		<form action={action} className='space-y-8'>
			<div className='space-y-2'>
				<Label htmlFor='title'>Title</Label>
				<Input id='title' name='title' type='text' required />
				{error?.title && <p className='text-red-500'>{error.title}</p>}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='slug'>Slug</Label>
				<Input id='slug' name='slug' type='text' required />
				{error?.slug && <p className='text-red-500'>{error.slug}</p>}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='content'>Content</Label>
				<Textarea id='content' name='content' required />
				{error?.content && <p className='text-red-500'>{error.content}</p>}
			</div>
			<div className='space-y-2'>
				<Label htmlFor='image'>Image</Label>
				<Input id='image' name='image' type='file' required />
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
