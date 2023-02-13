import React, { useEffect, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import CButton from './ui/CButton';
import User from './User';

const NavBar = () => {
  const { user, login, logout } = useAuthContext();
  console.log('--> in NavBar: ', user);
  // const [user, setUser] = useState('');

  // useEffect(() => {
  //   onUserStateChange((user) => {
  //     setUser(user);
  //   });
  // }, []);

  // const handleLogin = () => {
  //   login() //
  //     .then(setUser);
  // };

  // const handleLogout = () => {
  //   logout() //
  //     .then(setUser);
  // };

  return (
    <header className='w-full flex justify-between p-2 border-b border-gray-300'>
      <Link to='/' className='flex items-center gap-1 text-4xl text-purple-500'>
        <AiOutlineShopping className='' />
        <h1>Total Fashion</h1>
      </Link>
      <section className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        {user && (
          <Link to='/carts'>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new'>
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <CButton text={'login'} onClick={login} />}
        {user && <CButton text={'logout'} onClick={logout} />}
      </section>
    </header>
  );
};

export default NavBar;
