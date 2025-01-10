import { Accordion } from '@/components/ui/accordion';
import JobAccordion from './JobAccordion';
import experiences from '@/content/posts/data/experiences.json';

export default function WorkExperience() {
	// Split experiences into two columns
	const half = Math.ceil(experiences.length / 2);
	const leftColumn = experiences.slice(0, half);
	const rightColumn = experiences.slice(half);

	return (
		<section className='container mx-auto flex max-w-7xl flex-col items-start justify-center px-8'>
			<h2 className='mb-6 text-center text-4xl font-bold'>
				Working Experience
			</h2>
			<div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-60'>
				{/* Left Column */}
				<div className='space-y-4'>
					{leftColumn.map((job) => (
						<Accordion type='single' collapsible key={job.id}>
							<JobAccordion
								role={job.role}
								company={job.company}
								duration={job.duration}
								description={job.description}
							/>
						</Accordion>
					))}
				</div>

				{/* Right Column */}
				<div className='space-y-4'>
					{rightColumn.map((job) => (
						<Accordion type='single' collapsible key={job.id}>
							<JobAccordion
								role={job.role}
								company={job.company}
								duration={job.duration}
								description={job.description}
							/>
						</Accordion>
					))}
				</div>
			</div>
		</section>
	);
}
