'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HomeActionProps {
	bgColor?: string; // Background color (optional now)
	textColor?: string; // Text color (optional now)
	icon: React.ReactNode; // Icon component
	text: string; // Display text
	link: string; // URL for the action
}

const HomeAction: React.FC<HomeActionProps> = ({
	bgColor,
	textColor,
	icon,
	text,
	link,
}) => {
	return (
		<Link
			href={link}
			className={cn(
				'border-border/40 bg-background/80 group flex items-center justify-between rounded-lg border p-4',
				'hover:border-primary/30 hover:bg-background/95 backdrop-blur-sm transition-all duration-200',
				'shadow-sm hover:shadow-md',
				bgColor,
				textColor
			)}
		>
			<div className='flex items-center gap-3'>
				<div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full text-primary'>
					{icon}
				</div>
				<span className='font-medium'>{text}</span>
			</div>
			<ArrowRight className='h-4 w-4 opacity-50 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100' />
		</Link>
	);
};

export default HomeAction;
