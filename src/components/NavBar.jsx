import React, { useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { login, logout } from '../api/firebase';
import CButton from './ui/CButton';

const NavBar = () => {
  const [user, setUser] = useState('');

  const handleLogin = () => {
    login() //
      .then((result) => {
        console.log(result);
        setUser(result);
      })
      .then((result) => console.log(result));
  };
  const handleLogout = () => {
    logout() //
      .then(setUser);
  };

  return (
    <header>
      <section>
        <AiOutlineShopping />
        <h1>Total Fashion</h1>
      </section>
      <section>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Cart</Link>
        <Link to='/products/new'>
          <BsFillPencilFill />
        </Link>
        {!user && <CButton text={'login'} onClick={handleLogin} />}
        {user && <CButton text={'logout'} onClick={handleLogout} />}
      </section>
    </header>
  );
};

export default NavBar;
