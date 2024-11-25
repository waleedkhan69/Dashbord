import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homelayout from './components/Homelayout';
import Products from './components/Pages/Products';
import AddProducts from './components/Pages/AddProduts';
import Logout from './components/Pages/Logout';
import UpdateProducts from './components/Pages/UpdateProducts';
import Profile from './components/Pages/Profile';
import SignUp from './components/Pages/SignUp';
import PrivateComponent from './components/Pages/PrivteComponent';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Homelayout />,
      children: [
        {
          element: <PrivateComponent />,
          children: [
            { path: '/products', element: <Products /> },
            { path: '/add-products', element: <AddProducts /> },
            { path: '/update-product', element: <UpdateProducts /> },
            { path: '/profile', element: <Profile /> },
            { path: '/logout', element: <Logout /> },
          ],
        },
        { path: '/SignUp', element: <SignUp /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
