import { CircleUser, PenLine, Sparkles, ArrowRight } from 'lucide-react';
import React from 'react';
import HomeAction from './HomeAction';
import Link from 'next/link';

export default function HomeIntro() {
	return (
		<section className='relative bg-background py-16'>
			<div className='container mx-auto flex max-w-5xl flex-col items-start justify-center px-4'>
				<h1 className='mb-4 text-4xl font-bold leading-tight md:text-6xl'>
					WELCOME TO <span className='text-primary'>RGWEB</span>
				</h1>
				<h3 className='mb-3 text-2xl text-muted-background md:text-3xl'>
					Ideas That Inspire and Innovate
				</h3>
				<p className='mb-8 flex max-w-6xl text-lg text-muted md:text-xl'>
					A space to share ideas, explore new trends, and discuss the
					possibilities of technology and innovation. Whether it&apos;s AI,
					leadership, or web development, RGWEB aims to provide simple and
					engaging content to inspire curiosity and learning.
				</p>

				{/* Quick Navigation Section */}
				<div className='mx-auto mb-6 mt-4 w-full max-w-3xl'>
					<div className='flex flex-col gap-3'>
						<HomeAction
							icon={<PenLine className='h-5 w-5' />}
							text='Explore Blog'
							link='/blog'
						/>
						<HomeAction
							icon={<CircleUser className='h-5 w-5' />}
							text='About Me'
							link='/projects'
						/>
					</div>

					{/* Featured Content Link */}
					<div className='mt-6 flex justify-end'>
						<Link
							href='/blog/featured'
							className='text-muted-foreground group inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-primary'
						>
							<Sparkles className='h-4 w-4' />
							<span>Featured content</span>
							<ArrowRight className='h-3 w-3 transition-transform duration-200 group-hover:translate-x-1' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
