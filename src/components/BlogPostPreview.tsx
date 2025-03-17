'use client';

import React from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { SanityBlock } from '@/types/sanity';
import { Calendar, Tag } from 'lucide-react';

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
		<Link href={`/blog/${post.slug}`} className='block'>
			<div className='flex flex-col'>
				{/* Title */}
				<h3 className='mb-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl'>
					{post.title}
				</h3>

				{/* Excerpt */}
				<p className='mb-4 text-sm text-muted sm:text-base'>{post.excerpt}</p>

				{/* Meta information */}
				<div className='mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
					{/* Date */}
					<div className='flex items-center text-xs text-muted sm:text-sm'>
						<Calendar className='mr-1 h-3 w-3 sm:h-4 sm:w-4' />
						<time dateTime={post.publishedAt}>
							{formatDate(post.publishedAt)}
						</time>
					</div>

					{/* Categories */}
					{post.categories && post.categories.length > 0 && (
						<div className='flex flex-wrap gap-2'>
							{post.categories.map((category, index) => (
								<span
									key={index}
									className='bg-primary/10 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-primary sm:text-sm'
								>
									<Tag className='mr-1 h-3 w-3' />
									{category}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		</Link>
	);
}
