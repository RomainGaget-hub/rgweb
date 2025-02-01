'use client';

import React from 'react';
import { Post, Tag } from '@prisma/client';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface PostWithTags extends Post {
	tags?: Tag[];
}

export default function BlogPostPreview({ post }: { post: PostWithTags }) {
	return (
		<Link href={`/blog/${post.slug}`}>
			<div className='mt-12 flex items-center justify-between'>
				{/* Content Section */}
				<div className='flex-1'>
					<h2 className='mb-2 text-4xl font-bold'>{post.title}</h2>
					<p className='mb-4 text-muted'>{post.excerpt}</p>
					<div className='flex items-center justify-between'>
						<p className='text-sm text-muted'>
							{formatDate(
								typeof post.createdAt === 'object'
									? post.createdAt?.toISOString()
									: (post.createdAt ?? '')
							)}
						</p>
						<div className='flex items-center gap-2'>
							{post.tags?.map((tag) => (
								<span
									key={tag.id}
									className='rounded-full bg-secondary px-3 py-1 text-sm text-background'
								>
									{tag.name}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
