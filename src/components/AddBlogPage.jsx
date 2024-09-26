// src/components/AddBlogPage.jsx
import React from 'react';
import AddBlog from './AddBlog'; // Import the AddBlog component

const AddBlogPage = ({ onAdd }) => {
    return (
        <div className="max-w-[800px] w-full p-4">
            <h2 className="text-white text-2xl mb-4">Add New Blog</h2>
            <AddBlog onAdd={onAdd} /> {/* Use the AddBlog component */}
        </div>
    );
};

export default AddBlogPage;