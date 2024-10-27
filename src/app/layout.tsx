import type { Metadata } from 'next';
import { Inter, Playfair_Display, Alegreya } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import Providers from '@/components/providers';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-serif',
});
const alegreya = Alegreya({ subsets: ['latin'], variable: '--font-alegreya' }); // Add Alegreya

export const metadata: Metadata = {
	title: 'RG Web',
	description: 'blog, projects, and contact information for Romain Gaget',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'flex min-h-screen flex-col font-sans antialiased',
					inter.variable,
					playfair.variable,
					alegreya.variable
				)}
			>
				<Providers>
					<Header />
					<main className='grow'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
