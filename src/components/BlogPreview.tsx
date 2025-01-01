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
		<section className='relative bg-background py-14'>
			<div className='container mx-auto flex max-w-5xl flex-col items-start justify-center px-4'>
				<h1 className='mb-20 text-4xl font-bold leading-tight md:text-6xl'>
					RECENT <br />
					<span className='text-muted'>BLOGPOSTS</span>
				</h1>
				<ul className='space-y-8'>
					{posts.map((post) => (
						<li key={post.id}>
							<BlogPostPreview post={post} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default BlogPreview;
