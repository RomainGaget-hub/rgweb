import Link from 'next/link';
import React from 'react';

export default function HomeIntro() {
	return (
		<section className='relative bg-gradient-to-r from-slate-900 to-slate-700 py-24 text-white'>
			<div className='container mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-center'>
				<h1 className='mb-4 text-3xl font-bold leading-tight md:text-5xl'>
					Welcome to <span className='text-blue-400'>RGWEB</span> — A
					Developer’s Journey in Code and Innovation
				</h1>
				<p className='mb-8 max-w-2xl text-lg md:text-xl'>
					Dive into a space where web development, best practices, and modern
					tech come together. Explore in-depth articles and tutorials, sharing
					insights and practical tips to help you grow as a developer.
				</p>
				<Link
					href='/blog'
					className='inline-block rounded-md bg-indigo-500 px-8 py-3 text-lg text-white shadow-lg transition duration-300 hover:bg-indigo-400'
				>
					Explore the Blog →
				</Link>
			</div>
			<div className='bg-hero-pattern pointer-events-none absolute inset-0 opacity-50' />
		</section>
	);
}
