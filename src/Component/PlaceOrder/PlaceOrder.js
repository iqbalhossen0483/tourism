import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CustomCss from "../CombineCss";
import useAuth from "../Firebase/useAuth";
import Footer from "../Footer/Footer";

const PlaceOrder = () => {
  const [place, setPlace] = useState({});
  const { form, input } = CustomCss();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: user.displayName,
      email: user.email,
    },
  });

  useEffect(() => {
    fetch(`https://server.switchcafebd.com/tourism/services/${id}`)
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, [id]);

  const onSubmit = (order) => {
    order.status = "pending";
    fetch("https://server.switchcafebd.com/tourism/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your order is in proccess");
          reset();
          navigate("/");
        }
      });
  };
  return (
    <>
      <div className='mx-3 md:w-2/6 md:mx-auto'>
        <form className={form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-2xl text-center my-2'>Place Order</h2>
          <input
            className={input}
            type='text'
            placeholder='Enter your name'
            {...register("name", { required: true })}
          />
          <input
            className={input}
            type='email'
            placeholder='Enter your email'
            {...register("email", { required: true })}
          />
          <input
            className={input}
            type='text'
            placeholder='Where to?'
            {...register("location", { required: true })}
          />
          <input
            className={input}
            type='date'
            {...register("date", { required: true })}
          />
          <input
            className={input}
            type='text'
            placeholder='Enter your destination'
            {...register("destination", { required: true })}
            defaultValue={place && place.name}
          />
          <input
            className={input}
            type='text'
            placeholder='Type (bus, airplane)'
            {...register("type", { required: true })}
          />
          <div className='flex justify-center'>
            <input
              className='btn my-3 w-48'
              type='submit'
              value='place order'
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrder;
