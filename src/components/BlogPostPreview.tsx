import React from 'react';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Post } from '@prisma/client';
import Image from 'next/image';

export default function BlogPostPreview({
	post,
	key,
}: {
	post: Post;
	key: number;
}) {
	return (
		<Card className='max-w-sm shadow-md' key={key}>
			{/* Image */}
			<div className='flex h-48 w-full items-center justify-center bg-gray-200'>
				<div className='flex h-48 w-full items-center justify-center bg-gray-200'>
					<img src={post.imagePath} alt={post.title} width={200} height={200} />
				</div>{' '}
			</div>

			{/* Content */}
			<CardContent className='p-4'>
				<CardTitle className='mb-2 text-lg font-semibold text-gray-800'>
					{post.title}
				</CardTitle>
				<p className='mb-4 text-sm text-gray-600'>
					{post.content}{' '}
					<a href='#' className='text-primary'>
						Read more
					</a>
				</p>
			</CardContent>

			{/* Author Section */}
			<CardFooter className='flex items-center border-t border-gray-100 p-4'>
				<div className='h-8 w-8 flex-shrink-0 rounded-full bg-gray-300' />{' '}
				{/* Placeholder for author image */}
				<div className='ml-2 text-sm'>
					<p className='font-medium text-gray-800'>{post.authorId}</p>
					{/* <p className='text-gray-500'>{post.createdAt}</p> */}
				</div>
			</CardFooter>
		</Card>
	);
}
