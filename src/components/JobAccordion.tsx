import {
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion';

type JobAccordionProps = {
	role: string;
	company: string;
	duration: string;
	description: string[];
};

export default function JobAccordion({
	role,
	company,
	duration,
	description,
}: JobAccordionProps) {
	return (
		<AccordionItem value={role} className='w-80'>
			<AccordionTrigger>
				<div>
					<h3 className='text-xl font-semibold'>{role}</h3>
					<p className='text-sm text-background'>{company}</p>
					<p className='text-sm text-background'>{duration}</p>
				</div>
			</AccordionTrigger>
			<AccordionContent>
				<ul className='mt-2 list-disc pl-5 text-sm text-foreground'>
					{description.map((point, index) => (
						<li key={index}>{point}</li>
					))}
				</ul>
			</AccordionContent>
		</AccordionItem>
	);
}
