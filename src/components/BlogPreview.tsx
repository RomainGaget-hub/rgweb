// components/BlogPreview.tsx
import React from 'react';
import BlogPostPreview from './BlogPostPreview';
import prisma from '@/lib/db';

const BlogPreview = async () => {
	const posts = await prisma.post.findMany({
		take: 3,
		orderBy: {
			createdAt: 'desc',
		},
	});

	return (
		<section id='blog' className='bg-gray-100 px-4 py-12'>
			<div className='container mx-auto'>
				<h2 className='mb-8 text-center text-3xl font-bold'>Blog</h2>
				<ul className='space-y-8'>
					{posts.map((post, index) => (
						<BlogPostPreview key={index} post={post} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default BlogPreview;
