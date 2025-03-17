import { getPostBySlug } from '@/lib/sanity';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { ArrowLeftIcon, PersonIcon } from '@radix-ui/react-icons';
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
		<div className='min-h-screen bg-background'>
			<div className='mx-auto max-w-3xl px-5 py-8 sm:px-6 md:px-8'>
				{/* Back button */}
				<Link
					href='/blog'
					className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-all hover:text-primary'
				>
					<ArrowLeftIcon className='h-4 w-4' />
					<span>Back to all posts</span>
				</Link>

				{/* Article header */}
				<header className='mb-10'>
					<h1 className='mb-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl'>
						{title}
					</h1>

					{excerpt && (
						<p className='mb-6 text-base leading-relaxed text-muted sm:text-lg md:text-xl'>
							{excerpt}
						</p>
					)}

					{/* Author and date info */}
					<div className='border-muted/10 mb-8 flex items-center gap-4 border-b pb-8'>
						<div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full'>
							<PersonIcon className='h-5 w-5 text-primary' />
						</div>
						<div>
							<div className='font-medium text-foreground'>Romain Gaget</div>
							<div className='flex items-center gap-2 text-sm text-muted'>
								<time dateTime={publishedAt}>
									{formatDate(publishedAt ?? '')}
								</time>
								<span>·</span>
								<span>5 min read</span>
							</div>
						</div>
					</div>
				</header>

				{/* Featured image */}
				{mainImage && (
					<div className='mb-10 overflow-hidden rounded-lg'>
						<div className='relative aspect-[16/9] w-full'>
							<Image
								src={mainImage}
								alt={title || ''}
								className='object-cover'
								fill
								priority
								quality={95}
							/>
						</div>
					</div>
				)}

				{/* Content */}
				<article className='prose prose-lg mx-auto max-w-none'>
					<SanityContent content={content} />
				</article>

				{/* Footer with share or related posts */}
				<div className='border-muted/10 mt-16 border-t pt-8'>
					<div className='flex flex-col items-center justify-center text-center'>
						<h3 className='mb-4 text-base font-medium sm:text-lg'>
							Enjoyed this article?
						</h3>
						<p className='mb-6 text-muted'>
							Check out more posts on the blog or follow me on social media.
						</p>
						<Link
							href='/blog'
							className='hover:bg-primary/90 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all'
						>
							Explore more articles
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostPage;
