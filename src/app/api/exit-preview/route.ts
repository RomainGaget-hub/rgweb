import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET() {
	// Exit Draft Mode
	draftMode().disable();

	// Redirect to the homepage
	redirect('/');
}
