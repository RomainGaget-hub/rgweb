'use client';

import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import { SanityBlock } from '@/types/sanity';
import Image from 'next/image';
import { useTheme } from 'next-themes';

// Define custom components for the PortableText renderer
const components: PortableTextComponents = {
	types: {
		image: ({ value }) => {
			return (
				<figure className='my-10'>
					<div className='relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg'>
						<Image
							src={value.asset.url}
							alt={value.alt || ''}
							className='object-cover'
							fill
						/>
					</div>
					{value.caption && (
						<figcaption className='mt-3 text-center text-sm italic text-muted'>
							{value.caption}
						</figcaption>
					)}
				</figure>
			);
		},
		code: ({ value }) => {
			return (
				<pre className='light:bg-gray-100 my-6 overflow-x-auto rounded-lg p-4 text-sm text-secondary dark:bg-black dark:bg-opacity-50'>
					<code>{value.code}</code>
				</pre>
			);
		},
	},
	block: {
		h1: ({ children }) => (
			<h1 className='mb-6 mt-12 text-3xl font-bold text-primary'>{children}</h1>
		),
		h2: ({ children }) => (
			<h2 className='mb-4 mt-10 border-b border-primary border-opacity-20 pb-2 text-2xl font-bold text-primary'>
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className='mb-4 mt-8 text-xl font-bold text-primary text-opacity-90'>
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4 className='mb-3 mt-6 text-lg font-semibold text-primary text-opacity-80'>
				{children}
			</h4>
		),
		normal: ({ children }) => (
			<p className='mb-6 leading-relaxed text-foreground text-opacity-90'>
				{children}
			</p>
		),
		blockquote: ({ children }) => (
			<blockquote className='my-6 border-l-4 border-primary border-opacity-50 pl-4 italic text-foreground text-opacity-80'>
				{children}
			</blockquote>
		),
	},
	marks: {
		strong: ({ children }) => (
			<strong className='font-bold text-foreground'>{children}</strong>
		),
		em: ({ children }) => (
			<em className='italic text-foreground text-opacity-90'>{children}</em>
		),
		code: ({ children }) => (
			<code className='light:bg-gray-200 light:bg-opacity-80 rounded px-1 py-0.5 font-mono text-secondary dark:bg-black dark:bg-opacity-30'>
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
					className='decoration-opacity-30 text-primary underline decoration-primary underline-offset-2 transition-all hover:decoration-primary'
				>
					{children}
				</a>
			);
		},
	},
	list: {
		bullet: ({ children }) => (
			<ul className='mb-6 ml-6 list-disc space-y-2 text-foreground text-opacity-90'>
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className='mb-6 ml-6 list-decimal space-y-2 text-foreground text-opacity-90'>
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
	const { theme } = useTheme();

	return (
		<div
			className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}
		>
			<PortableText value={content} components={components} />
		</div>
	);
}
