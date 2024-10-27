import Image from 'next/image';
import React from 'react';

import myPicture from '@/public/images/profile/romain_gaget.jpeg';

const Profile = () => {
	return (
		<section className='font-alegreya flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
			<div className='mt-2 flex-1 md:mt-0'>
				<h1 className='title no-underline'>Hi, I&#39;m Romain</h1>
				<h2 className='mb-6 text-3xl font-semibold'>
					Experienced Full Stack Developer
				</h2>
				<p className='mt-3 text-4xl font-light text-muted-foreground'>
					I&#39;m passionate about web development and love sharing what
					I&#39;ve learned. Dive into my blog for insights, tips, and tutorials
					as I explore new technologies and best practices.
				</p>
			</div>
			{/* <div className='relative'>
				<Image
					className='mt-16 flex-1 rounded-2xl grayscale'
					src={myPicture}
					alt='Romain Gaget'
					width={175}
					height={175}
					priority
				/>
			</div> */}
		</section>
	);
};

export default Profile;
