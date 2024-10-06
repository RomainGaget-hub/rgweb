import { client } from '../sanity/lib/client';

interface Post {
  // Define the structure of a post
  id: number;
  title: string;
  // Add other relevant fields
}


export default async function Home() {
  const posts = await client.fetch(`*[_type == "post"]`); // Fetch data from Sanity

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Hello World</h1>
        {posts.map((post: Post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </main>

    </div>
  );
}
