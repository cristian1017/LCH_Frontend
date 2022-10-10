import axios from 'axios';

export const baseApí = axios.create({
  baseURL: 'http://localhost:9000'
})