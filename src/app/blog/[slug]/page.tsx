import { getPostBySlug } from '@/lib/sanity';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { ArrowLeftIcon, CalendarIcon, PersonIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import SanityContent from '@/components/SanityContent';

const PostPage = async ({ params }: { params: { slug: string } }) => {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		notFound(); // 404 page not found
	}

	const { title, publishedAt, mainImage, content, excerpt } = post;

	return (
		<div className='min-h-screen bg-gradient-to-b from-background to-background'>
			{/* Hero section with image and overlay */}
			{mainImage && (
				<div className='relative h-[50vh] w-full'>
					<div className='absolute inset-0 z-10 bg-black bg-opacity-50' />
					<Image
						src={mainImage}
						alt={title || ''}
						className='object-cover'
						fill
						priority
						quality={90}
					/>
					<div className='absolute inset-0 z-20 flex items-center justify-center p-6'>
						<div className='max-w-4xl text-center'>
							<h1 className='mb-4 text-4xl font-bold leading-tight text-white md:text-6xl'>
								{title}
							</h1>
							{excerpt && (
								<p className='mx-auto max-w-2xl text-lg text-white text-opacity-80 md:text-xl'>
									{excerpt}
								</p>
							)}
						</div>
					</div>
				</div>
			)}

			<div className='container mx-auto max-w-4xl px-4 py-12'>
				{/* Back button */}
				<Link
					href='/blog'
					className='mb-8 inline-flex items-center gap-2 rounded-full bg-primary bg-opacity-10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:bg-opacity-20'
				>
					<ArrowLeftIcon className='h-4 w-4' />
					<span>Back to all posts</span>
				</Link>

				{/* Meta information */}
				<div className='mb-12 flex items-center gap-6 border-b border-muted border-opacity-20 pb-6 text-sm text-muted'>
					<div className='flex items-center gap-2'>
						<PersonIcon className='h-4 w-4' />
						<span>Romain Gaget</span>
					</div>
					<div className='flex items-center gap-2'>
						<CalendarIcon className='h-4 w-4' />
						<time dateTime={publishedAt}>{formatDate(publishedAt ?? '')}</time>
					</div>
				</div>

				{/* If no hero image, show title here */}
				{!mainImage && (
					<header className='mb-12'>
						<h1 className='mb-4 text-4xl font-bold text-primary md:text-5xl'>
							{title}
						</h1>
						{excerpt && <p className='text-xl text-muted'>{excerpt}</p>}
					</header>
				)}

				{/* Content */}
				<article className='light:bg-white light:bg-opacity-90 rounded-xl p-6 shadow-lg backdrop-blur-sm dark:bg-background dark:bg-opacity-50 md:p-8'>
					<SanityContent content={content} />
				</article>
			</div>
		</div>
	);
};

export default PostPage;
