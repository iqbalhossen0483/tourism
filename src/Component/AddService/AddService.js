import React from "react";
import { useForm } from "react-hook-form";
import CustomCss from "../CombineCss";

const AddService = () => {
  const { input } = CustomCss();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (service) => {
    fetch("https://server.switchcafebd.com/tourism/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("A service was added");
          reset();
        }
      });
  };
  return (
    <div className='flex justify-center'>
      <form
        className='bg-white rounded-md flex flex-col gap-y-3 w-full mx-5 p-4 my-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='text-center mb-2 text-xl'>Add a tourist place</h2>
        <input
          className={input}
          {...register("name", { required: true })}
          required
          placeholder='Enter place name'
        />
        <input
          className={input}
          {...register("img", { required: true })}
          required
          placeholder='Enter image url'
        />
        <textarea
          rows={5}
          className={input}
          {...register("description", { required: true })}
          required
          placeholder='Enter description'
        />
        <div className=''>
          <input className='btn mt-3' type='submit' />
        </div>
      </form>
    </div>
  );
};

export default AddService;
