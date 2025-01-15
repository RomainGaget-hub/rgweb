import React from 'react';

import { CircleUser, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JobExperience from '@/components/JobAccordion';
import WorkExperience from '@/components/WorkExperience';
import Link from 'next/link';

export default function About() {
	return (
		<div className='mx-auto w-full py-12'>
			<div className='container mx-auto flex max-w-5xl flex-col flex-wrap items-start justify-center px-4'>
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
					<div className='col-span-1'>
						<CircleUser className='mb-8 h-32 w-32' />
						<h1 className='mb-8 text-6xl font-bold text-primary'>
							Hello! I am Romain Gaget
						</h1>
					</div>
					<div className='col-span-1'>
						<h2 className='mb-8 text-3xl font-bold text-foreground'>
							Web Developer | Manager | Tech Enthusiast based in England
						</h2>
						<p className='mb-8 text-lg text-muted'>
							As a web developer and engineering manager, I’m passionate about
							innovation, emerging technologies, and sharing knowledge. This
							site is my space to explore and showcase ideas in web development,
							AI, and tech leadership, while inspiring others through my journey
							in building and learning
						</p>
						<div className='flex flex-col gap-4'>
							<Button className='bg-secondary text-background'>
								Explore My Blog
							</Button>
							{/* social links */}
							<div className='flex flex-row gap-4'>
								<h2 className='text-xl font-bold'>Connect with me :</h2>
								<Link href='https://www.linkedin.com/in/romain-gaget-9444444444/'>
									<Linkedin />
								</Link>
								<Link href='https://github.com/romain-gaget'>
									<Github />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-28 flex flex-col gap-8 bg-primary py-16'>
				<div className='container mx-auto flex max-w-5xl flex-col items-start justify-center px-4'>
					<div className='flex flex-col gap-8'>
						<WorkExperience />
					</div>
				</div>
			</div>
		</div>
	);
}
