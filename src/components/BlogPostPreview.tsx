'use client';

import React from 'react';
import { Post } from '@prisma/client';
import Link from 'next/link';
import { ArrowRightCircle } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function BlogPostPreview({ post }: { post: Post }) {
	return (
		<Link href={`/blog/${post.slug}`}>
			<div className='flex items-center justify-between'>
				{/* Content Section */}
				<div className='flex-1'>
					<h2 className='mb-2 text-4xl font-bold'>{post.title}</h2>
					<p className='mb-4 text-muted'>{post.excerpt}</p>
					<div className='flex items-center justify-between'>
						<p className='text-sm text-muted'>
							{formatDate(post.createdAt?.toISOString() ?? '')}
						</p>
						{/* */}
						{/* <Link href={`/blog/${post.slug}`}>
							<ArrowRightCircle
								size={32}
								className='text-orange-500 transition-colors hover:text-orange-400'
							/>
						</Link> */}
						{/* Tags */}
						<div className='flex items-center gap-2'>
							{post.tags.map((tag) => (
								<span key={tag.id} className='text-sm text-foreground'>
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
