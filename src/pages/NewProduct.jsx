import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { Uploader } from '../api/Uploader';
import CButton from '../components/ui/CButton';

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

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
    Uploader(file).then((url) => {
      console.log(url);
      addNewProduct(product, url);
    });
  };

  return (
    <section>
      <h2>Register New Products</h2>
      {/* 👍👍👍 */}
      {file && <img src={URL.createObjectURL(file)} alt='' />}
      <form onSubmit={handleSubmit}>
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
        <CButton text={'Register Product'} />
      </form>
    </section>
  );
};

export default NewProduct;
