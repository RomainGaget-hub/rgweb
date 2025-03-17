import React from 'react';
import BlogPostPreview from './BlogPostPreview';
import { sanityClient } from '@/lib/sanity';
import { SanityPost } from '@/types/sanity';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BlogPreview = async () => {
	// Fetch latest 3 blog posts from Sanity
	const posts: SanityPost[] = await sanityClient.fetch(
		`*[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      content,
      "slug": slug.current,
      excerpt,
      "imagePath": mainImage.asset->url,
      publishedAt,
      "authorName": author->name,
      "categories": categories[]->title
    }`
	);

	console.log('posts', posts);
	// Log the date format specifically
	posts.forEach((post) => {
		console.log(
			`Post "${post.title}" publishedAt:`,
			post.publishedAt,
			'type:',
			typeof post.publishedAt
		);
	});

	// Format posts to match component structure
	const formattedPosts = posts.map((post) => ({
		id: post._id,
		_id: post._id,
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		content: post.content || [],
		publishedAt: post.publishedAt,
		categories: post.categories || [],
		imagePath: post.imagePath || '',
		published: true,
		authorId: null,
	}));

	return (
		<section className='relative bg-background py-16 sm:py-20'>
			<div className='container relative z-10 mx-auto px-5 sm:px-6 md:px-8'>
				<div className='mx-auto max-w-4xl'>
					{/* Section heading */}
					<h2 className='mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
						RECENT <span className='text-primary'>BLOGPOSTS</span>
					</h2>

					{/* Blog posts list */}
					<ul className='space-y-8 sm:space-y-10'>
						{formattedPosts.map((post) => (
							<li
								key={post.id}
								className='border-muted/10 hover:border-primary/20 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md sm:p-8'
							>
								<BlogPostPreview post={post} />
							</li>
						))}
					</ul>

					{/* View all posts link */}
					<div className='mt-10 flex justify-center'>
						<Link
							href='/blog'
							className='bg-primary/10 hover:bg-primary/20 group inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-primary transition-all'
						>
							View all posts
							<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogPreview;
