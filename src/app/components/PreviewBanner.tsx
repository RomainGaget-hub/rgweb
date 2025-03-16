import { draftMode } from 'next/headers';
import Link from 'next/link';

export default function PreviewBanner() {
	const { isEnabled } = draftMode();

	if (!isEnabled) {
		return null;
	}

	return (
		<div className='bg-yellow-500 p-3 text-center text-black'>
			<div className='container mx-auto'>
				<div className='flex items-center justify-center gap-2'>
					<span className='font-bold'>Preview Mode Enabled</span>
					<Link
						href='/api/exit-preview'
						className='rounded bg-black px-3 py-1 text-xs text-white'
					>
						Exit Preview
					</Link>
				</div>
			</div>
		</div>
	);
}
