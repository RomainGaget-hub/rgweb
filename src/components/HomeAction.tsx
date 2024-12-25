'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
		<Link href={link}>
			<span
				className={cn(
					`flex flex-col justify-between rounded-lg p-4 shadow-lg`,
					bgColor,
					sizeClasses[size],
					textColor
				)}
			>
				<div className='flex items-center justify-start text-3xl'>
					<div>{icon}</div>

					<div>{text}</div>
				</div>
				{/* Arrow Section */}
				<div className='flex items-center justify-end'>
					<div className='rounded-full border-2 p-2'>➡</div>
				</div>
			</span>
		</Link>
	);
};

export default HomeAction;
