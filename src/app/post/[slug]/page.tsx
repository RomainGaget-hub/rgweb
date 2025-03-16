import React from 'react';
import { draftMode } from 'next/headers';

export default function PostPage({ params }: { params: { slug: string } }) {
	const { isEnabled } = draftMode();

	return (
		<div className='container mx-auto px-4 py-10'>
			<div className='mb-4 rounded bg-gray-100 p-4'>
				<h2 className='text-lg font-bold'>Preview Status</h2>
				<p>Draft Mode: {isEnabled ? 'Enabled' : 'Disabled'}</p>
				<p>Slug: {params.slug}</p>
			</div>

			<h1 className='mb-4 text-3xl font-bold'>Post: {params.slug}</h1>

			<div className='prose'>
				<p>This is a simple placeholder for post content.</p>
				<p>
					In a real implementation, this would fetch content from Sanity based
					on the slug.
				</p>
			</div>
		</div>
	);
}
