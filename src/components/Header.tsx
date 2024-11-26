'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import RGWEB_LOGO_DARK from '@/public/images/logo/White logo - no background.svg';
import RGWEB_LOGO_LIGHT from '@/public/images/logo/Black logo - no background.svg';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const links = [
	{ href: '/about', label: 'About' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/', icon: true },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const pathname = usePathname();

	return (
		<header>
			<nav
				className='justify-cente flex items-center p-6 lg:px-8'
				aria-label='Global'
			>
				<div className='flex flex-1 flex-col items-center justify-center'>
					<div className='flex flex-1 justify-center gap-x-4 text-base lg:gap-x-12 lg:text-lg'>
						{links.map(({ href, label }) =>
							label ? (
								<Link
									key={`${href}${label}`}
									href={href}
									className={cn(
										'mt-6 rounded-md px-4 py-2 transition-all duration-200',
										pathname === href
											? 'bg-primary font-medium text-primary-foreground'
											: 'text-foreground hover:bg-primary hover:text-primary-foreground'
									)}
								>
									{label}
								</Link>
							) : (
								<Link
									key={href}
									href={'/'}
									className='transition-opacity duration-200 hover:opacity-80'
								>
									<Image
										src={
											resolvedTheme === 'dark'
												? RGWEB_LOGO_DARK
												: RGWEB_LOGO_LIGHT
										}
										alt='RGWEB'
										width={60}
										height={60}
									/>
								</Link>
							)
						)}
					</div>
				</div>
				<div className='lg:flex lg:justify-end'>
					{/* <ToggleTheme
						setTheme={setTheme}
						resolvedTheme={
							resolvedTheme === 'light' || resolvedTheme === 'dark'
								? resolvedTheme
								: 'light'
						}
					/> */}
					<div>
						<Link
							href={`/admin`}
							className='transition-opacity duration-200 hover:opacity-80'
						>
							Admin
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
