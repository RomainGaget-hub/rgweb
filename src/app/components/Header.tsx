// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import ToggleTheme from '@/components/theme-toggle';
import Image from 'next/image';
import RGWEB_LOGO from '@/public/images/logo/Color logo with background.svg';

const links = [
	{ href: '/about', label: 'About' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
	return (
		<>
			<header>
				<nav
					className='flex items-center justify-between p-6 lg:px-8'
					aria-label='Global'
				>
					<div className='flex lg:flex-1'>
						<Link href={'/'} className='-m-1.5 p-1.5 font-bold'>
							<Image src={RGWEB_LOGO} alt='RGWEB' width={60} height={60} />
						</Link>
					</div>
					<div className='flex lg:hidden'>
						<button
							type='button'
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								aria-hidden='true'
								data-slot='icon'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						</button>
					</div>
					<div className='hidden lg:flex lg:gap-x-12'>
						{links.map(({ href, label }) => (
							<Link key={`${href}${label}`} href={href}>
								{label}
							</Link>
						))}
					</div>
					<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
						<ToggleTheme />
					</div>
				</nav>

				<div className='lg:hidden' role='dialog' aria-modal='true'>
					<div className='fixed inset-0 z-50'></div>
					<div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
						<div className='flex items-center justify-between'>
							<Link href={'/'} className='-m-1.5 p-1.5 font-bold'>
								RGWEB
							</Link>
							<button
								type='button'
								className='-m-2.5 rounded-md p-2.5 text-gray-700'
							>
								<span className='sr-only'>Close menu</span>
								<svg
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									aria-hidden='true'
									data-slot='icon'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M6 18 18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-gray-500/10'>
								<div className='space-y-2 py-6'>
									{links.map(({ href, label }) => (
										<Link
											className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
											key={`${href}${label}`}
											href={href}
										>
											{label}
										</Link>
									))}
								</div>
								<div className='py-6'>
									<ToggleTheme />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
