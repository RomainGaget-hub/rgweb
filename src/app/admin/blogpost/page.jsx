import React from 'react';
import PageHeader from '../_components/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

export default function AdminBlogPost() {
	return (
		<>
			<div className='flex items-center justify-between gap-4'>
				<PageHeader>Blog Posts</PageHeader>
				<Button>
					<Link href='/admin/blogpost/create'>Create Blog Post</Link>
				</Button>
			</div>
			<BlogPostsTable />
		</>
	);
}

function BlogPostsTable() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className='w-0'>
						<span className='sr-only'>Published</span>
					</TableHead>
					<TableHead>Title</TableHead>
					<TableHead>Slug</TableHead>
					<TableHead>Content</TableHead>
					<TableHead>Excerpt</TableHead>
					<TableHead>Author</TableHead>
					<TableHead className='w-0'>
						<span className='sr-only'>Actions</span>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody></TableBody>
		</Table>
	);
}
