import React from 'react';
import prisma from '@/lib/db';
import Link from 'next/link';

const Page = async () => {
	const posts = await prisma.post.findMany({
		take: 5,
		orderBy: {
			createdAt: 'desc',
		},
	});
	return (
		<div className='container flex flex-col content-center items-center justify-center gap-2'>
			<h1 className='py-5 font-bold'>Latest Post</h1>
			<ul className='my-20 border-slate-400'>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/blog/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Page;
