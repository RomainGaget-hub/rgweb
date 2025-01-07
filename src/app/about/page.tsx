import React from 'react';
import Skills from '../../components/Skills';
import { CircleUser } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
	return (
		<div className='mx-auto w-full py-12'>
			<div className='container mx-auto flex max-w-5xl flex-col items-start justify-center px-4'>
				<div className='grid w-full grid-cols-2 gap-8'>
					<div className='col-span-1'>
						<CircleUser className='mb-8 h-32 w-32' />
						<h1 className='mb-8 text-6xl font-bold text-primary'>
							Hello! I am Romain Gaget
						</h1>
					</div>
					<div className='col-span-1'>
						<h2 className='mb-8 text-3xl font-bold text-foreground'>
							An Experienced Web Developer based in England
						</h2>
						<p className='mb-8 text-lg text-muted'>
							With over 10 years of experience in web development, I have worked
							with a wide range of clients, from startups to large corporations.
							I specialize in creating custom websites that are both functional
							and aesthetically pleasing.
						</p>
						<div className='flex flex-col gap-4'>
							<Button className='bg-primary text-primary-foreground'>
								Explore My Work
							</Button>
							<Button className='bg-secondary text-background'>
								Contact Me
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-28 flex flex-col gap-8 bg-primary py-16'>
				<div className='container mx-auto flex max-w-5xl flex-col items-start justify-center px-4'>
					<h2 className='mb-8 text-3xl font-bold text-foreground'>
						Working Experience
					</h2>
				</div>
			</div>
		</div>
	);
}
