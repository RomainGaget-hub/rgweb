import { CircleUser, PenLine } from 'lucide-react';
import React from 'react';
import HomeAction from './HomeAction';

export default function HomeIntro() {
	return (
		<section className='via-background/95 to-primary/5 relative bg-gradient-to-br from-background pb-16 pt-12 sm:pb-24 sm:pt-16'>
			{/* Decorative elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='bg-primary/5 absolute -right-5 -top-20 h-[500px] w-[500px] rounded-full blur-3xl'></div>
				<div className='bg-secondary/5 absolute -left-20 top-40 h-[300px] w-[300px] rounded-full blur-3xl'></div>
			</div>

			<div className='container relative z-10 mx-auto px-5 sm:px-6 md:px-8'>
				<div className='mx-auto max-w-4xl text-center'>
					{/* Main heading with gradient effect */}
					<h1 className='mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl'>
						WELCOME TO <span className='text-primary'>RGWEB</span>
					</h1>

					{/* Subtitle */}
					<h3 className='text-foreground/80 mx-auto mb-8 max-w-2xl text-xl font-medium sm:text-2xl md:text-3xl'>
						Ideas That Inspire and Innovate
					</h3>

					{/* Main paragraph */}
					<p className='mx-auto mb-10 max-w-2xl text-base text-muted sm:text-lg md:text-xl'>
						A space to share ideas, explore new trends, and discuss the
						possibilities of technology and innovation. Whether it&apos;s AI,
						leadership, or web development, RGWEB aims to provide simple and
						engaging content to inspire curiosity and learning.
					</p>

					{/* Quick Navigation Section */}
					<div className='mx-auto mb-10 w-full max-w-md'>
						<div className='flex flex-col gap-3 sm:gap-4'>
							<HomeAction
								icon={<PenLine className='h-5 w-5 sm:h-6 sm:w-6' />}
								text='Explore Blog'
								link='/blog'
							/>
							<HomeAction
								icon={<CircleUser className='h-5 w-5 sm:h-6 sm:w-6' />}
								text='About Me'
								link='/projects'
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative wave divider */}
			<div className='absolute bottom-0 left-0 right-0'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'
					className='w-full'
				>
					<path
						fill='currentColor'
						fillOpacity='0.05'
						d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
					></path>
				</svg>
			</div>
		</section>
	);
}
