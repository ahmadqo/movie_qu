import axios from 'axios';

const API_KEY = '5d5f3b6d0d7e158027c0d1694974c13b';
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const getMovies = (endpoint: string) =>
  api.get(endpoint).then(res => res.data);
