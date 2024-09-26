// src/pages/Post.jsx
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-500 mb-4">Post {id}</h2>
      <p className="text-gray-300">
        This is the content of post {id}. Tailwind CSS makes it easier to style content and create responsive layouts.
      </p>
    </div>
  );
}

export default Post;
