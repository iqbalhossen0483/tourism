import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://myserver-production-ddf8.up.railway.app/tourism/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setIsLoading(false);
      });
  }, [id]);
  const { title, description } = blog;

  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='spinner'></div>
      </div>
    );
  }
  return (
    <div className='min-h-[59vh]'>
      <div className='m-10 bg-white rounded-md p-5'>
        <h1 className='text-xl font-medium mb-2'>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
