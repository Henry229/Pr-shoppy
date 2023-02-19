import React from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import useCart from '../hooks/useCart';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

const CartItem = ({
  product,
  product: { id, title, image, price, options, quantity },
}) => {
  const { updateItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    updateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    updateItem.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeItem.mutate(id);
  };

  return (
    <li className='flex justify-between my-2 items-center'>
      <img className='w-24 md:w-48 rounded-lg' src={image} alt={title} />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg font-bold'>{title}</p>
          <p className='text-xl font-bold text-brand'>{options}</p>
          <p className='text-lg font-bold text-purple-500'>${price}</p>
        </div>
        <div className='text-2xl flex items-center'>
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
