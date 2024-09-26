// src/pages/Category.jsx
import { useParams } from 'react-router-dom';

function Category() {
  const { categoryName } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-500 mb-4">Posts in {categoryName} Category</h2>
      <p className="text-gray-300">
        Explore posts in the {categoryName} category. We cover a wide range of topics, from anime to AI and technology.
      </p>
    </div>
  );
}

export default Category;
