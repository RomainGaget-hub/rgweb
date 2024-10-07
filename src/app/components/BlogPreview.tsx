// components/BlogPreview.tsx
import React from 'react';

const BlogPreview = () => {
    const posts = [
        { title: "First Blog Post", excerpt: "This is a short summary.", date: "2024-10-07" },
        { title: "Another Blog Post", excerpt: "More details on another topic.", date: "2024-10-01" }
    ];

    return (
        <section id="blog">
            <h2>Blog</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <small>{post.date}</small>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BlogPreview;
