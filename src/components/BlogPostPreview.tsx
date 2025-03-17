'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { SanityBlock } from '@/types/sanity';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

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
	tags?: {
		id: string;
		name: string;
		createdAt: Date;
		updatedAt: Date;
	}[];
}

export default function BlogPostPreview({
	post,
}: {
	post: SanityPostFormatted;
}) {
	return (
		<div className='border-border group relative border-b pb-8 pt-8 first:pt-0 last:border-0'>
			<div className='flex flex-col gap-6 md:flex-row'>
				{/* Content */}
				<div className='flex-1 space-y-4'>
					{/* Tags */}
					{post.tags && post.tags.length > 0 && (
						<div className='flex flex-wrap gap-2'>
							{post.tags.slice(0, 3).map((tag) => (
								<span
									key={tag.id}
									className='bg-primary/10 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-primary'
								>
									<Tag className='mr-1 h-3 w-3' />
									{tag.name}
								</span>
							))}
							{post.tags.length > 3 && (
								<span className='inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground'>
									+{post.tags.length - 3} more
								</span>
							)}
						</div>
					)}

					{/* Title */}
					<h2 className='text-2xl font-bold leading-tight tracking-tight transition-colors group-hover:text-primary md:text-3xl'>
						{post.title}
					</h2>

					{/* Excerpt */}
					<p className='text-muted-foreground text-base md:text-lg'>
						{post.excerpt}
					</p>

					{/* Meta information */}
					<div className='flex items-center gap-4'>
						<div className='text-muted-foreground flex items-center text-sm'>
							<Calendar className='mr-1.5 h-4 w-4' />
							<time dateTime={post.publishedAt}>
								{formatDate(post.publishedAt)}
							</time>
						</div>

						<Link
							href={`/blog/${post.slug}`}
							className='hover:text-primary/80 inline-flex items-center text-sm font-medium text-primary transition-colors'
						>
							Read more
							<ArrowRight className='ml-1.5 h-4 w-4' />
						</Link>
					</div>
				</div>

				{/* Image (if available) - shown on the right */}
				{post.imagePath && (
					<div className='h-48 w-full shrink-0 overflow-hidden rounded-lg md:h-36 md:w-48 lg:h-48 lg:w-64'>
						<Image
							src={post.imagePath}
							alt={post.title}
							width={300}
							height={200}
							className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
							onError={(e) => {
								// Replace with a placeholder if image fails to load
								const imgElement = e.currentTarget as HTMLImageElement;
								imgElement.src =
									'https://via.placeholder.com/300x200?text=No+Image';
							}}
						/>
					</div>
				)}
			</div>

			{/* Make the entire article clickable */}
			<Link href={`/blog/${post.slug}`} className='absolute inset-0'>
				<span className='sr-only'>Read {post.title}</span>
			</Link>
		</div>
	);
}
