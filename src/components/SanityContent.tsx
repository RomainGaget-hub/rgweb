'use client';

import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import { SanityBlock } from '@/types/sanity';
import Image from 'next/image';

// Define custom components for the PortableText renderer
const components: PortableTextComponents = {
	types: {
		image: ({ value }) => {
			return (
				<figure className='my-12'>
					<div className='relative h-[500px] w-full overflow-hidden rounded-lg shadow-md'>
						<Image
							src={value.asset.url}
							alt={value.alt || ''}
							className='object-cover'
							fill
						/>
					</div>
					{value.caption && (
						<figcaption className='mt-4 text-center text-sm italic text-muted'>
							{value.caption}
						</figcaption>
					)}
				</figure>
			);
		},
		code: ({ value }) => {
			return (
				<pre className='my-8 overflow-x-auto rounded-lg bg-black/5 p-6 font-mono text-sm dark:bg-black/20'>
					<code>{value.code}</code>
				</pre>
			);
		},
	},
	block: {
		h1: ({ children }) => (
			<h1 className='mb-6 mt-16 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl'>
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className='mb-5 mt-12 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl'>
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className='mb-4 mt-8 text-xl font-bold leading-tight text-primary sm:text-2xl'>
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4 className='mb-4 mt-6 text-lg font-semibold leading-tight text-primary'>
				{children}
			</h4>
		),
		normal: ({ children }) => (
			<p className='text-foreground/90 mb-6 text-lg leading-relaxed sm:text-xl'>
				{children}
			</p>
		),
		blockquote: ({ children }) => (
			<blockquote className='border-primary/30 bg-primary/5 text-foreground/80 my-8 border-l-4 px-6 py-4 italic'>
				{children}
			</blockquote>
		),
	},
	marks: {
		strong: ({ children }) => (
			<strong className='font-bold text-foreground'>{children}</strong>
		),
		em: ({ children }) => (
			<em className='text-foreground/90 italic'>{children}</em>
		),
		code: ({ children }) => (
			<code className='rounded bg-black/5 px-1.5 py-0.5 font-mono text-primary dark:bg-black/20'>
				{children}
			</code>
		),
		link: ({ children, value }) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined;
			return (
				<a
					href={value.href}
					rel={rel}
					className='decoration-primary/30 text-primary underline underline-offset-2 transition-all hover:decoration-primary hover:decoration-2'
				>
					{children}
				</a>
			);
		},
	},
	list: {
		bullet: ({ children }) => (
			<ul className='text-foreground/90 mb-6 ml-6 list-disc space-y-3 text-lg'>
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className='text-foreground/90 mb-6 ml-6 list-decimal space-y-3 text-lg'>
				{children}
			</ol>
		),
	},
	listItem: {
		bullet: ({ children }) => <li className='leading-relaxed'>{children}</li>,
		number: ({ children }) => <li className='leading-relaxed'>{children}</li>,
	},
};

interface SanityContentProps {
	content: SanityBlock[];
}

export default function SanityContent({ content }: SanityContentProps) {
	return (
		<div className='prose-headings:font-heading prose-a:font-medium'>
			<PortableText value={content} components={components} />
		</div>
	);
}
