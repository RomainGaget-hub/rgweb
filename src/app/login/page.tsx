'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { signup } from '@/actions/actions';

export default function Login() {
	const [error, action] = useFormState(signup, {});

	return (
		<div className='flex min-h-screen justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
			<Card className='w-full max-w-md'>
				<CardHeader>
					<CardTitle className='text-center text-2xl font-bold'>
						Create an Account
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form action={action} className='space-y-6'>
						<div>
							<Label
								htmlFor='fullname'
								className='block text-sm font-medium text-gray-700'
							>
								Full Name
							</Label>
							<input
								id='fullname'
								name='fullname'
								type='text'
								className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
							/>
							{error.fullname && (
								<p className='mt-1 text-sm text-red-600'>{error.fullname}</p>
							)}
						</div>

						<div>
							<Label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'
							>
								Email Address
							</Label>
							<Input
								id='email'
								name='email'
								type='email'
								className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
							/>
							{error.email && (
								<p className='mt-1 text-sm text-red-600'>{error.email}</p>
							)}
						</div>

						<div>
							<Label
								htmlFor='password'
								className='block text-sm font-medium text-gray-700'
							>
								Password
							</Label>
							<Input
								id='password'
								name='password'
								type='password'
								className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
							/>
							{error.password && (
								<p className='mt-1 text-sm text-red-600'>{error.password}</p>
							)}
						</div>

						<div>
							<Label
								htmlFor='confirmPassword'
								className='block text-sm font-medium text-gray-700'
							>
								Confirm Password
							</Label>
							<input
								id='confirmPassword'
								name='confirmPassword'
								type='password'
								className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
							/>
							{error.confirmPassword && (
								<p className='mt-1 text-sm text-red-600'>
									{error.confirmPassword}
								</p>
							)}
						</div>

						<Button
							type='submit'
							className='flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
						>
							Sign Up
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
