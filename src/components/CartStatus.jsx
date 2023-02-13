import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';

const CartStatus = () => {
  // const { user } = useAuthContext();
  // const [cart, setCart] = useState('');

  // useEffect(() => {
  //   getCart(user.uid) //
  //     .then((res) => setCart(res));
  // }, []);

  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className='relative'>
      <AiOutlineShoppingCart className='text-4xl' />
      {products && (
        <p className='w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
};

export default CartStatus;
