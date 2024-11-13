import { NextResponse } from 'next/server';
import db from '@/lib/db';

export const GET = async (req: Request) => {
	const post = await db.post.findMany({});

	if (!post) {
		return NextResponse.json({ message: 'Not Found' }, { status: 404 });
	}

	return NextResponse.json(post);
};

export const POST = async (req: Request) => {
	const { title, content } = await req.json();

	const post = await db.post.create({
		data: {
			title,
			content,
		},
	});

	return NextResponse.json(post);
};
