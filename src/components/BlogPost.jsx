import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../techData'; // Import the blog data

const BlogPost = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const blog = blogData.find((b) => b.id === parseInt(id)); // Find the blog post by ID

    if (!blog) {
        return <div className="text-white">Blog not found.</div>; // Handle case where blog is not found
    }

    return (
        <div className="max-w-[800px] w-full p-4">
            <h2 className="text-white text-2xl font-bold mb-2">{blog.title}</h2>
            <img src={blog.image} alt={blog.description} className="w-full h-auto rounded-lg mb-4" />
            <p className="text-white text-lg">{blog.description}</p>
            <p className="text-gray-400 text-sm">By {blog.author} on {blog.date}</p>
        </div>
    );
};

export default BlogPost;
