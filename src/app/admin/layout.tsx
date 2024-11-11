import Link from 'next/link';

import Providers from '@/components/providers';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body>
			<header>
				<nav>
					<ul>
						<li>
							<Link href='/admin/dashboard'>Dashboard</Link>
						</li>
						<li>
							<Link href='/admin/users'>Users</Link>
						</li>
						<li>
							<Link href='/admin/settings'>Settings</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className='grow'>{children}</main>
			<footer>
				<p>&copy; 2023 Your Company</p>
			</footer>
		</body>
	);
}
