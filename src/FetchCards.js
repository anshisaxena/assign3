import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const FetchCards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Fetching posts
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 10)); // Fetch first 10 posts
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Data Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-2xl p-5 border">
            <h2 className="text-lg font-semibold mb-2 text-blue-700">{post.id}.{post.name}</h2>
            <h4> Username:{post.username}</h4>
            <h5 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">Email:{post.email}</h5>
            
            <Link to={`/user/${post.id}`}>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Read More
            </button>
      </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchCards;
