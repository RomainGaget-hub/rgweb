'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import BlogPostPreview from './BlogPostPreview';
import { SanityPost, SanityCategory } from '@/types/sanity';
import { SanityPostFormatted } from '@/types/sanity';

export default function BlogSearch({
	initialPosts,
	categories,
}: {
	initialPosts: SanityPost[];
	categories: SanityCategory[];
}) {
	const [posts, setPosts] = useState(initialPosts);
	const [searchQuery, setSearchQuery] = useState('');
	const [activeCategory, setActiveCategory] = useState<SanityCategory | null>(
		null
	);

	const handleSearch = async () => {
		try {
			const queryParams = new URLSearchParams();
			if (searchQuery) queryParams.append('query', searchQuery);
			if (activeCategory) queryParams.append('category', activeCategory.title);

			const res = await fetch(`/api/blog/search?${queryParams.toString()}`);

			if (!res.ok) throw new Error('Failed to fetch posts');

			const filteredPosts = await res.json();
			setPosts(filteredPosts);
		} catch (error) {
			console.error('Error fetching filtered posts:', error);
		}
	};

	const handleCategoryClick = async (category: SanityCategory) => {
		// Toggle category selection
		const newCategory = activeCategory?._id === category._id ? null : category;
		setActiveCategory(newCategory);

		try {
			const queryParams = new URLSearchParams();
			if (searchQuery) queryParams.append('query', searchQuery);
			if (newCategory) queryParams.append('category', newCategory.title);

			const res = await fetch(`/api/blog/search?${queryParams.toString()}`);

			if (!res.ok) throw new Error('Failed to fetch posts');

			const filteredPosts = await res.json();
			setPosts(filteredPosts);
		} catch (error) {
			console.error('Error fetching filtered posts:', error);
		}
	};

	return (
		<div className='space-y-4'>
			{/* Search Input */}
			<Input
				onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
				type='text'
				placeholder='Search for blog posts...'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className='w-full'
			/>

			{/* Category Filters */}
			<div className='flex flex-wrap gap-2'>
				{categories.map((category) => (
					<button
						key={category._id}
						onClick={() => handleCategoryClick(category)}
						className={`rounded border px-4 py-2 ${
							activeCategory?._id === category._id
								? 'bg-primary text-foreground'
								: 'border-gray-300'
						}`}
					>
						{category.title}
					</button>
				))}
			</div>

			{/* Search Button */}
			<button
				onClick={handleSearch}
				className='rounded bg-primary px-4 py-2 text-foreground'
			>
				Search
			</button>

			{/* Posts */}
			<div className='space-y-4'>
				{posts.map((post) => {
					// Transform SanityPost to SanityPostFormatted
					const formattedPost: SanityPostFormatted = {
						id: post._id,
						_id: post._id,
						title: post.title,
						slug: post.slug,
						excerpt: post.excerpt,
						content: post.content || [], // Provide empty array as fallback
						createdAt: post.publishedAt,
						publishedAt: post.publishedAt,
						imagePath: post.imagePath || '',
						published: true,
						authorId: null,
						tags:
							post.tags?.map((tag) => ({
								id: tag._id,
								name: tag.name,
								createdAt: new Date(),
								updatedAt: new Date(),
							})) || [],
					};

					return <BlogPostPreview key={post._id} post={formattedPost} />;
				})}
			</div>
		</div>
	);
}
