'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Button
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			aria-label='Toggle dark mode'
			variant='ghost'
			size='sm'
		>
			{resolvedTheme === 'dark' ? (
				<SunIcon className='text-orange_300 size-4' />
			) : (
				<MoonIcon className='size-4 text-sky-950' />
			)}
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
