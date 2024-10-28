// components/BlogPreview.tsx
import React from 'react';

const BlogPreview = () => {
    const posts = [
        { title: "First Blog Post", excerpt: "This is a short summary.", date: "2024-10-07" },
        { title: "Another Blog Post", excerpt: "More details on another topic.", date: "2024-10-01" }
    ];

    return (
        <section id="blog" className="bg-gray-100 py-12 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
                <ul className="space-y-8">
                    {posts.map((post, index) => (
                        <li key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <small className="text-gray-500">{post.date}</small>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BlogPreview;