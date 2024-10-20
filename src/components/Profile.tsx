import Image from 'next/image';
import React from 'react';

import myPicture from '@/public/images/profile/romain_gaget.jpeg';

const Profile = () => {
	return (
		<section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
			<div className='mt-2 flex-1 md:mt-0'>
				<h1 className='title no-underline'>Hi, I&#39;m Romain</h1>
				<h2 className='mb-6 text-2xl font-semibold'>
					Experienced Full Stack Developer
				</h2>
				<p className='mt-3 font-light text-muted-foreground'>
					Here at RGWEB, you&#39;ll find a showcase of my professional journey,
					skills, and the projects I&#39;ve been proud to work on. With over 10
					years of experience as a front-end developer and a proven track record
					in team leadership and management, I&#39;ve honed my expertise in
					React, Angular, TypeScript, and other key technologies. Dive into my
					blog for insights and tips on web development, or explore my portfolio
					to see the work that drives my passion for innovation and excellence
					in the digital world.
				</p>
			</div>
			<div className='relative'>
				<Image
					className='rounded0lg flex-1 grayscale'
					src={myPicture}
					alt='Romain Gaget'
					width={175}
					height={175}
					priority
				/>
			</div>
		</section>
	);
};

export default Profile;
