import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="backdrop-blur-md border-b border-[#dadada30] p-4 w-full max-w-[800px] mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl">Shadowspace</Link> {/* Make the logo clickable */}
            <nav className="hidden md:flex space-x-4"> {/* Navigation visible on desktop */}
                <Link to="/tech" className="text-white hover:text-gray-400">Tech</Link>
                <Link to="/anime" className="text-white hover:text-gray-400">Anime</Link>
                <Link to="/movies" className="text-white hover:text-gray-400">Movies</Link>
                <Link to="/games" className="text-white hover:text-gray-400">Games</Link>
            </nav>
            <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </header>
    );
};

export default Header;
