'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import RGWEB_LOGO_WHITE from '@/public/images/logo/White logo - no background.svg';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from 'next-themes';

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/about', label: 'About' },
];

const Header: React.FC = () => {
	const pathname = usePathname();
	const { theme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure the component is mounted on the client before rendering theme-dependent elements
	useEffect(() => {
		setMounted(true);
	}, []);

	// Determine the logo class based on theme
	const logoClass = mounted
		? theme === 'dark' || resolvedTheme === 'dark'
			? 'opacity-100'
			: 'opacity-70 invert filter'
		: 'opacity-100'; // Default to visible in dark mode during initial load

	return (
		<header className='bg-background py-2 text-foreground sm:py-4'>
			<div className='container mx-auto px-5 sm:px-6 md:px-8 lg:px-[80px]'>
				<nav
					className='grid grid-cols-1 items-center gap-2 text-center lg:grid-cols-12 lg:gap-0 lg:text-left'
					aria-label='Global'
				>
					{/* Logo Section */}
					<div className='flex justify-center lg:col-span-3 lg:justify-start'>
						<Link href={'/'}>
							<Image
								src={RGWEB_LOGO_WHITE}
								alt='RGWEB'
								width={40}
								height={40}
								className={cn(
									'sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px]',
									logoClass
								)}
							/>
						</Link>
					</div>

					{/* Navigation Links */}
					<div className='flex flex-row items-center justify-center space-x-2 sm:space-x-4 lg:col-span-9 lg:flex-row lg:justify-end lg:space-x-6 lg:space-y-0'>
						{links.map(({ href, label }) => (
							<Link
								key={`${href}${label}`}
								href={href}
								className={cn(
									'rounded-md px-2 py-1 text-sm transition-all duration-200 sm:px-4 sm:py-2 sm:text-base',
									pathname === href
										? 'bg-primary font-medium text-primary-foreground'
										: 'text-foreground hover:bg-primary hover:text-primary-foreground'
								)}
							>
								{label}
							</Link>
						))}
						<div className='flex-shrink-0'>
							<ThemeToggle />
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
