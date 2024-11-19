'use client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useTransition } from 'react';
import { deletePost, togglePostPublished } from '../../_actions/blogPost';
import { useRouter } from 'next/navigation';

export function ActivateBlogPost({
	id,
	isPublished,
}: {
	id: string;
	isPublished: boolean;
}) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<DropdownMenuItem
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await togglePostPublished(id, !isPublished);
					router.refresh();
				});
			}}
		>
			{isPublished ? 'Deactivate' : 'Publish'}
		</DropdownMenuItem>
	);
}

export function DeleteBlogPost({ id }: { id: string }) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<DropdownMenuItem
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await deletePost(id);
					router.refresh();
				});
			}}
		>
			Delete
		</DropdownMenuItem>
	);
}
