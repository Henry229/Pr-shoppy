import axios from 'axios';

export async function getProducts() {
  return axios
    .get('http://localhost:4001/products') //
    .then((response) => {
      return response.data;
    });
}

export async function addNewProduct(product, image) {
  return axios
    .post(`http://localhost:4001/products/${product._id}`, {
      ...product,
      // _id,
      price: parseInt(product.price),
      image,
      options: product.options.split(','),
    }) //
    .then((response) => {
      console.log(response);
      return response;
    });
}
