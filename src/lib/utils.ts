import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function isValidPassword(
	password: string,
	hashedPassword: string
) {
	return (await hashPassword(password)) === hashedPassword;
}

async function hashPassword(password: string) {
	const arrayBuffer = await crypto.subtle.digest(
		'SHA-256',
		new TextEncoder().encode(password)
	);

	return Buffer.from(arrayBuffer).toString('base64');
}

export function formatDate(date: string) {
	console.log('Date string received:', date);
	if (!date) return 'No date';

	const parsedDate = new Date(date);
	if (isNaN(parsedDate.getTime())) {
		console.log('Invalid date detected:', date);
		return 'Invalid date';
	}

	return parsedDate.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}
