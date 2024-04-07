import axios from 'axios';

// http://localhost:3000/api/service/list

export const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
  });