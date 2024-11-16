'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BlogPostForm() {
	return (
		<form className='space-y-8'>
			<div className='space-y-2'>
				<Label htmlFor='title'>Title</Label>
				<Input id='title' name='title' type='text' required />
			</div>
		</form>
	);
}
