'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Post, Tag } from '@prisma/client';
import BlogPostPreview from './BlogPostPreview';

export default function BlogSearch({
	initialPosts,
	tags,
}: {
	initialPosts: Post[];
	tags: Tag[];
}) {
	const [posts, setPosts] = useState(initialPosts);
	const [searchQuery, setSearchQuery] = useState('');
	const [activeTag, setActiveTag] = useState<Tag | null>(null);

	const handleSearch = async () => {
		try {
			// if searchQuery is empty, fetch all posts
			if (!searchQuery && !activeTag) {
				const res = await fetch('/api/blog/all');
				if (!res.ok) {
					throw new Error('Failed to fetch posts');
				}
				const allPosts = await res.json();
				setPosts(allPosts);
				return;
			}
			// Fetch filtered posts
			const res = await fetch('/api/blog/search', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: searchQuery, tag: activeTag }),
			});

			if (!res.ok) {
				throw new Error('Failed to fetch posts');
			}

			const filteredPosts = await res.json();
			setPosts(filteredPosts);
		} catch (error) {
			console.error('Error fetching filtered posts:', error);
		}
	};

	const handleTagClick = async (tag: Tag) => {
		// Update the active tag first
		const newTag = activeTag?.id === tag.id ? null : tag;
		setActiveTag(newTag);

		// Then trigger the search with the updated tag
		try {
			const res = await fetch('/api/blog/search', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: searchQuery, tag: newTag }),
			});

			if (!res.ok) {
				throw new Error('Failed to fetch posts');
			}

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
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSearch();
					}
				}}
				type='text'
				placeholder='Search for blog posts...'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className='w-full'
			/>

			{/* Updated Tag Filters */}
			<div className='flex flex-wrap gap-2'>
				{tags.map((tag) => (
					<button
						key={tag.id}
						onClick={() => handleTagClick(tag)}
						className={`rounded border px-4 py-2 ${
							activeTag?.id === tag.id
								? 'bg-primary text-foreground'
								: 'border-gray-300'
						}`}
					>
						{tag.name}
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
				{posts.map((post) => (
					<BlogPostPreview key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}
