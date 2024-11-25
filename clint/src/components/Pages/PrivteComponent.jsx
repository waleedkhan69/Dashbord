import react, { Fragment } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivteComponent = () => {
  const auth = localStorage.getItem('user');
  return auth ? <Outlet /> : <Navigate to='/SignUp' />;
};
export default PrivteComponent;
