import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Projects() {
	return (
		<div className='container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 text-center'>
			<Construction className='mb-8 h-24 w-24 animate-pulse text-primary' />

			<h1 className='mb-4 text-4xl font-bold'>
				Projects Section Under Construction
			</h1>

			<p className='mb-8 max-w-md text-lg text-muted'>
				I&apos;m currently building something awesome here. Check back soon to
				see my latest projects and developments.
			</p>

			<Link href='/'>
				<Button className='flex items-center gap-2 bg-secondary text-background'>
					<ArrowLeft className='h-4 w-4' />
					Back to Home
				</Button>
			</Link>
		</div>
	);
}
