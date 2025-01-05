import Link from 'next/link';

export default function BlogPostCard({ post }) {
	const { title, date, excerpt, createdAt, slug } = post;

	return (
		<div className='relative'>
			{/* Meta Information */}
			<div className='text-black-400 mb-2 text-sm'>
				<span>Fresh Article</span> •{' '}
				<span>{new Date(createdAt).toLocaleDateString()}</span>
			</div>

			{/* Title */}
			<h2 className='mb-4 text-2xl font-bold text-black'>
				<Link href={`/blog/${slug}`} className='hover:underline'>
					{title}
				</Link>
			</h2>

			{/* Excerpt */}
			<p className='text-black-300 mb-4'>
				{excerpt}{' '}
				<Link
					href={`/blog/${slug}`}
					className='text-orange-400 hover:underline'
				>
					Read article
				</Link>
			</p>
		</div>
	);
}
