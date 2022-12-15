import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [disable, setDisable] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (info) => {
    if (info.description.length < 10) {
      alert("Description must be at least 100 charecter");
    } else {
      setDisable(true);
      fetch("https://myserver-production-ddf8.up.railway.app/tourism/blogs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Your blog posted");
            reset();
            navigate("/");
          }
        })
        .finally(() => setDisable(false));
    }
  };
  return (
    <div className='h-full flex flex-col justify-between'>
      <form
        className='bg-white rounded-md flex flex-col p-4 m-3 md:m-10 relative z-0'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='text-lg border-none'
          {...register("title", { required: true })}
          required
          placeholder='Title here'
        />
        <textarea
          className='resize-none border-none'
          required
          rows={15}
          {...register("description", { required: true })}
          placeholder='Description'
        />
        <button
          disabled={disable}
          className='btn absolute top-2 right-1 z-0'
          type='submit'
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
