import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/signup');
  };

  return (
    <nav className='bg-blue-600 shadow-lg'>
      <div className='container mx-auto px-4'>
        <ul className='flex items-center justify-between py-4 text-white font-medium'>
          <li className='hover:text-gray-300 transition duration-300'>
            <Link to='/products'>Products</Link>
          </li>
          <li className='hover:text-gray-300 transition duration-300'>
            <Link to='/add-products'>Add Products</Link>
          </li>
          <li className='hover:text-gray-300 transition duration-300'>
            <Link to='/update-product'>Update Products</Link>
          </li>
          <li className='hover:text-gray-300 transition duration-300'>
            <Link to='/profile'>Profile</Link>
          </li>
          <li className='hover:text-gray-300 transition duration-300'>
            {auth ? (
              <Link onClick={logout} to='/logout'>
                Logout
              </Link>
            ) : (
              <Link to='/signup'>SignUp</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
