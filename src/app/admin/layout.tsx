import NavAdmin, { NavLink } from '@/components/NavAdmin';

export const dynamic = 'force-dynamic';

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavAdmin>
				<NavLink href='/admin'>Admin</NavLink>
				<NavLink href='/admin/blogpost'>Posts</NavLink>
			</NavAdmin>
			<div className='container my-6'>{children}</div>
		</>
	);
}
