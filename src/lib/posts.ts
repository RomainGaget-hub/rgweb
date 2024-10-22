import path from "path";
import fs from "fs";
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), "content", "posts");

export type Post = {
    metadata: {
        title?: string;
        date?: string;
        slug: string;
        author?: string;
    };
    content: string;
};

export async function getPostbySlug(slug: string): Promise<Post | null> {
    try {
        const filePath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(filePath, "utf8");

        const { data, content } = matter(fileContents);

        return {
            metadata: { ...data, slug }, content
        };
    } catch (error) {
        console.error(error);
        return null;

    }

}