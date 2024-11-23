import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import prisma from '@/lib/db';
import { Link } from 'lucide-react';
import React from 'react';

async function getTotalBlogPosts() {
	const data = await prisma.post.count().then((count) => {
		return count;
	});

	return data || 0;
}

async function getTotalUsers() {
	const data = await prisma.user.count().then((count) => {
		return count;
	});

	return data || 0;
}

export default async function AdminDashboard() {
	const [totalBlogPost, totalUsers] = await Promise.all([
		getTotalBlogPosts(),
		getTotalUsers(),
	]);

	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
			<DashboardCard
				title='Blog Posts'
				subtitle={`Manage your blog posts - total Blog Post: ${totalBlogPost}`}
				body='Create, edit, and delete blog posts'
			/>
			<DashboardCard
				title='Users'
				subtitle={`Manage your users - total Users: ${totalUsers}`}
				body='Create, edit, and delete users'
			/>
		</div>
	);
}

function DashboardCard({
	title,
	subtitle,
	body,
}: {
	title: string;
	subtitle: string;
	body: string;
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{subtitle}</CardDescription>
			</CardHeader>
			<CardContent>{body}</CardContent>
		</Card>
	);
}
