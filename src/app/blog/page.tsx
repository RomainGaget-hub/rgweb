import { getAllPosts, getAllTags } from '@/lib/sanity';
import BlogSearch from '@/components/BlogSearch';
import { SanityPost } from '@/types/sanity';

const Page = async () => {
	const posts: SanityPost[] = await getAllPosts();
	const categories = await getAllTags();

	console.log('categories', categories);

	return (
		<div className='container mx-auto py-12'>
			<div className='container mx-auto flex max-w-5xl flex-col items-start justify-center px-4'>
				<h1 className='mb-8 text-6xl font-bold text-primary'>RG BLOG</h1>
				<p className='mb-8 text-lg text-muted'>
					Explore in-depth articles and tutorials, sharing insights and
					practical tips to help you grow as a developer.
				</p>

				{/* Pass data to BlogSearch */}
				<BlogSearch initialPosts={posts} categories={categories} />
			</div>
		</div>
	);
};

export default Page;
