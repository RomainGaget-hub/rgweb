import React from 'react';
import prisma from '@/lib/db';
import Link from 'next/link';

const Page = async () => {
    const posts = await prisma.post.findMany();
    return (
        <div className='container flex gap-2 justify-center items-center flex-col content-center'>
            <h1 className='py-5 font-bold'>Latest Post</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.slug}`}>
                            {post.title}
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Page;
