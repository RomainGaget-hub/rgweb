import { Home, PenLine } from 'lucide-react';

import React from 'react';
import HomeAction from './HomeAction';

export default function HomeIntro() {
	return (
		<section className='relative bg-background py-24'>
			<div className='container mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-center'>
				<h1 className='mb-4 text-4xl font-bold leading-tight md:text-6xl'>
					WELCOME TO <span className='text-primary'>RGWEB</span>
				</h1>
				<h3 className='mb-3 text-2xl text-muted-background md:text-3xl'>
					A Developer’s Journey in Code and Innovation
				</h3>
				<p className='mb-8 max-w-2xl text-lg text-muted md:text-xl'>
					Dive into a space where web development, best practices, and modern
					tech come together. Explore in-depth articles and tutorials, sharing
					insights and practical tips to help you grow as a developer.
				</p>
			</div>
			<div className='container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
				<HomeAction
					bgColor='bg-primary'
					textColor='text-primary-foreground'
					icon={<PenLine />}
					text='Explore Blog'
					link='/blog'
					size='large'
				/>
				<HomeAction
					bgColor='bg-secondary'
					textColor='text-background'
					icon={<Home />}
					text='View Projects'
					link='/projects'
					size='large'
				/>
			</div>
		</section>
	);
}
