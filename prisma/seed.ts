import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const initialPosts: Prisma.PostCreateInput[] = [
	{
		title: 'Post 1',
		content: 'Content of post 1',
		published: false,
		slug: 'post-1',
		excerpt: 'Excerpt of post 1',
		imagePath: 'https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b',
		author: {
			connectOrCreate: {
				where: {
					email: 'romain@gmail.com',
				},
				create: {
					email: 'romain@gmail.com',
					password: 'password',
					name: 'Romain Boisselle',
				},
			},
		},
	},
	{
		title: 'Post 2',
		content: 'Content of post 2',
		published: true,
		slug: 'post-2',
		excerpt: 'Excerpt of post 2',
		imagePath: 'https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b',
		author: {
			connectOrCreate: {
				where: {
					email: 'romain2@gmail.com',
				},
				create: {
					email: 'romain2@gmail.com',
					password: 'password',
					name: 'Romain Tgef',
				},
			},
		},
	},
];

async function main() {
	console.log('Start seeding...');
	for (const postData of initialPosts) {
		const post = await prisma.post.create({
			data: postData,
		});
		console.log(`Created post with id: ${post.id}`);
	}
	console.log('Seeded initial posts');

	const tags = ['JavaScript', 'React', 'Web Development', 'CSS', 'TypeScript'];

	for (const tag of tags) {
		await prisma.tag.upsert({
			where: { name: tag },
			update: {},
			create: { name: tag },
		});
	}

	console.log('Tags seeded successfully!');
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
