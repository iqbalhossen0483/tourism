import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "./useAuth";

const SignUp = () => {
  const { logInWidthGoogle, signUpWithEmail, addUserName } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from?.pathname || "/";
  //hook form
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    signUpWithEmail(email, password, name)
      .then((result) => {
        addUserName(name);
        reset();
        navigate(url, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  const withGoogle = () => {
    logInWidthGoogle()
      .then((result) => {
        navigate(url, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className='px-4 md:px-0 md:w-[350px] mx-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-center text-2xl my-3'>Please Sing Up</h2>
        <input
          placeholder='Enter your name'
          {...register("name", { required: true })}
        />
        <input
          type='email'
          placeholder='Enter your email'
          {...register("email", { required: true })}
        />
        <input
          type='password'
          placeholder='Enter a password'
          {...register("password", { required: true })}
        />
        <button className='btn mt-3' type='submit'>
          Sin up
        </button>
        <p className='text-center'>------Or-----</p>
        <div className='flex justify-center my-3'>
          <button className='google-btn' onClick={withGoogle}>
            <img className='h-8 border rounded' src='/google.png' alt='' />
            <span>Google</span>
          </button>
        </div>
        <p className='text-center text-sm'>
          Already have a account?{" "}
          <Link className='text-purple-600' to='/sign-in'>
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
