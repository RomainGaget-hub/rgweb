'use client';

// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import ToggleTheme from '@/components/theme-toggle';
import Image from 'next/image';
import RGWEB_LOGO_DARK from '@/public/images/logo/White logo - no background.svg';
import RGWEB_LOGO_LIGHT from '@/public/images/logo/Black logo - no background.svg';

import { useTheme } from 'next-themes';

const links = [
	{ href: '/about', label: 'About' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/', icon: true },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<header>
			<nav
				className='justify-cente flex items-center p-6 lg:px-8'
				aria-label='Global'
			>
				<div className='flex flex-1 flex-col items-center justify-center'>
					{/* <div className='mb-4 flex'>
						<Link href={'/'}>
							<Image
								src={
									resolvedTheme === 'dark' ? RGWEB_LOGO_DARK : RGWEB_LOGO_LIGHT
								}
								alt='RGWEB'
								width={60}
								height={60}
							/>
						</Link>
					</div> */}

					<div className='flex flex-1 justify-center gap-x-4 text-base lg:gap-x-12 lg:text-xl'>
						{links.map(({ href, label }) =>
							label ? (
								<Link key={`${href}${label}`} href={href} className='mt-6'>
									{label}
								</Link>
							) : (
								<Link key={href} href={'/'}>
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
					<ToggleTheme
						setTheme={setTheme}
						resolvedTheme={
							resolvedTheme === 'light' || resolvedTheme === 'dark'
								? resolvedTheme
								: 'light'
						}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Header;
