import React from 'react';

const BlogList = () => {
    const posts = [
        { id: 1, title: "First Post", content: "This is my first blog post." },
        { id: 2, title: "Second Post", content: "This is my second blog post." },
    ];

    return (
        <div className="p-4">
            {posts.map(post => (
                <div key={post.id} className="border p-4 mb-4">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
