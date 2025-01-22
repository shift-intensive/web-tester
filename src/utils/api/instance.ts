import fetches from '@siberiacancode/fetches';

import { LOCAL_STORAGE_KEYS } from '../constants';

export const api = fetches.create({
  baseURL: 'https://shift-intensive.ru'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
  if (token && config.headers) config.headers.authorization = `Bearer ${token}`;
  return config;
});

export const instance = <T>({
  url,
  method,
  params,
  signal,
  data
}: {
  url: string;
  method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
  headers?: any;
  params?: any;
  data?: any;
  signal?: AbortSignal;
}) =>
  api.call<T>({
    url,
    method,
    params,
    signal,
    body: data
  });
