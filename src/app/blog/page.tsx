import React from 'react';
import prisma from '@/lib/db';
import Link from 'next/link';
import { createPost } from '@/actions/actions';

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
			<form
				action={createPost}
				className='mx-auto flex w-[300px] flex-col gap-y-2'
			>
				<input
					type='text'
					name='title'
					placeholder='Title'
					className='rounded-sm px-2 py-1'
				/>
				<textarea
					name='content'
					rows={5}
					placeholder='Content'
					className='rounded-sm px-2 py-1'
				/>
				<button
					type='submit'
					className='rounded-sm bg-blue-500 px-2 py-1 text-white'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Page;
