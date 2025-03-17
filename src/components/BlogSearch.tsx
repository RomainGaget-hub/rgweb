'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import BlogPostPreview from './BlogPostPreview';
import { SanityPost, SanityCategory } from '@/types/sanity';
import { SanityPostFormatted } from '@/types/sanity';
import {
	Search,
	Filter,
	ChevronDown,
	ArrowUpDown,
	Calendar,
	Clock,
	AlertCircle,
} from 'lucide-react';

export default function BlogSearch({
	initialPosts,
	categories,
}: {
	initialPosts: SanityPost[];
	categories: SanityCategory[];
}) {
	const [posts, setPosts] = useState<SanityPost[]>(initialPosts);
	const [searchQuery, setSearchQuery] = useState('');
	const [activeCategory, setActiveCategory] = useState<SanityCategory | null>(
		null
	);
	const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Apply sorting to posts
	useEffect(() => {
		const sortedPosts = [...posts].sort((a, b) => {
			const dateA = new Date(a.publishedAt).getTime();
			const dateB = new Date(b.publishedAt).getTime();
			return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
		});
		setPosts(sortedPosts);
	}, [sortOrder]);

	const handleSearch = async () => {
		try {
			setIsLoading(true);
			setError(null);

			const queryParams = new URLSearchParams();
			if (searchQuery.trim()) queryParams.append('query', searchQuery.trim());
			if (activeCategory) queryParams.append('category', activeCategory.title);

			const res = await fetch(`/api/blog/search?${queryParams.toString()}`);

			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.error || 'Failed to fetch posts');
			}

			const filteredPosts = await res.json();

			// Apply current sort order to new results
			const sortedPosts = [...filteredPosts].sort((a, b) => {
				const dateA = new Date(a.publishedAt).getTime();
				const dateB = new Date(b.publishedAt).getTime();
				return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
			});

			setPosts(sortedPosts);
		} catch (error) {
			console.error('Error fetching filtered posts:', error);
			setError('Failed to fetch posts. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleCategoryClick = async (category: SanityCategory) => {
		// Toggle category selection
		const newCategory = activeCategory?._id === category._id ? null : category;
		setActiveCategory(newCategory);

		try {
			setIsLoading(true);
			setError(null);

			const queryParams = new URLSearchParams();
			if (searchQuery.trim()) queryParams.append('query', searchQuery.trim());
			if (newCategory) queryParams.append('category', newCategory.title);

			const res = await fetch(`/api/blog/search?${queryParams.toString()}`);

			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.error || 'Failed to fetch posts');
			}

			const filteredPosts = await res.json();

			// Apply current sort order to new results
			const sortedPosts = [...filteredPosts].sort((a, b) => {
				const dateA = new Date(a.publishedAt).getTime();
				const dateB = new Date(b.publishedAt).getTime();
				return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
			});

			setPosts(sortedPosts);
		} catch (error) {
			console.error('Error fetching filtered posts:', error);
			setError('Failed to fetch posts. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const toggleSortOrder = () => {
		setSortOrder(sortOrder === 'latest' ? 'oldest' : 'latest');
	};

	return (
		<div className='w-full space-y-6'>
			{/* Search and Filter Bar */}
			<div className='bg-background/80 sticky top-0 z-10 rounded-xl p-4 shadow-md backdrop-blur-lg'>
				<div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
					{/* Search Input with Icon */}
					<div className='relative flex-grow'>
						<Search className='text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2' />
						<Input
							onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
							type='text'
							placeholder='Search for blog posts...'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className='w-full pl-10'
						/>
					</div>

					<div className='flex flex-wrap gap-2'>
						{/* Filter Toggle Button */}
						<button
							onClick={() => setIsFilterOpen(!isFilterOpen)}
							className='border-input hover:bg-accent hover:text-accent-foreground flex items-center gap-1 rounded-lg border bg-background px-4 py-2 text-sm font-medium transition-colors'
						>
							<Filter className='h-4 w-4' />
							<span>Filter</span>
							<ChevronDown
								className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
							/>
						</button>

						{/* Sort Button */}
						<button
							onClick={toggleSortOrder}
							className='border-input hover:bg-accent hover:text-accent-foreground flex items-center gap-1 rounded-lg border bg-background px-4 py-2 text-sm font-medium transition-colors'
						>
							{sortOrder === 'latest' ? (
								<>
									<Clock className='h-4 w-4' />
									<span>Latest</span>
								</>
							) : (
								<>
									<Calendar className='h-4 w-4' />
									<span>Oldest</span>
								</>
							)}
							<ArrowUpDown className='ml-1 h-4 w-4' />
						</button>

						{/* Search Button */}
						<button
							onClick={handleSearch}
							className='hover:bg-primary/90 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors disabled:opacity-50'
							disabled={isLoading}
						>
							{isLoading ? 'Searching...' : 'Search'}
						</button>
					</div>
				</div>

				{/* Category Filters - Collapsible */}
				<div
					className={`mt-4 overflow-hidden transition-all duration-300 ${isFilterOpen ? 'max-h-96' : 'max-h-0'}`}
				>
					<div className='flex flex-wrap gap-2 py-2'>
						{categories.map((category) => (
							<button
								key={category._id}
								onClick={() => handleCategoryClick(category)}
								className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
									activeCategory?._id === category._id
										? 'bg-primary text-primary-foreground'
										: 'hover:bg-secondary/80 bg-secondary text-secondary-foreground'
								}`}
							>
								{category.title}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Error Message */}
			{error && (
				<div className='bg-destructive/10 text-destructive flex items-center gap-2 rounded-lg p-3'>
					<AlertCircle className='h-5 w-5' />
					<p>{error}</p>
				</div>
			)}

			{/* Results Count */}
			<div className='flex items-center justify-between'>
				<p className='text-muted-foreground text-sm'>
					{posts.length} {posts.length === 1 ? 'post' : 'posts'} found
				</p>
				{activeCategory && (
					<div className='flex items-center gap-2'>
						<span className='text-muted-foreground text-sm'>Filtered by:</span>
						<span className='bg-primary/10 rounded-full px-3 py-1 text-xs font-medium text-primary'>
							{activeCategory.title}
							<button
								onClick={() => handleCategoryClick(activeCategory)}
								className='hover:text-primary/70 ml-2 text-primary'
							>
								×
							</button>
						</span>
					</div>
				)}
			</div>

			{/* Posts List - Full Width */}
			{posts.length > 0 ? (
				<div className='divide-border space-y-0'>
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
			) : (
				<div className='flex flex-col items-center justify-center py-12 text-center'>
					<p className='text-lg font-medium'>No posts found</p>
					<p className='text-muted-foreground text-sm'>
						Try adjusting your search or filter criteria
					</p>
				</div>
			)}
		</div>
	);
}
