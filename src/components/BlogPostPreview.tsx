'use client';

import React from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { SanityBlock } from '@/types/sanity';

interface SanityPostFormatted {
	_id: string;
	title: string;
	slug: string;
	content: SanityBlock[];
	excerpt?: string;
	imagePath: string;
	publishedAt: string;
	authorName?: string;
	categories?: string[];
}

export default function BlogPostPreview({
	post,
}: {
	post: SanityPostFormatted;
}) {
	return (
		<Link href={`/blog/${post.slug}`}>
			<div className='mt-12 flex items-center justify-between'>
				{/* Content Section */}
				<div className='flex-1'>
					<h2 className='mb-2 text-4xl font-bold'>{post.title}</h2>
					<p className='mb-4 text-muted'>{post.excerpt}</p>

					<div className='flex items-center justify-between'>
						<p className='text-sm text-muted'>{formatDate(post.publishedAt)}</p>
						<div className='flex items-center gap-2'>
							{post.categories?.map((category, index) => (
								<span
									key={index}
									className='rounded-full bg-secondary px-3 py-1 text-sm text-background'
								>
									{category}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
