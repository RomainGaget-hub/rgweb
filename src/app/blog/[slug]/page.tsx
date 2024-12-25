import { getPostbySlug } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

import { ArrowLeftIcon } from '@radix-ui/react-icons';
import prisma from '@/lib/db';
import MarkdownRenderer from '@/components/MarkDownRenderer';

const PostPage = async ({ params }: { params: { slug: string } }) => {
	const post = await prisma.post.findUnique({
		where: {
			slug: params.slug,
		},
		include: {
			// user: true,
		},
	});

	if (!post) {
		notFound(); // 404 page not found
	}

	return (
		<section className='pb-24 pt-32'>
			<div className='container max-w-3xl'>
				<Link
					href='/blog'
					className='text-muted-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors hover:text-foreground'
				>
					<ArrowLeftIcon className='h-5 w-5' />
					<span>Back to posts</span>
				</Link>

				<header>
					<h1 className='title'>{post?.title}</h1>
					<p className='text-muted-foreground mt-3 text-xs'>
						{post?.published}
					</p>
				</header>

				<main className='prose dark:prose-invert mt-16'>
					<MarkdownRenderer content={post.content} />
				</main>
			</div>
		</section>
	);
};

export default PostPage;
