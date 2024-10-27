'use client';

import React, { useState, useEffect } from 'react';

import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

export default function ThemeToggle({
	setTheme,
	resolvedTheme,
}: {
	setTheme: (theme: string) => void;
	resolvedTheme: 'light' | 'dark';
}) {
	const [mounted, setMounted] = useState(false);

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
