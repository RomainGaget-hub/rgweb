import prisma from '@/lib/db';
import BlogSearch from '@/components/BlogSearch';

const Page = async () => {
	const initialPosts = await prisma.post.findMany({
		take: 5,
		orderBy: {
			createdAt: 'desc',
		},
		include: {
			tags: true,
		},
	});

	const tags = await prisma.tag.findMany();

	console.log('tags', tags);

	return (
		<div className='container mx-auto py-12'>
			<h1 className='mb-8 text-6xl font-bold text-primary'>RG BLOG</h1>
			<p className='mb-8 text-lg text-muted'>
				Explore in-depth articles and tutorials, sharing insights and practical
				tips to help you grow as a developer.
			</p>

			{/* Pass data to BlogSearch */}
			<BlogSearch initialPosts={initialPosts} tags={tags} />
		</div>
	);
};

export default Page;
