import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navarry = [
    { title: 'Products', Rot: 'products' },
    { title: 'Add Produts', Rot: 'add-products' },
    { title: 'Update Product', Rot: 'update-product' },
    { title: 'Logout', Rot: 'logout' },
    { title: 'Profile', Rot: 'profile' },
    { title: 'SignUp', Rot: 'signup' },
  ];
  return (
    <Fragment>
      <div className='flex justify-evenly items-center p-4 bg-blue-400  '>
        {navarry.map((item, index) => {
          return (
            <div key={index} className='flex'>
              <Link to={item.Rot} className='flex'>
                <h1 className='text-xl font-medium hover:text-white duration-200'>
                  {item.title}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default Nav;
