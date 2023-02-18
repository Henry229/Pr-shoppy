import axios from 'axios';

// export default class ShoppyAxios {
//   constructor() {
//     this.httpClient = axios.create({
//       baseURL: 'http://localhost:4001/',
//     });
//   }
// }

export async function getProducts() {
  return axios.get('http://localhost:4001/products').then((response) => {
    console.log(response);
    // console.log(Object.values(response.data));
    return response.data;
  });
}
