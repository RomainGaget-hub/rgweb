import { CircleUser, PenLine } from 'lucide-react';

import React from 'react';
import HomeAction from './HomeAction';

export default function HomeIntro() {
	return (
		<section className='relative bg-background py-24'>
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
				<div className='flex w-full flex-col justify-start gap-24 md:flex-row'>
					<HomeAction
						bgColor='bg-primary'
						textColor='text-primary-foreground'
						icon={<PenLine className='h-12 w-12' />}
						text='Explore Blog'
						link='/blog'
						size='large'
					/>
					<HomeAction
						bgColor='bg-secondary'
						textColor='text-background'
						icon={<CircleUser className='h-12 w-12' />}
						text='About Me'
						link='/projects'
						size='large'
					/>
				</div>
			</div>
		</section>
	);
}
