import React, { useState } from 'react';
// import { addNewProduct } from '../api/firebase';
import { Uploader } from '../api/Uploader';
import CButton from '../components/ui/CButton';
import useProducts from '../hooks/useProducts';

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((products) => ({ ...products, [name]: value })); //오브젝트를 return해야하므로 ()를 넣어야함
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    Uploader(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess('✅ added product successfully');
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
    setProduct({});
  };

  return (
    <section className='w-full text-center mb-4'>
      <h2 className='text-2xl font-bold my-4 '>Register New Products</h2>
      {/* 👍👍👍 */}
      {success && (
        <p className='text-md font-bold text-green-600 items-center pb-2'>
          {success}
        </p>
      )}
      {file && (
        <img
          className='w-96 mx-auto mb-4 rounded-lg shadow-md'
          src={URL.createObjectURL(file)}
          alt=''
        />
      )}
      <form className='flex flex-col px-12 mb-6' onSubmit={handleSubmit}>
        <input
          type='file'
          accept='images/*'
          name='file'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='Product Name'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='Product Price'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='Product Category'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='Product Description'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='Product options || should be separated by comma'
          required
          onChange={handleChange}
        />
        <CButton
          text={isUploading ? 'Uploading...' : 'Register Product'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
};

export default NewProduct;
