'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	const [mounted, setMounted] = useState(false);

	// Ensure the component is mounted on the client before rendering
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}

	return (
		<NextThemesProvider
			attribute='class'
			defaultTheme='dark'
			enableSystem={true}
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
}
