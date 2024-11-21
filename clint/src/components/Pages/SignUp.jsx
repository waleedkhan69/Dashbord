import { Fragment, useState } from 'react';

const SignUp = () => {
  const [errors, seterror] = useState({});
  const [FormData, setformdata] = useState({
    name: '',
    password: '',
    email: '',
  });
  const handlechange = (e) => {
    const { id, value } = e.target;
    setformdata({ ...FormData, [id]: value });
  };
  const validation = () => {
    const errors = {};
    if (!FormData.name) {
      errors.name = 'Name is required';
    }
    if (!FormData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
      errors.email = 'Email is not valid';
    }
    if (!FormData.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation();
    seterror(errors);
    if (Object.keys(errors).length === 0) {
      console.log(FormData);
    }
  };

  return (
    <Fragment>
      <div>
        <form
          action='#'
          onSubmit={handleSubmit}
          className='bg-white shadow-lg rounded-lg  p-8 w-full max-w-md'
        >
          <h1 className='text-2xl font-bold text-center mb-6'>Registration</h1>
          <div className='flex flex-col space-y-4'>
            <input
              type='text'
              id='firstname'
              value={FormData.name}
              onChange={handlechange}
              placeholder='Enter your name'
              className={`border ${
                errors.name ? 'border-red-500' : ''
              } border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.name && (
              <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
            )}
            <input
              type='email'
              id='email'
              onChange={handlechange}
              placeholder='example@gmail.com'
              className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
            )}
            <input
              type='password'
              id='password'
              onChange={handlechange}
              placeholder='Enter your password'
              className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
            )}
          </div>
          <button
            type='submit'
            className='bg-blue-400 text-white font-bold rounded-md mt-6 py-2 w-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            Sign Up
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
