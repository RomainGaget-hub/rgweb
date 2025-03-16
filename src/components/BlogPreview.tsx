import React from 'react';
import BlogPostPreview from './BlogPostPreview';
import { sanityClient } from '@/lib/sanity';
import { SanityPost } from '@/types/sanity';

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
		<section className='relative bg-background py-6'>
			<div className='container mx-auto flex max-w-5xl flex-col items-start justify-center px-4'>
				<h1 className='mb-10 text-4xl font-bold leading-tight md:text-6xl'>
					RECENT <br />
					<span className='text-muted'>BLOGPOSTS</span>
				</h1>
				<ul className='space-y-8'>
					{formattedPosts.map((post) => (
						<li key={post.id}>
							<BlogPostPreview post={post} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default BlogPreview;
