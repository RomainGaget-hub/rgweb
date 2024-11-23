import prisma from '@/lib/db';
import PageHeader from '../../../_components/PageHeader';
import BlogPostForm from '../../_components/BlogPostForm';

export default async function AdminEditBlogPost({
	params: { id },
}: {
	params: { id: string };
}) {
	const blogPost = await prisma.post.findUnique({
		where: {
			id: id,
		},
	});
	return (
		<>
			<PageHeader>Edit Blog Post</PageHeader>
			<BlogPostForm blogPost={blogPost} />
		</>
	);
}
