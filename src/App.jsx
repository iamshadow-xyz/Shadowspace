import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css'; // Ensure to import your CSS
import Header from './components/Header'; // Import the Header component
import BlogPost from './components/BlogPost'; // Import the BlogPost component
import AddBlogPage from './components/AddBlogPage'; // Import the AddBlogPage component
import techData from './techData'; // Import tech data
import animeData from './animeData'; // Import anime data
import moviesData from './moviesData'; // Import movies data
import gamesData from './gamesData'; // Import games data

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [blogs, setBlogs] = useState(techData); // Default to tech data

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleAddBlog = (newBlog) => {
        setBlogs((prevBlogs) => [...prevBlogs, newBlog]); // Add new blog to the state
    };

    return (
        <Router>
            <div className="App bg-[#101010] text-white min-h-screen flex flex-col items-center">
                <Header toggleSidebar={toggleSidebar} /> {/* Use the Header component */}

                {/* Sidebar */}
                {isSidebarOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={toggleSidebar}>
                        <div className="absolute right-0 w-64 bg-white bg-opacity-10 backdrop-blur-md p-4 h-full">
                            <h2 className="text-white text-lg mb-4">Menu</h2>
                            <ul>
                                <li className="mb-2"><Link to="/tech" className="text-white hover:text-gray-400">Tech</Link></li>
                                <li className="mb-2"><Link to="/anime" className="text-white hover:text-gray-400">Anime</Link></li>
                                <li className="mb-2"><Link to="/movies" className="text-white hover:text-gray-400">Movies</Link></li>
                                <li className="mb-2"><Link to="/games" className="text-white hover:text-gray-400">Games</Link></li>
                                <li className="mb-2"><Link to="/add" className="text-white hover:text-gray-400">Add Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                )}

                <Routes>
                    <Route path="/" element={
                        <div className="max-w-[800px] w-full p-4">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="flex flex-col md:flex-row items-start mb-8">
                                    <Link to={`/blog/${blog.id}`} className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0 md:mr-4">
                                        <img
                                            src={blog.image}
                                            alt={blog.description}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </Link>
                                    <div className="md:w-1/2 text-left">
                                        <Link to={`/blog/${blog.id}`} className="text-white text-xl font-bold mb-2">
                                            {blog.title}
                                        </Link>
                                        <p className="text-white text-lg">{blog.description}</p>
                                        <p className="text-gray-400 text-sm">By {blog.author} on {blog.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    } />
                    <Route path="/blog/:id" element={<BlogPost />} /> {/* Route for individual blog post */}
                    <Route path="/add" element={<AddBlogPage onAdd={handleAddBlog} />} /> {/* Route for adding a blog */}
                    <Route path="/tech" element={
                        <div className="max-w-[800px] w-full p-4">
                            {techData.map((blog) => (
                                <div key={blog.id} className="flex flex-col md:flex-row items-start mb-8">
                                    <Link to={`/blog/${blog.id}`} className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0 md:mr-4">
                                        <img
                                            src={blog.image}
                                            alt={blog.description}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </Link>
                                    <div className="md:w-1/2 text-left">
                                        <Link to={`/blog/${blog.id}`} className="text-white text-xl font-bold mb-2">
                                            {blog.title}
                                        </Link>
                                        <p className="text-white text-lg">{blog.description}</p>
                                        <p className="text-gray-400 text-sm">By {blog.author} on {blog.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    } />
                    <Route path="/anime" element={
                        <div className="max-w-[800px] w-full p-4">
                            {animeData.map((blog) => (
                                <div key={blog.id} className="flex flex-col md:flex-row items-start mb-8">
                                    <Link to={`/blog/${blog.id}`} className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0 md:mr-4">
                                        <img
                                            src={blog.image}
                                            alt={blog.description}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </Link>
                                    <div className="md:w-1/2 text-left">
                                        <Link to={`/blog/${blog.id}`} className="text-white text-xl font-bold mb-2">
                                            {blog.title}
                                        </Link>
                                        <p className="text-white text-lg">{blog.description}</p>
                                        <p className="text-gray-400 text-sm">By {blog.author} on {blog.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    } />
                    <Route path="/movies" element={
                        <div className="max-w-[800px] w-full p-4">
                            {moviesData.map((blog) => (
                                <div key={blog.id} className="flex flex-col md:flex-row items-start mb-8">
                                    <Link to={`/blog/${blog.id}`} className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0 md:mr-4">
                                        <img
                                            src={blog.image}
                                            alt={blog.description}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </Link>
                                    <div className="md:w-1/2 text-left">
                                        <Link to={`/blog/${blog.id}`} className="text-white text-xl font-bold mb-2">
                                            {blog.title}
                                        </Link>
                                        <p className="text-white text-lg">{blog.description}</p>
                                        <p className="text-gray-400 text-sm">By {blog.author} on {blog.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    } />
                    <Route path="/games" element={
                        <div className="max-w-[800px] w-full p-4">
                            {gamesData.map((blog) => (
                                <div key={blog.id} className="flex flex-col md:flex-row items-start mb-8">
                                    <Link to={`/blog/${blog.id}`} className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0 md:mr-4">
                                        <img
                                            src={blog.image}
                                            alt={blog.description}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </Link>
                                    <div className="md:w-1/2 text-left">
                                        <Link to={`/blog/${blog.id}`} className="text-white text-xl font-bold mb-2">
                                            {blog.title}
                                        </Link>
                                        <p className="text-white text-lg">{blog.description}</p>
                                        <p className="text-gray-400 text-sm">By {blog.author} on {blog.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
