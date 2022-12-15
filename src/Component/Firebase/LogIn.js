import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "./useAuth";

const LogIn = () => {
  const { logInWidthGoogle, logInWithEmail } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.state?.from.pathname || "/";

  //log in with email
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    logInWithEmail(email, password)
      .then((result) => {
        reset();
        navigate(url, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  //log in with google
  const google = () => {
    logInWidthGoogle()
      .then((result) => {
        navigate(url, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className='px-4 md:px-0 md:w-[350px] mx-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-center text-xl font-medium my-3'>Please Log In</h2>
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
          Login
        </button>
        <p className='text-center'>------Or-----</p>
        <div className='flex justify-center my-3'>
          <button className='google-btn' onClick={google}>
            <img className='h-8 border rounded' src='/google.png' alt='' />
            <span>Google</span>
          </button>
        </div>
        <p className='text-center text-sm'>
          New to here?{" "}
          <Link className='text-purple-600' to='/sign-up'>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
