import React, { useState } from 'react';

const AddBlog = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            id: Date.now(), // Simple ID generation
            title,
            description,
            image,
            author,
            date,
        };
        onAdd(newBlog); // Call the onAdd function passed as a prop
        // Reset form fields
        setTitle('');
        setDescription('');
        setImage('');
        setAuthor('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-[800px] w-full p-4">
            <h2 className="text-white text-2xl mb-4">Add New Blog</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
                required
            />
            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Blog</button>
        </form>
    );
};

export default AddBlog;
