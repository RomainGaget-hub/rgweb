import { getPostbySlug } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';

const PostPage = async ({ params }: { params: { slug: string } }) => {
	const post = await getPostbySlug(params.slug);

	if (!post) {
		notFound(); // 404 page not found
	}

	const { metadata, content } = post;
	const { title, date, image } = metadata;

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

				<header className='mb-10'>
					<h1 className='title text-5xl font-bold text-primary'>{title}</h1>
					<p className='text-muted-foreground mt-3 text-xs'>
						{'Romain Gaget'} / {formatDate(date ?? '')}
					</p>
				</header>
				{image && (
					<div className='relative mb-6 h-80 w-full overflow-hidden rounded-lg'>
						<Image
							src={image}
							alt={title || ''}
							className='object-cover'
							fill
						/>
					</div>
				)}

				<main className='prose mt-16'>
					<MDXContent source={content} />
				</main>
			</div>
		</section>
	);
};

export default PostPage;
