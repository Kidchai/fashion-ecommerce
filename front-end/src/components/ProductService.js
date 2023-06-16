import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/products";

export const createProduct = (product) => {
  return axios.post(API_BASE_URL, product);
};