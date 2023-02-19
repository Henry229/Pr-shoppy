import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { addOrUpdateToCart } from '../api/firebase';
import CButton from '../components/ui/CButton';
import { useAuthContext } from '../context/AuthContext';
// import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';

const ProductDetail = () => {
  const { uid } = useAuthContext();
  const { addItem } = useCart();
  const {
    state: {
      product: { _id: id, image, title, description, category, price, options },
    },
  } = useLocation();

  // const { user } = useAuthContext();
  const [success, setSuccess] = useState('');
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleClick = () => {
    const product = {
      id,
      image,
      title,
      description,
      category,
      price,
      options: selected,
      quantity: 1,
      uid,
      productId: id,
    };
    // console.log('<<<', user, '/', product);
    addItem.mutate(product, {
      onSuccess: () => {
        setSuccess('Added to Cart successfully!');
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
      },
    });
  };

  return (
    <>
      <p className='mx-12 mt-4 text-gray-700 text-xl font-bold'>{category}</p>
      <section className='flex flex-col p-4 md:flex-row'>
        <img className='w-full px-4 basis-7/12' src={image} alt='URL' />
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2 className='text-3xl font-bold py-2'>{title}</h2>
          <p className='text-2xl font-bold py-2 border-b border-gray-400'>
            ${price}
          </p>
          <p className='py-4 text-lg'>{description}</p>
          <div className='flex items-center'>
            <label className='text-purple-500 font-bold' htmlFor='select'>
              Option:
            </label>
            <select
              id='select'
              className='p-2 m-4 flex-1 border-2 border-dashed border-purple-500 outline-none'
              value={selected}
              onChange={handleSelect}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          {success && <p className='my-2'>✅{success}</p>}
          <CButton text='Add to Cart' onClick={handleClick} />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
