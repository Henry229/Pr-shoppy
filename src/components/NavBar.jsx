import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CButton from './ui/CButton';

const NavBar = () => {
  const handleLogin = () => {};
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
        <CButton text={'Login'} onClick={handleLogin} />
      </section>
    </header>
  );
};

export default NavBar;
