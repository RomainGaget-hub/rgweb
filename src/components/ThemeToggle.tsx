'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure the component is mounted on the client before rendering
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground transition-colors hover:bg-opacity-90'
			aria-label='Toggle theme'
		>
			{theme === 'dark' ? (
				<>
					<SunIcon className='h-5 w-5' />
					<span className='ml-2 hidden md:inline'>Light Mode</span>
				</>
			) : (
				<>
					<MoonIcon className='h-5 w-5' />
					<span className='ml-2 hidden md:inline'>Dark Mode</span>
				</>
			)}
		</button>
	);
}
