// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  const posts = [
    { id: 1, title: 'Post 1', category: 'Anime' },
    { id: 2, title: 'Post 2', category: 'AI' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Welcome to Shadowspace</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-red-500">
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-400">{post.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
