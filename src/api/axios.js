import axios from 'axios';

// http://localhost:3000/api/service/list

export const instance = axios.create({
    baseURL: 'https://tan-snail-wig.cyclic.app/api/',
    timeout: 1000,
  });