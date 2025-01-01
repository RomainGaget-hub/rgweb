'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { CircleArrowRight } from 'lucide-react';

interface HomeActionProps {
	bgColor: string; // Background color
	textColor: string; // Text color
	icon: React.ReactNode; // Icon component
	text: string; // Display text
	link: string; // URL for the action
	size?: 'small' | 'medium' | 'large'; // Size of the container
}

const HomeAction: React.FC<HomeActionProps> = ({
	bgColor,
	textColor,
	icon,
	text,
	link,
	size = 'medium',
}) => {
	// Define size classes
	const sizeClasses = {
		small: 'w-40 h-24',
		medium: 'w-60 h-36',
		large: 'w-80 h-48',
	};

	return (
		<span
			className={cn(
				`flex flex-col justify-between rounded-lg p-4 shadow-lg`,
				bgColor,
				sizeClasses[size],
				textColor
			)}
		>
			<div className='flex items-center justify-around pt-6 text-3xl'>
				<div className='mr-3'>{icon}</div>
				<div className='font-bold'>{text}</div>
			</div>
			{/* Arrow Section */}
			<Link href={link}>
				<div className='flex items-center justify-end'>
					<CircleArrowRight className='h-12 w-12 hover:text-blue-500'></CircleArrowRight>
				</div>
			</Link>
		</span>
	);
};

export default HomeAction;
