'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps, ReactNode } from 'react';

export default function NavAdmin({ children }: { children: ReactNode }) {
	return (
		<nav className='flex justify-center bg-primary px-4 text-primary-foreground'>
			{children}
		</nav>
	);
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, 'className'>) {
	const pathname = usePathname;
	return (
		<Link
			{...props}
			className={cn(
				'p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground',
				pathname === props.href && 'bg-background text-foreground'
			)}
		/>
	);
}
