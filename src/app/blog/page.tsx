import React from 'react';
import prisma from '@/lib/db';
import Link from 'next/link';
import BlogPostCard from '@/components/BlogPostCard';

const Page = async () => {
	const posts = await prisma.post.findMany({
		take: 5,
		orderBy: {
			createdAt: 'desc',
		},
	});
	return (
		<div className='container mx-auto py-12'>
			<h1 className='mb-8 text-4xl font-bold text-white'>Latest Articles</h1>
			<div className='space-y-8'>
				{posts.map((post) => (
					<BlogPostCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Page;
