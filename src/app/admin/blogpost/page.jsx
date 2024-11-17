import React from 'react';
import PageHeader from '../_components/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import prisma from '@/lib/db';
import { CheckCircle2, MoreVertical, XCircle } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuSubContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function AdminBlogPost() {
	return (
		<>
			<div className='flex items-center justify-between gap-4'>
				<PageHeader>Blog Posts</PageHeader>
				<Button>
					<Link href='/admin/blogpost/new'>Create Blog Post</Link>
				</Button>
			</div>
			<BlogPostsTable />
		</>
	);
}

async function BlogPostsTable() {
	const blogPosts = await prisma.post.findMany({
		select: {
			id: true,
			title: true,
			content: true,
			slug: true,
			excerpt: true,
			published: true,
			createdAt: true,
		},
		orderBy: { createdAt: 'desc' },
	});

	if (!blogPosts) {
		return <div>No blog posts found.</div>;
	}
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
			<TableBody>
				{blogPosts.map((blogPost) => (
					<TableRow key={blogPost.id}>
						<TableCell className='whitespace-nowrap px-6 py-4'>
							{blogPost.published ? (
								<>
									<CheckCircle2 />
									<span className='sr-only'>Published</span>
								</>
							) : (
								<>
									<XCircle />
									<span className='sr-only'>Not Published</span>
								</>
							)}
						</TableCell>
						<TableCell>{blogPost.title}</TableCell>
						<TableCell>{blogPost.slug}</TableCell>
						<TableCell>{blogPost.content}</TableCell>
						<TableCell>{blogPost.excerpt}</TableCell>
						<TableCell>Author</TableCell>
						<TableCell>
							<DropdownMenu>
								<DropdownMenuTrigger>
									<MoreVertical />
									<span className='sr-only'>Actions</span>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>Actions</DropdownMenuLabel>
									<DropdownMenuItem>
										<Link href={`/admin/blogpost/${blogPost.id}`}>Edit</Link>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Delete</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
