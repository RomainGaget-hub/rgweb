// components/BlogPreview.tsx
import React from 'react';
import BlogPostPreview from './BlogPostPreview';

const BlogPreview = () => {
	const posts = [
		{
			title: 'First Blog Post',
			excerpt: 'This is a short summary.',
			date: '2024-10-07',
		},
		{
			title: 'Another Blog Post',
			excerpt: 'More details on another topic.',
			date: '2024-10-01',
		},
	];

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
