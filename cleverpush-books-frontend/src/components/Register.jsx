import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { axiosGet, axiosPost } from "../utils/api";
import { useState } from "react";

export default function Register({ setUser }) {
  const navigate = useNavigate();
  const [userRegistrationInfo, setUserRegistrationInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosPost("auth/register", userRegistrationInfo).then((data) => {
      console.log(data);
      if (data.status === 201) {
        localStorage.setItem("token", data.data.tokens.access.token);
        setUser(data.data);
        navigate("/");
      }
    });
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className='flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Register
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='space-y-px rounded shadow-sm'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Name
                </label>
                <input
                  required
                  id='name'
                  name='name'
                  type='text'
                  autoComplete='name'
                  className='relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Name'
                  value={userRegistrationInfo.name}
                  onChange={(e) =>
                    setUserRegistrationInfo({
                      ...userRegistrationInfo,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  required
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Email address'
                  value={userRegistrationInfo.email}
                  onChange={(e) =>
                    setUserRegistrationInfo({
                      ...userRegistrationInfo,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  required
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  className='relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Password'
                  value={userRegistrationInfo.password}
                  onChange={(e) =>
                    setUserRegistrationInfo({
                      ...userRegistrationInfo,
                      password: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <span className='ml-2 block text-sm text-gray-900'>
                  Already Have account
                </span>
                <Link
                  to='/'
                  className='font-medium text-indigo-600 hover:text-indigo-500 pl-4'>
                  Login
                </Link>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
