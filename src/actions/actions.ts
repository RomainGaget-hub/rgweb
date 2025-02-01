'use server';

import prisma from '@/lib/db';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const signupSchema = z.object({
	fullname: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});

export async function signup(prevState: unknown, formData: FormData) {
	const result = signupSchema.safeParse(Object.fromEntries(formData.entries()));
	if (!result.success) {
		return result.error.formErrors.fieldErrors;
	}

	const data = result.data;

	await prisma.user.create({
		data: {
			name: data.fullname,
			email: data.email,
			password: data.password,
		},
	});

	redirect('/');
}
