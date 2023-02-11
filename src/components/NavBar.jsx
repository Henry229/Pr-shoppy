import React, { useEffect, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';
import CButton from './ui/CButton';
import User from './User';

const NavBar = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login() //
      .then(setUser);
  };

  const handleLogout = () => {
    logout() //
      .then(setUser);
  };

  return (
    <header className='w-full flex justify-between p-2 border-b border-gray-300'>
      <section className='flex items-center gap-1 text-4xl text-purple-500'>
        <AiOutlineShopping className='' />
        <h1>Total Fashion</h1>
      </section>
      <section className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        {user && <Link to='/carts'>Cart</Link>}
        {user && user.isAdmin && (
          <Link to='/products/new'>
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <CButton text={'login'} onClick={handleLogin} />}
        {user && <CButton text={'logout'} onClick={handleLogout} />}
      </section>
    </header>
  );
};

export default NavBar;
