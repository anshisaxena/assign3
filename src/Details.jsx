import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((result) => setPost(result))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <p className="p-6">Loading...</p>;
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-2/4 bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/50">
      <h1 className="text-2xl font-bold text-gray-900 text-center">Detail Box</h1>
    </div>
  
    <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-[100px] opacity-30 top-20 left-16"></div>
  
    <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-[100px] opacity-30 bottom-16 left-1/2 -translate-x-1/2"></div>
  
    <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-30 top-1/4 right-16"></div>
  
    <div className="absolute top-80 text-purple-900	
 left-1/2 -translate-x-1/2 w-1/4 h-1/4 bg-white/30 backdrop-blur-md  rounded-xl p-6 shadow-lg border border-white/50">
      <h1 className=" font-bold text-center">UserId:{post.id}</h1>
      <div className='baseline flex-row  '>
      <div> Name:{post.name}</div>
      <div>Email:{post.email}</div>
      <div>Phone No.:{post.phone}</div>
      <div>Website:{post.website}</div>
      <div>Address:{post.address.street},{post.address.city}</div>
      <div>Company:{post.company.name}</div>
      </div>
    </div>
      
  </div>
  

  )
}

export default Details
