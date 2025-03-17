import { getAllPosts, getAllTags } from '@/lib/sanity';
import BlogSearch from '@/components/BlogSearch';
import { SanityPost } from '@/types/sanity';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog | RG Web',
	description:
		'Explore in-depth articles and tutorials on web development, programming, and technology.',
};

const Page = async () => {
	const posts: SanityPost[] = await getAllPosts();
	const categories = await getAllTags();

	return (
		<div className='relative min-h-screen w-full overflow-hidden'>
			{/* Background pattern - improved for dark mode */}
			<div className='absolute inset-0 -z-10 h-full w-full bg-background'>
				<div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(127,127,127,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,127,127,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
			</div>

			{/* Hero section */}
			<section className='relative py-20'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='mx-auto max-w-3xl text-center'>
						<h1 className='to-primary/70 bg-gradient-to-r from-primary bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl'>
							Insights & Ideas
						</h1>
						<p className='text-muted-foreground mt-6 text-lg md:text-xl'>
							Explore in-depth articles and tutorials, sharing insights and
							practical tips to help you grow as a developer.
						</p>
					</div>
				</div>
			</section>

			{/* Blog content */}
			<section className='pb-24'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='mx-auto max-w-7xl'>
						{/* Pass data to BlogSearch */}
						<BlogSearch initialPosts={posts} categories={categories} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;
