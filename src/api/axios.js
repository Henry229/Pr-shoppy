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

export async function getCart() {
  return axios
    .get(`http://localhost:4001/cart`) //
    .then((response) => {
      console.log('==&&& in getCart : ', response.data);
      return response.data;
    })
    .catch(console.error);
}

export async function addOrUpdateToCart(uid, product) {
  return axios
    .post(`http://localhost:4001/carts/${uid}`, product)
    .then((response) => {
      console.log(response);
      return response;
    });
}
