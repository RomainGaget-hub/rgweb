import React, { ReactNode } from 'react';

export default function PageHeader({ children }: { children: ReactNode }) {
	return <h1 className='mb-4 text-4xl'>{children}</h1>;
}
