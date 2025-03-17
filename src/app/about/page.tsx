import React from 'react';
import { CircleUser, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
	return (
		<div className='mx-auto w-full'>
			{/* Hero Section - Bold New Design */}
			<div className='via-background/95 to-primary/5 relative bg-gradient-to-br from-background pb-16 pt-12 sm:pb-24 sm:pt-16'>
				{/* Decorative elements */}
				<div className='absolute inset-0 overflow-hidden'>
					<div className='bg-primary/5 absolute -right-5 -top-20 h-[500px] w-[500px] rounded-full blur-3xl'></div>
					<div className='bg-secondary/5 absolute -left-20 top-40 h-[300px] w-[300px] rounded-full blur-3xl'></div>
				</div>

				<div className='container relative z-10 mx-auto px-5 sm:px-6 md:px-8'>
					<div className='mx-auto max-w-4xl text-center'>
						{/* Large greeting */}
						<h1 className='mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl'>
							Hello, I&apos;m <span className='text-primary'>Romain Gaget</span>
						</h1>

						{/* Subtitle */}
						<h2 className='text-foreground/80 mx-auto mb-8 max-w-2xl text-xl font-medium sm:text-2xl'>
							Digital Engineering Manager | Web Developer | Tech Enthusiast
						</h2>

						{/* Profile image */}
						<div className='border-primary/20 bg-primary/5 relative mx-auto mb-10 h-40 w-40 overflow-hidden rounded-full border-4 shadow-xl sm:h-48 sm:w-48'>
							<CircleUser className='text-primary/70 h-full w-full' />
						</div>

						{/* Bio paragraph */}
						<p className='mx-auto mb-10 max-w-2xl text-base text-muted sm:text-lg'>
							I&apos;m passionate about innovation, emerging technologies, and
							sharing knowledge. This site is my space to explore and showcase
							ideas in web development, AI, and tech leadership, while inspiring
							others through my journey in building and learning.
						</p>

						{/* Action buttons in a row */}
						<div className='mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
							<Link href='/blog'>
								<Button
									size='lg'
									className='group flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground sm:w-auto'
								>
									Read My Blog
									<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
								</Button>
							</Link>
							<Link href='mailto:contact@example.com'>
								<Button
									size='lg'
									variant='outline'
									className='w-full sm:w-auto'
								>
									<Mail className='mr-2 h-4 w-4' />
									Contact Me
								</Button>
							</Link>
						</div>

						{/* Social links in a row */}
						<div className='flex items-center justify-center gap-6'>
							<Link
								href='https://www.linkedin.com/in/romain-gaget-99931040/'
								className='group flex flex-col items-center'
							>
								<div className='group-hover:bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full bg-background p-3 shadow-md transition-all duration-300 group-hover:shadow-lg'>
									<Linkedin className='h-6 w-6 text-primary' />
								</div>
								<span className='mt-2 text-xs text-muted'>LinkedIn</span>
							</Link>
							<Link
								href='https://github.com/RomainGaget-hub'
								className='group flex flex-col items-center'
							>
								<div className='group-hover:bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full bg-background p-3 shadow-md transition-all duration-300 group-hover:shadow-lg'>
									<Github className='h-6 w-6 text-primary' />
								</div>
								<span className='mt-2 text-xs text-muted'>GitHub</span>
							</Link>
							<Link
								href='mailto:contact@example.com'
								className='group flex flex-col items-center'
							>
								<div className='group-hover:bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full bg-background p-3 shadow-md transition-all duration-300 group-hover:shadow-lg'>
									<Mail className='h-6 w-6 text-primary' />
								</div>
								<span className='mt-2 text-xs text-muted'>Email</span>
							</Link>
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
			</div>

			<div className='flex flex-col gap-6 bg-background py-16 sm:gap-8 sm:py-20'>
				<div className='container mx-auto flex max-w-5xl flex-col items-start justify-center px-5 sm:px-6 md:px-8'>
					<div className='flex flex-col gap-12 sm:gap-20'>
						{/* What I Do Section */}
						<section className='flex flex-col gap-4 sm:gap-6'>
							<h2 className='text-3xl font-bold text-primary sm:text-4xl'>
								What I Do
							</h2>
							<div className='space-y-3 text-base text-foreground sm:space-y-4 sm:text-lg'>
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
						<section className='flex flex-col gap-4 sm:gap-6'>
							<h2 className='text-3xl font-bold text-primary sm:text-4xl'>
								My Passions
							</h2>
							<p className='text-base text-foreground sm:text-lg'>
								Technology is more than a job for me &ndash; it&apos;s a
								passion. I&apos;m fascinated by the endless possibilities of AI,
								machine learning, and the ways technology can drive progress and
								creativity. Through RGWEB, I aim to share my journey, provide
								practical insights, and spark conversations about innovation,
								leadership, and modern development.
							</p>
						</section>

						{/* My Stack Section */}
						<section className='flex flex-col gap-4 sm:gap-6'>
							<h2 className='text-3xl font-bold text-primary sm:text-4xl'>
								My Main Stack
							</h2>
							<div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
								{['React and Next.js', 'NodeJS', 'CSS', 'TypeScript'].map(
									(tech) => (
										<div
											key={tech}
											className='border-muted/20 hover:border-primary/20 rounded-lg border bg-background p-3 text-center text-sm shadow-sm transition-all hover:shadow-md sm:p-4 sm:text-base'
										>
											<p className='text-foreground'>{tech}</p>
										</div>
									)
								)}
							</div>
						</section>

						{/* Beyond Work Section */}
						<section className='flex flex-col gap-4 sm:gap-6'>
							<h2 className='text-3xl font-bold text-primary sm:text-4xl'>
								Beyond Work
							</h2>
							<p className='mb-3 text-base text-foreground sm:mb-4 sm:text-lg'>
								Life isn&apos;t all about work! When I&apos;m not coding or
								brainstorming new ideas, you&apos;ll find me:
							</p>
							<ul className='list-inside list-disc space-y-2 text-base text-foreground sm:text-lg'>
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
							<p className='mt-3 text-base text-foreground sm:mt-4 sm:text-lg'>
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
