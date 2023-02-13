// import React, { useEffect, useState } from 'react';
// import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
// import { useAuthContext } from '../context/AuthContext';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import CButton from '../components/ui/CButton';
import useCart from '../hooks/useCart';

const SHIPPING_FEE = 10;

const MyCart = () => {
  // const { user } = useAuthContext();
  // const [cartItem, setCartItem] = useState([]);

  // useEffect(() => {
  //   getCart(user.uid).then((res) => setCartItem(res));
  // }, []);
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>
        My Cart
      </p>
      {!hasProducts && <p>Your cart is empty</p>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {products &&
              products.map((item) => <CartItem key={item.id} product={item} />)}
          </ul>
          <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-6'>
            <PriceCard text='Total Price' price={totalPrice} />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text='Shipping Fee' price={SHIPPING_FEE} />
            <FaEquals className='shrink-0' />
            <PriceCard text='Total Amount' price={totalPrice + SHIPPING_FEE} />
          </div>
          <CButton text={'Order'} />
        </>
      )}
    </section>
  );
};

export default MyCart;
