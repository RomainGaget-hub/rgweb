import React from 'react';
import prisma from '@/lib/db';
import Link from 'next/link';
import BlogPostCard from '@/components/BlogPostCard';
import { Input } from '@/components/ui/input';

const Page = async () => {
	const posts = await prisma.post.findMany({
		take: 5,
		orderBy: {
			createdAt: 'desc',
		},
	});

	const tags = ['react', 'nextjs', 'tailwindcss', 'javascript', 'typescript'];
	return (
		<div className='container mx-auto py-12'>
			<h1 className='mb-8 text-6xl font-bold text-primary'>RG BLOG</h1>
			<p className='mb-8 text-lg text-muted'>
				Explore in-depth articles and tutorials, sharing insights and practical
				tips to help you grow as a developer.
			</p>
			<div className='mb-8'>
				<Input
					type='text'
					placeholder='Search blog posts...'
					className='w-full rounded-lg border border-gray-200 p-4'
				/>
			</div>

			<div className='mb-8 flex gap-4'>
				<span className='text-sm text-gray-500'>Tags:</span>
				{tags.map((tag) => (
					<Link key={tag} href={`/blog/tags/${tag}`}>
						<span className='text-sm text-gray-500 hover:text-primary'>
							#{tag}
						</span>
					</Link>
				))}
			</div>
			<div className='space-y-8'>
				{posts.map((post) => (
					<BlogPostCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Page;
