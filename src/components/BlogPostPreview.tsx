'use client';

import React from 'react';
import { Post } from '@prisma/client';
import Link from 'next/link';
import { ArrowRightCircle } from 'lucide-react';

export default function BlogPostPreview({ post }: { post: Post }) {
	return (
		<div className='flex items-center justify-between'>
			{/* Content Section */}
			<div className='flex-1'>
				<h2 className='text-4 xl mb-2 font-bold'>{post.title}</h2>
				<p className='mb-4 text-gray-400'>{post.excerpt}</p>
				<p className='text-sm text-gray-500'>
					{new Date(post.createdAt).toLocaleDateString()}
				</p>
			</div>

			{/* Arrow Icon */}
			<Link href={`/blog/${post.slug}`}>
				<ArrowRightCircle
					size={32}
					className='text-orange-500 transition-colors hover:text-orange-400'
				/>
			</Link>
		</div>
	);
}
