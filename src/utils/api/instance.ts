import type { AxiosRequestConfig } from 'axios';

import axios from 'axios';

import { LOCAL_STORAGE_KEYS } from '../constants';

export const api = axios.create({
  baseURL: 'http://shift-intensive.ru',
  validateStatus: () => true,
  headers: {
    tester: true
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
  if (token) config.headers.authorization = `Bearer ${token}`;
  return config;
});

export const instance = <T>(config: AxiosRequestConfig) => api<T>(config);
