import React from 'react';

import { CircleUser, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
							Digital Engineering Manager | Web developer | Tech Enthusiast
							based in England
						</h2>
						<p className='mb-8 text-lg text-muted'>
							I&apos;m passionate about innovation, emerging technologies, and
							sharing knowledge. This site is my space to explore and showcase
							ideas in web development, AI, and tech leadership, while inspiring
							others through my journey in building and learning
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
			<div className='mt-28 flex flex-col gap-8 bg-background py-16'>
				<div className='container mx-auto flex max-w-5xl flex-col items-start justify-center px-4'>
					<div className='flex flex-col gap-16'>
						{/* What I Do Section */}
						<section className='flex flex-col gap-6'>
							<h2 className='text-4xl font-bold text-primary'>What I Do</h2>
							<div className='space-y-4 text-lg text-foreground'>
								<p>
									By day, I lead teams to design and deliver impactful digital
									solutions. My work focuses on using cutting-edge technologies
									to innovate, streamline processes, and solve real-world
									problems. With a strong background in web development, I
									specialize in JavaScript, React, Node.js, CSS/Sass, and
									Next.js.
								</p>
								<p>
									I&apos;ve also embraced the role of mentoring and teaching,
									helping my team grow, improve their skills, and deliver their
									best work. From technical guidance to fostering innovation,
									I&apos;m committed to helping others succeed.
								</p>
							</div>
						</section>

						{/* My Passions Section */}
						<section className='flex flex-col gap-6'>
							<h2 className='text-4xl font-bold text-primary'>My Passions</h2>
							<p className='text-lg text-foreground'>
								Technology is more than a job for me &ndash; it&apos;s a
								passion. I&apos;m fascinated by the endless possibilities of AI,
								machine learning, and the ways technology can drive progress and
								creativity. Through RGWEB, I aim to share my journey, provide
								practical insights, and spark conversations about innovation,
								leadership, and modern development.
							</p>
						</section>

						{/* My Stack Section */}
						<section className='flex flex-col gap-6'>
							<h2 className='text-4xl font-bold text-primary'>My Main Stack</h2>
							<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
								{['React and Next.js', 'NodeJS', 'CSS', 'TypeScript'].map(
									(tech) => (
										<div
											key={tech}
											className='border-muted/20 rounded-lg border p-4 text-center'
										>
											<p className='text-foreground'>{tech}</p>
										</div>
									)
								)}
							</div>
						</section>

						{/* Beyond Work Section */}
						<section className='flex flex-col gap-6'>
							<h2 className='text-4xl font-bold text-primary'>Beyond Work</h2>
							<p className='mb-4 text-lg text-foreground'>
								Life isn&apos;t all about work! When I&apos;m not coding or
								brainstorming new ideas, you&apos;ll find me:
							</p>
							<ul className='list-inside list-disc space-y-2 text-lg text-foreground'>
								<li>
									Playing and watching sports (a great way to stay energized and
									focused)
								</li>
								<li>
									Getting lost in books, exploring topics from fiction to
									self-improvement
								</li>
								<li>
									Spending quality time with my family, which is my greatest
									source of motivation and joy
								</li>
							</ul>
							<p className='mt-4 text-lg text-foreground'>
								I believe in balancing work with what truly matters, and I bring
								that perspective into everything I do &ndash; professionally and
								personally.
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
