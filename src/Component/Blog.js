import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tourism/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className='min-h-[59vh]'>
      <div className='blog-wrapper'>
        {blogs.map((blog) => (
          <div key={blog._id} className='item'>
            <h1 className='text-xl font-medium mb-2'>{blog.title}</h1>
            <p>{blog.description.slice(0, 150) + "..."}</p>
            <div className='flex justify-center mt-3'>
              <Link to={`/blogs/${blog._id}`}>
                <button className='btn'>View full</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
